import { useNavigate } from "react-router";
import { useParams } from "react-router"
import { useEffect, useState } from "react";

import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import {  toast } from 'react-toastify';


import { deleteProduct, fetchProductById } from "../api/productApi"


const ProductDetail = () => {
    const navigate = useNavigate();
    const { productID } = useParams();
    console.log("Editing product with ID:", productID);
    const [product, setproduct] = useState({});
    const [count, setcount] = useState(1);

    const fetchProductDetails = async () => {

        const productDetails = await fetchProductById(productID);
        setproduct(productDetails);


    }

    useEffect(() => {
        fetchProductDetails()
    }, [productID]);

    const notify = () => toast("Product Deleted Sucessfull");

    const handleinc = () => {
        const newcount = count + 1;
        setcount(newcount);
    };
    const handledec = () => {
        const newcount = count - 1;
        setcount(newcount);
    };
    const handleBuy = () => {
        navigate('/underConstruction')
    };
    const handleDeleteProduct = async () => {
        notify();
        const updatedProducts = await deleteProduct(productID);
        setproduct(updatedProducts);
        navigate('/products')
    };
    const handleEditProduct = async (productID) => {
        navigate(`/editproduct/${productID}`);


    }









    return (
        <div className="flex margintop ">

            <div className="myProductImages flex ">
                <div className="viewImage ">
                    {product.images && product.images.length > 0 && (
                        <img
                            src={product.images[0]}
                            alt={`${product.title} image 1`}
                        />
                    )}
                </div>

                <div className="flex gallaryImage">
                    {product.images?.map((imgUrl, index) => (
                        <div className="images" key={index}>
                            <img
                                src={imgUrl}
                                alt={`${product.title} image ${index + 1}`}
                            />
                        </div>
                    ))}
                </div>

            </div>

            <div className= "myproductsdetails ">
                <div className="mybuttonWrapper flex spacebetween ">
                <div className="flex mybtn "><button onClick={handleDeleteProduct}>Delete this Product </button></div>
                <div className="  mybtn2 "><button onClick={() => handleEditProduct(productID)}>Edit my product</button>
                </div>
                </div>
                {/* <h1>ProductDetail{productID}</h1> */}
                <h1>{product.title}</h1>
                <h4>{product.description}</h4>
                <div className="rating">
                    Product Rating -  {product.rating}
                </div>
                <div className="myBarnd">
                    <p> Brand -{product.brand}</p>
                    <p>Category - {product.category}</p>
                    <p>Availability - {product.availabilityStatus}</p>
                    <p>WrrantyInformation -  {product.warrantyInformation}</p>
                    <p>Shippment - {product.shippingInformation}</p>
                </div>
                <div className="price">
                    Price  ${product.price}
                </div>
                <div className="returnPolicy">
                    <p> Return Policy -  {product.returnPolicy}</p>
                </div>
                <div className="quantity ">
                    <button onClick={handledec}><RiSubtractFill /></button>
                    <div className="count flex"><h2>{count}</h2></div>
                    <button onClick={handleinc}><IoIosAdd />
                    </button>
                </div>

                {/* <pre>{JSON.stringify(product, null, 2)}</pre> */}

            </div>

        </div>
    )
}

export default ProductDetail