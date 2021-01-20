/*import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  FlatList,
} from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
const ProductItem = props => {
  let TouchableCmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <View style={styles.imagecontainer}>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://www.idfreshfood.com/wp-content/uploads/2017/09/Panner-3.png',
          }}
        />
      </View>
      <View style={styles.detail}>
        <Text style={styles.title}>{props.title}</Text>
        {/*<Text style={styles.price}>${props.price.toFixed(2)}</Text>*/

      /*</View>

      {props.addedCartIds.find(item => {
        if (props.id === item) {
          return true;
        }
      }) ? (
        <View style={styles.quan}>
          <TouchableOpacity style={styles.plus} onPress={props.sub}>
            <AntDesign name="minuscircleo" size={15} color="black" />
          </TouchableOpacity>
          <View>
            {props.cartItems !== undefined && (
              <FlatList
                data={props.cartItems}
                keyExtractor={item => item.productId.toString()}
                listKey={item => item.productId.toString()}
                style={{ flex: 1 }}
                renderItem={itemData => (
                  <View style={{ justifyContent: 'center' }}>
                    {itemData.item.productId === props.id && (
                      <View>
                        <View>
                          <Text>{itemData.item.quantity}</Text>
                        </View>
                      </View>
                    )}
                  </View>
                )}
              />
            )}
          </View>
          <TouchableOpacity style={styles.plus} onPress={props.add}>
            <AntDesign name="pluscircleo" size={15} color="black" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.addToCart}
          onPress={props.add}
          activeOpacity={0.8}
        >
          <Text>Add to Cart</Text>
          <FontAwesome5 name="cart-plus" size={15} color="black" />
        </TouchableOpacity>
      )}
      { <View style={styles.action}>
           <TouchableOpacity onPress={props.onViewDetail}>
             <Text>View Details</Text>
           </TouchableOpacity>
           <TouchableOpacity onPress={props.onAddToCart}>
             <Text>To Cart</Text>
           </TouchableOpacity>
         </View> }
    </View>
  );
};
const styles = StyleSheet.create({
  product: {
    //   flexGrow: 1,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#f6f6f6',
    height: HEIGHT / 3.2,
    width: WIDTH / 2.1,
    margin: 4,
    marginTop: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    // alignContent: 'center',
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  touchable: {
    // borderRadius:10,
    overflow: 'hidden',
  },
  imagecontainer: {
    // flex: 1,
    width: '90%',
    height: '70%',
    overflow: 'hidden',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: -3,
    // marginLeft: 6,
    // marginBottom: -1,
    // marginLeft: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 14,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    height: '10%',
    backgroundColor: 'lightgreen',
  },
  quan: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7%',
    //   padding: 10,
    margin: 5,
    //backgroundColor: 'green',
    overflow: 'hidden',
    width: '90%',
  },
  addToCart: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '7%',
    padding: 10,
    margin: 5,
    backgroundColor: '#f6f6f6',
    overflow: 'hidden',
    width: '70%',
    borderRadius: 15,
    padding: 10,
    borderWidth: 0.2,
    borderColor: 'lightgrey',
    elevation: 2,
  },
  detail: {
    alignItems: 'center',
    height: '8%',
    padding: 10,
    flexDirection: 'row',
    // backgroundColor: 'lightgrey',
    width: '90%',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  plus: {
    //  backgroundColor: 'lightgrey',
    height: 18,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
});
export default ProductItem;*/
import React, { useCallback, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import {
  FlatList,
  Image,
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
const ProductScreen = props => {
  return (
    <View style={styles.screen}>
      
              <View style={styles.product}>
       <View style={styles.imagecontainer}>
         <Image
           style={styles.image}
           source={{
             uri:
               'https://www.idfreshfood.com/wp-content/uploads/2017/09/Panner-3.png',
           }}
         />
       </View>
     

              <TouchableOpacity
               
                onPress={
                    props.onPre
                 }
              >
                <View style={styles.txtc}>
                  <Text style={styles.txt}>{props.name}</Text>
                  <Text style={styles.text}>{props.categoryname}</Text>
                <Text style={styles.text}>{props.price}</Text>
                </View>
              </TouchableOpacity>
           
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
  imagecontainer: {
    // flex: 1,
    width: '90%',
    height: '70%',
    overflow: 'hidden',
    // backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: -3,
    // marginLeft: 6,
    // marginBottom: -1,
    // marginLeft: 3,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default ProductScreen;
/*</View>
<View>
<LinearGradient
  colors={['#1f9691', '#7ef5fb']}
  start={{ x: -0.5, y: 0.5 }}
  end={{ x: 1, y: 1 }}
  style={styles.product}
>
*/ //</LinearGradient>