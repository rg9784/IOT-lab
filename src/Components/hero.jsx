import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col justify-center bg-[#E2DFD2]' id='my-div'>
      <div className=' py-2'>
      <h1 className='mx-auto text-center md:py-3 font-mono text-3xl md:text-5xl text-white font-bold'>IOT Lab</h1>
      </div>

      <div className='flex flex-col justify-center items-center pb-9'>
        <h1 className='py-4 pb-5 text-2xl md:text-4xl font-bold text-white'>Click Here to View Projects</h1>
        <button className='bg-white xl md:text-2xl p-2  font-bold font-mono rounded hover:opacity-70'>Research Projects</button>
      </div>

      <div className='flex flex-col md:flex-row justify-center text-white bg-gray-500'>

      <div className='md:pl-40 md:pr-5 px-6 pt-10 pb-5 md:max-w-[50%] border border-gray-600'>
        <h1 className='text-xl md:text-2xl font-bold flex justify-center'>Welcome</h1>
        <p className='font-semibold font-mono py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure quae, rerum, labore officia incidunt repellat hic porro alias ullam consectetur maxime vitae? Nostrum tenetur eos, iusto architecto laborum nobis dicta.</p>
        <p className='font-semibold font-mono py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus sapiente nobis, temporibus unde quod possimus nulla maxime voluptates, illum optio laborum eaque magnam soluta? Praesentium maiores impedit facilis autem quidem?</p>
      </div>

      <div className='md:pr-40 md:pl-8 pt-5 md:pt-10 md:pb-5 px-6 md:max-w-[50%] font-mono'>
            <h1 className='flex justify-center text-xl md:text-2xl font-bold'>Latest News</h1>
            <ul className='font-semibold'>
                <li className='py-4'><span className='underline'>Aug 2021:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, itaque quasi dolores, explicabo voluptatem quo voluptatum, aliquam fugit vero fugiat assumenda! Unde debitis dolore dicta accusantium? Aut quaerat consectetur quos.</li>
                <li className='py-4'><span className='underline'>June 2021:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non laborum nulla voluptas, saepe eveniet voluptatibus nihil, expedita asperiores quas maiores aliquid iste fugit consequuntur deleniti quos tempore repellendus! Qui, tempore!</li>
                <li className='py-4'><span className='underline'>April 2021:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam reiciendis, maiores quibusdam blanditiis deleniti, sit placeat numquam iusto ullam mollitia laudantium? Nesciunt hic maiores deleniti, autem in tempore doloribus corporis.</li>
            </ul>
      </div>

      </div>
      

    </div>
  )
}

export default Hero