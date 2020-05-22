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
            phoneNum: "",
            password: "",
            reports: [],
        };
    }

    // getReports = () => {

    //     fetch("http://10.0.0.123:3004/reports", {
    //         method: 'GET',
    //         redirect: 'follow'
    //     })
    //         .then(response => response.json())
    //         .then(result => {   //console.log(result);
    //                             this.state.reports = result;
    //                             console.log(this.state.reports);
    //                             this.props.navigation.navigate('WaterHome', {
    //                                 report: this.state.reports,
    //                             })
    //                         })
    //         .catch(error => console.log('error', error));    
    // }




    correctLogin = async() => {

        var checkNum = this.state.phoneNum;

        await fetch("http://10.0.0.123:3004/users/" + checkNum, {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {   console.log(result);
                                //console.log(typeof result);
                                if (result.length == 0)
                                {
                                    console.log('no user exists with this phone number, cannot login');
                                    alert('Existe ningún usuario con este número de teléfono. Volver a intentar o crear una cuenta.');
                                }

                                else
                                {
                                    console.log('user exists');

                                    if (result[0].password == this.state.password)
                                    {
                                        this.props.navigation.navigate('WaterHome', {},
                                            {
                                                params: {phoneNumPass: this.state.reports}
                                            });
                                    }
                                    else
                                    {
                                        alert('No coinciden la contraseña y el número de teléfono.');
                                        return;
                                    }
                                }
                            })
            .catch(error => console.log('error', error));

    }

    // componentDidMount () {
    //     this.correctLogin();
    // }
    
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
                            keyboardType = "number-pad"
                            autoCorrect={false}
                            onChangeText={phoneNum => this.setState({ phoneNum })} />
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
                            onPress={() => this.correctLogin ()}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </Button>

                        <Button style={[styles.link, { marginTop: 20 }]}
                            onPress={() => this.props.navigation.navigate('Welcome')}>
                            <Text style={styles.underline}>¿Olvidó su contraseña?</Text>
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