import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
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
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
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

						<Text style={styles.viewReportHead}>Titular</Text>

						<View style={styles.viewReportBox}>
							<ScrollView style={styles.viewReportScrollView}>


								<Text style={{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tempor nibh, a ultrices enim. Duis et sollicitudin urna. Aliquam mollis, nunc in consequat tincidunt, ipsum libero porttitor nibh, sodales elementum leo purus et metus. Nunc egestas tortor sit amet efficitur tempus. Nullam rutrum eget ex sed viverra. Aliquam vel justo luctus, varius risus in, vehicula erat. Fusce elementum in ante nec luctus. Curabitur vitae egestas odio. Nam vitae tortor eget magna sodales lacinia eget sed libero. Nam iaculis nibh dapibus semper tincidunt. Donec sed eros urna. Ut ac augue tellus. Mauris lobortis metus turpis, eget feugiat nibh hendrerit eget. Cras lobortis, quam nec tristique elementum, quam velit consequat eros, non maximus nisl ante in arcu. Duis id orci molestie, gravida eros porttitor, lacinia turpis. Phasellus porta vestibulum sapien quis volutpat.</Text>
								<TouchableOpacity style={styles.viewReportListenButton}
									onPress={() => this.props.navigation.navigate('RecordMessage')}>
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
					</View>

				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}
