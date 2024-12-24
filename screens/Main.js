import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native';

const Main = ({ navigation }) => {
    return(
       <View style={styles.container}>
            <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                <Text style={styles.heading}>Contacts</Text>
            </View>
            

            <FlatList
                data={[1,2,3]}
                keyExtractor={(item, index) => index}
                style={{ flex: 1, marginTop: 20 }}
                showsVerticalScrollIndicator={ false }
                contentContainerStyle={{ paddingHorizontal: 20 }}
                renderItem={({item}) => <CallingItem item={item} />}
            />
       </View>
    )
}


const CallingItem = () => {
    const navigation = useNavigation();

    return(
        <View style={styles.callContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image
                    source={{ uri: 'https://i.pravatar.cc/200?u=auxStream' }}
                    style={ styles.avatar }
                />
                
                <View style={{ marginLeft: 15 }}>
                    <Text style={styles.name}>John Doe</Text>
                    <Text style={styles.username}>@jdoe</Text>
                    <Text style={styles.time}>1 hour ago</Text>
                </View>
            </View>

            <TouchableOpacity 
                onPress={() => navigation.navigate('Call')}
                style={styles.callBtn}
            >
                <Text>C</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111111'
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    callContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 18,
        borderRadius: 10,
        marginBottom: 10,
        backgroundColor: 'rgba(255,255,255,0.07)'
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    name: {
        fontWeight: 'bold',
        color: 'white'
    },
    username: {
        fontSize: 12,
        marginTop: 0
    },
    time: {
        fontSize: 9,
        marginTop: 6
    },
    callBtn: {
        width: 42,
        height: 42,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ababab'
    }
});

export default Main;