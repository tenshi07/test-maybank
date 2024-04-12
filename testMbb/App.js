/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import { Provider } from 'react-redux';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


import Map from './component/Map';
import SearchInput from './component/SearchInput';
import DetailCard from './component/DetailCard';
import { windowHeight, windowWidth } from './utils/function';
import store from './utils/store';
import { GooglePlaces } from './utils/apiCalled';


function App(){
  const [searchValue, setSearchValue] = useState(null);
  const [markerCoordinate, setMarkerCoordinate] = useState({
    latitude: 4.2105,
    longitude: 101.9758,
  })
  const backgroundStyle = {
    backgroundColor: Colors.light
  };

  // console.log('searchValue', store);

  // const apiCalled = () => {
  //   try {
  //     const places = await GooglePlaces()
  //   } catch(err) {
  //     console.log('errpr from API', err)
  //   }
  // }r

  return (
    <Provider store={store}>
      <SafeAreaView style={backgroundStyle}>
          <View style={{ height: windowHeight, width: windowWidth }}>
            <SearchInput
              setSearchValue={setSearchValue}
              setMarkerCoordinate={setMarkerCoordinate}
            />
            <Map
              setMarkerCoordinate={setMarkerCoordinate}
              markerCoordinate={markerCoordinate}
              searchValue={searchValue}
            />
            {
              searchValue ? (
                <DetailCard searchValue={searchValue} />
              ) : null
            }

          </View>
      </SafeAreaView>
    </Provider>

  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
