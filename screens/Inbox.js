import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'

export class Inbox extends React.Component {
    static navigationOptions = {
        title: 'Inbox',
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
                                onPress={() => this.props.navigation.navigate('Homepage')}>
                                <Text style={styles.backText}>{'<'} Atrás</Text>
                            </Button>
                        </View>
                    </View>

                    <Text style={styles.title}>Inbox</Text>

                    <Button
                        onPress={() => { this.props.navigation.navigate('ViewIndividualMessage'); }}>
                        <Text>See one message.</Text>
                    </Button>

                    <View style={styles.inboxBody}>
                        <View style={styles.message}>
                            <View style={styles.unread}>
                                <View style={styles.circle}></View>
                            </View>
                            <View style={styles.messageSummary}></View>
                            <View style={styles.messageDate}></View>
                        </View>
                    </View>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default Inbox;