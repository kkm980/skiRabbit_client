import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Spin as Hamburger } from 'hamburger-react'
import React, { useEffect, useState, useContext } from 'react'
import {NavBarConfig} from "../../config";

import { useCreateTeamMutation } from '../../app/services/APISlice'
import Button from './Button'
import 'tailwindcss/tailwind.css'

interface IProps {}


const NavBar: React.FC<IProps> = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="w-full flex justify-between items-center md:items-start
      bg-[black]
      transition-1000
       min-h-[80px] fixed top-0 z-100">

      <Link href="/" className='ml-[10px]'>
        <Image
          // loader={myLoader}
          src="/assets/logo_skiRabbit.gif"
          alt="logo Ski Rabbit"
          width={80}
          height={80}
        />
      </Link>

      <div className="flex-initial w-[full] md:w-[auto] mx-[25px] md:mr-[0px] ml-[50px] justify-between md:justify-start md:flex-col text-xl font-semibold relative font-sans">
        <div className='flex justify-between md:hidden'>
          {NavBarConfig.map((e: any, i: number) => (
            <Link key={i} href={e.link}><div className="text-[white] bg-[#607682] mr-2 rounded rounded-[16px] py-[4px] px-[18px] border-2 border-transparent hover:border-[#607682] hover:bg-[black] hover:text-[#607682] cursor-pointer">{e.name}</div></Link>
          ))}
          <Link href="/login"><div className="text-[white] rounded rounded-[16px] mr-2 py-[4px] px-[18px] border-2 border-transparent bg-[#533483] hover:bg-[#0F3460] cursor-pointer">Login</div></Link>
        </div>
        <div className={`hidden md:flex md:flex-col md:items-end ${isOpen && 'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'} ${isOpen && 'w-[200px]'} ${isOpen && 'min-h-[100vh]'} ${isOpen && 'justify-between'} pr-[20px] absolute right-[-30px] top-[-0px]`}>
          <div className={`absolute z-80 top-[15px] left-[-60px] ${isOpen && "left-[0px]"}`}>
            <Hamburger toggled={isOpen} toggle={setOpen} color='red' size={20} rounded />
          </div>
            <div className='absolute top-[120px]'>
              {isOpen && NavBarConfig.map((e: any, i: any) => (
            <Link key={i} href={e.link}><div className="text-[#0F3460] rounded rounded-[16px] py-[4px] px-[20px] my-8 mx-8 border-2 border-[#0F3460] hover:border-[white] cursor-pointer">{e.name}</div></Link>
          ))}
            </div>
          
          {isOpen && <Link href="/login"><div className="text-[white] rounded rounded-[16px] py-[4px] px-[20px] bg-[#0F3460] hover:bg-[#7FBCD2] mb-2 mt-20 mx-8 cursor-pointer">Login</div></Link>}
        </div>
      </div>
    </div>
  )

}

export default NavBar;