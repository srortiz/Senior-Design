import React from 'react';
import { Text, View, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Form, Button } from 'native-base'
import styles from '../Style'
//import AudioRecord from 'react-native-audio-record'
//import { Permissions } from 'react-native-permissions';

export default class RecordMessage extends React.Component {
	
	sound = null;
	state = {
		audioFile: '',
		recording: false,
		loaded: false,
		paused: false
	};
	
	async componentDidMount(){
		await this.checkPermission();

		const options = {
			sampleRate: 16000,
			channels: 1,
			bitsPerSample: 16,
			wavFile: 'test.wav'
		};

		AudioRecord.init(options);

		AudioRecord.on('data', data => {
			const chunk = Buffer.from(data, 'base64');
			console.log('chunck size', chunk.byteLength);
		});
	}

	checkPermission = async () => {
		const p = await Permissions.check('microphone');
		console.log('permission check', p);
		if (p === 'authorized')
			return;
		return this.requestPermission();
	};

	requestPermission = async () => {
		const p = await Permissions.request('microphone');
		console.log('permission request', p);
	};

	start = () => {
		console.log('start record');
		this.setState({ audioFile: '', recording: true, loaded: false});
		AudioRecord.start();
	};

	stop = async () => {
		if (!this.state.recording) return;
		console.log('stop record');
		let audioFile = await AudioRecord.stop();
		console.log('audioFile', audioFile);
		this.setState({ audioFile, recording: false });
	};


	render(){
		const { recording, paused, audioFile } = this.state;
		return (
			<View style={styles.container}>
			
				<View style={styles.header}>
					<Image source={require('../assets/asdenic.png')} style={styles.asdenicLogo}/>
				</View>

				<View style={styles.pageContent}>
					<View style={styles.viewReportCont}>

						<Button style={styles.backButton}
	                        onPress={() => this.props.navigation.navigate('ViewIndividualWaterReport')}>
	                        <Text style={styles.backText}>{'<'} Atrás</Text>
	                    </Button>

	                    <Button
	                    	onPress={this.start} title="Record" disabled={recording}>
	                    	<Text>Record</Text>
	                    </Button>

	                    <Button
	                    	onPress={this.stop} title="Stop" disabled={!recording}>
	                    	<Text>Stop</Text>
	                    </Button>



						<Text>Record new message here!</Text>
					</View>
				</View>

				<View style={styles.footer}>
				</View>

			</View>
		);
	}
}
