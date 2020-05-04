import React from 'react';

import ConfirmWaterQualityReport from './screens/ConfirmWaterQualityReport'
import CreateNewAccount from './screens/CreateNewAccount'
import CreateNewWaterQualityReport from './screens/CreateNewWaterQualityReport'
import ReportWaterQuality from './screens/ReportWaterQuality'
import RespondToMessage from './screens/RespondToMessage'
import ViewIndividualMessage from './screens/ViewIndividualMessage'
import ViewIndividualWaterReport from './screens/ViewIndividualWaterReport'

import { createStackNavigator } from 'react-navigation-stack';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

const myStackNavigator = createStackNavigator(
{
	ConfirmWaterQualityReport: ConfirmWaterQualityReport,
	CreateNewAccount: CreateNewAccount,
	CreateNewWaterQualityReport: CreateNewWaterQualityReport,
	ViewIndividualMessage: ViewIndividualMessage,
	ViewIndividualWaterReport: ViewIndividualWaterReport,
},
{
	initialRouteName: 'CreateNewAccount',
	headerMode: 'none',
	navigationOptions: {
		headerVisible: false,
	}
}
);

const mySwitchNavigator = createSwitchNavigator(
{
	ReportWaterQuality: { screen: ReportWaterQuality },
	RespondToMessage: { screen: RespondToMessage},
},
{
	initialRouteName: 'ReportWaterQuality'
}
);

export default createAppContainer(mySwitchNavigator);