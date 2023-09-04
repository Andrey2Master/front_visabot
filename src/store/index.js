import {createStore} from 'vuex'
// import {catalogModule} from "@/store/catalogModule";
import {adminModule} from "@/store/adminModule";
// import {productModule} from "@/store/productModule";
// import {productList} from "@/store/productListModule";
export default createStore({
    state: {
        isAuth: false,
    },
    modules:{
        // catalog: catalogModule,
        admin: adminModule,
        // product: productModule,
        // productList: productList
    }

})
