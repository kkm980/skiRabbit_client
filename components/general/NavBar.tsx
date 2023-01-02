import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

import React, { useEffect, useState, useContext } from 'react'


import { useCreateTeamMutation } from '../../app/services/APISlice'
import Button from './Button'


interface IProps {}


const NavBar: React.FC<IProps> = () => {
  return (
    <div className='fixed bg-[black] w-full h-[80px] flex justify-between items-center'>
      <Button color="red" background="white" text="press" border='blue'/>
      <Button color="red" background="white" text="press"/>
      <Button color="red" background="white" text="press"/>


    </div>
  )
}

export default NavBar;