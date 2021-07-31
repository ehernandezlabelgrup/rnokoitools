import React from 'react'
import { View } from 'react-native'
import { Checkbox, Icon, Paragraphs } from './lib'

export default function App () {
  return <View>
    <Paragraphs>Hint</Paragraphs>
    <Checkbox label='hint' color='red' onChange={() => alert()} />
    <Icon name='checkbox' iconFamily='IO'/>
  </View>
}
