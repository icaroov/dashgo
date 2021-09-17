import { useCan } from '../../hooks/useCan'

interface CanProps {
  children: React.ReactNode
  permissions?: string[]
  roles?: string[]
}

function Can({ children, permissions, roles }: CanProps) {
  const userCanSeeComponent = useCan({
    permissions,
    roles,
  })

  if (!userCanSeeComponent) {
    return null
  }

  return <>{children}</>
}

export default Can
