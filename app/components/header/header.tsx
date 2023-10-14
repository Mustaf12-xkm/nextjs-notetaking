"use client"

import React from 'react'

import { handelModal } from '../features/modalslice';
import {useDispatch} from "react-redux"
function header() {
  const dispatch = useDispatch()
  const handleClickOpen = () => {
    dispatch(handelModal())
   };
  return (
    <div className='flex justify-between items-center  bg-slate-900 p-2' >
        <div className=' text-2xl capitalize  text-gray-50'>notes</div>
        <div className='flex justify-between items-center  bg-slate-900 p-2'>
          
            <div onClick={handleClickOpen} className='bg-[#16a34a] text-gray-50 p-2  rounded'> Add New Note</div>
        </div>
    </div>
  )
}

export default header