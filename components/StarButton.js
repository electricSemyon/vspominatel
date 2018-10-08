import React, { Component } from 'react'
import { FilledStarIcon, EmptyStarIcon } from './svg/StarIcon'
import Pressable from './Pressable'

const FilledStarButton = ({ onPress }) => (
  <Pressable onPress={ onPress }>
    <FilledStarIcon />
  </Pressable>
)

const EmptyStarButton = ({ onPress }) => (
  <Pressable onPress={ onPress }>
    <EmptyStarIcon />
  </Pressable>
)

export default class StarButton extends Component {
  state = {
    isStarred: this.props.isStarred
  }

  toggleStarred = isStarred => () => this.setState({ isStarred })

  render() {
    const { isStarred } = this.state

    return (
      isStarred
        ? <FilledStarButton onPress={ this.toggleStarred(false) } />
        : <EmptyStarButton onPress={ this.toggleStarred(true) } />
    )
  }
}