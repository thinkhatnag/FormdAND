

class PreRecordingPage {
    get back() {
        return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.view.View/android.view.View[1]');
    }
    get caseText() {
        return $('');
    }
    get virtualPatient() {
        return $('//android.widget.TextView[@text="Virtual Patient"]');
    }
    get roleplay() {
        return $('//android.widget.TextView[@text="Role Play"]');
    }

    get virtualPatientConfirmationText() {
        return $('//android.widget.TextView[@text="Are you sure you want to proceed with virtual patient?"]');
    }
    get roleplayConfirmationText() {
        return $('//android.widget.TextView[@text="Are you sure you want to proceed with role play?"]');
    }
   
    get popUpCancel() {
        return $('//android.widget.TextView[@text="X"]');
    }
    get patientLogo() {
        return $('~Patient Avatar');
    }
    get proceed() {
        return $('//android.widget.TextView[@text="Ok"]');
    }
    get cancel() {
        return $('//android.widget.TextView[@text="Cancel"]');
    }
    get cancel() {
        return $('//android.widget.TextView[@text="Cancel"]');
    }
}
export default new PreRecordingPage()