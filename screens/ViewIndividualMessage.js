import React from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';
import styles from '../Style';
import { Form, Button } from 'native-base'
import ImageViewer from 'react-native-image-zoom-viewer'

const images = [{
	url:'',
	props: {
		source: require('../assets/water.jpg')
	}
}]

export default class ViewIndividualMessage extends React.Component {
	state = {
		modalVisible: false
	};

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	}

	render(){
		const { modalVisible } = this.state;

		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
				</View>

				<View style={styles.pageContent}>
					<View style={styles.viewMessCont}>

						<Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('Inbox')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

						<Text style={styles.viewMessDate}>{this.props.navigation.state.params.datePass}</Text>
						<Text style={styles.viewMessHead}>De: {this.props.navigation.state.params.senderPass}</Text>

						<View style={styles.viewMessBox}>
							<ScrollView style={styles.viewMessScrollView}>
								<Text style={styles.viewMessComm}>{this.props.navigation.state.params.subjectPass}{"\n"}
																	{this.props.navigation.state.params.commPass}</Text>
								<Text style={{fontSize: 16}}>{this.props.navigation.state.params.messPass}</Text>
								<TouchableOpacity style={styles.viewMessListenButton}>
									<Image source={require('../assets/mic.png')} style={styles.mic}/>
									<Text style={{fontSize: 17}}>Escuchar al mensaje</Text>
								</TouchableOpacity>

								<TouchableOpacity
									onPress={() => {
										this.setModalVisible(true);
									}}
								>
									<Image source={require('../assets/water.jpg')} style={styles.waterImage}/>
								</TouchableOpacity>

								<Modal
									transparent={false}
									visible={modalVisible}
									onRequestClose={() => this.setModalVisible()}
								>
									
									<TouchableOpacity style={styles.viewReportCloseImg}
										onPress={() => {
											this.setModalVisible(!modalVisible);
										}}
									>
										<Text style={styles.viewReportCloseText}>Go back to report</Text>
									</TouchableOpacity>
									<ImageViewer imageUrls={images}/>
										
								</Modal>
								


							</ScrollView>
						</View>

						<View style={styles.viewMessButtons}>
							<TouchableOpacity style={styles.viewMessCallButton}
								onPress = {() => Linking.openURL('tel:2066602920')}>
								<Text style={{fontSize: 17, color: 'white'}}>Llamar</Text>
							</TouchableOpacity> 


							<TouchableOpacity style={styles.viewMessRespondButton}
								onPress={() => this.props.navigation.navigate('RespondToMessage',
													{
														toPass : this.props.navigation.state.params.senderPass,
													})}>
								<Text style={{fontSize: 17, color: 'white'}}>Responder</Text>
							</TouchableOpacity> 

							<TouchableOpacity style={styles.viewMessPublishButton}
								onPress={() => this.props.navigation.navigate('CreateNewWaterQualityReportPub',
													{
														subjectPass : this.props.navigation.state.params.subjectPass,
														commPass : this.props.navigation.state.params.commPass,
														messPass : this.props.navigation.state.params.messPass,
													})}>
								<Text style={{fontSize: 17, color: 'white'}}>Publicar</Text>
							</TouchableOpacity> 
						</View>

					</View>
				</View>

				<View style={styles.footer}>
				</View>
			</View>
		);
	}
}
