import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function Header(): JSX.Element {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.fonts}>Checklists</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  fonts: {
    fontSize: 16,
    color: '#333333',
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  container: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Header;
