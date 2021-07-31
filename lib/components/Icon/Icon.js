import React from 'react'
import IconMa from 'react-native-vector-icons/MaterialIcons'
import IconMac from 'react-native-vector-icons/MaterialCommunityIcons'
import IconIo from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import PropTypes from 'prop-types'

const Icon = ({ iconFamily, color, size, name }) => {
  if (iconFamily === 'MA') {
    return <IconMa size={size} color={color} name={name} />
  }
  if (iconFamily === 'MAC') {
    return <IconMac size={size} color={color} name={name} />
  }
  if (iconFamily === 'IO') {
    return <IconIo size={size} color={color} name={name} />
  }
  if (iconFamily === 'AntDesign') { return <AntDesign size={size} color={color} name={name} /> }
  if (iconFamily === 'Feather') { return <Feather size={size} color={color} name={name} /> }
  return null
}

Icon.propTypes = {
  iconFamily: PropTypes.oneOf(['MA', 'MAC', 'IO', 'AntDesign', 'Feather']).isRequired,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
  name: PropTypes.string.isRequired

}

Icon.defaultProps = {
  size: 30
}

export default Icon
