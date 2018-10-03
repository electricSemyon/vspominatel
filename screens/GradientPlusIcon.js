import React, { Component } from 'react'
import {
  Svg,
  Defs,
  Stop,
  LinearGradient,
  Text,
  TSpan,
} from 'react-native-svg'

export default () => (
  <Svg height="30" width="30">
    <Defs>
      <LinearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
        <Stop stopColor="#6459f0" offset="0%"/>
        <Stop stopColor="#d46767" offset="50%"/>
        <Stop stopColor="#ffd67e" offset="100%"/>
      </LinearGradient>
    </Defs>
    <Text fill="url(#rainbow)" fontFamily="gotham-black">
      <TSpan
        fontSize="50"
        x="0"
        y="30">
        +
      </TSpan>
    </Text>
  </Svg>
)