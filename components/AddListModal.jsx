import React, { useState } from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Button } from 'react-native';
import styles from './styles';

const AddListModal = ({ modalVisible, setModalVisible, onCreateList }) => {
    const [listName, setListName] = useState('');

    const handleCreateList = () => {
        if (listName.trim() === '') return; // Avoid creating a list with an empty name
        onCreateList(listName); // Pass the new list name to the parent component
        setListName(''); // Reset the input field
        setModalVisible(false); // Close the modal
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContentSmall}>
                    <Text style={styles.modalTitle}>Create a New List</Text>
                    <TextInput
                        style={styles.modalInput}
                        placeholder="Enter list name"
                        value={listName}
                        onChangeText={setListName}
                    />
                    <View style={styles.modalButtonContainer}>
                        <TouchableOpacity 
                            style={styles.modalButton} 
                            onPress={() => setModalVisible(false)} 
                        >
                            <Text style={{ color: 'white', fontSize: 18 }}>Cancel</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.modalButton}                             
                            onPress={() => setModalVisible(false)} 
                        >
                            <Text onPress={handleCreateList} style={{ color: 'white', fontSize: 18 }}>Create</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default AddListModal;