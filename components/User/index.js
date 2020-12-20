import React, { PureComponent } from 'react'; 
import { View, Text, Image } from 'react-native';
import styles from './styles';


export default class User extends PureComponent {
    
    render() {
        const { navigation } = this.props;
        return (
            <View>
                <Image source={{uri: 'https://res.cloudinary.com/aa1997/image/upload/v1535930682/pokeball-image.jpg'}}
                        style={styles.UserImage} />
                <Text style={styles.nameOfUser}>{navigation.getParam('name', 'Name of User')}</Text>
            </View>
        );
    }
}

/*constructor(props) {
    super(props);
this.state = {
    person:{
      name: props.route.params.name,
      phone: props.route.params.phone,
    },
    textMessage: ''
};
}*/
