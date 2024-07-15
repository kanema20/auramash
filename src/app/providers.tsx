'use client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import WalletContextProvider from '../components/WalletContextProvider'

const queryClient = new QueryClient()

export const Providers = ({ children }: { children?: React.ReactNode }) => {
  return (
    <WalletContextProvider>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WalletContextProvider>
  )
}