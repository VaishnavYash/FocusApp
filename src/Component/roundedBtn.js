import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { color } from '../utils/colors';

export const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={props.onPress}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = (size) => ({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: "center",
      borderColor: color.darkBlue,
      borderWidth: 2
    },
    text: { color: color.darkBlue, fontSize: size / 3 },
  });