import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    // Item
    itemContainer: {
        width:'100%', 
        height:80, 
        marginTop:10
    },
    itemButton: {
        backgroundColor:"#f5f5f6", 
        width:"90%", 
        borderRadius:20,  
        height:'100%', 
        alignSelf:'center', 
        justifyContent:"center", 
        alignItems:"center"
    },
    itemText: {
        fontSize:20, 
        fontWeight:'500'
    },
    itemRightSwipe:{
        width:'30%', 
        alignItems:'center', 
        justifyContent:'center', 
        height:'100%', 
        marginLeft:'-10%', 
        borderTopRightRadius:20, 
        borderBottomRightRadius:20, 
        marginRight:'5%', 
        backgroundColor:'#f93737'
    }
});

export default styles;
