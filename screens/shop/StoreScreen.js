import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import StoreItem from '../../components/StoreItems';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
  AsyncStorage,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import * as storeaction from '../../store/action/StoreActions';

const StoreScreen = props => {
    const stores = useSelector(state => state.StoreReducer.store)
    //const category=useSelector(state =>state.CategoryReducer.categories)
    //console.log ("category",category)
    const dispatch = useDispatch();
    const loadstore = useCallback(async () => {
        try {
          await dispatch(storeaction.fetchStores());
        } catch (err) {
          console.log;
        }
      }, [dispatch]);
    /*  const loadstore1 = useCallback(async () => {
        try {
          await dispatch(CategoryAction.fetchcategory());
        } catch (err) {
          console.log;
        }
      }, [dispatch]);*/
      useEffect(() => {
        loadstore();
      //  loadstore1();
      }, []);
      return (
        <View style={{marginTop:200}}> 
         
              <FlatList 
              
              data= {stores}
              numColumns={2}
              keyExtractor={item => item.storeCode}
              renderItem={itemData => ( 
                  <StoreItem
                    name={itemData.item.storeName}
                    id={itemData.item.id}

                    onPre={() => {
                      console.log('pressed');
                      props.navigation.navigate('Categoryscreen', {
                        id: itemData.item.id,
                      });
                    }
                  }
                    />
              )}
              
            />
              </View>
      
              )
                }  


 export default StoreScreen;