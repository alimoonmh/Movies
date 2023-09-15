/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import * as React from 'react'
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams
} from 'react-router-dom'
import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css'
//core
import 'primereact/resources/primereact.min.css'
import Button from '@mui/material/Button'
import RoofingSharpIcon from '@mui/icons-material/RoofingSharp'
import LiveTvIcon from '@mui/icons-material/LiveTv'
import TheatersSharpIcon from '@mui/icons-material/TheatersSharp'
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic'

import InputBase from '@mui/material/InputBase'

import movies from './Pages/Moviespage'
import notfounf from './Notfound'
import movie from './Pages/Moviepage'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import 'swiper/css/effect-coverflow'
import 'swiper/css/grid'

import { styled, alpha } from '@mui/material/styles'

import GitHubIcon from '@mui/icons-material/GitHub'
import Autocomplete from '@mui/material/Autocomplete'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import away from './images/away.jpg'
import painist from './images/pianist.jpg'
import shining from './images/shining.jpg'
import joda from './images/jodaee.jpg'
import third from './images/third.jpg'
import inter from './images/inter.jpg'

import TextField from '@mui/material/TextField'

import 'swiper/css'
import 'swiper/css/grid'

import { Grid } from 'swiper/modules'

function App () {
  const navigate = useNavigate()
  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  }))
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }))
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: '12ch',
        '&:focus': {
          width: '20ch'
        }
      }
    }
  }))
  const top100Films = [{ label: 'The Shawshank Redemption', year: 1994 }]
  const [searchoption, setSearchoption] = useState([])
  const [autoinput, setAoutoinput] = useState('')

  useEffect(() => {
    if (autoinput == '') return

    axios.get(`http://localhost:8585/search?name=${autoinput}`).then(res => {
      let newsearchopton = []
      for (let i = 0; i < res.data.data.length; i++) {
        const film = res.data.data[i]
        newsearchopton.push({ label: film.title, movieID: film.id })
        setSearchoption(newsearchopton)
      }
    })
  }, [autoinput])
  const location = useLocation

  return (
    <div>
      {/* //navbar */}
      <div className='flex flex-row items-center w-screen h-24  gap-[30%] justify-evenly bg-[#0b0610] backdrop-blur fixed visible z-50'>
        <div>
          <Autocomplete
            freeSolo
            onChange={(e, val) => {
              navigate(`/movie/${val.movieID}`)
            }}
            onInputChange={(e, newinputval) => {
              setAoutoinput(newinputval)
            }}
            inputValue={autoinput}
            options={searchoption}
            sx={{
              padding: '3px',
              width: 200,
              color: 'white',
              backgroundColor: 'white',
              borderRadius: '5px'
            }}
            renderInput={params => (
              <TextField
                {...params}
                variant='standard'
                placeholder='Search...'
              />
            )}
          />
        </div>
        <div className='flex flex-row gap-[6%] ml-[-10px]'>
          <div>
            <Button variant='outline' size='large' endIcon={<HeadsetMicIcon />}>
              contact
            </Button>
          </div>
          <div>
            <Button variant='outline' size='large' endIcon={<LiveTvIcon />}>
              series
            </Button>
          </div>
          <div>
            <Button
              variant='outline'
              size='large'
              endIcon={<TheatersSharpIcon />}
            >
              Movies
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                navigate(`/`)
              }}
              variant='outline'
              size='large'
              endIcon={<RoofingSharpIcon />}
            >
              Home
            </Button>
          </div>
          <div className=''>
            <a href='https://github.com/alimoonmh'>
              <GitHubIcon fontSize='large' />
            </a>
          </div>
        </div>
      </div>
      {/* navbar */}
      <div className='flex justify-center items-center bg-[#19181A]  w-screen h-[1000px]'>
        <div className='w-[1300px] h-[750px]'>
          <Swiper
            slidesPerView={3}
            grid={{
              fill: 'row',
              rows: 2
            }}
            spaceBetween={20}
            modules={[Grid]}
            className='mySwiper'
          >
            <SwiperSlide className='w-[300px] h-[500px] object-cover'>
              <div className='relative overflow-hidden w-[400px] h-[300px] object-cover'>
                <img
                  onClick={() => {
                    navigate(`/movie/${250}`)
                  }}
                  className='images object-cover w-[400px] h-[300px]'
                  src={inter}
                />
                <div className=' h-[180px] bg-[#29282E] absolute w-full bottom-[-140px] rounded-xl hover:bottom-[-12px] hover:opacity-90 transition-all duration-700 cursor-pointer opacity-50'>
                  <div className='flex items-center justify-center'>
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className='flex flex-col justify-start p-3'>
                    <div>
                      <p className='font-bold text-[#ffffff]'>INTERSTELLAR</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>
                        2014 . Christopher Nolan
                      </p>
                    </div>
                    <div>
                      <p className='font-light text-[#ffffff]'>2h 49m</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>8.6/10</p>
                    </div>
                    <div className='flex w-[390px] gap-1'>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Adventure
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Drama
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Sci-Fi
                      </div>
                      <div
                        className='pl-1 rounded-4xl bg-[#ffffff] text-sm text-[#797575] w-[70px] ml-[130px]'
                        onClick={() => {
                          navigate(`/movie/${32}`)
                        }}
                      >
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[500px] object-cover'>
              <div className='relative overflow-hidden w-[400px] h-[300px] object-cover'>
                <img
                  onClick={() => {
                    navigate(`/movie/${250}`)
                  }}
                  className='images object-cover w-[400px] h-[300px]'
                  src={away}
                />
                <div className=' h-[180px] bg-[#29282E] absolute w-full bottom-[-140px] rounded-xl hover:bottom-[-12px] hover:opacity-90 transition-all duration-700 cursor-pointer opacity-50'>
                  <div className='flex items-center justify-center'>
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className='flex flex-col justify-start p-3'>
                    <div>
                      <p className='font-bold text-[#ffffff]'>SPIRITED AWAY</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>
                        2001 . Hayao Miyazaki
                      </p>
                    </div>
                    <div>
                      <p className='font-light text-[#ffffff]'>2h 5m</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>8.6/10</p>
                    </div>
                    <div className='flex w-[390px] gap-1'>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Animation
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Adventure
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Fmily
                      </div>
                      <div
                        className='pl-1 rounded-4xl bg-[#ffffff] text-sm text-[#797575] w-[70px] ml-[110px]'
                        onClick={() => {
                          navigate(`/movie/${28}`)
                        }}
                      >
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[500px] object-cover'>
              <div className='relative overflow-hidden w-[400px] h-[300px] object-cover'>
                <img
                  onClick={() => {
                    navigate(`/movie/${250}`)
                  }}
                  className='images object-cover w-[400px] h-[300px]'
                  src={painist}
                />
                <div className=' h-[180px] bg-[#29282E] absolute w-full bottom-[-140px] rounded-xl hover:bottom-[-12px] hover:opacity-90 transition-all duration-700 cursor-pointer opacity-50'>
                  <div className='flex items-center justify-center'>
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className='flex flex-col justify-start p-3'>
                    <div>
                      <p className='font-bold text-[#ffffff]'>THE PIANIST</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>
                        2002 . Roman Polanski
                      </p>
                    </div>
                    <div>
                      <p className='font-light text-[#ffffff]'>2h 30m</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>8.5/10</p>
                    </div>
                    <div className='flex w-[390px] gap-1'>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Biography
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Drama
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        History
                      </div>
                      <div
                        className='pl-1 rounded-4xl bg-[#ffffff] text-sm text-[#797575] w-[70px] ml-[130px]'
                        onClick={() => {
                          navigate(`/movie/${42}`)
                        }}
                      >
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[500px] object-cover'>
              <div className='relative overflow-hidden w-[400px] h-[300px] object-cover'>
                <img
                  onClick={() => {
                    navigate(`/movie/${250}`)
                  }}
                  className='images object-cover w-[400px] h-[300px]'
                  src={shining}
                />
                <div className=' h-[180px] bg-[#29282E] absolute w-full bottom-[-140px] rounded-xl hover:bottom-[-12px] hover:opacity-90 transition-all duration-700 cursor-pointer opacity-50'>
                  <div className='flex items-center justify-center'>
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className='flex flex-col justify-start p-3'>
                    <div>
                      <p className='font-bold text-[#ffffff]'>THE SHINING</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>
                        1980 . Stanley Kubrick
                      </p>
                    </div>
                    <div>
                      <p className='font-light text-[#ffffff]'>2h 26M</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>8.4/10</p>
                    </div>
                    <div className='flex w-[390px] gap-1'>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Drama
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Horro
                      </div>
                      <div
                        className='pl-1 rounded-4xl bg-[#ffffff] text-sm text-[#797575] w-[70px] ml-[200px]'
                        onClick={() => {
                          navigate(`/movie/${60}`)
                        }}
                      >
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[500px] object-cover'>
              <div className='relative overflow-hidden w-[400px] h-[300px] object-cover'>
                <img
                  onClick={() => {
                    navigate(`/movie/${250}`)
                  }}
                  className='images object-cover w-[400px] h-[300px]'
                  src={joda}
                />
                <div className=' h-[180px] bg-[#29282E] absolute w-full bottom-[-140px] rounded-xl hover:bottom-[-12px] hover:opacity-90 transition-all duration-700 cursor-pointer opacity-50'>
                  <div className='flex items-center justify-center'>
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className='flex flex-col justify-start p-3'>
                    <div>
                      <p className='font-bold text-[#ffffff]'>A SEPARATION</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>
                        2011 . Asghar Farhadi
                      </p>
                    </div>
                    <div>
                      <p className='font-light text-[#ffffff]'>2h 3m</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>8.4/10</p>
                    </div>
                    <div className='flex w-[390px] gap-1'>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Mystery
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Drama
                      </div>
                      <div
                        className='pl-1 rounded-4xl bg-[#ffffff] text-sm text-[#797575] w-[70px] ml-[190px]'
                        onClick={() => {
                          navigate(`/movie/${109}`)
                        }}
                      >
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className='w-[300px] h-[500px] object-cover'>
              <div className='relative overflow-hidden w-[400px] h-[300px] object-cover'>
                <img
                  onClick={() => {
                    navigate(`/movie/${250}`)
                  }}
                  className='images object-cover w-[400px] h-[300px]'
                  src={third}
                />
                <div className=' h-[180px] bg-[#29282E] absolute w-full bottom-[-140px] rounded-xl hover:bottom-[-12px] hover:opacity-90 transition-all duration-700 cursor-pointer opacity-50'>
                  <div className='flex items-center justify-center'>
                    <KeyboardArrowUpIcon />
                  </div>
                  <div className='flex flex-col justify-start p-3'>
                    <div>
                      <p className='font-bold text-[#ffffff]'>THE THIRD MAN</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>
                        1949 . Carol Reed
                      </p>
                    </div>
                    <div>
                      <p className='font-light text-[#ffffff]'>1h 33m</p>
                    </div>
                    <div>
                      <p className='font-light text-[#797575]'>8.3/10</p>
                    </div>
                    <div className='flex w-[390px] gap-1'>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Film-Noir
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Mystery
                      </div>
                      <div className='rounded-4xl bg-[#797575] text-sm text-[#ded8d8] pl-1 pr-1'>
                        Thriller
                      </div>
                      <div
                        className='pl-1 rounded-4xl bg-[#ffffff] text-sm text-[#797575] w-[70px] ml-[130px]'
                        onClick={() => {
                          navigate(`/movie/${121}`)
                        }}
                      >
                        More Info
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* image gallery slider */}
      <div className='mt-[150px]'>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          coverflowEffect={{
            rotate: 5,
            stretch: 0,
            depth: 100,
            modifier: 3,
            slideShadows: true
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          modules={[Autoplay, EffectCoverflow]}
          spaceBetween={10}
          onSlideChange={() => console.log('slide change')}
          onSwiper={swiper => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${1}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0111161_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${2}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0068646_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${3}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0071562_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${4}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0468569_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${5}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0050083_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${6}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0108052_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${7}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0110912_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${8}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0167260_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${9}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0060196_poster.jpg'}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              onClick={() => {
                navigate(`/movie/${10}`)
              }}
              className='slideimg'
              src={'http://moviesapi.ir/images/tt0137523_poster.jpg'}
            />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* image gallery slider */}
      {/* Routing */}
      <div className='flex flex-col items-center justify-center'>
        <Routes>
          <Route path='/' Component={movies} />
          <Route path='/movies/:page' Component={movies} />
          <Route path='/movie/:id' Component={movie} />
          <Route path='*' Component={notfounf} />
        </Routes>
      </div>
      {/* Routing */}
      <hr className='footerhr w-screen mt-[50px]' />
      <div className='flex'>
        <div className='mt-[10px] ml-[750px] mb-[50px]'>
          <a href='https://github.com/alimoonmh'>
            <GitHubIcon fontSize='large' />
          </a>
        </div>
      </div>
    </div>
  )
}

export default App
