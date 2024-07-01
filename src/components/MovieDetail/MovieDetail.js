import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { fetchAsyncMovieOrShowDetail } from '../../features/movies/movieSlice';
import { removeSelectedMovieOrShow } from '../../features/movies/movieSlice';
import './MovieDetail.scss';
// import { getSelectedMovieOrShow } from '../../features/movies/movieSlice';
const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  // const data = useSelector(getSelectedMovieOrShow())
  const movieDetail = useSelector((state) => state.movies.selectMovieOrShow)
  console.log(movieDetail);
  useEffect(() => {
    dispatch(fetchAsyncMovieOrShowDetail(imdbID));

    //clean up function whenever the this component unmounts we need to make the corresponding object empty(it will remove the selected movie)
    return ()=>{
      dispatch(removeSelectedMovieOrShow());
    }
  }, [dispatch, imdbID]) //whenever the ID changes need to fetch data of new Id so added dependencies
  return (
    <div className='movie-section container'>
      {Object.keys(movieDetail).length===0 ? (
        <div>Loading....</div>
      ):(
      <>
      <div className='section-left'>
        <div className='movie-title'>{movieDetail.Title}</div>
        <div className='movie-rating'>
          <span>
            IMDB Rating <i className='fa fa-star'></i> : {movieDetail.imdbRating}
          </span>

          <span>
            IMDB Votes <i className='fa fa-thumbs-up'></i> : {movieDetail.imdbVotes}
          </span>

          <span>
            Runtime <i className='fa fa-film'></i> : {movieDetail.Runtime}
          </span>

          <span>
            Year <i className='fa fa-calendar'></i> : {movieDetail.Year}
          </span>
        </div>
        <div className='movie-plot'>
          {movieDetail.Plot}
        </div>
        <div className='movie-info'>
          <div>
            <span>Director</span>
            <span>{movieDetail.Director}</span>
          </div>

          <div>
            <span>Stars</span>
            <span>{movieDetail.Actors}</span>
          </div>

          <div>
            <span>Generes</span>
            <span>{movieDetail.Genre}</span>
          </div>

          <div>
            <span>Languages</span>
            <span>{movieDetail.Language}</span>
          </div>

          <div>
            <span>Awards</span>
            <span>{movieDetail.Awards}</span>
          </div>
        </div>
      </div>
      <div className='section-right'>
        <img src={movieDetail.Poster} alt={movieDetail.Title} />
      </div>
      </>
      )}
    </div>
  )
}

export default MovieDetail
