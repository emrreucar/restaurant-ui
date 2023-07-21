"use client";
import Countdown from 'react-countdown';
import React from 'react'

const endingDate = new Date("2023-09-13");


const CountDown = () => {
  return (
    <Countdown date={endingDate} className='font-bold text-5xl text-yellow-300' ></Countdown>
  )
}

export default CountDown