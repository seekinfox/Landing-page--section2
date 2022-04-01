import React from 'react'
//import img1 from "../Assets/UI Design Illustration1.png"
import pattern from "../Assets/Neon1.png"
import pattern1 from "../Assets/Neon2.png";

export default function Article2(props) {

   const {id, img, span, title, p} = props.data
  return (
   <article key={id} className={`two two${id}`}>
      <div className='two__part1'>
         <img src={img} alt={title} />
      </div>
      {id === 0 || id===4 ? <div className='pattern0' ><img src={pattern} alt="" /></div>: ""}
      <div className='two__part2'>
         <span className={`span${id}`}>{span}</span>
         <h2>{title}</h2>
         <p>{p}</p>
         {(id===2)? <div className='pattern1' ><img src={pattern1} alt="" /></div>:""}
      </div>
   </article>
  )
}
