import React from 'react'
import { View, Text, Image } from 'react-native'
import { Item, Form, Input, Button, Label } from "native-base"
import styles from '../Style'

export class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    Login = (email, password) => {
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(user => {
                    console.log(user);
                });
        } catch (error) {
            console.log(error.toString(error));
        }
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                </View>

                <View style={styles.pageContent}>
                    <View style={styles.form}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Numero de telefono móvil</Label>
                            <Input
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={email => this.setState({ email })} />
                        </Item>

                        <Item floatingLabel>
                            <Label>Contraseña</Label>
                            <Input
                            secureTextEntry={true}
                            autoCapitalize="none"
                            autoCorrect={false}
                            onChangeText={password => this.setState({ password })} />
                        </Item>

                        <Button full rounded success style={styles.blueButton}
                            onPress={() => { this.Login(this.state.email, this.state.password); this.props.navigation.navigate('Homepage'); }}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Button>

                        <Button style={[styles.link, { marginTop: 20 }]}
                            onPress={() => this.props.navigation.navigate('Welcome')}>
                            <Text style={styles.underline}>Forgot my password!</Text>
                        </Button>

                        <Button style={styles.link}
                            onPress={() => this.props.navigation.navigate('CreateNewAccount')}>
                            <Text style={styles.underline}>¿Es nuevo aquí? Cree una cuenta.</Text>
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

export default Login;