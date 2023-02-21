import React, { useEffect, useState } from 'react'
import MovieBox from './MovieBox'

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
// import Button from '@mui/material/Button';

export default function App() {
  const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=53db10d7db4c7263d0695b5cef7404b9";

  var [movie, setmovies] = useState([])
  var [query, setquery] = useState("")

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setmovies(data.results)
      })
  }, [])
  const searchmovies = async (e) => {
    e.preventDefault()
    console.log("searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setmovies(data.results);
    }
    catch (e) {
      console.log(e);
    }
  }
  const changehandle = (e) => {
    setquery(e.target.value);
  }
  return (
    <>

      {/* Nav starts */}
      <nav className="navbar navbar-expand-lg background w-100 " style={{ marginBottom: 20 }}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="/">Movie Search App</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>
            <form className="d-flex w-50" onSubmit={searchmovies} autoComplete="off">
              <input className="form-control me-2 " type="search" placeholder="Search Movies" aria-label="Search" name='query'
                value={query} onChange={changehandle}
              />
              <button className="btn btn-outline-light" type="submit">
                <span className="material-symbols-outlined ">
                  search
                </span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* Nav Ends */}
      <div>
        {movie.length > 0
          ?
          (
            <div className='container'>
              <div className='grid'>
                {movie.map((moviereq) => <MovieBox key={moviereq.id} {...moviereq} />)}
              </div>
            </div>
          ) :
          <Backdrop 
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}open>
              <CircularProgress color="inherit" />
          </Backdrop>

        }
    </div>
    </>
  )
}
