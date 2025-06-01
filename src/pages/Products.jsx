import { useNavigate } from "react-router";
import { useEffect, useState } from "react";


import Table from "../components/table/Table";
import { utcToLocal } from "../utils/dateUtils";
import { fetchProducts } from "../api/productApi";

const headers = [
    { label: 'Created At', key: 'createdAt' },
    { label: 'Title', key: 'title' },
    { label: 'Thumbnail', key: 'thumbnail' },
    { label: 'Price', key: 'price' },
    { label: 'Category', key: 'category' },
    { label: 'Availability Status', key: 'availabilityStatus' },
    { label: 'Rating', key: 'rating' },
    { label: 'Brand', key: 'brand' }
];

const Products = () => {
    const navigate = useNavigate();

    const [data, setData] = useState({});

    const getProducts = async () => {
        const data = await fetchProducts();

        setData(data);
    }

    useEffect(() => {
        getProducts();
    }, []);

    const handleAddProduct = () => {
        
        navigate('/products/add-product');
    }
   const handleViewProduct = (productId) => {
        navigate(`/products/${productId}`);
    }


    return (
        <div className="">
            <div className="flex ">
                <div className=" flex wrapper">
                <h1 className="">Products</h1>
                <div className="flex align-items-center">
                    <button className="mr-15" onClick={handleAddProduct} >Add Product</button>
                </div>
            </div>
            </div>
            <Table headers={headers}>
                {
                    !data?.products
                        ? (
                            <tr>
                                <td colSpan="6">Loading...</td>
                            </tr>
                        )
                        : (data.products?.map((product) => (
                            <tr key={product.id}onClick={()=>handleViewProduct(product.id)}>
                                <td>{utcToLocal(product.meta.createdAt)}</td>
                                <td>{product.title}</td>
                                <td>
                                    <img src={product.thumbnail} alt={product.title} style={{ width: '50px', height: '50px' }} />
                                </td>
                                <td>${product.price}</td>
                                <td>{product.category}</td>
                                <td>{product.availabilityStatus}</td>
                                <td>{product.rating}</td>
                                <td>{product.brand}</td>
                            </tr>
                        )))
                }
            </Table>
        </div>
    )
}

export default Products