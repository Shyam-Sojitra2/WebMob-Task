import React, { PureComponent } from 'react';
import UserCard from '../UserCard';
import {  FlatList, ActivityIndicator } from 'react-native';
import styles from './styles';

export default class UserList extends PureComponent {
    state = {
        UserList: [],
        loading: true
    }
    static navigationOptions = {
        title: 'List of User'
    }
  
    async componentDidMount() {
        try {
            const UserApiCall = await fetch('https://randomuser.me/api');
            const User = await UserApiCall.json();
            this.setState({UserList: User.results, loading: false});
        } catch(err) {
            console.log("Error fetching data-----------", err);
        }
    }
    render() {
        const { UserList, loading } = this.state;
        const { navigation } = this.props;
       
        if(!loading) {
            return <FlatList 
                    data={UserList}
                    renderItem={(data) => <UserCard {...data.item} navigation={navigation} />}
                    keyExtractor={(item) => item.name} 
                    />
        } else {
            return <ActivityIndicator />
        }
    }
}