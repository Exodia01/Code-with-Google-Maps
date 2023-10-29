import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';


// const LATITUDE_DELTA = 0.2
// const LONGITUDE_DELTA = LATITUDE_DELTA*ASPECT_RATIO;
const INITIAL_POSITION = {
    latitude:12.87893668748195,
    longitude:77.60441148465657,
}

export default function App() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}
      initialRegion={INITIAL_POSITION} />
       <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyCHkh6UcFq-cyNSFG8QVZrViqNHxFTGCPk',
        language: 'en',
      }}
    />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
