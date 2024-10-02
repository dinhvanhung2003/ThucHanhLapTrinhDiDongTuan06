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
} from 'react-native';

const DATA = [
  {
    id: '0',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('./assets/ca_nau_lau.png'),
    shop: 'Devang',
  },
  {
    id: '1',
    title: '1Kg Khô gà bơ tỏi...',
    image: require('./assets/ga_bo_toi.png'),
    shop: 'LTD Food',
  },
  {
    id: '2',
    title: 'Xe cần cẩu đa năng',
    image: require('./assets/xa_can_cau.png'),
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '3',
    title: 'Đồ chơi dạng mô hình',
    image: require('./assets/do_choi_dang_mo_hinh.png'),
    shop: 'Thế giới đồ chơi',
  },
  {
    id: '4',
    title: 'Lãnh đạo giản đơn',
    image: require('./assets/lanh_dao_gian_don.png'),
    shop: 'Minh Long Book',
  },
  {
    id: '5',
    title: 'Hiểu lòng trẻ con',
    image: require('./assets/hieu_long_con_tre.png'),
    shop: 'Minh Long Book',
  },
  {
    id: '6',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('./assets/ca_nau_lau.png'),
    shop: 'The gioi do choi',
  },
  {
    id: '7',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('./assets/ca_nau_lau.png'),
    shop: 'The gioi do choi',
  },
  {
    id: '8',
    title: 'Ca nấu lẩu, nấu mì mini...',
    image: require('./assets/ca_nau_lau.png'),
    shop: 'The gioi do choi',
  },
];

const Item = ({ title, shop, image }) => (
  <View style={styles.item}>
 
    <Image
      style={styles.image}
      source={image}
    />
    
 
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.shopContainer}>
        <Text style={styles.shopLabel}>Shop</Text>
        <Text style={styles.shop}>{shop}</Text>
      </View>
    </View>


    <TouchableOpacity style={styles.buttonChat}>
      <Text style={styles.buttonChatText}>Chat</Text>
    </TouchableOpacity>
  </View>
);

const renderSeparator = () => (
  <View style={styles.separator} />
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
    
      <View style={styles.navbar}>
        <Image source={require('./assets/ant-design_arrow-left-outlined.png')} />
        <Text style={styles.navbarText}>Chat</Text>
        <Image source={require('./assets/bi_cart-check.png')} />
      </View>

     
      <View style={styles.intro}>
        <Text style={styles.introText}>
          Bạn có thắc mắc với sản phẩm vừa xem đừng ngại{"\n"}chát với shop!
        </Text>
      </View>
      
      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <Item title={item.title} shop={item.shop} image={item.image} />}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={renderSeparator}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ECECEC',
    marginTop: StatusBar.currentHeight || 0,
  },
  navbar: {
    backgroundColor: '#1BA9FF',
    height: 42,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  navbarText: {
    color: 'white',
    fontSize: 18,
  },
  intro: {
    backgroundColor: '#ECECEC',
    padding: 13,
    justifyContent: 'center',
    alignItems: 'center',
  },
  introText: {
    textAlign: 'left',
  },
  item: {
   
   
    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'left',
  },
  image: {
    resizeMode: 'contain',
    height: 80,
    width: 80,
  },
  textContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 15,
  },
  shopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  shopLabel: {
    color: '#7D5B5B',
  },
  shop: {
    fontSize: 13,
    marginLeft: 5,
  },
  buttonChat: {
    backgroundColor: '#F31111',
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight:30
  },
  buttonChatText: {
    color: 'white',
    textAlign: 'center',
  },
  separator: {
    height: 1,
    backgroundColor: '#cccccc',
    marginVertical: 10,
  },
});

export default App;
