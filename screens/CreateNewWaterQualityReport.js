import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown'

export default class CreateNewWaterQualityReport extends React.Component {
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
					<View style={styles.createReportCont}>
						<Text style={styles.createReportHead}>Publicar un reporte sobre el calidad de agua</Text>

						<View style={styles.createReportBox}>
							<ScrollView style={styles.createReportScrollView}>

								{/*community*/}
								<Dropdown
									containerStyle={styles.createReportCommDropdown}
									label="Eligir su comunidad"
									data={community}
									dropdownOffset={{'top':7}}
									inputContainerStyle={{ borderBottomColor: 'transparent' }}
									baseColor='#707070'
								/>

								{/*description of incident*/}
								<TextInput style={styles.createReportIncidentInput}
									underlineColorAndroid = "transparent"
									placeholder = "Escribir su informe aquí..."
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
								/>

								<View style={styles.createReportButtons}>
									<TouchableOpacity style={styles.createReportRecordButton}>
										<Image source={require('../assets/mic.png')} style={styles.mic}/>
										<Text style={{fontSize: 15}}>Recordar un mensaje</Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.createReportUploadButton}>
										<Image source={require('../assets/uparrow.png')} style={styles.uparrow}/>
										<Text style={{fontSize: 15}}>Cargar una foto</Text>
									</TouchableOpacity>
								</View>
							</ScrollView>
						</View>
						<TouchableOpacity style={styles.createReportPublishButton}>
							<Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Publicar</Text>
						</TouchableOpacity> 
					</View>
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}