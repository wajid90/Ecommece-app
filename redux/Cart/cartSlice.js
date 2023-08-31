

const initialState = {
    cart: [],
    isError: false,
    isSuccess: false,
    isLoadding: false,
    message: "",
  };

  export const userAddToCart = createAsyncThunk(
    "customer/add-to-cart",
    async (data, thunkAPI) => {
      try {
        return await authService.addtoCart(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const userUpdateCart = createAsyncThunk(
    "customer/update-cart",
    async (productUpdateDeltail, thunkAPI) => {
      try {
        return await authService.updateCart(productUpdateDeltail);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  
  export const deleteCartData = createAsyncThunk(
    "customer/delete-cart",
    async (cartId, thunkAPI) => {
      try {
        return await authService.removeCart(cartId);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const emptyCartData = createAsyncThunk(
    "customer/empty-cart",
    async (thunkAPI) => {
      try {
        return await authService.emptyCart();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const userGetAllCart = createAsyncThunk(
    "customer/get-all-cart",
    async (thunkAPI) => {
      try {
        return await authService.getAllCart();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(userAddToCart.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(userAddToCart.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.cart = action.payload;
         
        })
        .addCase(userAddToCart.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload;
          if (state.isError == true) {
            toast.error("Something Went to Wrong ....");
          }
        })
        .addCase(userGetAllCart.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(userGetAllCart.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.getAllcartProducts = action.payload;
        })
        .addCase(userGetAllCart.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload;
        })
        .addCase(deleteCartData.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(deleteCartData.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.deletecartProduct = action.payload;
          
        })
        .addCase(deleteCartData.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload;
         
        })
        .addCase(userUpdateCart.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(userUpdateCart.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.updatecartProduct = action.payload;
         
        })
        .addCase(userUpdateCart.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload;
        
        })
        .addCase(emptyCartData.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(emptyCartData.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.emptyCartData = action.payload;
         
        })
        .addCase(emptyCartData.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.isSuccess = false;
          state.message = action.payload?.response?.data?.message;
        })
        .addCase(resetState, () => initialState);
    },
  });
  
  export default cartSlice.reducer;