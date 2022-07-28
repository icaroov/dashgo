import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies, destroyCookie } from 'nookies'
import decode from 'jwt-decode'

import { CookieKeys } from '../services/api'
import { AuthTokenError } from './errors/AuthTokenError'
import { validateUserPermissions } from './validateUserPermissions'

type SSRAuthOptions = {
  permissions?: string[]
  roles?: string[]
}

/**
 * This function checks if the user is really authenticated with SSR.
 * Also expects a generic `T` type and returns another function,
 * with the concept of `higher order function` (a function that takes
 * a function as an argument, or returns a function).
 * @param fn The function to run if the user is logged in.
 * @param options The options to check for permissions and roles.
 * @returns The result of the function if the user is logged in.
 */
export function withSSRAuth<T>(
  fn: GetServerSideProps<T>,
  options?: SSRAuthOptions
) {
  // higher order function
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(context)
    const token = cookies[CookieKeys.token]

    if (!token) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      }
    }

    if (options) {
      const user = decode<{ permissions: string[]; roles: string[] }>(token)
      const { permissions, roles } = options

      const userHasValidPermissions = validateUserPermissions({
        user,
        permissions,
        roles,
      })

      if (userHasValidPermissions) {
        return {
          redirect: {
            destination: '/dashboard',
            permanent: false,
          },
        }
      }
    }

    try {
      return await fn(context)
    } catch (error) {
      if (error instanceof AuthTokenError) {
        destroyCookie(context, CookieKeys.token)
        destroyCookie(context, CookieKeys.refreshToken)

        return {
          redirect: {
            destination: '/',
            permanent: false,
          },
        }
      }
    }
  }
}
