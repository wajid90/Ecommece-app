import axios from "axios";
import { server } from "../../utils/api";

const getAllProduct = async () => {
  const response = await axios.get(`${server}/product/admin`,{
    withCredentials:true
  });
  
  if(response.data){
    return response.data;
    }
};

const getAllAdminProduct = async ({keyword,category}) => {

    const response = await axios.get(`${server}/product/all?keyword=${keyword}&category=${category}`,{
      withCredentials:true
    });
    if(response.data){
      return response.data;
      }
  };

  const getSingleProduct = async (id) => {
    const response = await axios.get(`${server}/product/single/${id}`,{
      withCredentials:true
    });
    if(response.data){
      return response.data;
      }
  };

  const updateSingleProduct = async ({id,formData}) => {
    console.log("form Data --------"+formData);
    console.log("Id"+id);

    const response = await axios.put(`${server}/product/single/${id}`,formData,{
         headers:{
        "Content-Type": "application/json",
      },
      withCredentials:true
    });
    console.log(response);

    if(response.data){
        return response.data;
    }
  };

  const deleteSingleProduct = async (id) => {
    const response = await axios.delete(`${server}/product/single/${id}`,{
      withCredentials:true
    });
    if(response.data){
      return response.data;
      }
  };

const getCategories = async () => {
    const reponces = await axios.get(`https://ecommerce-server-i9xu.onrender.com/api/v1/product/categories`,{
        withCredentials:true
    });
    if(reponces.data){
    return reponces.data.categories;
    }
  };

const createProduct = async (product) => {
  const response = await axios.post(`${server}/product/new`, product,{
    headers:{
        "Content-Type": "multipart/form-data",
      },
      withCredentials:true
  });
  if(response.data){
    return response.data;
    }
};
const createCategory = async (category) => {
    const response = await axios.post(`${server}/product/category`, category,{
      headers:{
          "Content-Type": "application/json",
        },
        withCredentials:true
    });
    if(response.data){

      return response.data;
      }
  };
  const deleteCategory = async (id) => {
    const response = await axios.delete(`${server}/product/category/${id}`,{
        withCredentials:true
    });
    if(response.data){
      return response.data;
      }
  };
  const addImages=async ({productId,imageData})=>{
    const response = await axios.post(`${server}/product/images/${productId}`,imageData,{
        headers:{
            "Content-Type": "multipart/form-data",
          },
          withCredentials:true
      });
    if(response.data){
      return response.data;
      }
  }
  const deleteImage=async ({productId,imageId})=>{
    const response = await axios.delete(`${server}/product/images/${productId}?id=${imageId}`,{
          withCredentials:true
      });
    if(response.data){
      return response.data;
      }
  }
const productService = {
  getAllProduct,
  createProduct,
  getCategories,
  getAllAdminProduct,
  createCategory,
  deleteSingleProduct,
  updateSingleProduct,
  getSingleProduct,
  deleteCategory,
  deleteImage,
  addImages
};
export default productService;