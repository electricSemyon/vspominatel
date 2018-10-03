import React, { Component } from 'react'
import {
  Svg
} from 'expo'

const starSize = 23

export const FilledStarIcon = () => (
  <Svg height={ starSize } width={ starSize } viewBox="0 0 30 30">
    <Svg.Defs>
      <Svg.LinearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
        <Svg.Stop stopColor="#6459f0" offset="0%"/>
        <Svg.Stop stopColor="#d46767" offset="50%"/>
        <Svg.Stop stopColor="#ffd67e" offset="100%"/>
      </Svg.LinearGradient>
    </Svg.Defs>
    <Svg.Path fill="url(#rainbow)" d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
  </Svg>
)

export const EmptyStarIcon = () => (
  <Svg height={ starSize } width={ starSize } viewBox="0 0 30 30">
    <Svg.Defs>
      <Svg.LinearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
        <Svg.Stop stopColor="#6459f0" offset="0%"/>
        <Svg.Stop stopColor="#d46767" offset="50%"/>
        <Svg.Stop stopColor="#ffd67e" offset="100%"/>
      </Svg.LinearGradient>
    </Svg.Defs>
    <Svg.Path fill="url(#rainbow)" d="M15.668 8.626l8.332 1.159-6.065 5.874 1.48 8.341-7.416-3.997-7.416 3.997 1.481-8.341-6.064-5.874 8.331-1.159 3.668-7.626 3.669 7.626zm-6.67.925l-6.818.948 4.963 4.807-1.212 6.825 6.068-3.271 6.069 3.271-1.212-6.826 4.964-4.806-6.819-.948-3.002-6.241-3.001 6.241z" />
  </Svg>
)
