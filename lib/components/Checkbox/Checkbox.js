import React from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { Flex, Padding } from '../../infrastructure/theme'
import { Color, colors } from '../../infrastructure/theme/color'
import Icon from '../Icon'
import Paragraphs from '../Paraghraps'

const Checkbox = ({ checked, color, onChange, label }) => {
  return (
      <TouchableOpacity onPress={onChange} style={[Flex.row, Padding.py10]}>
        {checked
          ? <View style={[styles.checked, styles.box]}>
            <Icon iconFamily='IO' name='checkbox' size={22} color={colors[color]} />
          </View>
          : (
          <View style={[styles.checked, styles.box]}>
            <Icon
              name="square-outline"
              iconFamily='IO'
              color={colors.gray[100]}
              size={22}
            />
          </View>
            )}
        <Paragraphs style={[Padding.px10, Color[color]]}>{label}</Paragraphs>
      </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  box: {
    height: 23,
    width: 23
  }
})

Checkbox.propTypes = {
  checked: PropTypes.bool,
  color: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  label: PropTypes.string

}

Checkbox.defaultProps = {
  checked: false,
  onChange: null,
  label: ''
}

export default Checkbox
