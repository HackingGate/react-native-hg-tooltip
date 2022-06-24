# react-native-hg-tooltip

[![npm version](https://badge.fury.io/js/react-native-hg-tooltip.svg)](https://badge.fury.io/js/react-native-hg-tooltip)

A customizable React Native tooltip

## Example

```javascript
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import TooltipWrapper from 'react-native-hg-tooltip';

function YourAwesomeComponent() {
  const [visible, setVisible] = useState(false);

  function toggleVisible(value) {
    setVisible(value);
  }

  return (
    <View style={styles.container}>
      <Button
        title={'Toggle Visible'}
        onPress={() => toggleVisible(!visible)}
      />
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <TooltipWrapper
          isVisible={visible}
          position={'bottom'}
          modalStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
          tooltipStyle={{
            backgroundColor: 'cyan',
            height: 40,
            width: 220,
            borderRadius: 10,
          }}
          arrowBase={24}
          arrowHeight={16}
          arrowColor={'cyan'}
          distanceToTarget={5}
          tooltipComponent={
            <TouchableOpacity
              style={{
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => toggleVisible(false)}
            >
              <Text>This is a tooltip.</Text>
            </TouchableOpacity>
          }
        >
          <Text>Target</Text>
        </TooltipWrapper>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
```

## Known Issues 

### Orientation change is only supported on iOS.
The [onOrientationChange](https://reactnative.dev/docs/modal#onorientationchange) prop  is only available for iOS.  
And there's no prop that is able to handle orientation on the Android side. Because the configuration change handler is not implemented in React Native.  
There's an [issue](https://github.com/facebook/react-native/issues/3219) but unfortunately it was closed due to inactivity.  
