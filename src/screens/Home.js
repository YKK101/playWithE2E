import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const Home = () => (
  <View style={styles.container} >
    <TouchableOpacity
      testID="button"
      style={styles.button}
      onPress={() => { console.warn('EiEi') }}
    >
      <Text style={styles.text} >Button</Text>
    </TouchableOpacity>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    padding: 16,
    backgroundColor: 'green',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default Home
