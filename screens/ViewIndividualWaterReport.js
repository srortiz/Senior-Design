import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal, Linking } from 'react-native';
import { Form, Button } from 'native-base'
import ImageViewer from 'react-native-image-zoom-viewer'
import styles from '../Style'


const images = [{
	url:'',
	props: {
		source: require('../assets/water.jpg')
	}
}]


export default class ViewIndividualWaterReport extends React.Component {
	//Modal to see zoom into images
	state = {
		modalVisible: false,
	};

	setModalVisible = (visible) => {
		this.setState({ modalVisible: visible });
	}

	render(){
		const { modalVisible } = this.state;

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
					<View style={styles.viewReportCont}>

                        <Button style={styles.backButton}
                            onPress={() => this.props.navigation.navigate('WaterHome')}>
                            <Text style={styles.backText}>{'<'} Atrás</Text>
                        </Button>

                        <Text style={styles.viewMessDate}>{this.props.navigation.state.params.datePass}</Text>

						<Text style={styles.viewReportHead}>{this.props.navigation.state.params.titlePass}</Text>

						<View style={styles.viewReportBox}>
							<ScrollView style={styles.viewReportScrollView}>


								<Text style={{fontSize: 16}}>{this.props.navigation.state.params.messPass}</Text>
								<TouchableOpacity style={styles.viewReportListenButton}
									onPress={() => this.props.navigation.navigate('RecordMessage')}>
									<Image source={require('../assets/mic.png')} style={styles.mic}/>
									<Text style={{fontSize: 17}}>Escuchar el mensaje</Text>
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
					</View>

				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}
