"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
type Props = {}

const TypeWriter = (props: Props) => {
  return (
    <div>
      <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Diane",
              1000,
              "Aspiring Artist",
              1000,
              "Acrylic Lover",
              1000,
              "Passionate with Paint",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
    </div>
  )
}

export default TypeWriter