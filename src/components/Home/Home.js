import React, { useEffect } from 'react'
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import SearchBar from '../SearchBar/SearchBar';

const Home = () => {
  const dispatch=useDispatch();
  useEffect(()=>{
 
   dispatch(fetchAsyncMovies("Harry"));
   dispatch(fetchAsyncShows("Friends"));

  },[dispatch])  //whever dispatch fn changes need to update  

  return (
      <div>
         <div className='banner-img'>
         </div>
         <SearchBar />
         <MovieListing/>
      </div>
  );
}

export default Home
