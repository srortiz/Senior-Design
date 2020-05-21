import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'

export class Inbox extends React.Component {
    static navigationOptions = {
        title: 'Inbox',
    };

    state = {
        mail: [
            {"idmail":1,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
            {"idmail":2,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
            {"idmail":3,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
            {"idmail":4,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":1,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
            {"idmail":5,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":0,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""},
            {"idmail":6,"to":"Rachael","from":"Sarah","community":"communidad 3","date":"2020-05-19 07:00:15","read":1,"urgent":1,"subject":"test email","body":"This is a test email","audio":"","image":""}
        ],
    };
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('Welcome')}>
                        <Text style={styles.logoutButton}>Cerrar sesión</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.pageContent}>
                    <View style={styles.subheader}>
                        <View style={styles.leftHeader}>
                            <Button style={styles.back}
                                onPress={() => this.props.navigation.navigate('WaterHome')}>
                                <Text style={styles.backText}>{'<'} Atrás</Text>
                            </Button>
                        </View>
                    </View>

                    <Text style={styles.title}>Inbox</Text>
                    
                    <View style={styles.inboxBody}>
                        <FlatList inverted data={this.state.mail} 
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) =>
                            <Button style={styles.message} onPress={() => { this.props.navigation.navigate('ViewIndividualMessage'); }}>
                                    <View style={styles.unread}>
                                    {item.read
                                        ? <Text></Text>
                                        : <Image source={require('../assets/blue-circle.png')} style={styles.circle}/>
                                    }
                                    </View>
                                    <View style={styles.content}>
                                        <Text style={styles.fromText}>{item.from}</Text>
                                        <Text>{item.subject}</Text>
                                    </View>
                                    <View style={styles.messageDate}>
                                        <Text>{item.date}</Text>
                                    </View>
                            </Button>}
                        />
                    </View>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default Inbox;