export interface TRouterItem{
	title: string
	path: string
}

export interface TBreadRouterStoreActions {
 
	pushrouter: (router: TRouterItem) => void
	poprouter: () => void
	clearrouters: () => void
}
export interface TBreadRouterStoreState {
    routers: TRouterItem[]
}