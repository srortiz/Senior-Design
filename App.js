import React from 'react';

import Welcome from './screens/Welcome'
import Login from './screens/Login'
import WaterHomeGen from './screens/WaterHomeGen'
import WaterHomeAdmin from './screens/WaterHomeAdmin'
import ConfirmWaterQualityReport from './screens/ConfirmWaterQualityReport'
import CreateNewAccount from './screens/CreateNewAccount'
import CreateNewWaterQualityReport from './screens/CreateNewWaterQualityReport'
import CreateNewWaterQualityReportPub from './screens/CreateNewWaterQualityReportPub'
import ReportWaterQuality from './screens/ReportWaterQuality'
import RespondToMessage from './screens/RespondToMessage'
import ViewIndividualMessage from './screens/ViewIndividualMessage'
import ViewIndividualWaterReport from './screens/ViewIndividualWaterReport'
import Inbox from './screens/Inbox'
import RecordMessage from './screens/RecordMessage'

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const myStackNavigatorGen = createStackNavigator(
{
	WaterHomeGen: WaterHomeGen,
	ConfirmWaterQualityReport: ConfirmWaterQualityReport,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
	ReportWaterQuality: ReportWaterQuality,
	RespondToMessage: RespondToMessage,
	Inbox: Inbox,
	ViewIndividualMessage: ViewIndividualMessage,
	RecordMessage: RecordMessage,
},
{
	initialRouteName: 'WaterHomeGen',
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);

const myStackNavigatorAdmin = createStackNavigator(
{
	WaterHomeAdmin: WaterHomeAdmin,
	ConfirmWaterQualityReport: ConfirmWaterQualityReport,
	CreateNewWaterQualityReport: CreateNewWaterQualityReport,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
	RespondToMessage: RespondToMessage,
	Inbox: Inbox,
	ViewIndividualMessage: ViewIndividualMessage,
	CreateNewWaterQualityReportPub: CreateNewWaterQualityReportPub,
	RecordMessage: RecordMessage,
},
{
	initialRouteName: 'WaterHomeAdmin',
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
	WaterHomeGen: { screen: myStackNavigatorGen },
	WaterHomeAdmin: { screen: myStackNavigatorAdmin },
},
{
	initialRouteName: 'Welcome'
}
);

export default createAppContainer(mySwitchNavigator);