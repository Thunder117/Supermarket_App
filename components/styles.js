import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    // Item
    itemContainer: {
        width:'100%', 
        height:70,
        flexDirection:"row",
    },
    itemButton: {
        backgroundColor:"white",
        minWidth:'100%', 
        height:'100%',
        alignSelf:'center', 
        alignItems:"center",
        flexDirection:"row",
        justifyContent:'space-between'
    },
    itemText: {
        paddingHorizontal:40,
        fontSize:20, 
        fontWeight:'500',
    },
    listContainer: {
        width:'100%', 
        height:100, 
        marginTop:4,
        marginBottom:4,
        paddingTop: 2,
        paddingBottom: 2
    },
    rightSwipe:{
        width:'20%', 
        alignItems:'center', 
        justifyContent:'center', 
        height:'100%', 
        backgroundColor:'#f93737'
    }
});

export default styles;
