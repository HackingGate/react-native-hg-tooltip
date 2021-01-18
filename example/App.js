import React, {useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import TooltipWrapper from 'react-native-hg-tooltip';

function App() {
  const [tooltip1, setTooltip1] = useState(false);
  const [tooltip2, setTooltip2] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <TooltipWrapper
        isVisible={tooltip1}
        position={'top'}
        modalStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
        tooltipStyle={styles.tooltipStyle}
        arrowBase={24}
        arrowHeight={16}
        arrowColor={'cyan'}
        distanceToTarget={5}
        tooltipComponent={
          <TouchableOpacity
            style={styles.tooltipTouchable}
            onPress={() => setTooltip1(false)}>
            <Text>This is tooltip1</Text>
          </TouchableOpacity>
        }>
        <Button title={'Show tooltip1'} onPress={() => setTooltip1(true)} />
      </TooltipWrapper>
      <TooltipWrapper
        isVisible={tooltip2}
        position={'bottom'}
        modalStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
        tooltipStyle={styles.tooltipStyle}
        arrowBase={24}
        arrowHeight={16}
        arrowColor={'cyan'}
        distanceToTarget={5}
        tooltipComponent={
          <TouchableOpacity
            style={styles.tooltipTouchable}
            onPress={() => setTooltip2(false)}>
            <Text>This is tooltip2</Text>
          </TouchableOpacity>
        }>
        <Button title={'Show tooltip2'} onPress={() => setTooltip2(true)} />
      </TooltipWrapper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tooltipStyle: {
    backgroundColor: 'cyan',
    height: 40,
    width: 220,
    borderRadius: 10,
  },
  tooltipTouchable: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
