import * as React from 'react';
import { ReactNode, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Position, MeasureInWindow } from './types';

import { TooltipModal } from './TooltipModal';
import { TooltipView } from './TooltipView';

import { isEqual } from 'lodash';

export interface TooltipWrapper {
  children?: ReactNode;
  position?: Position;
  isVisible?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  targetStyle?: StyleProp<ViewStyle>;
  tooltipStyle?: StyleProp<ViewStyle>;
  arrowWidth?: number;
  arrowHeight?: number;
  arrowColor?: string;
  tooltipComponent?: ReactNode;
  distanceToTarget?: number;
}

export function TooltipWrapper(props: TooltipWrapper) {
  const {
    children,
    position,
    isVisible,
    modalStyle,
    targetStyle,
    tooltipStyle,
    arrowWidth,
    arrowHeight,
    arrowColor,
    tooltipComponent,
    distanceToTarget,
  } = props;

  const [targetMeasureInWindow, setTargetMeasureInWindow] = useState<MeasureInWindow>();

  return (
    <View
      ref={(ref) => {
        if (ref) {
          ref.measureInWindow((x, y, width, height) => {
            const measure: MeasureInWindow = { x: x, y: y, width: width, height: height };
            if (!isEqual(measure, targetMeasureInWindow)) {
              setTargetMeasureInWindow(measure);
            }
          });
        }
      }}>
      <View style={{ opacity: isVisible ? 0 : 1 }}>{children}</View>
      <TooltipModal
        isVisible={isVisible}
        targetMeasureInWindow={targetMeasureInWindow}
        modalStyle={modalStyle}
        targetStyle={targetStyle}>
        {children}
        <TooltipView
          style={tooltipStyle}
          position={position}
          arrowWidth={arrowWidth}
          arrowHeight={arrowHeight}
          arrowColor={arrowColor}
          distance={distanceToTarget}>
          {tooltipComponent}
        </TooltipView>
      </TooltipModal>
    </View>
  );
}
