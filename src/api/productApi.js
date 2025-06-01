import axios from "axios";

export const fetchProducts = async () => {
  const response = await axios({
    method: "get",
    url: "https://dummyjson.com/products?sortBy=title&order=asc",
  });


  return response.data;
};

export const addProduct = async (product) => {
  const response = await axios({
    method: "post",
    url: "https://dummyjson.com/products/add",
    data: product,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
export const fetchProductById = async (productId)=>{
  const response =  await axios({
    method:"get",
    url:`https://dummyjson.com/products/${(productId)}`
  })
  return response.data;
};
export const deleteProduct =  async (productId) =>{
  const response = await axios ({
   method: 'DELETE',
   url :`https://dummyjson.com/products/${(productId)}` 
  })
  return response.data;
};
