const Stack = createNativeStackNavigator();
  import * as React from 'react';
  import { NavigationContainer } from '@react-navigation/native';
  import { useFonts } from 'expo-font';
import ManageDdelivery from "./screens/ManageDdelivery";
import Frame from "./components/Frame19";
import Frame1 from "./components/Frame18";
import Frame2 from "./components/Frame17";
import Line from "./components/Line";
import ArrowsChevronRight from "./components/ArrowsChevronRight";
import Frame3 from "./components/Frame3";
import IconBack from "./components/IconBack1";
import OtpPage from "./screens/OtpPage";
import HistoryPage from "./screens/HistoryPage";
import HomePage from "./screens/HomePage";
import DeliveryDetails from "./screens/DeliveryDetails";
import DeliveryLoaction from "./screens/DeliveryLoaction";
import SuccessPage from "./screens/SuccessPage";
import LoadingPage from "./screens/LoadingPage";
import DeliveryArea from "./screens/DeliveryArea";
import Header from "./components/Header";
import Header1 from "./components/Header1";
import Header2 from "./components/Header2";
import RoundTrip from "./components/RoundTrip";
import Group4 from "./components/Group4";
import RoundTripSection from "./components/RoundTripSection";
import Frame4 from "./components/Frame2111";
import Frame5 from "./components/Frame2112";
import OneWaySection from "./components/OneWaySection";
import OneWay from "./components/OneWay";
import Header3 from "./components/Header3";

  import { createNativeStackNavigator } from '@react-navigation/native-stack';
  import { View, Text, Pressable, TouchableOpacity  } from 'react-native';
  
  
  import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
  
  
  
  const Tab = createBottomTabNavigator();
  function BottomTabsRoot({ navigation }) {
      const [bottomTabItemsNormal] = React.useState([<Frame2 />, <Frame1 />, <Frame />]);
      const [bottomTabItemsActive] = React.useState([<Frame2 />, <Frame1 />, <Frame />]);
        return (
          <Tab.Navigator screenOptions={{headerShown: false}} initialRouteName="ManageDdelivery" tabBar={({ state, descriptors, navigation }) =>{
      const activeIndex = state.index;
       return (
        
         <View style={{
  backgroundColor: "#fff",
  height: 77,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 24,
  paddingVertical: 8
}}>
         {bottomTabItemsNormal.map((item,index) => {
          const isFocused = state.index === index;
          return (
            <Pressable
            key={index}
            onPress={() => {
            navigation.navigate({ name: state.routes[index].name, merge: true });
            }}>
            {activeIndex === index ? bottomTabItemsActive[index] || item : item}</Pressable>)
          }
          )
        }
        </View>
        
        )
      }}>
            <Tab.Screen name="HomePage" component={HomePage}/>
<Tab.Screen name="ManageDdelivery" component={ManageDdelivery}/>
<Tab.Screen name="HistoryPage" component={HistoryPage}/>
          </Tab.Navigator>
        );
      }
  
  
  

  const App = () => {
    const [hideSplashScreen,setHideSplashScreen] = React.useState(false);
    
    const [fontsLoaded,error] = useFonts({"Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "IBMPlexSans-Bold": require("./assets/fonts/IBMPlexSans-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    });

    React.useEffect(()=>{
          setTimeout(()=>{
            setHideSplashScreen(true);
          },2000)
        },[])
    
    

    if (!fontsLoaded && !error) {
      return null;
    }

    return (
      <>
      
      
      
      <NavigationContainer>
       {hideSplashScreen? <Stack.Navigator screenOptions={{headerShown: false}}>
       
       
       <Stack.Screen name="BottomTabsRoot" component={BottomTabsRoot} />   
       <Stack.Screen name="Frame" component={Frame} options={{headerShown: false}}/>
<Stack.Screen name="Frame1" component={Frame1} options={{headerShown: false}}/>
<Stack.Screen name="Frame2" component={Frame2} options={{headerShown: false}}/>
<Stack.Screen name="Line" component={Line} options={{headerShown: false}}/>
<Stack.Screen name="ArrowsChevronRight" component={ArrowsChevronRight} options={{headerShown: false}}/>
<Stack.Screen name="Frame3" component={Frame3} options={{headerShown: false}}/>
<Stack.Screen name="IconBack" component={IconBack} options={{headerShown: false}}/>
<Stack.Screen name="OtpPage" component={OtpPage} options={(props)=>({
        headerShown:true,
        headerLeft: () => <IconBack />,
        
        
      })}/>
<Stack.Screen name="DeliveryDetails" component={DeliveryDetails} options={(props)=>({
        headerShown:true,        
        
      })}/>
<Stack.Screen name="DeliveryLoaction" component={DeliveryLoaction} options={(props)=>({
        headerShown:true,        
        
      })}/>
<Stack.Screen name="SuccessPage" component={SuccessPage} options={(props)=>({
        headerShown:true,        
        
      })}/>
<Stack.Screen name="LoadingPage" component={LoadingPage} options={{headerShown: false}}/>
<Stack.Screen name="DeliveryArea" component={DeliveryArea} options={(props)=>({
        headerShown:true,
        
      })}/>
<Stack.Screen name="Header" component={Header} options={(props)=>({
        headerShown:true,
        header: () => <Header />,
      })}/>
<Stack.Screen name="Header1" component={Header1} options={(props)=>({
        headerShown:true,
        header: () => <Header1 />,
      })}/>
<Stack.Screen name="Header2" component={Header2} options={(props)=>({
        headerShown:true,
        header: () => <Header2 />,
      })}/>
<Stack.Screen name="RoundTrip" component={RoundTrip} options={{headerShown: false}}/>
<Stack.Screen name="Group4" component={Group4} options={(props)=>({
        headerShown:true,
        header: () => <Group4 />,
      })}/>
<Stack.Screen name="RoundTripSection" component={RoundTripSection} options={{headerShown: false}}/>
<Stack.Screen name="Frame4" component={Frame4} options={{headerShown: false}}/>
<Stack.Screen name="Frame5" component={Frame5} options={{headerShown: false}}/>
<Stack.Screen name="OneWaySection" component={OneWaySection} options={{headerShown: false}}/>
<Stack.Screen name="OneWay" component={OneWay} options={{headerShown: false}}/>
<Stack.Screen name="Header3" component={Header3} options={(props)=>({
        headerShown:true,
        header: () => <Header3 />,
      })}/>
        </Stack.Navigator>
       : <LoadingPage />}
        </NavigationContainer>
        
        
        </>
        );
      };
      export default App;
      