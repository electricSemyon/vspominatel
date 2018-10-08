import React, { Component } from 'react'
import { TouchableWithoutFeedback } from 'react-native'
import * as Animatable from 'react-native-animatable'

export default class Pressable extends React.Component {
  togglePressed = isPressed => _ => {
    this.view.transitionTo({ opacity: isPressed ? 0.4 : 1 }, 130)
  }

  handleTextRef = ref => this.view = ref

  render() {
    const { children, ...props } = this.props

    return (
      <TouchableWithoutFeedback
        onPressIn={this.togglePressed(true)}
        onPressOut={this.togglePressed(false)}
        { ...props }
      >
        <Animatable.View style={{ padding: 0 }} ref={this.handleTextRef}>{ children }</Animatable.View>
      </TouchableWithoutFeedback>
    );
  }
}