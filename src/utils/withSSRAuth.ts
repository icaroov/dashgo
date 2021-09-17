import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies, destroyCookie } from 'nookies'

import { CookieKeys } from '../services/api'
import { AuthTokenError } from './errors/AuthTokenError'

/**
 * This function checks if the user is really authenticated with SSR.
 * Also expects a generic `T` type and returns another function,
 * with the concept of `higher order function` (a function that takes
 * a function as an argument, or returns a function).
 * @param fn The function to run if the user is logged in.
 * @returns The result of the function if the user is logged in.
 */
export function withSSRAuth<T>(fn: GetServerSideProps<T>) {
  // higher order function
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(context)

    if (!cookies[CookieKeys.token]) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
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
