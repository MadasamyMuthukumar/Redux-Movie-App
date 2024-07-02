import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from '../../common/api/movieApi';
import { APIKey } from '../../common/api/MovieApiKey';

//asynchrnously getting api data using middleware thunk 
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async (term)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=movie`);

      return response.data
      
})

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',async (term)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}&type=series`);

      return response.data
      
})

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async (id)=>{
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`);

      return response.data
      
})

const initialState={
    movies: {},
    selectMovieOrShow: {},
    shows: {},
    loading:false,
    loading2:false,
}

const movieSlice=createSlice({
    name:"movies",
    initialState,
    reducers:{
      //making object as empty
        removeSelectedMovieOrShow:(state)=>{
           state.selectMovieOrShow={};
        }
    },
    extraReducers:(builder)=>{
         builder.addCase(fetchAsyncMovies.pending,(state)=>{
          state.loading=true;
            // console.log("pending");
         })
         builder.addCase(fetchAsyncMovies.fulfilled,(state,action)=>{
          state.loading=false;
            state.movies=action.payload
            // console.log("fulfiled");
         })
         builder.addCase(fetchAsyncMovies.rejected,()=>{
            // console.log("rejected");
         })

         builder.addCase(fetchAsyncShows.pending,(state)=>{
          state.loading=true;
         })

         builder.addCase(fetchAsyncShows.fulfilled,(state,{payload})=>{
          state.loading=false;
              state.shows=payload;
         })
         builder.addCase(fetchAsyncMovieOrShowDetail.pending,(state)=>{
            state.loading2=true;
       })
         builder.addCase(fetchAsyncMovieOrShowDetail.fulfilled,(state,{payload})=>{
          state.loading2=false;
            state.selectMovieOrShow=payload;
         })
    }
})
//named export for actions and deffault export for reducer
export const getAllMovies = (state)=>state.movies.movies;
// export const getSelectedMovieOrShow = (state)=>state.movies.selectMovieOrShow;
export const { removeSelectedMovieOrShow } = movieSlice.actions 
export default movieSlice.reducer

//exporting this reducers state..
//state.movies.movies = first movies is name of slice and second movies is movies array