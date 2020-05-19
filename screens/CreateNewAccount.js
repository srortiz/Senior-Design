import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Style';
import { Dropdown } from 'react-native-material-dropdown';


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
			admin: 0,
		};
	}


	addNewUser = () => {

		// //checks to make sure phone number is unique
		// var checkNum = this.state.phoneNum;
		// const fetchResult = fetch("http://192.168.0.11:3004/users/checkNum", {
		// 	method: 'GET',
		// 	redirect: 'follow'
		// })
		// 	.then(response => response.text())
		// 	.then(result => console.log(result))
		// 	.catch(error => console.log('error', error));

		// // if (uniqueNum != null)
		// // {
		// // 	alert('number is already in use');
		// // 	return;
		// // }
		// //alert(uniqueNum);

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
		fetch("http://192.168.0.11:3004/users", {
			method: 'POST',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify({"firstname":this.state.firstName,"lastname":this.state.lastName,"community":this.state.community,"phonenumber":this.state.phoneNum,"admin":0,"password":this.state.password}),
			redirect: 'follow'
		})
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));

		//moves user further into application if all parameters are met
		this.props.navigation.navigate('Homepage');
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
		}];

		return (
			<View style={styles.container}>

				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
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
							label="Eligir su comunidad"
							data={community}
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
