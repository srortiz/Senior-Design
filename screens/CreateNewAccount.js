import React, { Component } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, YellowBox, Linking, SafeAreaView } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckBox } from 'react-native-elements';
import _ from 'lodash';
import SelectMultiple from 'react-native-select-multiple'

YellowBox.ignoreWarnings(['componentWillReceiveProps']);
const _console = _.clone(console);
console.warn = message => {
	if (message.indexOf('componentWillReceiveProps') <= -1) {
	_console.warn(message);
	} 
};

YellowBox.ignoreWarnings(['componentWillUpdate']);
const _console2 = _.clone(console);
console.warn = message => {
	if (message.indexOf('componentWillUpdate') <= -1) {
	_console2.warn(message);
	} 
};

const communities = [
	{ label: 'Communidad 1', value: '1' },
	{ label: 'Communidad 2', value: '2' },
	{ label: 'Communidad 3', value: '3' },
	{ label: 'Communidad 4', value: '4' },
	{ label: 'Communidad 5', value: '5' },
	{ label: 'All', value: '6' },

]

export default class CreateNewAccount extends React.Component {

	constructor(props){
		super(props)
		this.state={
			firstName:'',
			lastName:'',
			community:'',
			phoneNum:'',
			phoneNumCon: '',
			password:'',
			passwordCon: '',
			requestedAdminRights: false,
			data: [],
			//holds array of communities that have been selected
			selectedComm: [],
			comm1: '',
			comm2: '',
			comm3: '',
			comm4: '',
			comm5: '',
			allcomm: '',
		};
	}

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

