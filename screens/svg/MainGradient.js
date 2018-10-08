import React from 'react'
import {
  Svg
} from 'expo'

export default () => (
  <Svg.LinearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
    <Svg.Stop stopColor="#6459f0" offset="0%"/>
    <Svg.Stop stopColor="#d46767" offset="50%"/>
    <Svg.Stop stopColor="#ffd67e" offset="100%"/>
  </Svg.LinearGradient>
)