import * as React from 'react';
import { ReactNode } from 'react';
import { View, StyleSheet, Modal, StyleProp, ViewStyle } from 'react-native';

import { MeasureInWindow } from './types';

export interface TooltipModalProps {
  children?: ReactNode;
  targetMeasureInWindow?: MeasureInWindow;
  isVisible?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  targetStyle?: StyleProp<ViewStyle>;
}

export function TooltipModal(props: TooltipModalProps) {
  const { children, targetMeasureInWindow, isVisible, modalStyle, targetStyle } = props;

  if (!targetMeasureInWindow) {
    return null;
  }

  return (
    <Modal visible={isVisible} transparent>
      <View style={[styles.modalStyle, modalStyle]}>
        <View
          style={[
            styles.targetStyle,
            {
              top: targetMeasureInWindow.y,
              left: targetMeasureInWindow.x,
              width: targetMeasureInWindow.width,
              height: targetMeasureInWindow.height,
            },
            targetStyle,
          ]}>
          {children}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  targetStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
