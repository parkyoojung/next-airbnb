import Image from 'next/image'
import medium from '../public/medium'
import { useState, useEffect } from 'react'

function MediumCard() {
  let [space] = useState(medium)

  return (
    <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
      <MediumCardProp space={space[0]}/>
      <MediumCardProp space={space[1]}/>
      <MediumCardProp space={space[2]}/>
      <MediumCardProp space={space[3]}/>
      <MediumCardProp space={space[4]}/>
      <MediumCardProp space={space[5]}/>
    </div>
  )
}

function MediumCardProp(props){
  return(
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
      <div className='relative h-80 w-80'>
        <Image 
          // src={img} 
          src={props.space.img}
          layout="fill" 
          alt='mediumcard'
        />
      </div>  

      {/* <h3 className="text-2xl mt-3">title</h3> */}
      <h3 className="text-2xl mt-3">{props.space.title}</h3>
    </div>
  )
}

export default MediumCard
