import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, TextInput, Linking, Keyboard } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown'
import { Form, Button } from 'native-base'
import * as ImagePicker from 'expo-image-picker'
import { CheckBox } from 'react-native-elements'
import SelectMultiple from 'react-native-select-multiple'

const communities = [
	{ label: 'Communidad 1', value: '1' },
	{ label: 'Communidad 2', value: '2' },
	{ label: 'Communidad 3', value: '3' },
	{ label: 'Communidad 4', value: '4' },
	{ label: 'Communidad 5', value: '5' },
	{ label: 'All', value: '6' },

]

export default class CreateNewWaterQualityReport extends React.Component {
	state = {
		image: null,
		title: '',
		urgent: false,
		community: '',
		message: '',
		audio: false,
		//holds array of communities that have been selected
		selectedComm: [],
		comm1: '',
		comm2: '',
		comm3: '',
		comm4: '',
		comm5: '',
		allcomm: '',
	};

	onSelectionsChange = (selectedComm) => {
		// selectedFruits is array of { label, value }
		this.setState({ selectedComm });
		var i = selectedComm.length;
		for (i; i > 0; i--)
		{
			if (selectedComm[i-1].value == 1)
			{
				this.state.comm1 = 1;
				console.log('comm1 is set to ' + this.state.comm1)
			}
			if (selectedComm[i-1].value == 2)
			{
				this.state.comm2 = 1;
				console.log('comm2 is set to ' + this.state.comm2)
			}
			if (selectedComm[i-1].value == 3)
			{
				this.state.comm3 = 1;
				console.log('comm3 is set to ' + this.state.comm3)
			}
			if (selectedComm[i-1].value == 4)
			{
				this.state.comm4 = 1;
				console.log('comm4 is set to ' + this.state.comm4)
			}
			if (selectedComm[i-1].value == 5)
			{
				this.state.comm5 = 1;
				console.log('comm5 is set to ' + this.state.comm5)
			}
			if (selectedComm[i-1].value == 6)
			{
				this.state.allcomm = 1;
				console.log('all is set to ' + this.state.allcomm)
			}
		}
		// console.log(selectedComm[0].value);
	}

	createReport = () => {
		let audioFile = null
		if(this.state.audio) {
			console.log(this.props.navigation.state.params.sound)
			audioFile = this.props.navigation.state.params.sound
		}
		if (this.state.title == '')
        {
        	alert('Por favor escribe un título');
        	return;
        }
        if (this.state.message == '')
        {
        	alert('Por favor escribe un mensaje');
        	return;
        }

		//inserts new report into database
		fetch("http://10.0.0.123:3004/reports", {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({"title":this.state.title,"urgent":this.state.urgent,"message":this.state.message,"audio":audioFile,"image":this.state.image, "comm1":this.state.comm1, "comm2":this.state.comm2, "comm3":this.state.comm3, "comm4":this.state.comm4, "comm5":this.state.comm5, "allcomm":this.state.allcomm}),
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

		this.props.navigation.navigate('ConfirmNewReport');
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
					<TouchableOpacity
                        onPress={() => Linking.openURL('https://www.asdenic.org')}>
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
					<View style={styles.createReportCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('WaterHomeAdmin')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.createReportHead}>Publicar un reporte sobre la calidad de agua</Text>

						<View style={styles.createReportBox}>
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
								{/*<Dropdown
									containerStyle={styles.createReportCommDropdown}
									label="Eligir su comunidad"
									data={community}
									dropdownOffset={{'top':7, 'left':0}}
									inputContainerStyle={{ borderBottomColor: 'transparent' }}
									baseColor='#707070'
									onChangeText = {community => this.setState({community})}
								/>*/}

								<View style={styles.hmReport}>
									<Text style={styles.chooseCom}>Elegir su comunidad:</Text>
									<SelectMultiple
										items={communities}
										selectedItems={this.state.selectedComm}
										onSelectionsChange={this.onSelectionsChange} />
								</View>

								{/*description of incident*/}
								<TextInput style={styles.createReportIncidentInput}
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
						</View>
						<TouchableOpacity style={styles.createReportPublishButton}
							onPress={() =>	this.createReport() }>
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