import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card, WhiteSpace, WingBlank } from '@ant-design/react-native'

const styles = StyleSheet.create({
  container: {
      position: 'absolute',
      bottom: 30,
      zIndex: 2,
      width: '98%',
      // flex: 1,
      // flexDirection: 'row',
      justifyContent: 'center',
      // alignItems: 'center',
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

function DetailCard(props) {
  const { searchValue } = props;
  return (
    <View style={styles.container}>
      <WingBlank size="lg">
          <Card>
            <Card.Header
              title={searchValue.name}
              thumbStyle={{ width: 30, height: 30 }}
              thumb="https://picsum.photos/200/300"
            />
            <Card.Body>
              <View style={{ height: 80 }}>
                <Text style={{ marginLeft: 16, color: '#000000' }}>{searchValue.formattedAddress}</Text>
              </View>
            </Card.Body>
            <Card.Footer
              content={`${searchValue.latitude}, ${searchValue.longitude}`}
            />
          </Card>
        </WingBlank>
    </View>
  )
}

export default DetailCard
