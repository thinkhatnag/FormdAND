import { verifyAndClick, verify, back, hideKeyboard } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js';
class TrainUpPage {
    get cases() {
        return $('//android.widget.TextView[@text="Cases"]');
    }
    get SearchField() {
        return $('//android.widget.EditText');
    }
    get Filters() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.widget.Button');
    }
    get casesFilterSearchField() {
        return $('//android.widget.EditText');
    }
    get FilterCloseButton() {
        return $('//android.view.ViewGroup/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View[2]');
    }
    get filterApplyButton() {
        return $('//android.widget.TextView[@text="Apply"]');
    }
    get play(){'(//android.view.View[@content-desc="Play"])[1]'}

    //Types of Filters in Cases
    get AdultReconstructiveOrthopedics() {
        return $('');
    }
    
    get Allergy() {
        return $('');
    }
    
    get AllergyImmunology() {
        return $('');
    }
    
    get Anesthesiology() {
        return $('');
    }
    
    get Cardiology() {
        return $('');
    }
    
    get CardiovascularSurgery() {
        return $('');
    }
    
    get ColonAndRectalSurgery() {
        return $('');
    }
    
    get CriticalCare() {
        return $('');
    }
    
    get Dentistry() {
        return $('');
    }
    
    get Dermatology() {
        return $('');
    }
    
    get DiagnosticRadiology() {
        return $('');
    }
    
    get EmergencyMedicine() {
        return $('');
    }
    
    get EndocrinologyDiabetesMetabolism() {
        return $('');
    }
    
    get Endodontist() {
        return $('');
    }
    
    get FamilyPractice() {
        return $('');
    }
    
    get FootAndAnkleOrthopedics() {
        return $('');
    }
    
    get Gastroenterology() {
        return $('');
    }
    
    get GeneralDentistry() {
        return $('');
    }
    
    get GeneralPractice() {
        return $('');
    }
    
    get GeriatricMedicineIM() {
        return $('');
    }
    
    get GynecologicOncology() {
        return $('');
    }
    
    get Gynecology() {
        return $('');
    }
    
    get Hematology() {
        return $('');
    }
    
    get HematologyOncology() {
        return $('');
    }
    
    get Hospitalist() {
        return $('');
    }
    
    get Immunology() {
        return $('');
    }
    
    get InfectiousDiseases() {
        return $('');
    }
    
    get Infertility() {
        return $('');
    }
    
    get InternalMedicine() {
        return $('');
    }
    
    get InterventionalCardiology() {
        return $('');
    }
    
    get MedicalOncology() {
        return $('');
    }
    
    get Neonatology() {
        return $('');
    }
    
    get Nephrology() {
        return $('');
    }
    
    get NeurologicalSurgery() {
        return 
    }
    
    get Neurology() {
        return $('');
    }
    
    get NuclearMedicine() {
        return $('');
    }
    
    get Nutrition() {
        return $('');
    }
    
    get Obstetrics() {
        return $('');
    }
    
    get ObstetricsGynecology() {
        return $('');
    }
    
    get OccupationalMedicine() {
        return $('');
    }
    
    get Ophthalmology() {
        return $('');
    }
    
    get Optometrist() {
        return $('');
    }
    
    get OralAndMaxillofacialPathology() {
        return $('');
    }
    
    get OralSurgery() {
        return $('');
    }
    
    get Orthodontics() {
        return $('');
    }
    
    get Otolaryngology() {
        return $('');
    }

    get PainMedicine() {
        return $('');
    }
    
    get Pathology() {
        return $('');
    }
    
    get PediatricCardiology() {
        return $('');
    }
    
    get PediatricDermatology() {
        return $('');
    }
    
    get PediatricOrthopaedicSurgery() {
        return $('');
    }
    
    get Pediatrics() {
        return $('');
    }
    
    get Pedodontist() {
        return $('');
    }
    
    get Periodontics() {
        return $('');
    }
    
    get PhysicalMedicineAndRehabilitation() {
        return $('');
    }
    
    get PlasticSurgery() {
        return $('');
    }
    
    get Podiatry() {
        return $('');
    }
    
    get Prosthodontist() {
        return $('');
    }
    
    get Psychiatry() {
        return $('');
    }
    
    get PulmonaryMedicine() {
        return $('');
    }
    
    get RadiationOncology() {
        return $('');
    }
    
    get Radiology() {
        return $('');
    }
    
    get ReproductiveEndocrinology() {
        return $('');
    }
    
    get Rheumatology() {
        return $('');
    }
    
    get SpineSurgery() {
        return $('');
    }
    
    get SportsMedicine() {
        return $('');
    }
    
    get SurgeryGeneral() {
        return $('');
    }
    
    get SurgicalOncology() {
        return $('');
    }
    
    get Urology() {
        return $('');
    }
    
    get VascularSurgery() {
        return $('');
    }



   //Stations
    get stations() {
        return $('//android.widget.TextView[@text="Stations"]');
    }
    get focusedHistory() {
        return $('//android.widget.TextView[@text="Focused History"]');
    }

    get FocusedPhysicalExamination() {
        return $('//android.widget.TextView[@text="Focused Physical Examination"]');
    }

    get interpretationOfInvestigativeResults() {
        return $('//android.widget.TextView[@text="Interpretation of Investigative Results"]');
    }
    get AssessmentPlan() {
        return $('//android.widget.TextView[@text="Assessment/Plan"]');
    }
    get professinalism() {
        return $('//android.widget.TextView[@text="Professionalism"]');
    }
    get patitentEducation() {
        return $('//android.widget.TextView[@text="Patient Education"]');
    }
    get soapNote() {
        return $('//android.widget.TextView[@text="SOAP NOTE"]');
    }
    get procedures() {
        return $('//android.widget.TextView[@text="Procedures"]');
    }

