import React from 'react'
import { TouchableHighlight, TouchableWithoutFeedback, Text, Image, View } from 'react-native'
import Pressable from './Pressable'

import Plus from './svg/GradientPlusIcon'
import {
  MainScreenContainer,
  AddBundleTextInputView,
  AddBundleButton,
  MainText,
  MainTextWrapper,
  BundleItemText,
  BundleItemWrapper,
  BundlesList
} from './MainViews'


class AddBundleTextInput extends React.Component {
  state = { isFocused: false }

  onFocus = () => this.setState({ isFocused: true })
  onBlur = () => this.setState({ isFocused: false })

  render() {
    const { isFocused } = this.state
    const borderColor = ({ true: '#d46767', false: '#ccc' })[isFocused]
    const { onSubmitEditing, ...props } = this.props

    return (
      <AddBundleTextInputView
        borderColor={borderColor}
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        onSubmitEditing={onSubmitEditing}
        underlineColorAndroid={'transparent'}
        { ...props }
      />
    )
  }
}

const BundleItem = ({ onPress, children }) => (
  <BundleItemWrapper>
    <Pressable onPress={onPress} underlayColor={ 'rgba(1, 1, 1, .05)' }>
      <BundleItemText>{ children }</BundleItemText>
    </Pressable>
  </BundleItemWrapper>
)

class CreateBundle extends React.Component {
  state = { isToggled: false }

  toggleState = isToggled => _ => this.setState({ isToggled })

  render() {
    const { isToggled } = this.state

    return (
      <View>
        { isToggled && <AddBundleTextInput autoFocus onSubmitEditing={this.toggleState(false)}  /> }
        { !isToggled && (
          <AddBundleButton>
            <Pressable onPress={() => setTimeout(this.toggleState(true), 130)}>
              <Plus />
            </Pressable>
          </AddBundleButton>
        ) }
      </View>
    )
  }
}

export default class MainScreen extends React.Component {
  render() {
    const navigate = this.props.router
      ? name => _ => this.props.router.push.Bundle({ name })
      : _ => {}

    return (
      <MainScreenContainer>
        <MainTextWrapper>
          <MainText>Вспоминатель</MainText>
        </MainTextWrapper>

        <BundlesList>
          <BundleItem onPress={navigate('Что почитать')}>Что почитать</BundleItem>
          <BundleItem onPress={navigate('Идеи для приложений')}>Идеи для приложений</BundleItem>
          <BundleItem onPress={navigate('Тексты репов')}>Тексты репов</BundleItem>
        </BundlesList>

        <CreateBundle />
      </MainScreenContainer>
    );
  }
}