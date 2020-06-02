import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList, Linking } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'
import { CheckBox } from 'react-native-elements'

export class GiveAdminRights extends React.Component {
    static navigationOptions = {
        title: 'GiveAdminRights',
    };

    state = {
        data: [],
    };

    fetchData = async() => {
        const response = await fetch ('http://10.0.0.123:3004/users');
        const users = await response.json();
        this.setState({data: users});
        console.log(this.state.data[0].date);
    }

    componentDidMount() {
        this.fetchData();
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://cluster-nicaragua.net/organizaciones/centro-de-informacion-e-innovacion-asociacion-de-desarrollo-social-de-nicaragua')}>
                        <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.scu.edu/engineering/labs--research/labs/frugal-innovation-hub/')}>
                        <Image source={require('../assets/frugalHub.png')} style={styles.frugalHubLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.logoutButton}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pageContent}>

                    <Text style={styles.adminRightsTitle}>Give Admin Rights</Text>
                    <Form style={styles.waterForm}>
                        <Text style={styles.subTitle}>Users</Text>
                        <View style={styles.subsubTitle}>
                            <Text style={styles.requestedAccess}>Requested{'\n'}Access</Text>
                            <Text style={styles.giveAccess}>Give{'\n'}Access</Text>
                        </View>

                        <FlatList inverted data={this.state.data} 
                            getItemLayout={(data, index) => (
                                {length: 100, offset: 100 * index, index}
                            )}
                            initialScrollIndex={this.state.data.length - 1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => 
                            <View style={styles.adminRightsUsers}>
                                <View style={styles.names}>
                                    <Text style={styles.adminRightsUserName}>{item.firstname} </Text>
                                    <Text style={styles.adminRightsUserName}>{item.lastname}</Text>
                                </View>
                                <View style={styles.checkBoxes}>
                                    <CheckBox
                                        containerStyle={styles.checkbox}
                                        checkedIcon='check-square-o'
                                        uncheckedIcon='square-o'
                                        checked={this.state.checked}
                                        onPress={() => this.setState({checked: !this.state.checked, adminRights: !this.state.adminRights})}
                                    />

                                    <CheckBox
                                        containerStyle={styles.checkbox}
                                        checkedIcon='check-square-o'
                                        uncheckedIcon='square-o'
                                        checked={this.state.checked}
                                        onPress={() => this.setState({checked: !this.state.checked, adminRights: !this.state.adminRights})}
                                    />
                                </View>
                            </View>}
                        />
                    </Form>

                    <TouchableOpacity style={styles.GiveAdminRightsSubmit}
                            onPress={() =>  this.props.navigation.navigate('WaterHomeBigAdmin')}>
                            <Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Save Changes</Text>
                    </TouchableOpacity> 
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default GiveAdminRights;