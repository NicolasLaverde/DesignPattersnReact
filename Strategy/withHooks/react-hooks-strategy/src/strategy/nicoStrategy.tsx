import { HookReturnType } from '../types'

const useMockStrategy = (): HookReturnType => {
  // Return mock data
  return {
    data: [
      {
        id: 1000,
        title: 'Coso ome',
      },
      {
        id: 2000,
        title: 'Gonorrea ome',
      },
      {
        id: 3000,
        title: 'Gurrupleta ome',
      },
    ],
    isLoading: false
  }
}

const ProviderComponent: React.FC<{}> = ({ children }) => <>{children}</>

export const nicoStrategy = {
  hook: useMockStrategy,
  ProviderComponent,
}
