import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput, Linking, Keyboard } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown'
import { Form, Button } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import { CheckBox } from 'react-native-elements'
import UserProfile from '../UserProfile'

export default class ReportWaterQuality extends React.Component {
	state = {
		sender: '',
		community: 0,
		urgent: '',
		message: '',
		audio: null,
		image: null,
		subject: '',
		number: '',
	};

	fetchNumber = async() => {
        let num = UserProfile.getNumber();
        console.log("calling user prof " + UserProfile.getNumber());
        this.setState({number: num});
    }

    componentDidMount() {
		this.getPermissionAsync();
		this.fetchNumber();
	}

	createIncident = () => {

		if (this.state.sender == '')
        {
        	alert('Por favor escriba su nombre');
        	return;
        }
        if (this.state.subject == '')
        {
        	alert('Por favor escribe un asunto');
        	return;
        }
        if (this.state.community == '')
        {
        	alert('Por favor seleccione su comunidad');
        	return;
        }
        if (this.state.message == '')
        {
        	alert('Por favor escribe un mensaje');
        	return;
        }
        console.log('This is the number stored: ' + this.state.number);

		//inserts new incident into database
		fetch("http://10.0.0.123:3004/incidents", {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({"sender":this.state.sender,"community":this.state.community,"urgent":this.state.urgent,"message":this.state.message,"audio":this.state.audio,"image":this.state.image, "subject":this.state.subject, "phoneNumber":this.state.number}),
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

		this.props.navigation.navigate('ConfirmWaterQualityReport');
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
		}, {
			value: 'Communidad 14'
		}];

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
					<View style={styles.reportWaterCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('WaterHomeGen')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.reportWaterHead}>Informar sobre incidentes de calidad de agua en su comunidad</Text>

						<View style={styles.reportWaterBox}>
							<ScrollView style={styles.reportWaterScrollView}>
								{/*name*/}
								<TextInput style={styles.reportWaterNameInput}
									underlineColorAndroid = "transparent"
									placeholder = "Nombre y apellidos"
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
									onChangeText = {sender => this.setState({sender})}
								/>

								{/*subject*/}
								<TextInput style={styles.reportWaterSubjectInput}
									underlineColorAndroid = "transparent"
									placeholder = "Asunto"
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
									onChangeText = {subject => this.setState({subject})}
								/>

								{/*community*/}
								<Dropdown
									containerStyle={styles.reportWaterCommDropdown}
									label="Eligir su comunidad"
									data={community}
									dropdownOffset={{'top':7, 'left':0}}
									inputContainerStyle={{ borderBottomColor: 'transparent' }}
									baseColor='#707070'
									onChangeText = {community => this.setState({community})}
								/>

								{/*description of incident*/}
								<TextInput style={styles.reportWaterIncidentInput}
									multiline
									underlineColorAndroid = "transparent"
									placeholder = "Escribir su informe aquí..."
									placeholderTextColor = "#707070"
									autoCapitalize = "none"
									textAlign = "left"
									returnKeyType="done"
									blurOnSubmit={true}
								    onSubmitEditing={()=>{Keyboard.dismiss()}}
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

								<View style={styles.reportWaterButtons}>
									<TouchableOpacity style={styles.reportWaterRecordButton} onPress={() => {this.props.navigation.navigate('RecordMessageIncident')}}>
										<Image source={require('../assets/mic.png')} style={styles.mic}/>
										<Text style={{fontSize: 15}}>Grabar mensaje</Text>
									</TouchableOpacity>

									<TouchableOpacity style={styles.reportWaterUploadButton} onPress={this._pickImage}>
										<Image source={require('../assets/mic.png')} style={styles.mic}/>
										<Text style={{fontSize: 15}}>Subir una foto</Text>
									</TouchableOpacity>
								</View>
								<Text>{"\n"}</Text>
								{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
							</ScrollView>
						</View>
						<TouchableOpacity style={styles.createReportPublishButton}
							onPress={() => 	this.createIncident() }>
							<Text style={{fontSize: 17, color: 'white', fontWeight: 'bold'}}>Enviar</Text>
						</TouchableOpacity>
					</View>
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
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