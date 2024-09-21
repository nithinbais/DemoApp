import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, removeFavorite} from '../redux/favoritesSlice';
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

const Home = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [data, setData] = useState([]);

  const fetchapi = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=2').then(
        res => res.json(),
      );
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  const handlePress = item => {
    if (favorites[item.id]) {
      dispatch(removeFavorite(item));
    } else {
      dispatch(addFavorite(item));
    }
  };

  useEffect(() => {
    fetchapi();
  }, []);

  const Item = ({item}) => {
    const isFavorite = !!favorites[item.id];

    return (
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
              tintColor: isFavorite ? 'red' : '#000',
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item item={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Home;

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
