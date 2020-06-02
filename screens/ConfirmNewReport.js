import React from 'react';
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native';
import styles from '../Style';

export default class ConfirmNewReport extends React.Component {
	render(){
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
					<View style={styles.confirmReportCont}>
						<Text style={styles.confirmReportHead}>Thank you for creating a new report.</Text>

								<TouchableOpacity style={styles.confirmReportBackButton}
									onPress={() => this.props.navigation.navigate('WaterHomeAdminRefresh')}>
									<Text style={{fontSize: 20, color: 'white'}}>Pagina principal</Text>
								</TouchableOpacity>

					</View>

				</View>
				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}