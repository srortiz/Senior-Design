import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from '../Style';

export default class CreateNewWaterQualityReport extends React.Component {
	render(){
		return (
			<View style={styles.container}>
			
				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
					<Text style={styles.logoutButton}>Cerrar sesión</Text>
				</View>

				<View style={styles.pageContent}>
					<View style={styles.confirmReportCont}>
						<Text style={styles.confirmReportHead}>Gracias por enviar un incidente del calidad de agua en su comunidad.</Text>

								<TouchableOpacity style={styles.confirmReportBackButton}>
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