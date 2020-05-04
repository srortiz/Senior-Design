import React from 'react';
import { Text, View, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Style';

export default class ViewIndividualMessage extends React.Component {
	render(){
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
				</View>

				<View style={styles.pageContent}>
					<View style={styles.respondMessCont}>

						<Text style={styles.viewMessDate}>10 de febrario</Text>
						<Text style={styles.viewMessHead}>De: [Nombre]</Text>

						<View style={styles.viewMessBox}>
							<ScrollView style={styles.viewMessScrollView}>
								<Text style={styles.viewMessComm}>[comunidad]</Text>
								<Text style={{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tempor nibh, a ultrices enim. Duis et sollicitudin urna. Aliquam mollis, nunc in consequat tincidunt, ipsum libero porttitor nibh, sodales elementum leo purus et metus. Nunc egestas tortor sit amet efficitur tempus. Nullam rutrum eget ex sed viverra. Aliquam vel justo luctus, varius risus in, vehicula erat. Fusce elementum in ante nec luctus. Curabitur vitae egestas odio. Nam vitae tortor eget magna sodales lacinia eget sed libero. Nam iaculis nibh dapibus semper tincidunt. Donec sed eros urna. Ut ac augue tellus. Mauris lobortis metus turpis, eget feugiat nibh hendrerit eget.</Text>
								<TouchableOpacity style={styles.viewMessListenButton}>
									<Image source={require('../assets/mic.png')} style={styles.mic}/>
									<Text style={{fontSize: 17}}>Escuchar al mensaje</Text>
								</TouchableOpacity>

								<Image source={require('../assets/water.jpg')} style={styles.waterImage}/>

							</ScrollView>
						</View>

						<View style={styles.viewMessButtons}>
							<TouchableOpacity style={styles.viewMessCallButton}>
								<Text style={{fontSize: 17, color: 'white'}}>Llamar</Text>
							</TouchableOpacity> 

							<TouchableOpacity style={styles.viewMessRespondButton}>
								<Text style={{fontSize: 17, color: 'white'}}>Responder</Text>
							</TouchableOpacity> 

							<TouchableOpacity style={styles.viewMessPublishButton}>
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
