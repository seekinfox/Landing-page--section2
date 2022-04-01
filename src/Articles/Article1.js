import React from 'react'
import img1 from "../Assets/Glass.png"
import img2 from "../Assets/Ellipse7.png"
import img3 from "../Assets/Group66.png"

export default function Article1() {
  return (
    <article className='one'>
       <div>
         <img src={img1} alt="" />
         <div className='image__content'>
            <div className='part1'>
               <img src={img2} alt="" />
               <img src={img3} alt="" />
            </div>
            <div className="part2">
               <p>
                  <span>100+</span>
                  <span>Blockchain companies protected</span>
               </p>
               <p>
                  <span>200+</span>
                  <span>Issues discovered</span>
                  </p>
               <p>
                  <span>10,000+</span>
                  <span>Analyses available per month</span>
               </p>
            </div>
         </div>
       </div>
       <div>
         <h2>We provide The Best To Protect Your Users And Their Investments</h2>
         <p>Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. </p>
       </div>
    </article>
  )
}
