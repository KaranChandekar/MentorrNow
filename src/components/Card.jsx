import health from '../assets/images/health.png'
import {data} from '../utils/data'

console.log(data);
export const Card = () => {
    return (
        <div className='flex justify-center'>
        <div className="w-[325px]  bg-[#F3F7F5] rounded-[30px] flex flex-col items-center gap-5 pb-10">

            <img src={health} className='bg-white p-4 rounded-full mt-5'/>
            <h1 className='text-2xl font-poppins'>Health</h1>
            <p className='w-[80%] text-[13px] '>We believe in the power of holistic growth and development. From personal and professional growth, to physical and emotional well-being, we believe that these elements are crucial to living a fulfilling life.</p>
            <p className='font-poppins cursor-pointer text-[13px] text-[#E27066]'>Read More </p>
        </div>
        </div>
    )
}


export const FirstCard=()=>{
    return(
        <>
   <section className="text-gray-400 m-8 rounded-3xl  bg-[#F3F7F5] body-font">
  <div className="container mx-auto flex px-5 py-24 lg:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full  w-5/6  mb-10">
      <img className="object-cover object-center rounded-lg sm:ml-20" alt="hero" src="https://i.ibb.co/ssvmKXG/image-1.png"/>
      </div>
    <div className="lg:flex-grow lg:w-1/2 lg:pl-  flex flex-col lg:items-start  items-center text-center ">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-black ">{data?.content?.home[0]?.cardhead}</h1>
      <p className="mb-8 leading-relaxed lg:text-left">{data?.content?.home[0]?.card}</p>
    </div>
  </div>
</section>

        </>
    )
} 




