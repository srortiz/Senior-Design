import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { Form, Button } from 'native-base'
import styles from '../Style'

export class WaterHome extends React.Component {
    static navigationOptions = {
        title: 'WaterHome',
    };

    state = {
        // reports: [
        //     {"idreports":1,"title":"First Report","date":"2020-05-19 07:00:15","urgent":1,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""},
        //     {"idreports":2,"title":"Second Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""},
        //     {"idreports":3,"title":"Third Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""},
        //     {"idreports":4,"title":"Fourth Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""},
        //     {"idreports":5,"title":"Fifth Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""},
        //     {"idreports":6,"title":"Sixth Report","date":"2020-05-19 07:00:15","urgent":0,"communities":"comunidad 3","message":"This is a test report","audio":"","image":""}
        // ],
        data: [],
    };

    fetchData = async() => {
        const response = await fetch ('http://10.0.0.123:3004/reports');
        const users = await response.json();
        this.setState({data: users});
    }

    componentDidMount() {
        this.fetchData();
    }

    // getReports = async() => {
    //     await fetch("http://10.0.0.123:3004/reports", {
    //         method: 'GET',
    //         redirect: 'follow'
    //     })
    //         .then(response => response.json())
    //         .then(result => {   //console.log(result);
    //                             this.state.reports = result;
    //                             //console.log(this.state.reports);
    //                         })
    //         .catch(error => console.log('error', error));
    //         console.log(this.state.reports);
    // }

    // componentDidMount () {
    //     this.getReports();
    // }


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
                        <Text style={styles.subTitle}>Noticias</Text>
                        <FlatList inverted data={this.state.data} 
                            getItemLayout={(data, index) => (
                                {length: 200, offset: 200 * index, index}
                            )}
                            initialScrollIndex={this.state.data.length - 1}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={({ item, index }) => 
                            <Button full rounded success style={styles.reportButton} onPress={() => this.props.navigation.navigate('ViewIndividualWaterReport')}>
                                <Text style={styles.buttonText}>{item.title}</Text>
                                <Text style={styles.buttonText}>{item.date}</Text>
                                {item.urgent
                                    ? <Image source={require('../assets/emergency.png')} style={styles.emergency}/>
                                    : <Text></Text>
                                }
                            </Button>}
                        />
                    </Form>
                    <Button style={styles.link}
                            onPress={() => this.props.navigation.navigate('ReportWaterQuality')}>
                            <Text style={styles.underline}>¿Tienes algo que reportar? Haz clic aquí.</Text>
                    </Button>
                </View>

                <View style={styles.footer}>
                </View>

            </View>
        );
    }
}

export default WaterHome;