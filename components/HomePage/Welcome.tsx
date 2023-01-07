import { useState } from 'react';
import {SiEthereum} from 'react-icons/si'
import {TiInfoLarge} from 'react-icons/ti'
import {FeaturesConfig} from '../../config';
import {FeaturesChips} from '../index';
// import Loader from './Loader';
import 'tailwindcss/tailwind.css'

interface IProps {}

const Welcome: React.FC<IProps> =()=>{
    const [isLoading, setIsLoading] = useState(false);
    return(
        <div className="pt-[0px] w-full sm:h-auto flex justify-center bg-[#2B4F60]">
            
            <div className="mt-[40px] md:mt-[80px] w-[70%] lg:w-[95%] md:h-[auto] flex flex-row 
            md:flex-col md:items-center">

                <div className="flex flex-col w-[40%] md:w-[90%] md:mb-[70px] h-[60vh] md:h-[auto] text-white">
               
                    <div className="text-[40px] text-[#82C3EC] leading-none smallTab:text-[30px]">
                        Send Crypto across the world
                    </div>
                    <div className="text-[15px] text-[#80a2d9] mt-[20px] decoration-sky-600">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on SkiiRabbit
                    </div>
                    <div className='mt-4 w-[100%] px-[5px] md:w-[400px]'>
                        <div className='flex justify-center items-center sm:w-[60%] text-[#FBF1D3] mt-2 p-2 
                        rounded-full bg-gradient-to-tr from-black via-black to-fuchsia-600 rounded-full 
                        cursor-pointer hover:scale-105 ease-in duration-500 z-30'>Connect Wallet</div>
                    </div>
                    <div className='mt-[40px] rounded rounded-lg w-[100%] md:w-[400px] h-[auto] grid 
                    gap-5 xllg:gap-5 xllg:grid-cols-3 grid-cols-4 border-2 border-[#82C3EC] p-3 bg-[#4B5D67] 
                    sm:hidden'>
                     {FeaturesConfig.map((e:string, i:number)=>(
                        <FeaturesChips text={e} key={e}/>
                     ))}
                    </div>
                </div>

                <div className="flex flex-col w-[60%] md:w-[95%] sm:w-[50%] md:h-[auto] md:mb-4 text-white p-2 
                items-end md:items-center">
                    <div className='bg-gradient-to-br from-indigo-500 via-red-400 to-lime-500 w-[350px] sm:w-[100%] 
                    h-[180px] sm:h-[40vw] sm:min-h-[120px] rounded rounded-lg flex flex-col justify-between'>
                        <div className='flex justify-between'>
                            <div className='border-2 border-[white] flex justify-center items-center p-1 rounded 
                            rounded-full w-10 h-10 m-4'>
                                <SiEthereum className='color-[white] text-[15px]' />
                            </div>
                            <div className='border-2 border-[white] flex justify-center items-center rounded 
                            rounded-full w-6 h-6 m-2 mt-4'>
                                <TiInfoLarge className='text-[15px]' />
                            </div>
                        </div>
                        <div className='ml-4 sm:mb-4'>
                            <div className='text-white text-[15px]'>address</div>
                            <div className='text-white text-[20px] sm:text-[15px]'>Ethereum</div>
                        </div>

                    </div>
                   <div className='bg-blue-500 bg-clip-padding backdrop-filter bg-opacity-40 
                   flex flex-col rounded rounded-md w-[350px] sm:w-[100%] items-start justify-start mt-[20px]'>
                      
                      <input className='m-2 mb-3 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter 
                      bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Address to'
                        step='0.0001'
                        type='text'
                        name='addressTo'
                      />
                      <input className='m-2 mb-3 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter 
                      bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Amount (ETH)'
                        step='0.0001'
                        type='number'
                        name='amount'
                      />
                      <input className='m-2 mb-3 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter 
                      bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Keyword (GIF)'
                        step='0.0001'
                        type='text'
                        name='keyword'
                      />
                      <input className='m-2 mb-3 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter 
                      bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Message'
                        step='0.0001'
                        type='text'
                        name='message'
                      />
                      <div className='h-[1px] w-full bg-gray-400 my-2'/>
                      {/* {isLoading?<Loader/>
                      : */}
                      <button className='m-2 mb-3 text-[#FBF1D3] w-[95%] mt-2 p-2 bg-[#8e57ed] rounded-full cursor-pointer 
                      hover:scale-105 ease-in duration-500'>Send Now</button>
                    

                   </div>
               </div>
            </div>
           
            
         
        </div>
    )
}

export default Welcome;