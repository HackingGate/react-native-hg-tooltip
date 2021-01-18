import React, {useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View, SafeAreaView} from 'react-native';
import TooltipWrapper from 'react-native-hg-tooltip';

function App() {
  const [visible, setVisible] = useState(false);

  function toggleVisible(value) {
    setVisible(value);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button
        title={'Toggle Visible'}
        onPress={() => toggleVisible(!visible)}
      />
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TooltipWrapper
          isVisible={visible}
          position={'bottom'}
          modalStyle={{backgroundColor: 'rgba(0, 0, 0, 0.3)'}}
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
              onPress={() => toggleVisible(false)}>
              <Text>This is a tooltip.</Text>
            </TouchableOpacity>
          }>
          <Text>Target</Text>
        </TooltipWrapper>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default App;
