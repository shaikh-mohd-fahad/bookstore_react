import React from 'react'
import Cards from './Cards';
import list from "../../public/list.json";
function Course() {
  const filderData=list.filter((data)=>data.category==="free");
  return (
    <>
    {
        filderData.map((item)=>{
          return(
            <Cards  key={item.id} item={item}/>
          )
      })
    }
    </>
  )
}

export default Course
