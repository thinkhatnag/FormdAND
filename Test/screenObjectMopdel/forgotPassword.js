import { back } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js';
class ForgotPassword {
    get emailField() { return $('//android.widget.EditText'); }
    get sendResetLinkBtn() { return $('//android.widget.TextView[@text="Send Reset Link"]'); }
    get loginBtn() { return $('//android.widget.TextView[@text="Log In"]'); }
    get invalidEmailFormet() { return $('//android.widget.TextView[@text="Please enter valid email"]'); }
    get notRegisterdMailError() {return $("//android.widget.Toast[@text=\"User Doesn't exist\"]");}
    get emailSentVerifation() { return $('//android.widget.TextView[@text="Password reset link has been successfully sent to your email."]'); }
    get continueToLoginBtn() { return $('//android.widget.TextView[@text="Continue"]'); }
    get emptyEmail() { return $('//android.widget.TextView[@text="Email Cannot Be Empty"]'); }
    get () { return $(''); }

    // Helper methods for actions
    async enterEmail(email) {
        await expect(this.emailField).toBeDisplayed();
        await this.emailField.setValue(email);
        //await back()

    }
    async restartApp() {
        const appId = 'com.thinkhat.formD'; 
        await driver.execute('mobile: terminateApp', { appId });
        await driver.pause(2000)
        await driver.activateApp(appId);
    }

 
}

export default new ForgotPassword();
