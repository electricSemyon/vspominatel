import React from 'react'
import styled from 'styled-components/native'
import { TouchableHighlight, TouchableWithoutFeedback, Text, Image, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

import Plus from './GradientPlusIcon'

const statusBarHeight = 20;

const MainScreenContainer = styled.View`
  padding: ${32 + statusBarHeight}px 32px;
`

const MainText = styled.Text`
  font-size: 32px;
  font-family: 'gotham-black';
`

const MainTextWrapper = styled.Text`
  margin-bottom: 12px;
`



const AddBundleButton = styled.View`
  align-self: center;
`
const AddBundleButtonText = styled.Text`
  padding: 4px;
  color: #4a76a8;
`


const AddBundleTextInputView = styled.TextInput`
  width: 100%;
  padding: 0;
  border-bottom-color: ${ ({ borderColor }) => borderColor };
  border-bottom-width: 1px;
`

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


const BundlesList = styled.View`
  margin: 0 0 24px 0;
`

const BundleItemWrapper = styled.View`
  align-self: flex-start;
  padding-left: 0;
`

const BundleItemText = styled.Text`
  padding: 4px 4px 4px 0;
  font-family: 'gotham-regular';
  text-decoration-line: underline;
  text-decoration-style: dotted;
`

const BundleItem = ({ children }) => (
  <BundleItemWrapper>
    <Pressable onPress={() => {}} underlayColor={ 'rgba(1, 1, 1, .05)' }>
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

class Pressable extends React.Component {
  state = { isPressed: false }

  togglePressed = isPressed => _ => {
    this.view.transitionTo({ opacity: isPressed ? 0.4 : 1 }, 130)
    this.setState({ isPressed })
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

export default class MainScreen extends React.Component {
  render() {
    return (
      <MainScreenContainer>
        <MainTextWrapper>
          <MainText>Вспоминатель</MainText>
        </MainTextWrapper>

        <BundlesList>
          <BundleItem>Что почитать</BundleItem>
          <BundleItem>Идеи для приложений</BundleItem>
          <BundleItem>Тексты репов</BundleItem>
        </BundlesList>

        {/*<AddBundleTextInput underlineColorAndroid={'#4a76a8'}>kek</AddBundleTextInput>*/}
        <CreateBundle />
      </MainScreenContainer>
    );
  }
}