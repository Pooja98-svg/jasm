import * as CategoryAction from '../../store/action/CategoryActions';
import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  Button,
  ScrollView,
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

const Categoryscreen = props => {
    //const stores = useSelector(state => state.StoreReducer.store)
    const category=useSelector(state =>state.CategoryReducer.categories)
    console.log ("category",category)
    const id=props.route.params.id;
    const dispatch = useDispatch();
    /*const loadstore = useCallback(async () => {
        try {
          await dispatch(storeaction.fetchStores());
        } catch (err) {
          console.log;
        }
      }, [dispatch]);*/
      const loadstore1 = useCallback(async () => {
        try {
          await dispatch(CategoryAction.fetchcategory(id));
        } catch (err) {
          console.log;
        }
      }, [dispatch]);
      useEffect(() => {
        loadstore1();
        //categ();
      }, []);
      return (
        <View>
         
              <FlatList 
              data= {category}
              keyExtractor={item => item.id}
              renderItem={itemData => (
                  <View>
                      <Text>
                      {itemData.item.categoryName}
                      </Text>
                      <Button title= "display"
                      onPress = { () => {
                        props.navigation.navigate('ProductScreen',{
                          id:itemData.item.id
                      
                
                        })
                      }}
              />
      
          </View>
      )
      
 }
 />
 </View>
      )
}
export default Categoryscreen;