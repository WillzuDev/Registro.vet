import { Outlet, Navigate } from 'react-router-dom'
import Cookies from 'js-cookie';

const PrivateRoutes = () => {

    const token = Cookies.get('CookieJWT');
    const isAuth = token && token !== 'null'

    return(
        isAuth ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PrivateRoutes