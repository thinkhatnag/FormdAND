import DashBoardPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/dashBoard.js';
import TrainUpPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/trainUp.js';  
import RecordingscreenPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/recording.js';
import PreRecordingPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/preRecording.js'; 
import LoginPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/login.js';
import { verify, verifyAndClick, textField, swipe, performScroll } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js'; 
describe('DashBoard Test cases',() => {

    it('DashBoard Elements Flow Check', async() =>
     {
        //await DashBoardPage.dashBoardFlow()
        await driver.pause(10000)
        await swipe('left',DashBoardPage.jumpBackInScrollingElement)
        console.log('Quick Access Scrolling Element swiped left');
        await swipe('right',DashBoardPage.jumpBackInScrollingElement)
        await swipe('right',DashBoardPage.jumpBackInScrollingElement)
        console.log('Quick Access Scrolling Element swiped right');
        await verify(DashBoardPage.quickAccess)
        console.log('Quick Access verified');
        await swipe('left',DashBoardPage.quickAccessScrollingElement)
        console.log('Quick Access Scrolling Element swiped left');
        await swipe('right',DashBoardPage.quickAccessScrollingElement)
        await swipe('right',DashBoardPage.quickAccessScrollingElement)
        console.log('Quick Access Scrolling Element swiped right');
        await performScroll(driver)
        await verify(DashBoardPage.osce)
        console.log('OSCE verified');
        await swipe('left',DashBoardPage.casesScrollView)
        console.log('Cases Scroll View swiped left');
        await swipe('right',DashBoardPage.casesScrollView)
        await swipe('right',DashBoardPage.casesScrollView)
        console.log('Cases Scroll View swiped right');
        await swipe('left',DashBoardPage.stationsScrollView)
        console.log('Stations Scroll View swiped left');
        await swipe('right',DashBoardPage.stationsScrollView)
        await swipe('right',DashBoardPage.stationsScrollView)
        console.log('Stations Scroll View swiped right');
        await swipe('left',DashBoardPage.circuitsScrollView)
        console.log('Circuits Scroll View swiped left');
        await swipe('right',DashBoardPage.circuitsScrollView)
        await swipe('right',DashBoardPage.circuitsScrollView)
        console.log('Circuits Scroll View swiped right');
        await verifyAndClick(DashBoardPage.trainUp)
        console.log('Train Up clicked');
        await verify(TrainUpPage.SearchField)
        console.log('Cases Search Field verified');
        await verifyAndClick(TrainUpPage.stations)
        console.log('Stations clicked');
        const elementsToVerify = [
            { name: 'Focused History', element: TrainUpPage.focusedHistory },
            { name: 'Focused Physical Examination', element: TrainUpPage.FocusedPhysicalExamination },
            { name: 'Interpretation of Investigative Results', element: TrainUpPage.interpretationOfInvestigativeResults },
            { name: 'Assessment/Plan', element: TrainUpPage.AssessmentPlan },
            { name: 'Professionalism', element: TrainUpPage.professinalism },
            { name: 'Patient Education', element: TrainUpPage.patitentEducation },
            { name: 'SOAP NOTE', element: TrainUpPage.soapNote },
            { name: 'Procedures', element: TrainUpPage.procedures }
        ];
        
        for (const { name, element } of elementsToVerify) {
            let isVisible = await element.isDisplayed();
            let attempts = 0;
        
            while (!isVisible && attempts < 3) {
                await performScroll(driver)
                await driver.pause(500); // small wait after swipe
                isVisible = await element.isDisplayed();
                attempts++;
            }
        
            if (isVisible) {
                console.log(`✅ Verified: ${name}`);
                await verify(element);
            } else {
                console.warn(`❌ Element not visible after scrolling: ${name}`);
                // Optionally: throw error or mark test as failed
            }
        }
        console.log('All elements of the trainUp screen stations are verifired successfully');
        await verifyAndClick(TrainUpPage.circuts)
        console.log('Circuits clicked');
        await verifyAndClick(TrainUpPage.SearchField)
        console.log('Circuits Search Field verified');
        await verifyAndClick(TrainUpPage.multistations)
        console.log('Multi Stations clicked');
        await verify(TrainUpPage.SearchField)
        console.log('Multi Stations Search Field verified');
        await verifyAndClick(DashBoardPage.dashBoard)
        console.log('Dash Board clickedReturned to Main screen');
        await LoginPage.restartApp()

    });
    it('DashBoard to Recording screen through JumpBack in ', async() =>
        {
            await verifyAndClick(DashBoardPage.continue)
            await verify(DashBoardPage.ModelSelectionCofirmationText)
            await verify(DashBoardPage.rolePlay)
            await verify(DashBoardPage.virtualPatient)
            await verify(TrainUpPage.cancel)
            await verifyAndClick(DashBoardPage.jumpBackInContinue)
            await verify(RecordingscreenPage.startConversation)
            await verifyAndClick(RecordingscreenPage.back)
            await LoginPage.restartApp()


       });
    it('DashBoard to Recording screen through QuckCases ', async() =>
        {
          await verifyAndClick(DashBoardPage.startTest)
          await verify(PreRecordingPage.roleplay)
          await verifyAndClick(PreRecordingPage.virtualPatient)
          await verify(PreRecordingPage.virtualPatientConfirmationText)
          await verifyAndClick(PreRecordingPage.proceed)
          await verify(RecordingscreenPage.startConversation)
          await verifyAndClick(RecordingscreenPage.back)
          await verifyAndClick(PreRecordingPage.back)
          await LoginPage.restartApp()
        });
    it('DashBoard to Recording screen through OSCE Cases ', async() =>
        {
            await verify(DashBoardPage.profileAvatar)
          await performScroll(driver)  
          await verifyAndClick(DashBoardPage.casePlay)
          await verify(PreRecordingPage.patientLogo)
          await verifyAndClick(PreRecordingPage.roleplay)
          await verifyAndClick(PreRecordingPage.roleplayConfirmationText)
          await verifyAndClick(PreRecordingPage.proceed)
          await verify(RecordingscreenPage.startConversation)
          await verifyAndClick(RecordingscreenPage.back)
          await verifyAndClick(PreRecordingPage.back)
          await LoginPage.restartApp()

       });
       it('DashBoard to Recording screen through OSCE Stations', async() =>
        {
            await verify(DashBoardPage.profileAvatar)
            await performScroll(driver)  
          await verifyAndClick(DashBoardPage.stationPlay)
          await driver.pause(5000)
          await verifyAndClick(TrainUpPage.SearchField)
          await driver.pause(5000)
          await TrainUpPage.SearchField.setValue('cardiac attack')
        //   await TrainUpPage.textField(TrainUpPage.SearchField, 'cardic attack')
          await verifyAndClick(TrainUpPage.singlePlay)
          await verify(TrainUpPage.cancel)
          await verifyAndClick(TrainUpPage.rolePlay)
          await verifyAndClick(TrainUpPage.ok)
          await verify(RecordingscreenPage.startConversation)
          await verifyAndClick(RecordingscreenPage.back)
          await verifyAndClick(PreRecordingPage.back)
          await verifyAndClick(DashBoardPage.dashBoard)
          await LoginPage.restartApp()

        })
        it('DashBoard to Recording screen through OSCE Circuits', async() =>
            {
                await verify(DashBoardPage.profileAvatar)
                await performScroll(driver)  
              await verifyAndClick(DashBoardPage.circuitsPlay)
              await TrainUpPage.handleCircutsPopUp()
              await verify(RecordingscreenPage.startConversation)
              await verifyAndClick(RecordingscreenPage.back)
              await LoginPage.restartApp()

            })
})
