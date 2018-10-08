import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { MainTextWrapper, MainText } from '../MainViews'
import { BundleName, NotesList, NoteContainer, FaderWrapper, BundleScreenContainer, StarContainer, NoteContent, NoteText, Line } from '../BundleViews'
import StarButton from '../StarButton'

import Fader from '../svg/FaderGradient'

const notes = [
  {
    isStarred: true,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Aut consectetur consequatur cum, cupiditate distinctio, doloremque \
    dolores error et fuga hic illo quibusdam sapiente vero!\
    Amet delectus dicta fugit hic itaque iusto perferendis\
    quam sit tempora temporibus? Consectetur, ducimus, sint.`
  },
  {
    isStarred: true,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Aut consectetur consequatur cum, cupiditate distinctio, doloremque\
    dolores error et fuga hic illo quibusdam sapiente vero!\
    Amet delectus dicta fugit hic itaque iusto perferendis\
    quam sit tempora temporibus? Consectetur, ducimus, sint.`
  },
  {
    isStarred: false,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Aut consectetur consequatur cum, cupiditate distinctio, doloremque\
    dolores error et fuga hic illo quibusdam sapiente vero!\
    Amet delectus dicta fugit hic itaque iusto perferendis\
    quam sit tempora temporibus? Consectetur, ducimus, sint.`
  },{
    isStarred: false,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Aut consectetur consequatur cum, cupiditate distinctio, doloremque \
    dolores error et fuga hic illo quibusdam sapiente vero!\
    Amet delectus dicta fugit hic itaque iusto perferendis\
    quam sit tempora temporibus? Consectetur, ducimus, sint.`
  },
  {
    isStarred: false,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Aut consectetur consequatur cum, cupiditate distinctio, doloremque\
    dolores error et fuga hic illo quibusdam sapiente vero!\
    Amet delectus dicta fugit hic itaque iusto perferendis\
    quam sit tempora temporibus? Consectetur, ducimus, sint.`
  },
  {
    isStarred: false,
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.\
    Aut consectetur consequatur cum, cupiditate distinctio, doloremque\
    dolores error et fuga hic illo quibusdam sapiente vero!\
    Amet delectus dicta fugit hic itaque iusto perferendis\
    quam sit tempora temporibus? Consectetur, ducimus, sint.`
  },
]


const Note = ({ isStarred = false, children }) => (
  <NoteContainer>
    <StarContainer>
      <Line />
      <StarButton isStarred={ isStarred } />
    </StarContainer>

    <NoteContent>
      <NoteText>
        { children }
      </NoteText>
    </NoteContent>

    <FaderWrapper>
      <Fader />
    </FaderWrapper>
  </NoteContainer>
)

export default class BundleScreen extends Component {
  render() {
    return (
      <View>
        <BundleScreenContainer>
          <MainTextWrapper>
            <MainText>Вспоминатель</MainText>
            <View>
              <BundleName>{ this.props.name }</BundleName>
            </View>
          </MainTextWrapper>
        </BundleScreenContainer>

        <NotesList>
          <ScrollView style={{ height: 500 }}>
            {
              notes.map((note, i) => (
                <Note key={ i } isStarred={ note.isStarred }>
                  { note.text }
                </Note>
              ))
            }
          </ScrollView>
        </NotesList>
      </View>
    );
  }
}