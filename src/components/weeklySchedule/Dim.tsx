import React from 'react';
import {
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';

interface DimActiveProps {
  active: boolean;
  onToggle: () => void;
}

/**
 * DimBehindKeyboardExample 컴포넌트
 * @description 키보드 오픈시 DIm 영역
 */
const DimBehindKeyboardExample = ({ active, onToggle }: DimActiveProps) => {
  return (
    <>
      {active && (
        <>
          <TouchableWithoutFeedback
            onPress={() => {
              Keyboard.dismiss();
              onToggle();
            }}
          >
            <View style={styles.container}>
              <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.dimBehindKeyboard}
              ></KeyboardAvoidingView>
            </View>
          </TouchableWithoutFeedback>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
  },
  dimBehindKeyboard: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DimBehindKeyboardExample;
