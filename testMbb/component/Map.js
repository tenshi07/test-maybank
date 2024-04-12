import React from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
} from 'react-native';

import MapView, {Marker} from 'react-native-maps';
import { windowWidth, windowHeight } from '../utils/function';
import { BulbFilled } from '@ant-design/icons';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import MarkerPoint from '../asset/markerPoint.png';


const mapStyle = [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{color: '#263c3f'}],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{color: '#6b9a76'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{color: '#38414e'}],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{color: '#212a37'}],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{color: '#9ca5b3'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{color: '#746855'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{color: '#1f2835'}],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{color: '#f3d19c'}],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{color: '#2f3948'}],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{color: '#d59563'}],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{color: '#17263c'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{color: '#515c6d'}],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{color: '#17263c'}],
    },
];

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        height: windowHeight,
        width: windowWidth,
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    mapStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    mainContainer: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    markerMainContainer: { 
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    markerTextContainer: { 
        flex: 1,
        backgroundColor: '#747480',
        paddingLeft: 8,
        paddingRight: 8,
        borderRadius: 5,
        width: '100%',
    }
  });

export default function Map(props) {
    const { searchValue, markerCoordinate, setMarkerCoordinate } = props;
    return (
        <View style={styles.mainContainer}>
            <View style={styles.container}>
                <MapView
                style={styles.mapStyle}
                region={{
                    latitude: markerCoordinate.latitude,
                    longitude: markerCoordinate.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
                customMapStyle={mapStyle}>
                {
                    searchValue ? (
                        <Marker
                            draggable
                            coordinate={{
                                latitude: searchValue.latitude,
                                longitude: searchValue.longitude,
                            }}
                            onDragEnd={
                            (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                            }
                        >
                            <View style={styles.markerMainContainer}>
                             <Image source={MarkerPoint} style={{ height: 20, width: 20 }} />
                             <View style={styles.markerTextContainer}>
                                <Text>{searchValue.name}</Text>
                             </View>
                            </View>

                        </Marker>
                    ) : (null)
                }
                </MapView>
            </View>
        </View>
    )
}


