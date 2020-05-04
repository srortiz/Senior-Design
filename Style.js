import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    
    //container for all pages
    container: {
        flex: 1,
        backgroundColor: 'white',
        //alignItems: 'center',
        //justifyContent: 'center',
    },

    //blue header band for all pages
    header: {
        backgroundColor: "#4a8eff",
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
    },

    //logo for header band for all pages
    asdenicLogo: {
        width: 70,
        height: 70,
        marginLeft: 20,
        marginTop: 20,
    },

    logoutButton: {
        color: 'white',
        marginTop: 50,
        marginRight: 25,
        fontSize: 15,
    },

    //middle section container for all pages
    pageContent: {
        height: 700,
    },

    //blue footer band for all pages
    footer: {
        backgroundColor: "#4a8eff",
        height: 100,
        justifyContent: 'flex-end',
        flex: 1,
    },


    newAccountCont: {
        alignItems: 'center',
        marginTop: 70,
    },

    newAccountHead: {
        fontSize: 25,
        marginBottom: 15,
    },

    newAccountInput: {
        marginTop: 18,
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        fontSize: 15,
    },

    newAccountDropdown: {
        marginTop: 18,
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        color: '#707070',
    },

    newAccountButton: {
        marginTop: 40,
        padding: 15,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 118,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
    },




    viewReportCont: {
        alignItems: 'center',
        marginTop: 70,
    },

    viewReportHead: {
        fontSize: 37,
    },

    viewReportBox: {
        marginTop: 25,
        width: 350,
        height: 515,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    viewReportListenButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 190,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    mic: {
        height: 20,
        width: 10,

    },

    waterImage: {
        marginTop: 15,
        height: 175,
        width: 250,
        alignSelf: 'center',
    },




    reportWaterCont: {
        alignItems: 'center',
        marginTop: 70,
    },

    reportWaterHead: {
        fontSize: 30,
        textAlign: 'center',
    },

    reportWaterBox: {
        marginTop: 25,
        width: 350,
        height: 485,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    reportWaterNameInput: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        fontSize: 16,
    },

    reportWaterCommDropdown: {
        marginTop: 18,
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        color: '#707070',
    },

    reportWaterIncidentInput: {
        marginTop: 18,
        height: 200,
        width: 307,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 25,
        fontSize: 16,
    },

    reportWaterButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    reportWaterRecordButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 170,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    reportWaterUploadButton: {
        marginTop: 10,
        padding: 7,
        borderRadius: 12,
        width: 134,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    reportWaterSendButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginTop: 5,
        alignItems: 'center',
        fontSize: 10,
    },

    uparrow: {
        height: 20,
        width: 14,
    },




    confirmReportCont: {
        alignItems: 'center',
        marginTop: 250,
        marginRight: 12,
        marginLeft: 12,
    },

    confirmReportHead: {
        fontSize: 30,
        textAlign: 'center',
    },

    confirmReportBackButton: {
        marginTop: 40,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 170,
        alignItems: 'center',
    },




    createReportCont: {
        alignItems: 'center',
        marginTop: 70,
    },

    createReportHead: {
        fontSize: 30,
        textAlign: 'center',
    },

    createReportBox: {
        marginTop: 25,
        width: 350,
        height: 440,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    createReportCommDropdown: {
        height: 40,
        width: 250,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 20,
        color: '#707070',
    },

    createReportIncidentInput: {
        marginTop: 18,
        height: 275,
        width: 307,
        paddingLeft: 10,
        borderColor: '#707070',
        borderWidth: 1.25,
        borderRadius: 25,
        fontSize: 16,
    },

    createReportButtons: {
        marginTop: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    createReportRecordButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 170,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    createReportUploadButton: {
        marginTop: 10,
        padding: 7,
        borderRadius: 12,
        width: 134,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    createReportPublishButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginTop: 15,
        alignItems: 'center',
        fontSize: 10,
    },




    respondMessCont: {
        alignItems: 'center',
        marginTop: 25,
    },

    respondMessHead: {
        fontSize: 30,
        alignSelf: 'flex-start',
        marginLeft: 40,
    },

    respondMessBox: {
        marginTop: 25,
        width: 350,
        height: 480,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    respondMessInput: {
        width: 307,
        height: 300,
        fontSize: 16,
    },

    respondMessRecordButton: {
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        marginTop: 100,
        width: 180,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
    },

    respondMessSendButton: {
        borderRadius: 20,
        backgroundColor: 'red',
        width: 100,
        padding: 10,
        marginTop: 20,
        alignItems: 'center',
        fontSize: 10,
    },



    viewMessDate: {
        alignSelf: 'flex-end',
        marginRight: 30,
        fontSize: 15,
    },

    viewMessHead: {
        fontSize: 30,
        alignSelf: 'flex-start',
        marginLeft: 40,
        marginTop: 30,
    },

    viewMessBox: {
        marginTop: 25,
        width: 350,
        height: 485,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 30,
        padding: 20,
    },

    viewMessComm: {
        fontSize: 20,
        marginLeft: 10,
        marginBottom: 5,
    },

    viewMessListenButton: {
        marginTop: 10,
        padding: 7,
        paddingLeft: 10,
        paddingRight: 8,
        borderRadius: 12,
        width: 190,
        borderColor: 'black',
        borderWidth: 1.25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'center',
    },

    viewMessButtons: {
        flexDirection: 'row',
        marginTop: 15,
    },

    viewMessCallButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 115,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
    },

    viewMessRespondButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 115,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },

    viewMessPublishButton: {
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#4a8eff',
        width: 115,
        borderColor: '#707070',
        borderWidth: 1.25,
        alignItems: 'center',

    },

});