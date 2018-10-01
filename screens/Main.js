import React from 'react'
import styled from 'styled-components/native'

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

const BundleItem = styled.View`
  padding: 4px;
  padding-left: 0;
`

const BundleItemText = styled.Text`
  font-family: 'gotham-regular';
  text-decoration-line: underline;
  text-decoration-style: dotted;
`

export default class MainScreen extends React.Component {
  render() {
    return (
      <MainScreenContainer>
        <MainTextWrapper>
          <MainText>Вспоминатель</MainText>
        </MainTextWrapper>

        <BundleItem>
          <BundleItemText>Что почитать</BundleItemText>
        </BundleItem>
        <BundleItem>
          <BundleItemText>Идеи для приложений</BundleItemText>
        </BundleItem>
        <BundleItem>
          <BundleItemText>Тексты репов</BundleItemText>
        </BundleItem>
      </MainScreenContainer>
    )
  }
}