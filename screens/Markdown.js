import React from 'react'
import { StyleSheet } from 'react-native'
import Markdown from 'react-native-markdown-renderer'
import Markdownit from 'markdown-it'

const md = Markdownit({
  typographer: true,
  linkify: true,
});

const styles = StyleSheet.create({
  text: {
    margin: 0,
    fontFamily: 'gotham-regular',
    lineHeight: 22
  },
  paragraph: {
    margin: 0,
  },
  heading1: {
    fontSize: 24
  },
  heading2: {
    fontSize: 20
  },
  heading3: {
    fontSize: 18
  },
  heading4: {},
  heading5: {},
  heading6: {}
})

export default ({ children }) => <Markdown markdownit={md} style={styles}>{ children }</Markdown>