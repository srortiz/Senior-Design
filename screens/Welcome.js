import React from 'react'
import { View, Text, Image } from 'react-native'
import { Form, Button } from "native-base"
import styles from '../Style'

export class Welcome extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
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