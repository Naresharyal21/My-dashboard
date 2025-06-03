import { useNavigate } from "react-router";
import { useEffect, useState } from "react";


import { CiSearch } from "react-icons/ci";
import { utcToLocal } from "../utils/dateUtils";
import { AiOutlineSortAscending } from "react-icons/ai";


import Table from "../components/table/Table";
import { fetchProducts, searchProduct, sortProduct } from "../api/productApi";



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
    const handlesearch = async (e) => {
        const queryParam = (e.target.value.trim());
        const products = await searchProduct(queryParam);
        setData({ products });
    }
    const handleSort = async () => {
        const response = await sortProduct();
        setData(response);
    };
    const headers = [
        { label: 'Created At', key: 'createdAt' },
        {
            label: (
                <div className="">
                    Title
                    <button
                        className="noStyle"
                        onClick={() => handleSort()}

                    >
                       <AiOutlineSortAscending />
                    </button>
                </div>
            ), key: 'title'
        },
        { label: 'Thumbnail', key: 'thumbnail' },
        { label: 'Price', key: 'price' },
        { label: 'Category', key: 'category' },
        { label: 'Availability Status', key: 'availabilityStatus' },
        { label: 'Rating', key: 'rating' },
        { label: 'Brand', key: 'brand' }
    ];



    return (
        <div className="">
            <div className="flex ">
                <div className=" flex wrapper">
                    <h1 className="">Products</h1>
                    <div className="flex align-items-center">

                        <button className="mr-15" onClick={handleAddProduct} >Add Product</button></div>
                    <div className="searchbarwrapper">

                        <div className="searchicon"><CiSearch /></div>
                        <div className="mysearch flex">
                            <input type="text" placeholder="Search Product" onChange={handlesearch} />
                        </div>
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
                            <tr key={product.id} onClick={() => handleViewProduct(product.id)}>
                                <td>{utcToLocal(product.meta.createdAt)}</td>
                                <td>{product.title}

                                </td>

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