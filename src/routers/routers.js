import Home from '../pages/Home/Home';
import Shop from '../pages/products/Shop';
import LogIn from '../pages/logIn_logOut/logIn_logOut';
import User from '../pages/user/user';
import Notify from '../pages/Home/notify/notify';
import BlogHome from '../pages/Home/blogHome/blogHome';
import Detail from '../pages/detail_Product/detail';
import Cart from '../pages/cart/cart';
export const publicRoutes = {
    HOME: {
        path: '/',
        component: Home
    },
    SHOP: {
        path: '/shop',
        component: Shop
    },
    BLOG: {
        path: '/blogPage',
        component: BlogHome
    },
    NOTIFY: {
        path: '/notify',
        component: Notify,
    },
    LOGIN: {
        path: '/logIn',
        component: LogIn
    },
    USER: {
        path: '/user',
        component: User
    },
    DETAIL: {
        path: '/shop/:id',
        component: Detail
    },
    CART: {
        path: '/cart',
        component: Cart
    }
}



export const privateRouters = [

]