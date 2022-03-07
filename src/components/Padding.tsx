import {View} from 'react-native';
import React from 'react';

interface PaddingProps {
  h?: number | string;
  w?: number | string;
  bgColor?: string;
  style?: object;
  props?: any;
  fullWidth?: boolean;
}

export const Padding = ({
  h = 16,
  w = 16,
  bgColor = 'transparent',
  style,
  props,
  fullWidth = false,
}: PaddingProps) => {
  return (
    <View
      style={{
        height: h,
        width: fullWidth ? '100%' : w,
        backgroundColor: bgColor,
        ...style,
      }}>
      {props}
    </View>
  );
};
