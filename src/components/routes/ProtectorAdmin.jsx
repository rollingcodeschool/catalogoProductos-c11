import { Navigate, Outlet } from "react-router";

const ProtectorAdmin = ({isAdmin}) => {
    //si no soy administrador
    if(!isAdmin){
        return <Navigate to={'/'}/>
    }
    //si soy administrador muestro las rutas
    return <Outlet/>
};

export default ProtectorAdmin;