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
        <div className="pt-[0px] w-full flex justify-center bg-[#2B4F60]">
            
            <div className="mt-[40px] smallTab:mt-[80px] w-[70%] smallLaptop:w-[70%] smallTab:w-[90%] flex">
                <div className="flex flex-col w-[40%] h-[60vh] text-white">
               
                    <div className="text-[40px] leading-none smallTab:text-[30px]">
                        Send Crypto across the world
                    </div>
                    <div className="text-[15px] mt-[20px] decoration-sky-600">
                        Explore the crypto world. Buy and sell cryptocurrencies easily on SkiiRabbit
                    </div>
                    <div className='mt-4'>
                        <button className='text-white w-full mt-2 p-2 bg-gradient-to-tr from-black via-black to-fuchsia-600 rounded-full cursor-pointer'>Connect Wallet</button>
                    </div>
                    <div className='mt-[40px] rounded rounded-lg w-[100%] h-auto grid gap-5 grid-cols-4 border border-[text-sky-400] p-2 bg-[#4B5D67]'>
                     {FeaturesConfig.map((e:string, i:number)=>(
                        <FeaturesChips text={e}/>
                     ))}
                    </div>
                </div>

               <div className="flex flex-col w-[60%] text-white p-2 items-end">
                   <div className='bg-gradient-to-br from-indigo-500 via-red-400 to-lime-500 w-[60%] smallLaptop:w-[80%] h-[180px] rounded rounded-lg flex flex-col justify-between'>
                    <div className='flex justify-between'>
                       <div className='border-2 border-[white] flex justify-center items-center p-1 rounded rounded-full w-10 h-10 m-4'>
                          <SiEthereum className='color-[white] text-[15px]'/>
                       </div>
                       <div className='border-2 border-[white] flex justify-center items-center rounded rounded-full w-6 h-6 m-2 mt-4'>
                        <TiInfoLarge className='text-[15px]'/>
                       </div>
                    </div>
                    <div className='ml-4'>
                        <div className='text-white text-[15px]'>address</div>
                        <div className='text-white text-[20px]'>Ethereum</div>
                    </div>
                    
                   </div>
                   <div className='bg-blue-500 bg-clip-padding backdrop-filter bg-opacity-40 flex flex-col rounded rounded-md w-[60%] smallLaptop:w-[80%] items-start justify-start mt-[20px]'>
                      
                      <input className='m-2 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Address to'
                        step='0.0001'
                        type='text'
                        name='addressTo'
                      />
                      <input className='m-2 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Amount (ETH)'
                        step='0.0001'
                        type='number'
                        name='amount'
                      />
                      <input className='m-2 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter  bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Keyword (GIF)'
                        step='0.0001'
                        type='text'
                        name='keyword'
                      />
                      <input className='m-2 w-[95%] h-[30px] bg-gray-800 bg-clip-padding backdrop-filter  bg-opacity-40 outline-none rounded rounded-sm pl-[10px]'
                        placeholder='Message'
                        step='0.0001'
                        type='text'
                        name='message'
                      />
                      <div className='h-[1px] w-full bg-gray-400 my-2'/>
                      {/* {isLoading?<Loader/>
                      : */}
                      <button className='m-2 text-white w-[95%] mt-2 p-2 bg-[#8e57ed] rounded-full cursor-pointer'>Send Now</button>
                    

                   </div>
               </div>
            </div>
           
            
         
        </div>
    )
}

export default Welcome;