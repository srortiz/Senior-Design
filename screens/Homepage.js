import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { Form, Button } from "native-base"
import styles from '../Style'

export class Homepage extends React.Component {
    static navigationOptions = {
        title: 'Homepage',
    };

    logout() {
        firebase.auth().signOut()
            .then(() => {
            this.setState({
                user: null
            });
        });
    }

    constructor(props) {
        super(props);
        this.state = {
            fname: '',
        };
    }

    render() { 
        //const usersRef = Database.ref('users/');
        //const user = firebase.auth().currentUser;

        /*if (user != null) {
            var email = user.email;  
            var uid = user.uid;  
            console.log("email = " + email);
            console.log("uid = " + uid);

            var query = usersRef.orderByChild('email').equalTo(email);
            query.once('value', function(snapshot) {
                    snapshot.forEach(function(child) {
                        console.log(child.key);
                        let firstName = child.val().fname;
                        console.log('first name = ' + firstName);
                        // this.setState({
                        //     fname: firstName,
                        // });
                    });
            });

            // setTimeout(() => {
            //     console.log("first name after delay = " + this.state.fname);
            // }, 5000);
        }*/

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

                    <Form style={styles.form}>
                    {/*<Text style={styles.title}>Welcome, {email} {uid}</Text>*/}
                    <Text style={styles.title}>¡Bienvenidos!</Text>
                    <Button full rounded success style={styles.blueButton}
                        onPress={() => this.props.navigation.navigate('WaterHome')}>
                        <Text style={styles.buttonText}>AGUA</Text>
                    </Button>

                    <Button full rounded success style={[styles.blueButton, { marginTop: 20 }]} 
                        onPress={() => this.props.navigation.navigate('WeatherHome')}> 
                        <Text style={styles.buttonText}>CLIMA</Text>
                    </Button>
                    </Form>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default Homepage;