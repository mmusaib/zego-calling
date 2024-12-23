import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Main = ({ navigation }) => {
    return(
        <TouchableOpacity onPress={() => navigation.navigate('Call') }>
            <Text style={{fontSize:100, color: '#222222'}}>Call</Text>
        </TouchableOpacity>
        
    )
}
export default Main;