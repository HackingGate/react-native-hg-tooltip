import { isEqual } from 'lodash';
import * as React from 'react';
import { ReactNode, useEffect, useState } from 'react';
import { View, StyleSheet, Modal, StyleProp, ViewStyle } from 'react-native';

import { MeasureInWindow } from './types';

export interface TooltipModalProps {
  children?: ReactNode;
  targetRef?: View;
  isVisible?: boolean;
  modalStyle?: StyleProp<ViewStyle>;
  targetStyle?: StyleProp<ViewStyle>;
}

export function TooltipModal(props: TooltipModalProps) {
  const { children, targetRef, isVisible, modalStyle, targetStyle } = props;

  const [targetMeasureInWindow, setTargetMeasureInWindow] = useState<MeasureInWindow>();

  useEffect(() => {
    updateTargetMeasure();
  }, [targetMeasureInWindow]);

  function updateTargetMeasure(force = false) {
    if (targetRef) {
      targetRef.measureInWindow((x, y, width, height) => {
        const measure: MeasureInWindow = { x, y, width, height };
        if (!isEqual(measure, targetMeasureInWindow) || force) {
          setTargetMeasureInWindow(measure);
        }
      });
    }
  }

  if (!targetMeasureInWindow) {
    updateTargetMeasure();
    return null;
  }

  return (
    <Modal
      visible={isVisible}
      transparent
      supportedOrientations={['portrait', 'portrait-upside-down', 'landscape']}
      onOrientationChange={() => updateTargetMeasure(true)}>
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
