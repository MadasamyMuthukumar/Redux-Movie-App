import React from 'react'
import './Footer.scss';
import { useSelector } from 'react-redux';
const Footer = () => {
  const loadingStatus=useSelector((state)=>state.movies.loading);
  const movieDetailLoading = useSelector((state) => state.movies.loading2)
  // console.log(loadingStatus,'-',loading22);
  let classNames="";
  classNames=(loadingStatus || movieDetailLoading)? "footer fix":"footer";
 
  return (
    <div className={classNames}>
      <div>Movie App</div>
      <div>@2024, Movie, Inc. or its affiliates</div>   
    </div>
  )
}

export default Footer
//{!loadingStatus ? `footer`:`footer fix`}