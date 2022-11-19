import Image from 'next/image'

function LargeCard() {
  return (
    <section className='relative py-16 cursor-pointer'>
      <div className="relative h-96 min-w-[300px]">
        <Image 
          src='https://ifh.cc/g/JCyqP3.jpg'
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
          alt='largecard'
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl w-64 mb-3 text-white">Explore more</h3>
        <p className='text-white'>Booking and reservations</p>
        {/* <p>{description}</p> */}
        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5 hover:scale-105 duration-300 ease-out">
          Get Inspired
          {/* {buttonText} */}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
