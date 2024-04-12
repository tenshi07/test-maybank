import React, { useRef, useState } from 'react'
import {
    Text,
    StyleSheet,
    View,
    Image,
    Alert,
    TouchableOpacity,
} from 'react-native';
import util from 'util';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ClearButton from '../asset/clearButton.png';
import { selectAutocompleteData } from '../utils/reducerAction';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 16,
        zIndex: 2,
        width: '98%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 4,
    },
    clearButtonContainer: {
        position: 'absolute',
        zIndex: 4,
        right: 0,
        top: 11,
        paddingRight: 8,
    }
});

const SearchInput = (props) => {
    const googleRef = useRef();
    const { setSearchValue, setMarkerCoordinate } = props;
    const clearButtonPress = () => {
        googleRef.current?.clear();
        setSearchValue(null);
    }
    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                ref={googleRef}
                placeholder='Search'
                GooglePlacesDetailsQuery={{ fields: "formatted_address,name,geometry" }}
                renderRightButton={() => <TouchableOpacity style={styles.clearButtonContainer} onPress={clearButtonPress}><Image source={ClearButton} style={{ height: 20, width: 20 }} /></TouchableOpacity>}
                fetchDetails={true} // you need this to fetch the details object onPress
                onPress={(data, details = null) => {
                    setSearchValue({
                        latitude: details?.geometry?.location?.lat,
                        longitude: details?.geometry?.location?.lng,
                        formattedAddress: details?.formatted_address,
                        name: details?.name,
                    });
                    setMarkerCoordinate({
                        latitude: details?.geometry?.location?.lat,
                        longitude: details?.geometry?.location?.lng
                    })
                    selectAutocompleteData(details)
                }}
                onFail={(err) => console.log('error', err)}
                query={{
                    key: 'API KEY HERE',
                    language: 'en',
                }}
                styles={{
                      textInput: {
                        color: '#000000',
                      },
                      description: {
                        color: '#000000',
                      },
                  }}
            />
        </View>
    )
}

const mapStateToProps = state => ({
    autocompleteData: state.autocompleteData,
});

export default connect(mapStateToProps, { selectAutocompleteData })(SearchInput);
// export default SearchInput;

