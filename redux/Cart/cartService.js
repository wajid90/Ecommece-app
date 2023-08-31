import axios from "axios";


const addtoCart = async (data) => {
    const reponces = await axios.post(`/api/user/cart`, data);
    if (reponces.data) {
      return reponces.data;
    }
  };

  const emptyCart = async () => {
    const reponces = await axios.delete(`/api/user/empty-cart`);
    if (reponces?.data) {
      return reponces?.data;
    }
  };
  const getAllCart = async () => {
    const reponces = await axios.get(`/api/user/cart`);
    if (reponces.data) {
      return reponces.data;
    }
  };

  const removeCart = async (cartId) => {
    const reponces = await axios.delete(`api/user/cart/${cartId}`);
    if (reponces.data) {
      return reponces.data;
    }
  };

  const updateCart = async (productUpdateDeltail) => {
    console.log(productUpdateDeltail);
    const reponces = await axios.put(`${base_url}user/update-cart`, {
      cartitemId: productUpdateDeltail.cartId,
      newQuantity: productUpdateDeltail.quantity,
    });
    console.log(reponces.data);
    if (reponces.data) {
      return reponces.data;
    }
  };

  const cartService = {
    addtoCart,
    getAllCart,
    removeCart,
    updateCart,
    emptyCart,
  };
  export default cartService;
