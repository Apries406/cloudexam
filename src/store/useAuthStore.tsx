import { create } from 'zustand'

const STU = 0
const TCH = 1
const ADM = 2

type TAuthStore = {
	auth: number
	setAuth: (auth: number) => void
	isStu: (state: TAuthStore) => boolean
	isTch: (state: TAuthStore) => boolean
	isAdmin: (state: TAuthStore) => boolean
}

export const useAuthStore = create<TAuthStore>()((set) => ({
	auth: -1,
	setAuth: (auth: number) => set(() => ({ auth })),
	isStu: (state) => state.auth === STU,
	isTch: (state) => state.auth === TCH,
	isAdmin: (state) => state.auth === ADM,
}))
