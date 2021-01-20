import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Button,
} from 'react-native';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const StoreScreen = props => {
  return (
    <View style={styles.screen}>
      
          <View>
            <LinearGradient
              colors={['#1f9691', '#7ef5fb']}
              start={{ x: -0.5, y: 0.5 }}
              end={{ x: 1, y: 1 }}
              style={styles.product}
            >
              <TouchableOpacity
               
                onPress={
                    props.onPre
                 }
              >
                <View style={styles.txtc}>
                  <Text style={styles.txt}>{props.name}</Text>
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
       
    /*flex: 1,
    height: HEIGHT,
    width: WIDTH,
    backgroundColor: 'white',*/
  },
  product: {
    // flex: 0.5,
    //shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    // shadowRadius: 8,

    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: WIDTH / 2.2,
    height: HEIGHT / 5,
    marginTop: 20,
    //  borderWidth: 1,
    //borderColor: 'grey',
   elevation: 5,
    overflow: 'hidden',
    padding: 10,
    //  backgroundColor: 'skyblue',
  },
  txtc: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
  },
  txt: {
    fontSize: 20,
    color: 'black',
  },
});
export default StoreScreen;
