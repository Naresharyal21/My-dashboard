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

export const searchProduct =  async (queryParam) =>{
  const response =   await axios ({
    url:`https://dummyjson.com/products/search?q=${queryParam}`
  })
  return response.data.products

};
export const updateProduct = async (productId, data) => {
  const response = await axios({
    method: 'PUT',
    url: `https://dummyjson.com/products/${productId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  });
  return response.data;
};
  export const sortProduct = async() =>{
 const response = await axios ({
url:'https://dummyjson.com/products?sortBy=title&order=asc'
 })
  return response.data;
  }