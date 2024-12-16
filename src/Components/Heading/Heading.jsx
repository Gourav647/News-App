import React from 'react'
import './Heading.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Heading = (props) => {
  const heading = props.heading;
  const strings = heading.split("");

  
  useGSAP(() => {
    gsap.from(".heading h2 span",{
      y: -100,
      duration: .8,
      ease: "power1",
      stagger: .08,
      opacity: 0,
    })
    gsap.to(".heading h2 span:first-child",{
      perspective: 1000,
      transform: "rotateY(180deg)",
      delay: .8,
      duration: 1,
    })
  })
  return (
    <div className=' heading'>
      <h2>
        {strings.map((string) => {
          return (
            string === " " ?
            <span>&nbsp;</span>
            :
            <span>{string}</span>
          )
        })}
      </h2>
    </div>
  )
}

export default Heading
