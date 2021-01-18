import * as React from 'react';
import { ReactNode, useState } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

import { Position } from './types';

import { TooltipModal } from './TooltipModal';
import { TooltipView } from './TooltipView';

export interface TooltipWrapperProps {
  children?: ReactNode;
  position?: Position;
  isVisible?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  targetStyle?: StyleProp<ViewStyle>;
  tooltipStyle?: StyleProp<ViewStyle>;
  arrowBase?: number;
  arrowHeight?: number;
  arrowColor?: string;
  tooltipComponent?: ReactNode;
  distanceToTarget?: number;
}

export function TooltipWrapper(props: TooltipWrapperProps) {
  const {
    children,
    position,
    isVisible,
    modalStyle,
    targetStyle,
    tooltipStyle,
    arrowBase,
    arrowHeight,
    arrowColor,
    tooltipComponent,
    distanceToTarget,
  } = props;

  const [targetRef, setTargetRef] = useState<View>();

  return (
    <View
      ref={(ref) => {
        setTargetRef(ref);
      }}>
      <View style={{ opacity: isVisible ? 0 : 1 }}>{children}</View>
      <TooltipModal
        isVisible={isVisible}
        targetRef={targetRef}
        modalStyle={modalStyle}
        targetStyle={targetStyle}>
        {children}
        <TooltipView
          style={tooltipStyle}
          position={position}
          arrowBase={arrowBase}
          arrowHeight={arrowHeight}
          arrowColor={arrowColor}
          distance={distanceToTarget}>
          {tooltipComponent}
        </TooltipView>
      </TooltipModal>
    </View>
  );
}
