import React, { Component } from 'react'
import {
  View,
  Platform,
  StyleSheet,
} from 'react-native'
import MapboxGL from '@mapbox/react-native-mapbox-gl'
import { MAPBOX_TOKEN } from '../configs'

MapboxGL.setAccessToken(MAPBOX_TOKEN)

class Map extends Component {
  state = {
    isGranted: false,
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      this.getAndroidPermission()
    } else {
      this.setState({ isGranted: true })
    }
  }

  getAndroidPermission = async () => {
    try {
      const isGranted = await MapboxGL.requestAndroidLocationPermissions()
      console.warn('isgrant = ', isGranted)
      this.setState({ isGranted })
    } catch(error) {
      console.warn('err ', error)
      this.setState({ isGranted: false })
    }
  }

  render() {
    return(
      <MapboxGL.MapView
        testID="map"
        style={styles.map}
        centerCoordinate={[100, 13]}
        showUserLocation={this.state.isGranted}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
})

export default Map