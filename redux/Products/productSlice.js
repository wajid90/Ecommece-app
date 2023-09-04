import { createSlice, createAction, createAsyncThunk } from "@reduxjs/toolkit";
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
  export const updateSingleProductData = createAsyncThunk(
    "products/update-product",
    async ({id,formData},thunkAPI) => {
      try {
        return await productService.updateSingleProduct({id,formData});
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
  export const deleteImageData = createAsyncThunk(
    "products/delete-image-product",
    async ({productId,imageId},thunkAPI) => {
      try {
        return await productService.deleteImage({productId,imageId});
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const addImageData = createAsyncThunk(
    "products/add-image-product",
    async ({productId,imageData},thunkAPI) => {
      try {
        return await productService.addImages({productId,imageData});
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
  export const deleteCategory = createAsyncThunk(
    "product/delete-category",
    async (id, thunkAPI) => {
      try {
        return await productService.deleteCategory(id);
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
        state.inStock=action.payload.inStock
        state.outOfStock=action.payload.outStock
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
        state.singleProduct = action.payload?.product;
      })
      .addCase(getSingleProductData.rejected, (state, action) => {
        state.isLoadding = false;
        state.singleProduct= null;
        state.message = action.payload?.response?.data?.message;
      }).addCase(updateSingleProductData.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(updateSingleProductData.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.successMessage = action.payload.message;
      })
      .addCase(updateSingleProductData.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.errorMessage = action.payload?.response?.data?.message;
      })
      .addCase(deleteProductData.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(deleteProductData.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.successMessage = action.payload.message;
      })
      .addCase(deleteProductData.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.errorMessage=  action.payload?.response?.data?.message;
      }) .addCase(deleteImageData.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(deleteImageData.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.successMessage = action.payload.message;
      })
      .addCase(deleteImageData.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.errorMessage = action.payload?.response?.data?.message;
      }) .addCase(addImageData.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(addImageData.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.successMessage = action.payload.message;
      })
      .addCase(addImageData.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.errorMessage = action.payload?.response?.data?.message;
      }).addCase(deleteCategory.pending, (state) => {
        state.isLoadding = true;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.isLoadding = false;
        state.isSuccess=true;
        state.successMessage = action.payload.message;
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess=false;
        state.errorMessage = action.payload?.response?.data?.message;
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
        state.successMessage=action.payload.message;
      })
      .addCase(createCategory.rejected, (state, action) => {
        state.isLoadding = false;
        state.isError = true;
        state.isSuccess = false;
        state.errorMessage = action.payload?.response?.data?.message;
      }).addCase("clearError",(state)=>{
        state.isError=false;
        state.errorMessage="";
      }).addCase("clearSuccess",(state)=>{
        state.isSuccess=false;
        state.successMessage="";
      })
      .addCase(resetState, () => initialState);
  },
});

export default getAllProductsSlice.reducer;