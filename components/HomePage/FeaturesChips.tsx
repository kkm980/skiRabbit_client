import 'tailwindcss/tailwind.css'
interface IProps {
    text:string
}

const FeaturesChips: React.FC<IProps> =({text})=>{
    return(
        <div className='rounded rounded-lg bg-black text-white font-semibold text-[15px] flex justify-center items-center h-[50px] w-[80px] hover:rotate-12 hover:scale-110 hover:transition-all ease-in-out duration-900'>{text}</div>
    )
}

export default FeaturesChips;