import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import productService from "./productAction";

const initialState = {
  products: [],
  categories:[],
  isError: false,
  isSuccess: false,
  isLoadding: false,
  message: "",
};

export const getAllproducts = createAsyncThunk(
  "products/all-products",
  async (thunkAPI) => {
    try {
      return await productService.getAllProduct();
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
export const getAdminAllproducts = createAsyncThunk(
    "products/admin-products",
    async ({keyword,category},thunkAPI) => {
        
      try {
        return await productService.getAllAdminProduct({
           keyword:keyword,
           category:category
        });
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

export const getAllCategories = createAsyncThunk(
    "products/all-categories",
    async (thunkAPI) => {
      try {
        return await productService.getCategories();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const getSingleProductData = createAsyncThunk(
    "products/sigle-product",
    async (id,thunkAPI) => {
      try {
        return await productService.getSingleProduct(id);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const updateSingleProduct = createAsyncThunk(
    "products/update-product",
    async (date,thunkAPI) => {
      try {
        return await productService.updateSingleProduct(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const deleteProductData = createAsyncThunk(
    "products/delete-product",
    async (id,thunkAPI) => {
      try {
        return await productService.deleteSingleProduct(id);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
export const resetState = createAction("Reset_all");

export const createProducts = createAsyncThunk(
  "product/create-products",
  async (productData, thunkAPI) => {
    try {
      return await productService.createProduct(productData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
export const createCategory = createAsyncThunk(
    "product/create-category",
    async (productData, thunkAPI) => {
      try {
        return await productService.createCategory(productData);
      } catch (error) {
        return thunkAPI.rejectWithValue(error);
      }
    }
  );
export const getAllProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllproducts.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getAllproducts.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.products = action.payload;
      })
      .addCase(getAllproducts.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.products = [];
        state.message = action.payload?.response?.data?.message;
      }).addCase(getSingleProductData.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getSingleProductData.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.singleProduct = action.payload;
      })
      .addCase(getSingleProductData.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.singleProduct= null;
        state.message = action.payload?.response?.data?.message;
      }).addCase(updateSingleProduct.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(updateSingleProduct.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.updateProduct = action.payload;
      })
      .addCase(updateSingleProduct.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.updateProduct= null;
        state.message = action.payload?.response?.data?.message;
      }).addCase(deleteProductData.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(deleteProductData.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.deletedProduct = action.payload;
      })
      .addCase(deleteProductData.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.deletedProduct= null;
        state.message = action.payload?.response?.data?.message;
      }).addCase(getAdminAllproducts.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getAdminAllproducts.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.products = action.payload;
      })
      .addCase(getAdminAllproducts.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.products = [];
        state.message = action.payload?.response?.data?.message;
      }).addCase(getAllCategories.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(getAllCategories.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.categories = action.payload;
      })
      .addCase(getAllCategories.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.categories = [];
      })
      .addCase(createProducts.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdProduct = action.payload;
      })
      .addCase(createProducts.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload?.response?.data?.message;
        state.createdProduct = null;
      }) .addCase(createCategory.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isError = false;
        state.isSuccess = true;
        state.createdCategory = action.payload;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload?.response?.data?.message;
        state.createdCategory = null;
      }).addCase("clearError",(state)=>{
        state.isError=false;
      }).addCase("clearSuccess",(state)=>{
        state.isSuccess=false;
      })
      .addCase(resetState, () => initialState);
  },
});

export default getAllProductsSlice.reducer;