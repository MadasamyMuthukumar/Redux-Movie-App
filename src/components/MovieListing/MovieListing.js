import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard';
import './MovieListing.scss'
const MovieListing = () => {
  const movies=useSelector(getAllMovies);
  const shows = useSelector((state)=>state.movies.shows)
  let renderMovies, renderShows="";
  /**
   * looping through the movies if the Response was true(which means the repsonse got) then send the data to Moviecar
   * else display erro
   * that Response and Error property are coming from movies api
   */
  renderMovies = movies.Response === "True" ? (
    movies.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ):(
    <div>
      <h3>{movies.Error}</h3>
    </div>
  );

  renderShows = shows.Response === "True" ? (
    shows.Search.map((movie,index)=>(
      <MovieCard key={index} data={movie}/>
    ))
  ):(
    <div>
      <h3>{movies.Error}</h3>
    </div>
  );

  console.log("Movies ",renderShows.length);
  return (
    <div className='movie-wrapper container'>
      <div className='movie-list'>
        <h2>Movies</h2>
        <div className='movie-container'>
        {renderMovies.length > 0 ? renderMovies :  <span className='empty-msg'>No Movies Available!</span> }  {/*will be list of divs */}
        </div>
      </div>

      <div className='show-list'>
        <h2>Shows</h2>
        <div className='show-container'>
        {renderShows.length > 0 ? renderShows : <span className='empty-msg'>No Shows Available!</span>}  {/*will be list of divs */}
        </div>
      </div>
      
    </div>
  )
}

export default MovieListing
