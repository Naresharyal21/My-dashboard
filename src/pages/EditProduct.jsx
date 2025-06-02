import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import { string, object, number } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchProductById, updateProduct } from '../api/productApi';

const productSchema = object({
    title: string()
        .required("Title is required.")
        .min(5, "Title must be at least 5 characters long.")
        .max(50, "Title must be at most 50 characters long."),

   
});

const EditProduct = () => {
    const { productID } = useParams();
    const navigate = useNavigate();

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(productSchema),
    });

   useEffect(() => {
    const fetchProduct = async () => {
        const product = await fetchProductById(productID);
        if (product) {
            const allowed = {
                title: product.title,
               
            };
            reset(allowed);
        } else {
            toast.error("Failed to fetch product.");
        }
    };

    if (productID) fetchProduct();
}, [productID, reset]);


    const onSubmit = async (data) => {
        const response = await updateProduct(productID, data);

        if (response) {
            toast.success("Product updated successfully");
            navigate('/products'); // redirect after update
        } else {
            toast.error("Failed to update product");
        }
    };

    return (
        <div>
            <div className="flex ">
                <h1 className="">Edit Product</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex-col add-product-form" >
                <div className='form-control flex-col'>
                    <label>Title*</label>
                    <input className={`${errors.title && "is-invalid"}`} placeholder="Enter product title" type="text" {...register("title")} />
                    {errors.title && <span className='error-message'>{errors.title?.message}</span>}
                </div>

              
               
                

                <button className="" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Updating..." : "Update Product"}
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
