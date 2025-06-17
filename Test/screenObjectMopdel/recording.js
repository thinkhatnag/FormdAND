
class RecordingScreenPage{
    get startConversation(){
        return $('//android.widget.TextView[@text="Start Conversation"]');
    }
    get back(){
        return $('~Go Back');
    }
    get rolepaly(){
        return $('');
    }
    get virtualPatient(){
        return $('');
    }
}
export default new RecordingScreenPage()