import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    // Item
    itemContainer: {
        width:'100%', 
        height:70, 
        marginTop:2,
        marginBottom:2,
        paddingTop: 2,
        paddingBottom: 2,
        flexDirection:"row",
    },
    itemButton: {
        backgroundColor:"white",
        width:"80%", 
        height:'100%', 
        paddingHorizontal:"10%",
        borderRadius:10,  
        alignSelf:'center', 
        justifyContent:'space-between', 
        alignItems:"center",
        flexDirection:"row"
    },
    itemText: {
        fontSize:20, 
        fontWeight:'500'
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
        width:'30%', 
        alignItems:'center', 
        justifyContent:'center', 
        height:'100%', 
        marginLeft:'-15%', 
        borderTopRightRadius:20, 
        borderBottomRightRadius:20, 
        marginRight:'10%', 
        backgroundColor:'#f93737'
    }
});

export default styles;
