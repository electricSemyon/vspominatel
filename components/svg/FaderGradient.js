import React, { Component } from 'react'
import {
  Svg
} from 'expo'

export default () => (
  <Svg
    width="100%"
    height="60"
  >
    <Svg.LinearGradient id="fadeout" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse">
      <Svg.Stop stopColor="#fff" offset="0%" stopOpacity="0" />
      <Svg.Stop stopColor="#fff" offset="40%" stopOpacity="0" />
      <Svg.Stop stopColor="#fff" offset="100%" stopOpacity="1" />
    </Svg.LinearGradient>
    <Svg.Rect
      x="0"
      y="0"
      width="100%"
      height="60"
      fill="url(#fadeout)"
    />
  </Svg>
)