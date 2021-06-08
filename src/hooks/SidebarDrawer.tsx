import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react'

interface SidebarDrawerProps {
  children: React.ReactNode
}

type SidebarDrawerDataProps = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerDataProps)

export function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
  const disclosure = useDisclosure()
  const router = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [router.asPath])

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SidebarDrawerContext)
