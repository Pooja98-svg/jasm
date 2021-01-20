import * as ProductAction from '../../store/action/ProductAction';
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
import ProductItem from '../../components/Productitem';

const ProductScreen = props => {
    //const stores = useSelector(state => state.StoreReducer.store)
    const displayproduct=useSelector(state =>state.ProductReducer.products)
    console.log ("product",displayproduct)
    //const id=props.route.params.id;
    const id=props.route.params.id;
    const dispatch = useDispatch();

    /*const loadstore = useCallback(async () => {
        try {
          await dispatch(storeaction.fetchStores());
        } catch (err) {
          console.log;
        }
      }, [dispatch]);*/
      const loadproduct1 = useCallback(async () => {
        try {
          await dispatch(ProductAction.fetchProduct(id));
        } catch (err) {
          console.log;
        }
      }, [dispatch]);
      useEffect(() => {
        loadproduct1();
        //categ();
      }, []);
      return (
        <View style={{marginBottom:130}}>
         
              <FlatList 
              data= {displayproduct}
              num numColumns={2}
              keyExtractor={item => item.id}
              renderItem={itemData  => (  
                 <ProductItem
                 Image={itemData.item.productimage}
                name={itemData.item.productname}
                categoryname={itemData.item.productcategoryname1}
              // detail={itemData.item.productid}
             /*    price={item.price}
                cartItems={cartItem}
                 style={{ flex: 1 }}
               imageUrl={item.product.image}
                 quan={item.quan}
                addedCartIds={addedCartIds}
                 id={item.product.id}
                 index={index}
                        */
              /*   <Text>
                      {itemData.item.productname}
                      </Text>*/
                      
            
              
              
              />
              )}
        />
          </View>
      )
      
 }

export default ProductScreen;