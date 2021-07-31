import React from 'react'
import { Text } from 'react-native'
import PropTypes from 'prop-types'
import { fontFamily, fontSize, text } from '../../infrastructure/theme'

const Paragraphs = ({ children, style, size, weight, uppercase, onPress }) => {
  return (
    <Text
      onPress={onPress}
      style={[
        ...style,
        fontSize[size],
        fontFamily[weight],
        uppercase && text.uppercase,
        { marginTop: 4 }
      ]}>
      {children}
    </Text>
  )
}

Paragraphs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  style: PropTypes.array,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'base',
    'lg',
    'xl',
    'xl2',
    'xl3',
    'xl4',
    'xl5',
    'xl6',
    'xl7',
    'xl8',
    'xl9',
    'xl10'
  ]),
  weight: PropTypes.string,
  uppercase: PropTypes.bool,
  onPress: PropTypes.func
}

Paragraphs.defaultProps = {
  style: [],
  size: 'base',
  weight: 'regular'
}

export default Paragraphs
