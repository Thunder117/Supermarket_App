import React from "react";
import { TouchableOpacity, Animated, Platform } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const FloatingButton = ({ addNewItem, buttonOpacity }) => {
    return (
        <Animated.View
            style={[
                {
                    position: 'absolute',
                    bottom: 20,
                    right: 20,
                    backgroundColor: 'green',
                    width: 60,
                    height: 60,
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    opacity: buttonOpacity,
                },
                Platform.OS === 'android' ? { elevation: 7 } : { shadowColor: 'black', shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { width: 0, height: 3 } }
            ]}
        >
            <TouchableOpacity onPress={addNewItem}>
                <AntDesign name="plus" size={28} color="white" />
            </TouchableOpacity>
        </Animated.View>
    );
}

export default FloatingButton;