//modelselection
    get modelSelection() {
        return $('');
    }




//circuits
    get circuts() {
        return $('//android.widget.TextView[@text="Circuits"]');
    }

    get startCircuit() {
        return $('//android.widget.TextView[@text="Start Circuit"]');
    }
    get continue() {
        return $('//android.widget.TextView[@text="Continue"]');
    }
    get discardAndRetake() {
        return $('//android.widget.TextView[@text="Discard & Retake"]');
    }
    get Retake() {
        return $('//android.widget.TextView[@text="Retake"]');
    }
    get circuitPopUpClose() {
        return $('//android.widget.TextView[@text="X"]');
    }
 



    //MultiStations
    get multistations() {
        return $('//android.widget.TextView[@text="Multi Station Cases"]');
    } 
    get filter() {
        return $('//android.widget.EditText');
    }
 
    get multiStationsSearchField() {
        return $('//android.widget.EditText');
    }
    get play() {
        return $('(//android.view.View[@content-desc="Play"])[1]');
    }
    get FirstPlay() {
        return $('(//android.view.View[@content-desc="Play"])[1]');
    }
    get singlePlay() {
        return $('//android.view.View[@content-desc="Play"]');
    }
    get cancel() {
        return $('//android.widget.TextView[@text="Cancel"]');
    }
    get continue() {
        return $('//android.widget.TextView[@text="Continue"]');
    }
    get rolePlay() {
        return $('//android.widget.TextView[@text="Role Play"]');
    }
    get virtualPatient() {
        return $('//android.widget.TextView[@text="Role Play"]');
    }
    get ok() {
        return $('//android.widget.TextView[@text="Ok"]');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }

     get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }

     get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }

    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    get () {
        return $('');
    }
    async  textField(element, text) {
        await verifyAndClick(element);
        await element.setValue(text);
        await driver.pause(2000)
        await back()
    }   
    async handleCircutsPopUp(){
    try {
        console.log("Checking for Discard & Retake...");
        let discardDisplayed = false;
        try {
            discardDisplayed = await this.discardAndRetake.waitForDisplayed({ timeout: 3000 });
        } catch (error) {
            console.log("Discard & Retake not displayed:", error.message);
        }
    
        if (discardDisplayed) {
            await verifyAndClick(this.discardAndRetake);
            console.log("Clicked Discard and Retake");
            await verify(this.cancel);
            console.log("Verified Cancel");
            await verifyAndClick(this.Retake);
            console.log("Clicked Retake after discard");
        } else {
            console.log("Checking for Retake...");
            let retakeDisplayed = false;
            try {
                retakeDisplayed = await this.Retake.waitForDisplayed({ timeout: 3000 });
            } catch (error) {
                console.log("Retake not displayed:", error.message);
            }
    
            if (retakeDisplayed) {
                await verifyAndClick(this.Retake);
                console.log("Clicked Retake after discard");
            } else {
                console.log("Checking for OK...");
                let okDisplayed = false;
                try {
                    okDisplayed = await DashBoardPage.ok.waitForDisplayed({ timeout: 3000 });
                } catch (error) {
                    console.log("OK not displayed:", error.message);
                }
    
                if (okDisplayed) {
                    await verifyAndClick(DashBoardPage.ok);
                    console.log("Clicked OK");
                } else {
                    console.log("No expected elements displayed");
                }
            }
        }
    } catch (error) {
        await driver.saveScreenshot("error_screenshot.png");
        console.error("Unexpected error during element interaction:", error.message);
    }
}
}

export default new TrainUpPage()