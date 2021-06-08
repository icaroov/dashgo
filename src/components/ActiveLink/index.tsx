import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { cloneElement } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: React.ReactElement
  shouldMatchExactPath?: boolean
}

export default function ActiveLink({
  children,
  shouldMatchExactPath = false,
  ...rest
}: ActiveLinkProps) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatchExactPath && (asPath === rest.href || asPath === rest.as)) {
    isActive = true
  }

  const startsWithHref = asPath.startsWith(String(rest.href))
  const startsWithAs = asPath.startsWith(String(rest.as))

  if (!shouldMatchExactPath && (startsWithHref || startsWithAs)) {
    isActive = true
  }

  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
