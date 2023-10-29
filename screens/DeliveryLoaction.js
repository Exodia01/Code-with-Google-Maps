import * as React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { Button as RNPButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Padding, Color } from "../GlobalStyles";
import MapView, {Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import MapViewDirections from 'react-native-maps-directions';


const { width, height } = Dimensions.get("window");

const DeliveryLoaction = () => {
  const[delLoc, setDelLoc] = useState("");
  const[distance, setDistance] = useState(0);
  const[duration, setDuration] = useState(0);

  const [location, setLocation] = useState();
  Location.setGoogleApiKey("AIzaSyCHkh6UcFq-cyNSFG8QVZrViqNHxFTGCPk");

  useEffect(() => {
    const getPermissions = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log("Please grant location permissions");
        return;
      }
  
      let currentLocation = await Location.getCurrentPositionAsync({});
      setLocation(currentLocation);
      // console.log('Location', currentLocation);
    };
    getPermissions();
  }, []);

const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
    latitude:12.87893668748195,
    longitude:77.60441148465657,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
}
 const mapRef = useRef(MapView);

 const traceRouteOnReady = (result) => {
  // console.log('result: ', result)
  setDistance(result.distance);
  setDuration(result.duration)
 }


const moveTo = async (position) => {
  const camera = await mapRef.current.getCamera();
  if (camera) {
    camera.center = position;
    mapRef.current.animateCamera(camera, { duration: 1000 });
  }
};

const onPlaceSelected = (data, details) => {
  console.log('data passed');
  // console.log('data: ',data);
  // console.log('details ', details);
  const position = {
    latitude: details.geometry.location.lat,
    longitude: details.geometry.location.lng,
  }
  setDelLoc(position);
  console.log('position: ',position);
  console.log('delLoc ', delLoc);
  moveTo(position);
}

const navigation = useNavigation();

return (
    <View style={[styles.deliveryLoaction, styles.deliveryLoactionLayout]}>
      <View style={[styles.basemapImageWrapper, styles.wrapperPosition]}>        
      <View style={styles.container}>
        <MapView 
       ref={mapRef}
        style={styles.map} initialRegion={INITIAL_POSITION}>
        <Marker coordinate={INITIAL_POSITION} title='you are here' />
        {delLoc && INITIAL_POSITION && <Marker coordinate={delLoc} title='delivery Location' />}
        {delLoc && <MapViewDirections
    origin={INITIAL_POSITION}
    destination={delLoc}
    apikey='AIzaSyCHkh6UcFq-cyNSFG8QVZrViqNHxFTGCPk'
    strokeColor="#6644ff"
    strokeWidth={4}
    onReady={traceRouteOnReady}
  />}
      </MapView>
      <View style={styles.searchContainer}>
      <Text style={styles.direDurText}>Destination</Text>
      <GooglePlacesAutocomplete
      styles={{ textInput: styles.input }}
      
      placeholder='Search'
      fetchDetails
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        // console.log('data: ',data);
        // console.log('details ', details);
        onPlaceSelected(data, details);
      }}
      query={{
        key: 'AIzaSyCHkh6UcFq-cyNSFG8QVZrViqNHxFTGCPk',
        language: 'en',
      }}
    />

      </View>
      <View style={styles.distanceCrad} >
      <Text style={styles.direDurText}>Distance: {distance.toFixed(2)} Km</Text>
      <Text style={styles.direDurText}>Duration: {Math.ceil(duration)} Min</Text>
      </View>
      

    

    </View>
      </View>
      <View style={[styles.rekhaParent, styles.wrapperPosition]}>
        <Text style={[styles.rekha, styles.rekhaFlexBox]}>Rekha</Text>
        <Text style={[styles.text, styles.textTypo]}>9986214342</Text>
      </View>
      <View style={[styles.deliveryLoactionChild, styles.wrapperPosition]} />
      <RNPButton
        style={styles.deliveryLoactionItem}
        mode="contained"
        labelStyle={styles.frameButton1Btn}
        onPress={() => navigation.navigate("DeliveryDetails")}
        contentStyle={styles.frameButton1Btn1}
      >
        View Bill
      </RNPButton>
      
      <View
        style={[
          styles.srinivasaNilaya1stFloorebWrapper,
          styles.wrapperPosition,
        ]}
      >
        <Text style={[styles.srinivasaNilaya1st, styles.rekhaFlexBox]}>
          201, 2nd floor, Lake Verandahs, House of Hiranandani, Hulimav, 560076
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer:{
    position: 'absolute',
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 1
  },
  input:{
    borderColor:'#888',
    borderWidth:1
  },
  distanceCrad:{
    position: 'absolute',
    width: "100%",
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 370,
  },
  direDurText:{
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
  },
  map: {
    width: '100%',
    height: 350,
  },
  frameButtonBtn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  frameButtonBtn1: {
    padding: 8,
    borderRadius: 8,
  },
  frameButton1Btn: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    fontFamily: "Poppins-SemiBold",
  },
  frameButton1Btn1: {
    padding: 8,
    borderRadius: 8,
  },
  iconBackBtn: {
    position: "relative",
  },
  iconBackBtn1: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  deliveryLoactionLayout: {
    overflow: "hidden",
    width: "100%",
  },
  wrapperPosition: {
    left: 0,
    position: "absolute",
  },
  rekhaFlexBox: {
    textAlign: "left",
    letterSpacing: 1,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.subheadlineBold_size,
    textAlign: "left",
    letterSpacing: 1,
  },
  group6FlexBox: {
    paddingVertical: Padding.p_sm,
    flexDirection: "row",
    alignItems: "center",
    left: 0,
    position: "absolute",
  },
  basemapImageIcon: {
    alignSelf: "stretch",
    maxWidth: "100%",
    height: 355,
  },
  basemapImageWrapper: {
    top: 180,
    backgroundColor: "#d9d9d9",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_7xs,
    width: '100%',
  },
  rekha: {
    display: "flex",
    width: 317,
    alignItems: "center",
    color: Color.neutralDark,
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    lineHeight: 27,
    letterSpacing: 1,
  },
  text: {
    width: 130,
    height: 25,
    color: Color.lightLabelPrimary,
    lineHeight: 27,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.subheadlineBold_size,
  },
  rekhaParent: {
    top: 10,
    paddingHorizontal: 11,
    paddingVertical: Padding.p_3xs,
    width: 375,
  },
  deliveryLoactionChild: {
    top: 80,
    borderStyle: "solid",
    borderColor: Color.colorGray_100,
    borderTopWidth: 1,
    width: 376,
    height: 1,
  },
  frameChild: {
    flexDirection: "row",
    alignItems: "center",
  },
  min: {
    color: "#155101",
  },
  km: {
    color: Color.lightLabelPrimary,
  },
  min05KmContainer: {
    lineHeight: 23,
  },
  frameParent: {
    top: 550,
    width: 360,
    paddingHorizontal: Padding.p_7xs,
    justifyContent: "space-between",
  },
  deliveryLoactionItem: {
    top: 670,
    left: 10,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  srinivasaNilaya1st: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.lightLabelPrimary,
    textAlign: "left",
    letterSpacing: 1,
    flex: 1,
  },
  srinivasaNilaya1stFloorebWrapper: {
    top: 93,
    height: 78,
    padding: Padding.p_5xs,
    justifyContent: "space-between",
    flexDirection: "row",
    width: 375,
    backgroundColor: Color.lightColor,
  },
  deliveryLoaction: {
    height: 800,
    flex: 1,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.lightColor,
  },
});

export default DeliveryLoaction;
