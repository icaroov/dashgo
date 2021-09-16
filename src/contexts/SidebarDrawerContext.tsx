import { createContext, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'

interface SidebarDrawerProps {
  children: React.ReactNode
}

type SidebarDrawerDataProps = UseDisclosureReturn

const SidebarDrawerContext = createContext({} as SidebarDrawerDataProps)

function SidebarDrawerProvider({ children }: SidebarDrawerProps) {
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

export { SidebarDrawerContext, SidebarDrawerProvider }