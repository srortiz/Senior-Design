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
			phoneNumCon:'',
			password:'',
			passwordCon:''
		}
	}

	userReg = () => {
		alert('ok');

		const {firstName} = this.state;
		const {lastName} = this.state;
		const {community} = this.state;
		const {phoneNum} = this.state;
		const {phoneNumCon} = this.state;
		const {password} = this.state;
		const {passwordCon} = this.state;

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
							onPress={() => {
								this.userReg (),
								this.props.navigation.navigate('Homepage')}}>
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
