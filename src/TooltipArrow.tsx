import { Position } from './types';
import { StyleSheet, View } from 'react-native';
import * as React from 'react';

interface TooltipArrow {
  position?: Position;
  arrowWidth: number;
  arrowHeight: number;
  arrowColor: string;
}

export function TooltipArrow(props: TooltipArrow) {
  const { position, arrowWidth, arrowHeight, arrowColor } = props;

  let arrowStyle;
  switch (position) {
    case 'bottom':
      arrowStyle = [
        styles.baseArrow,
        {
          borderLeftWidth: arrowWidth / 2,
          borderRightWidth: arrowWidth / 2,
          borderBottomWidth: arrowHeight,
          borderBottomColor: arrowColor,
          top: -arrowHeight + 1,
        },
      ];
      break;
    case 'top':
      arrowStyle = [
        styles.baseArrow,
        {
          borderLeftWidth: arrowWidth / 2,
          borderRightWidth: arrowWidth / 2,
          borderTopWidth: arrowHeight,
          borderTopColor: arrowColor,
          bottom: -arrowHeight + 1,
        },
      ];
      break;
    case 'right':
      arrowStyle = [
        styles.baseArrow,
        {
          borderTopWidth: arrowHeight / 2,
          borderBottomWidth: arrowHeight / 2,
          borderRightWidth: arrowWidth,
          borderRightColor: arrowColor,
          left: -arrowWidth + 1,
        },
      ];
      break;
    case 'left':
      arrowStyle = [
        styles.baseArrow,
        {
          borderTopWidth: arrowHeight / 2,
          borderBottomWidth: arrowHeight / 2,
          borderLeftWidth: arrowWidth,
          borderLeftColor: arrowColor,
          right: -arrowWidth + 1,
        },
      ];
      break;
    default:
      arrowStyle = [];
      break;
  }

  return <View style={arrowStyle} />;
}

const styles = StyleSheet.create({
  baseArrow: {
    position: 'absolute',
    alignSelf: 'center',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
});
