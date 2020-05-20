import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'

export class WaterHome extends React.Component {
    static navigationOptions = {
        title: 'WaterHome',
    };

    state = {
        reports: [
            {"idreports":1,"title":"First Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""},
            {"idreports":2,"title":"Second Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""}
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
                        <ScrollView>
                            <Text style={styles.subTitle}>Noticias</Text>
                            <FlatList data={this.state.reports} renderItem={({ item, index }) =>
                                <Button full rounded success style={styles.reportButton} onPress={() => this.props.navigation.navigate('ViewIndividualWaterReport')}>
                                    <Text style={styles.buttonText}>{item.title}</Text>
                                    <Image source={require('../assets/emergency.png')} style={styles.emergency}/>
                                </Button>}
                            />
                            
                            {/* <Button full rounded success style={styles.reportButton}
                                onPress={() => this.props.navigation.navigate('ViewIndividualWaterReport')}>
                                <Text style={styles.buttonText}>View Water Report</Text>
                                <Image source={require('../assets/emergency.png')} style={styles.emergency}/>
                            </Button> */}

                            <Button style={styles.link}
                                onPress={() => this.props.navigation.navigate('ReportWaterQuality')}>
                                <Text style={styles.underline}>¿Tienes algo que reportar? Haz clic aquí.</Text>
                            </Button>
                        </ScrollView>
                    </Form>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default WaterHome;