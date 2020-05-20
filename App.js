import React from 'react';

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import WaterHome from './screens/WaterHome'
import ConfirmWaterQualityReport from './screens/ConfirmWaterQualityReport'
import CreateNewAccount from './screens/CreateNewAccount'
import CreateNewWaterQualityReport from './screens/CreateNewWaterQualityReport'
import ReportWaterQuality from './screens/ReportWaterQuality'
import RespondToMessage from './screens/RespondToMessage'
import ViewIndividualMessage from './screens/ViewIndividualMessage'
import ViewIndividualWaterReport from './screens/ViewIndividualWaterReport'
import Inbox from './screens/Inbox'
import RecordMessage from './screens/RecordMessage'

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const myStackNavigator = createStackNavigator(
{
	WaterHome: WaterHome,
	ConfirmWaterQualityReport: ConfirmWaterQualityReport,
	CreateNewWaterQualityReport: CreateNewWaterQualityReport,
	ViewIndividualMessage: ViewIndividualMessage,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
	ReportWaterQuality: ReportWaterQuality,
	RespondToMessage: RespondToMessage,
	Inbox: Inbox,
	RecordMessage: RecordMessage,
},
{
	initialRouteName: 'WaterHome',
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);

const mySwitchNavigator = createSwitchNavigator(
{
	Welcome: { screen: Welcome },
	CreateNewAccount: { screen: CreateNewAccount },
	Login: { screen: Login },
	WaterHome: { screen: myStackNavigator },
},
{
	initialRouteName: 'Welcome'
}
);

export default createAppContainer(mySwitchNavigator);