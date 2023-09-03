import { Store } from '@/types/storeType';
import { create } from 'zustand'



const initialState:Store[] = []


type Actions = {
    stores : Store[]
    setStore :(newStore:Store[]) => void
}

export const useStores = create<Actions>()((set) => ({
  stores: initialState,
  setStore: (newStore:Store[]) => set({ stores: newStore }),
}))

