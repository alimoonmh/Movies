/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import StarIcon from '@mui/icons-material/Star'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'
import DehazeIcon from '@mui/icons-material/Dehaze'
import SlideshowIcon from '@mui/icons-material/Slideshow'
import EditNoteIcon from '@mui/icons-material/EditNote'
import oscar from '../../src/images/oscar.svg'
function Moviepage () {
  const location = useLocation()
  const [load, setLoad] = useState(true)
  const params = useParams()
  const [Moviedata, setMoviedata] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:8585/movie?id=${params.id}`).then(res => {
      setMoviedata(res.data.data)
      setLoad(false)
    })
  }, [location])
  return (
    <div>
      {load === true ? (
        <div className='flex mt-[120px]'>
          <Skeleton variant='rounded' width={1382} height={580} />
        </div>
      ) : (
        <div className='mainmoviesdiv w-[90vw] h-[580px] bg-[#29282E] flex items-center rounded-xl mt-60 mb-32  justify-between'>
          <div className='w-[300px] ml-[50px]'>
            <img className='rounded' src={Moviedata.poster} />
          </div>
          <div className=' flex flex-col items-start justify-start h-[500px] mt-[65px] w-[1000px]'>
            <div>
              <h6 className='h6'>
                <span className='span'>{Moviedata.id}.</span>
                <span className='span'>{Moviedata.title}</span>
              </h6>
            </div>
            <div className='flex items-center h-[50px] ml-[2px]'>
              <div>
                <p className=''>{Moviedata.genres + ''}</p>
              </div>
              <div>
                <hr className='colline' />
              </div>
              <div>
                <p>{Moviedata.year}</p>
              </div>
              <div>
                <hr className='colline' />
              </div>
              <div>
                <p>{Moviedata.rated}</p>
              </div>
              <div>
                <hr className='colline' />
              </div>
              <div>
                <p>{Moviedata.country}</p>
              </div>
              <div>
                <hr className='colline' />
              </div>
              <div>
                <p>{Moviedata.runtime}</p>
              </div>
            </div>
            <hr className='line3' />
            <div className='mt-[20px]'>
              {Moviedata.imdb_rating}/10{' '}
              <span className='ml-1'>From {Moviedata.imdb_votes} Votes</span>{' '}
            </div>
            <div className='mt-[20px]'>
              <p>
                Actors : <span> {Moviedata.actors}</span>
              </p>
            </div>
            <div className='mt-[20px]'>
              <p>
                Director : <span> {Moviedata.director}</span>
              </p>
            </div>
            <div className='mt-[20px] flex gap-1 items-center'>
              <SlideshowIcon />
              <p className='spangarne w-[700px] h-[auto] bg-[#242226] p-2'>
                {Moviedata.plot}
              </p>
            </div>
            <div className='mt-[20px] flex gap-1 items-center'>
              {' '}
              <img className='w-[50px] ml-[-13px]' color='white' src={oscar} />
              <p className='spangarne w-[700px] h-[auto] bg-[#242226] p-2 ml-[-13px]'>
                {Moviedata.awards}
              </p>
            </div>
            <div className='mt-[20px] flex gap-1 items-center'>
              <EditNoteIcon />
              <p className='spangarne w-[700px] h-[auto] bg-[#242226] p-2'>
                {Moviedata.writer}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Moviepage

// {Moviedata.genres + ""}  <hr className='colline'/>
