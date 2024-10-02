import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';

const DATA = [
  {
    id: '0',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/giacchuyen1.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '1',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/daynguon1.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '2',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/dauchuyendoi1.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '3',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/dauchuyendoi2.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '4',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/daucam1.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '5',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/carbusbtops2.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '6',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/giacchuyen1.png'),
    price: '69.900 đ',
    sale:39
  },
  {
    id: '7',
    title: 'Cáp chuyển từ Cổng USB sang PS2...',
    image: require('./assets/giacchuyen1.png'),
    price: '69.900 đ',
    sale:39
  },
];
const Item = ( props) => (
  <View style={styles.item}>
    <View>
      <Image
        style={{
          resizeMode: 'contain',
          height: 90,
          width: 155,
        }}
        source={props.image}
      />
    </View>
    <View>
      <Text style={styles.title}>{props.title}</Text>
        <Image
        
        source={require('./assets/Group4.png')}
      />
      <View style={{
        flexDirection:'row',
        gap:10,
        alignItems:'center'
      }}>
       <Text style={styles.shop}>{props.price}</Text>
       <Text style={{
         color:'gray'
       }}>-{props.sale}%</Text>
      </View>
     
    </View>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.navbar}>
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')} />
         <View style={styles.searchSection}>
          <Image
            source={require('./assets/whh_magnifier.png')} 
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchInput}
            placeholder="Dây cáp usb "
            placeholderTextColor="#ccc" 
          />
        </View>
        <Image source={require('./assets/bi_cart-check.png')} />
        <Image source={require('./assets/Group2.png')} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => (
            <Item title={item.title} price={item.price} image={item.image} sale={item.sale} />
          )}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },  navbar: {
    backgroundColor: '#1BA9FF',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap:14
  },
  searchInput: {
    flex: 1,
    height: 30,
    backgroundColor: '#fff', 
    paddingHorizontal: 10, 
    marginHorizontal: 10, 

    color:'gray'
  },
   searchSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width:100,
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 10,
    display: 'grid',
    justifyContent: 'space-between',
    gap: 10,
    flex: 4,
  },
  title: {
    fontSize: 15,
  },
  shop: {
    fontSize: 13,
    textAlign: 'left',
    fontWeight:'bold'
  },
});

export default App;
