import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { Spin as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { NavBarConfig } from "../../config";

import 'tailwindcss/tailwind.css'

interface IProps {
  isOpen: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}


const NavBar: React.FC<IProps> = ({ isOpen, setOpen }) => {

  return (
    <div className="w-full flex justify-center items-center
      bg-[black]
      transition-1000
       min-h-[80px] fixed top-0 z-100"
      onClick={(e: any) => { e.stopPropagation() }}
    >
      <div className='w-[70%] flex justify-between items-center lg:w-[100%]'>

        <Link href="/" className='lg:ml-[10px]'>
          <Image
            // loader={myLoader}
            src="/assets/logo_skiRabbit.gif"
            alt="logo Ski Rabbit"
            width={80}
            height={80}
          />
        </Link>

        <div className="flex-initial w-[full] md:w-[auto] md:mr-[0px] ml-[50px] justify-between md:justify-start md:flex-col text-xl relative font-sans z-99">
          <div className='flex justify-between md:hidden'>
            {NavBarConfig.map((e: any, i: number) => (
              <Link key={i} href={e.link}><div className="text-[white] bg-[#607682] mr-2 rounded rounded-[28px] py-[4px] px-[18px] border-2 border-transparent hover:border-[#607682] hover:bg-[black] hover:text-[#607682] cursor-pointer hover:scale-105 ease-in duration-500 ">{e.name}</div></Link>
            ))}
            <Link href="/login"><div className="text-[white] rounded rounded-[28px] mr-2 lg:mr-4 py-[4px] px-[18px] border-2 border-transparent bg-[#533483] hover:bg-[#0F3460] cursor-pointer">Login</div></Link>
          </div>
          <div className={`hidden md:flex md:flex-col md:items-end ${isOpen && 'bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40'} ${isOpen && 'w-[200px]'} ${isOpen && 'min-h-[100vh]'} ${isOpen && 'justify-between'} pr-[20px] absolute right-[-30px] top-[-40px] z-[99]`}>
            <div className={`absolute z-80 top-[15px] left-[-60px] ${isOpen && "left-[0px]"}`}>
              <Hamburger toggled={isOpen} toggle={setOpen} color='red' size={20} rounded />
            </div>
            <div className='absolute top-[120px]'>
              {isOpen && NavBarConfig.map((e: any, i: any) => (
                <Link key={i} href={e.link}>
                  <div className="text-[#0F3460] rounded rounded-[16px] py-[4px] px-[20px] my-8 mx-8 border-2 border-[#0F3460] hover:border-[white] cursor-pointer"
                    onClick={
                      () => { setOpen(false) }
                    }
                  >
                    {e.name}
                  </div>
                </Link>
              ))}
            </div>

            {isOpen &&
              <Link href="/login">
                <div className="text-[white] rounded rounded-[16px] py-[4px] px-[20px] bg-[#0F3460] hover:bg-[#7FBCD2] mb-2 mt-20 sm:mx-8 cursor-pointer"
                  onClick={
                    () => { setOpen(false) }
                  }
                >
                  Login
                </div>
              </Link>}
          </div>
        </div>
      </div>



    </div>
  )

}

export default NavBar;