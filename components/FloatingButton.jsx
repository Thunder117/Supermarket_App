import React from "react";
import { TouchableOpacity, Animated, Platform } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const FloatingButton = ({ toggleModal, buttonOpacity }) => {
    
    const buttonStyle = [
        {
            position: 'absolute',
            bottom: 80,
            right: 20,
            backgroundColor: '#3498db',
            width: 60,
            height: 60,
            borderRadius: 30,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: buttonOpacity,
        },
        Platform.OS === 'android' ? { elevation: 7 } : { shadowColor: 'black', shadowOpacity: 0.3, shadowRadius: 3, shadowOffset: { width: 0, height: 3 } }
    ];

    return (
        <Animated.View style={buttonStyle}>
            <TouchableOpacity onPress={ toggleModal }>
                <AntDesign name="plus" size={28} color="white" />
            </TouchableOpacity>
        </Animated.View>
    );
}

export default FloatingButton;
