import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, FlatList, ScrollView, YellowBox } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown';
import { CheckBox } from 'react-native-elements';
import _ from 'lodash';

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
			admin: false,
			data: [],
		};
	}

	// fetchNumber = async() => {
	// 	var checkNum = this.state.phoneNum;

	// 	fetch("http://10.0.0.13:3004/users", {
	// 		method: 'GET',
	// 		redirect: 'follow'
	// 	})
	// 		.then(response => response.text())
	// 		.then(result => {console.log(result);
	// 						})
	// 		.catch(error => console.log('error', error));


	// 	// const response = await fetch("http://192.168.0.11:3004/users/" + checkNum, {
	// 	// 	method: 'GET',
	// 	// 	redirect: 'follow'
	// 	// })
		
	// 	// const user = await response.json();
	// 	// this.setState({data: user});
	// }

	// componentDidMount () {
	// 	this.fetchNumber();
	// }

	addNewUser = () => {

		//checks to make sure phone number is unique
		//var result = this.getNumber();
		//console.log(result.firstname);

		// if (uniqueNum != null)
		// {
		// 	alert('number is already in use');
		// 	return;
		// }
		//alert(uniqueNum);

		//checks to make sure phone numbers entered are the same - does not create new user if not same
		if (this.state.phoneNum != this.state.phoneNumCon)
		{
			//alert('phone numbers do not match, please try again');
			return;
		}
		else
			//alert('phone numbers do match');


		//checks to make sure passwords entered are the same - does not create new user if not same
		if (this.state.password != this.state.passwordCon)
		{
			//alert('passwords do not match, please try again');
			return;
		}
		else
			//alert('passwords numbers do match');


		//inserts new user into database

		fetch("http://10.0.0.123:3004/users", {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({"firstname":this.state.firstName,"lastname":this.state.lastName,"community":this.state.community,"phonenumber":this.state.phoneNum,"admin":this.state.admin,"password":this.state.password}),
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

		//moves user further into application if all parameters are met
		alert('New account has been created, please login now!')
		this.props.navigation.navigate('Login');
	}

	render(){
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
				</View>

				<View style={styles.pageContent}>
					<ScrollView>
					<View style={styles.newAccountCont}>
						<Text style={styles.newAccountHead}>Información del Miembro Principal</Text>

						{/*first name*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Nombre"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							textAlign = "left"
							onChangeText = {firstName => this.setState({firstName})}
						/>

						{/*last name*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Apellido"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							textAlign = "left"
							onChangeText = {lastName => this.setState({lastName})}
						/>

						{/*community*/}
						<Dropdown
							containerStyle={styles.newAccountDropdown}
							placeholder="Eligir su comunidad"
							data={community}
							placeholderTextColor={"#707070"}
							dropdownOffset={{'top':7, 'left':0}}
							inputContainerStyle={{ borderBottomColor: 'transparent' }}
							baseColor='#707070'
							onChangeText = {community => this.setState({community})}
						/>
						{/*<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Eligir su comunidad"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							textAlign = "left"
						/>*/}

						{/*phone number*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Numero de telefono móvil"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							keyboardType = "number-pad"
							textAlign = "left"
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
							onChangeText = {password => this.setState({password})}
						/>

						{/*confirm password*/}
						<TextInput style={styles.newAccountInput}
							underlineColorAndroid = "transparent"
							placeholder = "Confirmas contraseña"
							placeholderTextColor = "#707070"
							autoCapitalize = "none"
							secureTextEntry = {true}
							textAlign = "left"
							onChangeText = {passwordCon => this.setState({passwordCon})}
						/>

						{/* admin */}
						<CheckBox
							title='¿Quieres acceso del administrador?'
							containerStyle={styles.checkbox}
							checkedIcon='check-square-o'
							uncheckedIcon='square-o'
  							checked={this.state.checked}
							onPress={() => this.setState({checked: !this.state.checked, admin: !this.state.admin})}
						/>

						<TouchableOpacity style={styles.newAccountButton}
							onPress={() => this.addNewUser () }>
							<Text style={{color: 'white', fontSize: 23}}>Enviar</Text>
						</TouchableOpacity>

					</View>
					</ScrollView>
				</View>

				<View style={styles.footer}>
				</View>
			</View>
		);
	}
}
