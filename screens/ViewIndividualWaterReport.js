import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../Style';

export default class ViewIndividualWaterReport extends React.Component {
	render(){
		return (
			<View style={styles.container}>
			
				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
					<Text style={styles.logoutButton}>Cerrar sesión</Text>
				</View>

				<View style={styles.pageContent}>
					<View style={styles.viewReportCont}>
						<Text style={styles.viewReportHead}>Titular</Text>

						<View style={styles.viewReportBox}>
							<ScrollView style={styles.viewReportScrollView}>
								<Text style={{fontSize: 16}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut tempor nibh, a ultrices enim. Duis et sollicitudin urna. Aliquam mollis, nunc in consequat tincidunt, ipsum libero porttitor nibh, sodales elementum leo purus et metus. Nunc egestas tortor sit amet efficitur tempus. Nullam rutrum eget ex sed viverra. Aliquam vel justo luctus, varius risus in, vehicula erat. Fusce elementum in ante nec luctus. Curabitur vitae egestas odio. Nam vitae tortor eget magna sodales lacinia eget sed libero. Nam iaculis nibh dapibus semper tincidunt. Donec sed eros urna. Ut ac augue tellus. Mauris lobortis metus turpis, eget feugiat nibh hendrerit eget. Cras lobortis, quam nec tristique elementum, quam velit consequat eros, non maximus nisl ante in arcu. Duis id orci molestie, gravida eros porttitor, lacinia turpis. Phasellus porta vestibulum sapien quis volutpat.</Text>
								<TouchableOpacity style={styles.viewReportListenButton}>
									<Image source={require('../assets/mic.png')} style={styles.mic}/>
									<Text style={{fontSize: 17}}>Escuchar al mensaje</Text>
								</TouchableOpacity>

								<Image source={require('../assets/water.jpg')} style={styles.waterImage}/>

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
