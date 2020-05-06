import React from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import styles from '../Style';
import { Form, Button } from 'native-base'

export default class RespondToMessage extends React.Component {
	render(){
		return (
			<View style={styles.container}>

				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
				</View>

				<View style={styles.pageContent}>
					<View style={styles.respondMessCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('ViewIndividualMessage')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.respondMessHead}>A: [Nombre]</Text>

						<View style={styles.respondMessBox}>
							{/*response to message*/}
							<TextInput style={styles.respondMessInput}
								underlineColorAndroid = "transparent"
								placeholder = "Escribir su informe aquí..."
								placeholderTextColor = "#707070"
								autoCapitalize = "none"
								textAlign = "left"
							/>

							<TouchableOpacity style={styles.respondMessRecordButton}>
								<Image source={require('../assets/mic.png')} style={styles.mic}/>
								<Text style={{fontSize: 16}}>Recordar un mensaje</Text>
							</TouchableOpacity>
						</View>

						<TouchableOpacity style={styles.respondMessSendButton}
							onPress={() => this.props.navigation.navigate('ViewIndividualMessage')}>
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