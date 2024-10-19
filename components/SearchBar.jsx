import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const SearchBar = ({ value, onChangeText, onFocus }) => {
    return(
        <View style={styles.searchBar}>
            <TextInput
                placeholder={"Search..."}
                maxLength={20}
                style={{ fontSize: 20, height: '100%', width: '85%', fontFamily: 'OpenSans-Regular' }}
                value={value}
                onChangeText={onChangeText}
                onFocus={onFocus} 
            />
            <Ionicons name="search" size={32} color="gray" style={{ alignSelf: 'center' }} />
        </View>
    );
}

export default SearchBar;
