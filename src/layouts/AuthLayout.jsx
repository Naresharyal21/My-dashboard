import { Outlet } from "react-router";

const AuthLayout = () => {
    return (

        <div className="flex-col">
            <div className="">
                <Outlet />
            </div>
        </div>

    )
}

export default AuthLayout