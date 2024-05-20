import React from 'react';
import { TextInput, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ value, onChangeText, onFocus }) => {
    return(
        <View style={{
            backgroundColor: "white",
            width: "90%",
            height: 60,
            alignSelf: 'center',
            justifyContent: 'center',
            borderRadius: 50,
            paddingLeft: 30,
            paddingRight: 10,
            marginTop: 10,
            marginBottom: 10,
            flexDirection: "row"
        }}>
        <TextInput
            placeholder={"Search..."}
            maxLength={20}
            style={{ fontSize: 20, height: '100%', width: '85%' }}
            value={value}
            onChangeText={onChangeText}
            onFocus={onFocus} // Add onFocus event handler
        />
        <Ionicons name="search" size={32} color="gray" style={{ alignSelf: 'center' }} />
        </View>
    );
}

export default SearchBar;
