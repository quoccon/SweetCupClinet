import React, { useState } from 'react';
import { View, TextInput, StyleSheet,SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
        onSubmitEditing={handleSearch}
      />
      <Ionicons
        name="search"
        size={24}
        color="#ff0000"
        onPress={handleSearch}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginVertical: 10,
    marginHorizontal: 30,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginRight: 10,
  },
});

export default SearchBar;
