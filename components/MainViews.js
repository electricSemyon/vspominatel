import styled from 'styled-components/native'

export const statusBarHeight = 20;

export const MainScreenContainer = styled.View`
  padding: ${32 + statusBarHeight}px 32px;
`

export const MainText = styled.Text`
  font-size: 32px;
  font-family: 'gotham-black';
`

export const MainTextWrapper = styled.View`
  margin-bottom: 12px;
`

export const AddBundleButton = styled.View`
  align-self: center;
`
export const AddBundleButtonText = styled.Text`
  padding: 4px;
  color: #4a76a8;
`

export const AddBundleTextInputView = styled.TextInput`
  width: 100%;
  padding: 0;
  border-bottom-color: ${ ({ borderColor }) => borderColor };
  border-bottom-width: 1px;
`


export const BundlesList = styled.View`
  margin: 0 0 24px 0;
`

export const BundleItemWrapper = styled.View`
  align-self: flex-start;
  padding-left: 0;
`

export const BundleItemText = styled.Text`
  padding: 4px 4px 4px 0;
  font-family: 'gotham-regular';
  text-decoration-line: underline;
  text-decoration-style: dotted;
`