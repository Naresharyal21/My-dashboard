
import { useContext } from 'react';
import { string, object } from 'yup';
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"

import AuthContext, { AuthenticationContext } from '../components/AuthContext';
import { useNavigate } from 'react-router';

const loginSchema = object({
    email: string()
        .required("Email is required."),

    password: string()
        .required("password is required.")


});

const Login = () => {
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(loginSchema),
    });

    const navigate = useNavigate();
    const { loginUser } = useContext(AuthenticationContext);

    const onSubmit = async (data) => {
        // Simulate a login API call
        console.log("Login data submitted:", data.email, data.password);

        // API call to login user

        loginUser({
            email: data.email,
            password: data.password,
            name: "John Doe"
        });

        reset({ email: "", password: "" });

        toast.success("Login successful");
        navigate("/products");
    }

    return (
        <div className="login-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-col add-product-form" >

                <div className='form-control flex-col'>
                    <label>Email*</label>
                    <input className={`${errors.email && "is-invalid"}`} placeholder="Enter email id" type="email" {...register("email")} />

                    {errors.email && <span className='error-message'>{errors.email?.message}</span>}
                </div>
                <div className='form-control flex-col'>
                    <label>Password*</label>
                    <input className={`${errors.password && "is-invalid"}`} placeholder="Enter password" type="password" {...register("password")} />

                    {errors.password && <span className='error-message'>{errors.password?.message}</span>}
                </div>
                <button className="" type="submit" disabled={isSubmitting}>
                    {
                        isSubmitting ? "Logging in..." : "Login"
                    }
                </button>
            </form>
        </div>
    )
}

export default Login
