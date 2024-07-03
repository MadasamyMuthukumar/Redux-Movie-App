import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies } from '../../features/movies/movieSlice';
import { fetchAsyncShows } from '../../features/movies/movieSlice';
import './SearchBar.scss'
const SearchBar = () => {
    const [term ,setTerm]=useState('');
    const dispatch=useDispatch()
    const submitHandler=(e)=>{
        e.preventDefault();
        if(term==="") {
            dispatch(fetchAsyncMovies("Harry"));
            dispatch(fetchAsyncShows("Friends"));
        }else{
            dispatch(fetchAsyncMovies(term));
            dispatch(fetchAsyncShows(term));
        }
      
        console.log(term);
    }
  return (
    <div className='search-wrapper'>
    <div className='search-bar'>
    <form onSubmit={submitHandler}>
      <input type="text" value={term} placeholder='Search Movies or Shows' onChange={(e)=>setTerm(e.target.value)} /> 
      <button type='submit'><i className='fa fa-search'></i></button>
    </form>
  </div>
  </div>
  )
}

export default SearchBar
