import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {removeFavorite} from '../redux/favoritesSlice';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import hearIcon from '../assets/heart.png';

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);

  const handlePress = item => {
    dispatch(removeFavorite(item));
  };

  const Item = ({item}) => (
    <View style={styles.item}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri: item.avatar}} style={{width: 50, height: 50}} />
        <View style={{marginLeft: 8}}>
          <Text style={{color: '#000'}}>
            {item.first_name + ' ' + item.last_name}
          </Text>
          <Text style={{color: '#000', marginTop: 5}}>{item.email}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => handlePress(item)}>
        <Image
          source={hearIcon}
          style={{
            height: 30,
            width: 30,
            tintColor: 'red',
          }}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={Object.values(favorites)}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Favorites;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#d0d0dd',
    padding: 10,
  },
  item: {
    width: '100%',
    height: 80,
    backgroundColor: '#fff',
    alignSelf: 'center',
    marginTop: 5,
    borderRadius: 5,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
