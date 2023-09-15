/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import PaginationItem from '@mui/material/PaginationItem'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import ReactImageGallery from 'react-image-gallery'
import StarIcon from '@mui/icons-material/Star'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import DehazeIcon from '@mui/icons-material/Dehaze'
import Button from '@mui/material/Button'
import FileDownloadIcon from '@mui/icons-material/FileDownload'
import InfoIcon from '@mui/icons-material/Info'
import { createTheme } from '@mui/material/styles'
function Moviespage () {
  const [moviedata, setMoviedata] = useState([])
  const [isloading, setIsloading] = useState(true)
  const [moviesList, setMoviesList] = useState([])
  const params = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  function handlechange (event, value) {
    navigate(`/movies/${value}`)
  }
  const [count, setCount] = useState(0)

  useEffect(() => {
    axios
      .get(
        `http://localhost:8585/movies?page=${params.page ? params.page : '1'}`
      )
      .then(res => {
        setCount(res.data.metadata.page_count)
        setMoviesList(res.data.data)
        setIsloading(false)
      })
  }, [location])

  return (
    <div className='flex justify-around gap-3'>
      <div className='flex items-center justify-between gap-7'>
        <div className='h-[3950px] w-[350px] bg-[#29282E] flex items-center rounded-xl flex-col gap-5 justify-start p-4'>
          <h6 className='span2'>Most Popular Movies</h6>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${85}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0338013_poster.jpg'}
            />{' '}
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${13}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0109830_poster.jpg'}
            />
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${18}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0133093_poster.jpg'}
            />{' '}
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${22}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0114369_poster.jpg'}
            />{' '}
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${27}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0110413_poster.jpg'}
            />{' '}
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${47}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0209144_poster.jpg'}
            />{' '}
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${43}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0407887_poster.jpg'}
            />{' '}
          </div>
          <div className='  h-[450px] w-[300px]'>
            {' '}
            <img
              onClick={() => {
                navigate(`/movie/${46}`)
              }}
              className='most rounded-xl brightness-50'
              src={'http://moviesapi.ir/images/tt0172495_poster.jpg'}
            />{' '}
          </div>
        </div>
        <div className='flex flex-col items-end justify-center w-[70vw] h-auto gap-12 mt-24  p-[60px] '>
          {moviesList.map((movie, index) => {
            return (
              <div className='flex flex-col gap-12 '>
                {isloading === true ? (
                  <div>
                    <Skeleton variant='rounded' width={900} height={350} />
                  </div>
                ) : (
                  <div className='mainmoviesdiv w-[1000px] h-[350px] bg-[#29282E] flex justify-center items-center rounded-xl'>
                    <div className='moviesdiv flex gap-7 w-[1010px] h-[300px] justify-around items-start rounded-xl'>
                      <div className='w-[200px]'>
                        <img
                          onClick={() => {
                            navigate(`/movie/${movie.id}`)
                          }}
                          className='img'
                          src={movie.poster}
                        />
                      </div>
                      <div className='flex flex-col items-start gap-1 mt-7'>
                        <h6
                          className='h6'
                          onClick={() => {
                            navigate(`/movie/${movie.id}`)
                          }}
                        >
                          <span className='span'>{movie.id}.</span>
                          <span className='span2'>{movie.title}</span>
                        </h6>
                        <div>
                          <span className='spangarne'>
                            <DehazeIcon />
                          </span>
                          <span>
                            <span className='spangarne'>
                              {movie.genres + ''}
                            </span>
                          </span>
                        </div>
                        <hr className='line' />
                        <h6>
                          <span className='spangarne'>Director :</span>
                          <span className='spangarne'>
                            {moviedata.director}
                          </span>
                        </h6>
                        <h6>
                          <span className='spangarne'>Actors :</span>
                          <span className='spangarne'>{moviedata.actors}</span>
                        </h6>
                        <div className='w-[700px] h-[60px] bg-[#242226] p-2'>
                          <h6>
                            <span className='spangarne'>{moviedata.plot}</span>
                          </h6>
                        </div>
                        <h6 className='mt-5'>
                          <span className='spangarne'>Year :</span>
                          <span className='spangarne'>{movie.year}</span>
                          <span className='ml-5 spangarne'>Country :</span>
                          <span className='spangarne'>{movie.country}</span>
                        </h6>
                        <div className='flex justify-between w-[600px]'>
                          <div className='flex jusify-center itemms-center'>
                            <span className='spangarne'>
                              {movie.imdb_rating}/10
                            </span>
                            <span className='span3'>
                              <StarIcon fontSize='small' />
                            </span>
                          </div>
                          <Button
                            onClick={() => {
                              navigate(`/movie/${movie.id}`)
                            }}
                            variant='outlined'
                            startIcon={<InfoIcon />}
                          >
                            More Info
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
          <div className='flex justify-center w-[1000px] mb-4 text-white mt-[15px] bg-[#29282E] rounded-xl text-[#ffff]'>
            <Pagination
              sx={{ textDecorationColor: 'white' }}
              className='pagi'
              page={parseInt(params.page)}
              showFirstButton
              showLastButton
              count={count}
              shape='rounded'
              size='large'
              onChange={handlechange}
            />
          </div>
        </div>
      </div>
      {/* pagination */}

      {/* pagination */}
    </div>
  )
}

export default Moviespage
