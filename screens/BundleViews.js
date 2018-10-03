import { Dimensions } from 'react-native'
import styled from 'styled-components/native'

import { statusBarHeight } from "./MainViews"

const { height } = Dimensions.get('window')

export const BundleScreenContainer = styled.View`
  padding: ${32 + statusBarHeight}px 32px 0 32px;
`

export const BundleName = styled.Text`
  font-family: 'gotham-regular';
  margin-top: -9px;
  margin-left: 1px;
  color: #d46767;
`

export const NotesList = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const NoteContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  max-height: 160px;
  background-color: #fff;
  margin-bottom: 6px;
`

export const StarContainer = styled.View`
  display: flex;
  padding: 2px;
  width: 10%; 
  flex-direction: row;
  justify-content: center;
`

export const NoteContent = styled.View`
  position: relative;
  width: 90%;
  padding-right: 10%;
  max-height: 160px;
  align-items: flex-start;
`

export const NoteText = styled.View`
  margin-bottom: 16px;
`

export const FaderWrapper = styled.View`
  position: absolute;
  height: 60px;
  width: 100%;
  bottom: 0;
`
