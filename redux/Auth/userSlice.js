import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import authService from "./userAction";

// const initialState = ;

const initialState={
  user: null,
  isError: false,
  isSuccess: false,
  errorMessage:"",
  successMessage:"",
  isLoadding: false,
  isAuthenticated:false,
  cartItems:[]
}
  
export const AuthLogin = createAsyncThunk(
    "user/login",
    async (user, thunkAPI) => {

      try {
        return await authService.login(user);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }

  );
  export const AuthLogout = createAsyncThunk(
    "user/logout",
    async (thunkAPI) => {

      try {
        return await authService.logout();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const changePassword = createAsyncThunk(
    "user/changePassword",
    async (data,thunkAPI) => {

      try {
        return await authService.updatePassword(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const updateProfileData = createAsyncThunk(
    "user/updateProfile",
    async (data,thunkAPI) => {

      try {
        return await authService.updateProfile(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const updateProfilePicData = createAsyncThunk(
    "user/updateProfilePic",
    async (data,thunkAPI) => {

      try {
        return await authService.updateProfilePic(data);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  
  

  export const AuthRegister = createAsyncThunk(
    "user/register",
    async (user, thunkAPI) => {
      try {
        return await authService.register(user);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );
  export const userLoadData = createAsyncThunk(
    "user/loadUser",
    async (thunkAPI) => {
      try {
        return await authService.loadUserData();
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    }
  );

  export const authSlice = createSlice({
    name: "auth",
    initialState:initialState,
    reducers: {
      addToCart:(state,action)=>{
        const item=action.payload;

        const isExist=state.cartItems.find((i)=>i.product===item.product);
        if(isExist){
          state.cartItems=state.cartItems.filter((i)=>i.product===isExist.product?item:i);
          
          for( let i=0;i<state.cartItems.length;i++){
            if(state.cartItems[i].product===isExist.product){
              state.cartItems[i]=item;
            }
          }
        }else{
           state.cartItems.push(item);
        }
      },
      removeFromCart:(state,action)=>{
        const id=action.payload;
        state.cartItems=state.cartItems.filter((i)=>i.product!==id);

      },
      emptyCartsData:(state)=>{
        state.cartItems=[];
      }

    },
    extraReducers: (builder) => {
      builder
        .addCase(AuthLogin.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(AuthLogin.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.successMessage = action.payload.message;
          state.isAuthenticated=true
        })
        .addCase(AuthLogin.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.isSuccess = false;
          state.isAuthenticated=false
          state.errorMessage = action.payload.response.data.message;
        }) .addCase(userLoadData.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(userLoadData.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isAuthenticated=true
          state.user = action.payload;
        })
        .addCase(userLoadData.rejected, (state) => {
          state.isLoadding = false;
          state.isAuthenticated=false
          state.user = null;
        }).addCase(updateProfileData.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(updateProfileData.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess=true
          state.successMessage = action.payload.message;
        })
        .addCase(updateProfileData.rejected, (state,action) => {
          state.isLoadding = false;
          state.isError=true
          state.errorMessage = action.payload.response.data.message;
  
        }).addCase(updateProfilePicData.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(updateProfilePicData.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess=true
          state.successMessage = action.payload.message;
        })
        .addCase(updateProfilePicData.rejected, (state,action) => {
          state.isLoadding = false;
          state.isError=true
          state.errorMessage = action.payload.response.data.message;
  
        })
        .addCase(AuthRegister.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(AuthRegister.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess = true;
          state.isAuthenticated=true;
          state.successMessage = action.payload.message;
        })
        .addCase(AuthRegister.rejected, (state, action) => {
          state.isLoadding = false;
          state.isError = true;
          state.errorMessage=action.payload?.response?.data?.message;
          state.isAuthenticated=false;
          state.isSuccess = false;
         
        }).addCase(AuthLogout.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(AuthLogout.fulfilled, (state, action) => {
          state.isLoadding=false
          state.islogout= true;
          state.isAuthenticated=false;
          state.isSuccess=true;
          state.successMessage=action.payload.message;
          state.user = null;
        })
        .addCase(AuthLogout.rejected, (state,action) => {
          state.isLoadding = false;
          state.islogout = false;
          state.isAuthenticated=true;
          state.isError=true;
          state.errorMessage=action.payload.response.data.message;
        }).addCase(changePassword.pending, (state) => {
          state.isLoadding = true;
        })
        .addCase(changePassword.fulfilled, (state, action) => {
          state.isLoadding = false;
          state.isSuccess=true;
          state.successMessage=action.payload.message;
        })
        .addCase(changePassword.rejected, (state,action) => {
          state.isLoadding = false;
          state.isError=true;
          state.errorMessage=action.payload.response.data.message;
        }).addCase("clearError",(state)=>{
          state.errorMessage="";

          state.isError=false;
        }).addCase("clearSuccess",(state)=>{
          state.successMessage="";
          state.isSuccess=false;
        })
    },
  });
  export const {addToCart,removeFromCart,emptyCartsData} = authSlice.actions;
  export default authSlice.reducer;

  