	addNewUser = () => {

		console.log('fetching number');
		var checkNum = this.state.phoneNum;
		var checkPass = "none";
		console.log('number is: ' + checkNum);

        fetch("http://10.0.0.13:3004/users/" + checkNum + "/" + checkPass, {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.json())
            .then(result => {   console.log(result);
                                if (result.length == 0)
                                {
                                    //console.log('no user exists with this phone number, can create new account');
                                    //can create new account
                                    
                                    //check that information is entered in first name, last name, community, phone, and password
                                    if (this.state.firstName == '')
                                    {
                                    	alert('Por favor escriba su nombre');
                                    	return;
                                    }
                                    if (this.state.lastName == '')
                                    {
                                    	alert('Por favor escriba su apellidos');
                                    	return;
                                    }
                                    if (this.state.phoneNum == '')
                                    {
                                    	alert('Por favor escriba su número');
                                    	return;
                                    }
                                    if (this.state.phoneNum.length < 7)
                                    {
                                    	alert('Por favor escriba un número valido');
                                    	return;
                                    }
                                    if (this.state.phoneNumCon == '')
                                    {
                                    	alert('Por favor confirme su número');
                                    	return;
                                    }
                                    if (this.state.password == '' )
                                    {
                                    	alert('Por favor escriba una contraseña');
                                    	return;
                                    }
                                    if (this.state.password.length < 5)
                                    {
                                    	alert('Por favor escriba una contraseña de al menos cinco caracteres');
                                    	return;
                                    }
                                    if (this.state.passwordCon == '')
                                    {
                                    	alert('Por favor confirme una contraseña');
                                    	return;
                                    }

                                    //checks to make sure phone numbers entered are the same - does not create new user if not same
									if (this.state.phoneNum != this.state.phoneNumCon)
									{
										alert('Los números no coinciden.  Inténtalo de nuevo.');
										return;
									}


									//checks to make sure passwords entered are the same - does not create new user if not same
									if (this.state.password != this.state.passwordCon)
									{
										alert('Las contraseñas no coinciden.  Inténtalo de nuevo.');
										return;
									}

									//inserts new user into database

									console.log('this is comm1: ' + this.state.comm1);
									fetch("http://10.0.0.13:3004/users", {
										method: 'POST',
										headers: {"Content-Type": "application/json"},
										body: JSON.stringify({"firstname":this.state.firstName,"lastname":this.state.lastName,"phonenumber":this.state.phoneNum,"requestedAdminRights":this.state.requestedAdminRights,"password":this.state.password, "comm1":this.state.comm1, "comm2":this.state.comm2, "comm3":this.state.comm3, "comm4":this.state.comm4, "comm5":this.state.comm5, "allcomm":this.state.allcomm}),
										redirect: 'follow'
									})
										.then(response => response.text())
										.then(result => console.log(result))
										.catch(error => console.log('error', error));

									//moves user further into application if all parameters are met
									alert('Nueva cuenta se ha creado. ¡Iniciar sesión!')
									this.props.navigation.navigate('Login');
                                }

                                else
                                {
                                    alert('Ya existe una cuenta con este número.');
                                    //need to use another number
                                    return;
                                }
                            })
            .catch(error => console.log('error', error));
	}

	render(){

		return (
			<View style={styles.container}>

				<View style={styles.headerHome}>
					<TouchableOpacity
                        onPress={() => Linking.openURL('https://www.asdenic.org')}>
                        <Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.scu.edu/engineering/labs--research/labs/frugal-innovation-hub/')}>
                        <Image source={require('../assets/frugalHub.png')} style={styles.frugalHubLogoHome}/>
                    </TouchableOpacity>

				</View>

				<View style={styles.pageContent}>
					<View style={styles.newAccountCont}>
						<Text style={styles.newAccountHead}>Información del Miembro Principal</Text>

						{/*first name*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Nombre"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							textAlign = "left"
							maxLength = {40}
							onChangeText = {firstName => this.setState({firstName})}
						/>

						{/*last name*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Apellidos"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							textAlign = "left"
							maxLength = {40}
							onChangeText = {lastName => this.setState({lastName})}
						/>

						{/*community*/}
						{/*<Dropdown
							containerStyle={styles.newAccountDropdown}
							placeholder="Elegir su comunidad"
							data={community}
							placeholderTextColor={"#707070"}
							dropdownOffset={{'top':7, 'left':0}}
							inputContainerStyle={{ borderBottomColor: 'transparent' }}
							baseColor='#707070'
							onChangeText = {community => this.setState({community})}
						/>*/}

						<View style={styles.hm}>
							<Text style={styles.chooseCom}>Elegir su comunidad:</Text>
							<SelectMultiple
								items={communities}
								selectedItems={this.state.selectedComm}
								onSelectionsChange={this.onSelectionsChange} />
						</View>

						{/*phone number*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Numero de telefono móvil"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							keyboardType = "number-pad"
							textAlign = "left"
							maxLength = {10}
							onChangeText = {phoneNum => this.setState({phoneNum})}
						/>

						{/*confirm phone number*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Confirmar numero de telefono móvil"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							keyboardType = "number-pad"
							textAlign = "left"
							maxLength = {10}
							onChangeText = {phoneNumCon => this.setState({phoneNumCon})}
						/>

						{/*password*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Contraseña"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							secureTextEntry = {true}
							textAlign = "left"
							maxLength = {40}
							onChangeText = {password => this.setState({password})}
						/>

						{/*confirm password*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Confirmar contraseña"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							secureTextEntry = {true}
							textAlign = "left"
							maxLength = {40}
							onChangeText = {passwordCon => this.setState({passwordCon})}
						/>

						{/* admin */}
						<CheckBox
							title='¿Necesitas derechos de administrador?'
							containerStyle={styles.checkbox}
							checkedIcon='check-square-o'
							uncheckedIcon='square-o'
  							checked={this.state.checked}
							onPress={() => this.setState({checked: !this.state.checked, requestedAdminRights: !this.state.requestedAdminRights})}
						/>

						<TouchableOpacity style={styles.newAccountButton}
							onPress={() => this.addNewUser () }>
							<Text style={{color: 'white', fontSize: 23}}>Enviar</Text>
						</TouchableOpacity>

					</View>
				</View>

				<View style={styles.footer}>
				</View>
			</View>
		);
	}
}
