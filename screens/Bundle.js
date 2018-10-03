import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'

import { MainTextWrapper, MainText } from './MainViews'
import { BundleName, NotesList, NoteContainer, FaderWrapper, BundleScreenContainer, StarContainer, NoteContent, NoteText } from './BundleViews'
import Markdown from './Markdown'

import Fader from './svg/FaderGradient'
import { FilledStarIcon, EmptyStarIcon } from './svg/StarIcon'

const Note = ({ isStarred = false, children }) => (
  <NoteContainer>
    <StarContainer>
      {
        isStarred
          ? <FilledStarIcon />
          : <EmptyStarIcon />
      }
    </StarContainer>

    <NoteContent>
      <NoteText>
        <Markdown>
          { children }
        </Markdown>
      </NoteText>

      <FaderWrapper>
        <Fader />
      </FaderWrapper>
    </NoteContent>
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
            <Note isStarred>
              {`# Теория репов \n Давай разберём по частям тобой написанное, складывается впечатление, что ты Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Animi debitis deserunt eos esse perferendis quisquam ratione reprehenderit tempora veniam voluptate.
                  Animi debitis deserunt eos esse perferendis quisquam ratione reprehenderit tempora veniam voluptate.`}
            </Note>

            <Note>
              {`\n ~~allo~~`}
            </Note>

            <Note>
              {'всем привет сегодня мы будет делать стартап\n'}
              {"`console.log('benis')`"}
            </Note>

            <Note>
              ![Image of Yaktocat](http://icons-for-free.com/free-icons/png/512/2001886.png)
            </Note>

            <Note>
              {`# Ещё репы

              В старших классах тот самый парень,
              Которому не доставало внимания
              В универе стал людям нахуй не нужен
              Ведь вечно был без бабла на кармане

              В старших классах тот самый парень,
              Которому не доставало внимания
              В универе стал людям нахуй не нужен
              Ведь вечно был без бабла на кармане`}
            </Note>
          </ScrollView>
        </NotesList>
      </View>
    )
  }
}