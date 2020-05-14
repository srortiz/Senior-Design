import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'

export class WaterHome extends React.Component {
    static navigationOptions = {
        title: 'WaterHome',
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

                        <View style={styles.rightHeader}>
                            <Button style={styles.add}
                                onPress={() => this.props.navigation.navigate('CreateNewWaterQualityReport')}>
                                <Text style={styles.addText}>+</Text>
                            </Button>
                            <Button style={styles.mail}
                                onPress={() => this.props.navigation.navigate('Inbox')}>
                                <Image source={require('../assets/mail.png')} style={styles.mailPicture}/>
                            </Button>
                        </View>

                    </View>

                    <Text style={styles.waterTitle}>AGUA</Text>
                    <Form style={styles.waterForm}>
                        <Text style={styles.subTitle}>Noticias</Text>
                        <Button full rounded success style={styles.reportButton}
                            onPress={() => this.props.navigation.navigate('ViewIndividualWaterReport')}>
                            <Text style={styles.buttonText}>View Water Report</Text>
                            <Image source={require('../assets/emergency.png')} style={styles.emergency}/>
                        </Button>

                        <Button style={styles.link}
                            onPress={() => this.props.navigation.navigate('ReportWaterQuality')}>
                            <Text style={styles.underline}>¿Tienes algo que reportar? Haz clic aquí.</Text>
                        </Button>
                    </Form>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default WaterHome;