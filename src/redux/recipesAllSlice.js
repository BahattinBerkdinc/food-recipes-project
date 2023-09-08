import {createSlice , createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    recipes: [],
    loading: false,
    error: null,
}

export const getRecipes = createAsyncThunk('recipes/getRecipes', async () => {
    const response = await axios.get('https://api.edamam.com/api/recipes/v2',{
        params: {
            type: 'public',
            q:"",
            app_id: '0be44ea2', 
            app_key: 'e1c5e1eb6455e0d47d816e8a4d0dbce4',
        }
    });
   return response.data;
})

const recipesAllSlice = createSlice({
    name:"recipes",
    initialState,
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(getRecipes.pending, (state)=>{
            state.loading = true;
        })
        .addCase(getRecipes.fulfilled, (state, action)=>{
            state.recipes = action.payload;
            state.loading = false;
        })
        .addCase(getRecipes.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default recipesAllSlice.reducer
