import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next'
import { parseCookies } from 'nookies'

import { CookieKeys } from '../services/api'

/**
 * This role checks if the user already has a valid access token with SSR.
 * Also expects a generic `T` type and returns another function,
 * with the concept of `higher order function` (a function that takes
 * a function as an argument, or returns a function).
 * @param fn The function to run if the user is logged in.
 * @returns The result of the function if the user is logged in.
 */
export function withSSRGuest<T>(fn: GetServerSideProps<T>) {
  // higher order function
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(context)

    if (cookies[CookieKeys.token]) {
      return {
        redirect: {
          destination: '/dashboard',
          permanent: false,
        },
      }
    }

    return await fn(context)
  }
}
