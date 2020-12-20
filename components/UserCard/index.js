import React from 'react';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import styles from './styles';
const UserCard = ({name}) => {
    return (
        <TouchableOpacity style={{backgroundColor: 'transparent'}}>
            <View  style={styles.listItemContainer}>
                <Text style={styles.UserItemHeader}>{name}</Text>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}} 
                        style={styles.UserImage}/>
            </View>
        </TouchableOpacity>
    )
}


export default UserCard;