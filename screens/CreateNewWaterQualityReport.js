import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown'
import { Form, Button } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import { CheckBox } from 'react-native-elements'

export default class CreateNewWaterQualityReport extends React.Component {
	state = {
		image: null,
		title: '',
		urgent: false,
		community: '',
		message: '',
		audio: null,
	};

	createReport = () => {
		alert('new report created!');

		//inserts new report into database
		fetch("http://10.0.0.123:3004/reports", {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({"title":this.state.title,"urgent":this.state.urgent,"communities":this.state.community,"message":this.state.message,"audio":this.state.audio,"image":this.state.image}),
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	}

	render(){
		let { image } = this.state;

		let community = [{
			value: 'Communidad 1',
		}, {
			value: 'Communidad 2',
		}, {
			value: 'Communidad 3',
		}, {
			value: 'Communidad 4',
		},{
			value: 'Communidad 5',
		}, {
			value: 'Communidad 6',
		}, {
			value: 'Communidad 7',
		},{
			value: 'Communidad 8',
		}, {
			value: 'Communidad 9',
		}, {
			value: 'Communidad 10',
		},{
			value: 'Communidad 11',
		}, {
			value: 'Communidad 12',
		}, {
			value: 'Communidad 13',
		}];

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
					<View style={styles.createReportCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('WaterHome')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.createReportHead}>Publicar un reporte sobre el calidad de agua</Text>

						<View style={styles.createReportBox}>
							<ScrollView style={styles.createReportScrollView}>

								{/*report title*/}
								<TextInput style={styles.createReportIncidentTitle}
									underlineColorAndroid = "transparent"
									placeholder = "Escribir su titular aquí..."
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
									onChangeText = {title => this.setState({title})}
								/>

								{/*community*/}
								<Dropdown
									containerStyle={styles.createReportCommDropdown}
									label="Eligir su comunidad"
									data={community}
									dropdownOffset={{'top':7, 'left':0}}
									inputContainerStyle={{ borderBottomColor: 'transparent' }}
									baseColor='#707070'
									onChangeText = {community => this.setState({community})}
								/>

								{/*description of incident*/}
								<TextInput style={styles.createReportIncidentInput}
									multiline
									underlineColorAndroid = "transparent"
									placeholder = "Escribir su informe aquí..."
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
									onChangeText = {message => this.setState({message})}
								/>

								<CheckBox
									title='¿Es urgente?'
									containerStyle={styles.checkbox}
									checkedIcon='check-square-o'
									uncheckedIcon='square-o'
									checked={this.state.checked}
									onPress={() => this.setState({checked: !this.state.checked, urgent: !this.state.urgent})}
								/>

								<View style={styles.createReportButtons}>
									<TouchableOpacity style={styles.createReportRecordButton} onPress={() => {this.props.navigation.navigate('RecordMessage')}}>
										<Image source={require('../assets/mic.png')} style={styles.mic}/>
										<Text style={{fontSize: 15}}>Recordar un mensaje</Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.createReportUploadButton} onPress={this._pickImage}>
										<Image source={require('../assets/uparrow.png')} style={styles.uparrow}/>
										<Text style={{fontSize: 15}}>Cargar una foto</Text>
									</TouchableOpacity>
								</View>
								<Text>{"\n"}</Text>
								{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
							</ScrollView>
						</View>
						<TouchableOpacity style={styles.createReportPublishButton}
							onPress={() => {	this.createReport();
												this.props.navigation.navigate('WaterHome');}}>
							<Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Publicar</Text>
						</TouchableOpacity> 
					</View>
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}

	componentDidMount() {
		this.getPermissionAsync();
	}
	
	getPermissionAsync = async () => {
		// if (Constants.platform.ios) {
		//   const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
		//   if (status !== 'granted') {
		// 	alert('Sorry, we need camera roll permissions to make this work!');
		//   }
		// }
	};
	
	_pickImage = async () => {
		try {
		  let result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ImagePicker.MediaTypeOptions.All,
			allowsEditing: true,
			aspect: [4, 3],
			quality: 1,
		});
		if (!result.cancelled) {
			this.setState({ image: result.uri });
		}
	
		console.log(result);
		} catch (E) {
		  console.log(E);
		}
	};
}