import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Form, Button } from "native-base"
import styles from '../Style'

export class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    // <TouchableHighlight 
    //   onPress={() => LinkingIOS.openURL('https://website.com')}>
    //   <Image 
    //     source={{uri: 'http://cf.ltkcdn.net/socialnetworking/images/std/168796-281x281-girl-swear-icon.png'}} 
    //     style={{height:50, width:50}} />
    // </TouchableHighlight>

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerHome}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://cluster-nicaragua.net/organizaciones/centro-de-informacion-e-innovacion-asociacion-de-desarrollo-social-de-nicaragua')}>
                        <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.scu.edu/engineering/labs--research/labs/frugal-innovation-hub/')}>
                        <Image source={require('../assets/frugalHub.png')} style={styles.frugalHubLogoHome}/>
                    </TouchableOpacity>

                </View>

                <View style={styles.pageContent}>

                    <View style={styles.form}>
                        <Text style={styles.title}>¡Bienvenidos!</Text>
                        <Form>
                            <Button full rounded success style={styles.blueButton}
                                onPress={() => this.props.navigation.navigate('Login')}>
                                <Text style={styles.buttonText}>Entrar</Text>
                            </Button>

                            <Button full rounded success style={[styles.blueButton, {marginTop: 20}]}
                                onPress={() => this.props.navigation.navigate('CreateNewAccount')}> 
                                <Text style={styles.buttonText}>Crear una cuenta</Text>
                            </Button>
                        </Form>
                    </View>

                </View>

                <View style={styles.footer}>
                </View>


            </View>
        );
    }
}

export default Welcome;