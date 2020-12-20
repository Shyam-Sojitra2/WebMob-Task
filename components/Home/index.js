import React, { PureComponent } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './styles';

class Home extends PureComponent {
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <Button 
                color="#000"
                title="Go to  User List"
                onPress={() => navigation.navigate('UserList')}
            />
        )
    })
    render() {
        return (
            <View style={styles.homeDiv}>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1536011005/Pokemon_HomePage_Icon.png'}}
                    style={styles.homePageImage} />
                <Text style={styles.header}>Welcome to User API App</Text>
            </View>
        )
    }
}



export default Home;