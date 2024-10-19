import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    itemContainer: {
        width:'100%', 
        height:60,
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
        fontSize: 18, 
        fontFamily: 'OpenSans-Regular'
    },
    itemTextCrossed: {
        paddingHorizontal:40,
        fontSize: 18,
        fontFamily: 'OpenSans-Regular',
        textDecorationLine: 'line-through',
        color: 'gray'
    },
    departmentText: {
        fontSize: 24, 
        marginVertical: 10, 
        marginHorizontal: 20, 
        fontFamily: 'OpenSans-SemiBold',
        color: 'gray',
        textTransform: 'uppercase'
    },
    listText: {
        paddingHorizontal:40,
        fontSize:20, 
        fontFamily: 'OpenSans-Regular'
    },
    listContainer: {
        width:'100%', 
        height:90
    },
    rightSwipe:{
        width:'20%', 
        alignItems:'center', 
        justifyContent:'center', 
        height:'100%', 
        backgroundColor:'#f93737'
    },
    divider: {
        height: 1, // Height of the divider line
        backgroundColor: '#eaecee', // Color of the divider line
        width:'85%'
    },
    searchBar: {
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
        flexDirection: "row",
        borderWidth: 1,
        borderColor: '#eaecee'
    }
});

export default styles;
