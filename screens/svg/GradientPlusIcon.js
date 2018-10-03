import React, { Component } from 'react'
import {
  Svg
} from 'expo'

export default () => (
  <Svg height="30" width="30">
    <Svg.Defs>
      <Svg.LinearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
        <Svg.Stop stopColor="#6459f0" offset="0%"/>
        <Svg.Stop stopColor="#d46767" offset="50%"/>
        <Svg.Stop stopColor="#ffd67e" offset="100%"/>
      </Svg.LinearGradient>
    </Svg.Defs>
    <Svg.Text fill="url(#rainbow)">
      <Svg.TSpan
        fontSize="50"
        x="0"
        y="30">
        +
      </Svg.TSpan>
    </Svg.Text>
  </Svg>
)