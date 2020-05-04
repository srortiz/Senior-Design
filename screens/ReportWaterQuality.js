import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown'

export default class ReportWaterQuality extends React.Component {
	render(){

		let community = [{
			value: 'Communidad 1',
		}, {
			value: 'Communidad 2',
		}, {
			value: 'Communidad 3',
		}, {
			value: 'Communidad 4',
		}];

		return (
			<View style={styles.container}>

				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
					<Text style={styles.logoutButton}>Cerrar sesión</Text>
				</View>
				
				<View style={styles.pageContent}>
					<View style={styles.reportWaterCont}>
						<Text style={styles.reportWaterHead}>Informar sobre incidentes del calidad de agua en su comunidad</Text>

						<View style={styles.reportWaterBox}>
							<ScrollView style={styles.reportWaterScrollView}>
								{/*name*/}
								<TextInput style={styles.reportWaterNameInput}
									underlineColorAndroid = "transparent"
									placeholder = "Nombre y apellido"
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
								/>

								{/*community*/}
								<Dropdown
									containerStyle={styles.reportWaterCommDropdown}
									label="Eligir su comunidad"
									data={community}
									dropdownOffset={{'top':7}}
									inputContainerStyle={{ borderBottomColor: 'transparent' }}
									baseColor='#707070'
								/>

								{/*description of incident*/}
								<TextInput style={styles.reportWaterIncidentInput}
									underlineColorAndroid = "transparent"
									placeholder = "Escribir su informe aquí..."
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
								/>

								<View style={styles.reportWaterButtons}>
									<TouchableOpacity style={styles.reportWaterRecordButton}>
										<Image source={require('../assets/mic.png')} style={styles.mic}/>
										<Text style={{fontSize: 15}}>Recordar un mensaje</Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.reportWaterUploadButton}>
										<Image source={require('../assets/mic.png')} style={styles.mic}/>
										<Text style={{fontSize: 15}}>Cargar una foto</Text>
									</TouchableOpacity>
								</View>
							</ScrollView>
						</View>
						<TouchableOpacity style={styles.reportWaterSendButton}>
							<Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Enviar</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}