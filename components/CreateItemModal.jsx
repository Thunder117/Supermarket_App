import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button } from "react-native"; 
import { Picker } from "@react-native-picker/picker";
import styles from './styles';

const CreateItemModal = ({ modalVisible, setModalVisible, items, setItems, DEPARTMENT_ORDER }) => {
    const [itemName, setItemName] = useState('');
    const [selectedDepartment, setSelectedDepartment] = useState(DEPARTMENT_ORDER[0]); // Default to the first department

    const handleCreateItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * 1000000), // Generate a random integer ID (0 to 999999)
            name: itemName,
            department: selectedDepartment
        };
    
        setItems(prevItems => [...prevItems, newItem]); // Update items
        setModalVisible(false); // Close the modal
        setItemName(''); // Clear the item name
        setSelectedDepartment(DEPARTMENT_ORDER[0]); // Reset to the first department
        console.log(newItem);
    };    

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                    <Text style={styles.modalTitle}>Create New Item</Text>
                    <TextInput
                        placeholder="Item Name"
                        value={itemName}
                        onChangeText={setItemName}
                        style={styles.modalInput}
                    />
                    <Picker
                        selectedValue={selectedDepartment}
                        onValueChange={(itemValue) => setSelectedDepartment(itemValue)}
                        style={{
                            height: 50,
                            width: "100%",
                            marginBottom: 20,
                        }}
                    >
                        {DEPARTMENT_ORDER.map((department) => (
                            <Picker.Item key={department} label={department} value={department} />
                        ))}
                    </Picker>
                    <Button title="Create" onPress={handleCreateItem} />
                    <Button title="Cancel" onPress={() => setModalVisible(false)} color="red" />
                </View>
            </View>
        </Modal>
    );
};

    

export default CreateItemModal;