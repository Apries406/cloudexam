import {defineStore} from 'pinia'
import type { TRouterItem } from './type'
import { ref,Ref } from 'vue'

const useBreadRouterStore = defineStore('breadRouterStore',()=>{
    const routers:Ref< TRouterItem[] >= ref([])
    const pushRouter = (router: TRouterItem,) => {
        routers.value.push(router)
    }
    const popRouter = () => {
        routers.value.pop()
    }
    const clearRouter = () => {
        routers.value = []
    }
     return {
        routers,
        pushRouter,
        popRouter,
        clearRouter
     }

})

export default useBreadRouterStore