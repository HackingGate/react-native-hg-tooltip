import { LayoutRectangle, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import * as React from 'react';
import { ReactNode, useState } from 'react';
import { Position } from './types';
import { TooltipArrow } from './TooltipArrow';

export interface TooltipViewProps {
  children?: ReactNode;
  position?: Position;
  style?: StyleProp<ViewStyle>;
  arrowBase?: number;
  arrowHeight?: number;
  arrowColor?: string;
  distance?: number;
}

export function TooltipView(props: TooltipViewProps) {
  const { children, position, style, arrowBase, arrowHeight, arrowColor, distance = 0 } = props;

  const [childrenLayout, setChildrenLayout] = useState<LayoutRectangle>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  let tooltipStyle;
  switch (position) {
    case 'top':
      tooltipStyle = [
        styles.baseTooltip,
        {
          top: -childrenLayout.height - arrowHeight - distance,
        },
      ];
      break;
    case 'bottom':
      tooltipStyle = [
        styles.baseTooltip,
        {
          bottom: -childrenLayout.height - arrowHeight - distance,
        },
      ];
      break;
    case 'left':
      tooltipStyle = [
        styles.baseTooltip,
        {
          left: -childrenLayout.width - arrowBase - distance,
        },
      ];
      break;
    case 'right':
      tooltipStyle = [
        styles.baseTooltip,
        {
          right: -childrenLayout.width - arrowBase - distance,
        },
      ];
      break;
    default:
      tooltipStyle = [styles.baseTooltip];
      break;
  }

  return (
    <View
      style={[tooltipStyle, style]}
      onLayout={({ nativeEvent }) => {
        setChildrenLayout(nativeEvent.layout);
      }}>
      {children}
      {position && arrowBase && arrowHeight && arrowColor ? (
        <TooltipArrow
          position={position}
          arrowBase={arrowBase}
          arrowHeight={arrowHeight}
          arrowColor={arrowColor}
        />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  baseTooltip: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
