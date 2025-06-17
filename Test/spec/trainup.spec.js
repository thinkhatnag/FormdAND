import DashBoardPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/dashBoard.js';
import TrainUpPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/trainUp.js';  
import RecordingScreenPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/recording.js';
import PreRecordingPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/preRecording.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/login.js';

import { verify, verifyAndClick, textField, swipe, performScroll } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js'; 
describe('TrainUp Test Cases',()=>{
    
    it('DashBoard to Recording screen through TrainUpOSCE Cases ', async() =>
        {            await performScroll(driver)  

        await verifyAndClick(DashBoardPage.ViewMoreForCases)
         await textField(TrainUpPage.SearchField,'cardiac attack')
         await verifyAndClick(TrainUpPage.singlePlay)
         await verify(PreRecordingPage.patientLogo)
         await verifyAndClick(PreRecordingPage.roleplay)
         await verify(PreRecordingPage.roleplayConfirmationText)
         await verifyAndClick(PreRecordingPage.proceed)
         await verify(RecordingScreenPage.startConversation)
         await verifyAndClick(RecordingScreenPage.back)
         await verifyAndClick(PreRecordingPage.back)
         await verifyAndClick(DashBoardPage.dashBoard)
         await LoginPage.restartApp()

       });
    it('DashBoard to Recording screen through TrainUpOSCE Stations ', async() =>
        {          await driver.pause(10000)  
        await performScroll(driver)  

         await verifyAndClick(DashBoardPage.ViewMoreForStations)
         await verifyAndClick(TrainUpPage.focusedHistory)
         await textField(TrainUpPage.SearchField,'cardiac attack')
         await verifyAndClick(TrainUpPage.singlePlay)
         await verify(DashBoardPage.cancel)
         await verifyAndClick(TrainUpPage.ok)
         await verify(RecordingScreenPage.startConversation)
         await verifyAndClick(RecordingScreenPage.back)
         await verifyAndClick(PreRecordingPage.back)
         await verifyAndClick(DashBoardPage.dashBoard)
         await LoginPage.restartApp()

       });
       it('DashBoard to Recording screen through TRainUpOSCE Circuts', async() =>
        {           
            await driver.pause(10000)  
            await performScroll(driver)  

            await verifyAndClick(DashBoardPage.ViewMoreForCircuits)
            await textField(TrainUpPage.SearchField,'Mobile Automation')
            await verifyAndClick(TrainUpPage.startCircuit);
            await TrainUpPage.handleCircutsPopUp()
           await verify(RecordingScreenPage.startConversation)
           await verifyAndClick(RecordingScreenPage.back)
           await verifyAndClick(DashBoardPage.dashBoard)
           await LoginPage.restartApp()

        })   

    it('Test case to check the flow of app from MultiStation to recording Page',async() =>{
        await driver.pause(10000)  
        await verifyAndClick(DashBoardPage.trainUp)
        await verifyAndClick(TrainUpPage.multistations)
        await textField(TrainUpPage.SearchField,'Weight Loss Automation')
        await verifyAndClick(TrainUpPage.singlePlay)
        await TrainUpPage.handleCircutsPopUp()
        await verify(RecordingScreenPage.startConversation)
        await verifyAndClick(RecordingScreenPage.back)
        await verifyAndClick(DashBoardPage.dashBoard)
        await LoginPage.restartApp()

    })
})
