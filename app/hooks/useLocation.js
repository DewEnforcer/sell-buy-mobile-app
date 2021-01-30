import {useState, useEffect} from "react";
import * as Location from "expo-location";

const useLocation = () => {
    const [location, setLocation] = useState();

    useEffect(() => {
      const getLocation = async () => {
          try {
              const result = await Location.requestPermissionsAsync();
              if (!result.granted) return;
              const {coords: {latitude, longitude}} = await Location.getLastKnownPositionAsync();
              setLocation({latitude, longitude}); 
          } catch (error) {
              console.log(error);
          }
      }
      getLocation();
    }, [])

    return location;
}

export default useLocation;