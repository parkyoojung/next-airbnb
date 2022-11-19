import Image from 'next/image';
import data from '../public/data'
import { useState, useEffect } from 'react'

function SmallCard() {
  let [item] = useState(data)

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <SmallCardProp item={item[0]} />
        <SmallCardProp item={item[1]} />
        <SmallCardProp item={item[2]} />
        <SmallCardProp item={item[3]} />
        <SmallCardProp item={item[4]} />
        <SmallCardProp item={item[5]} />
        <SmallCardProp item={item[6]} />
        <SmallCardProp item={item[7]} />
    </div>
  );
}


function SmallCardProp(props){
  return(
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          src={props.item.img}
          layout='fill'
          className='rounded-lg'
          alt='smallcard'
        />  
      </div>
      {/* right */}
      <div>
        <h2>{props.item.location}</h2>
        <h3 className='text-gray-500'>{props.item.distance}</h3>
      </div>
    </div>

  )
}

export default SmallCard;