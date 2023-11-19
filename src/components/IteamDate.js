import React from 'react'

export const IteamDate = (props) => {
 
  const day = props.name;
  const month = props.age;
  const year = props.adress;
   
  

  return (
      <div className='flex flex-colum'>
      <p>{day}</p>
      <p>{month}</p>
      <p>{ year}</p>
    </div>
  )
}
