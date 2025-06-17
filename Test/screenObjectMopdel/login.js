
class LoginPage {
    get emailField() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.EditText[1]'); }
    get passwordField() { return $('//androidx.compose.ui.platform.ComposeView/android.view.View/android.widget.EditText[2]'); }
    get loginButton() { return $('(//android.widget.TextView[@text="Login"])[2]'); }
    get passwordRequired() { return $('//android.widget.TextView[@text="Password cannot be empty"]'); }
    get WrongPassword() { return $('//android.widget.TextView[@text="Password must be at least 8 characters"]'); }
    get emailRequired() { return $('//android.widget.TextView[@text="Email Cannot Be Empty"]'); }
    get invalidEmailError() { return $('//android.widget.TextView[@text="Please enter valid email"]'); }
    get emailNotRegisteredError() { return $('//android.widget.Toast[@text="User does not exist"]'); }
    get forgotPassword() { return $('//android.widget.TextView[@text="Forgot Password?"]'); }
    get homescreenAnimation() { return $('//android.widget.TextView[@text="Hello Naga Badri,"]'); }
    get PasswordFieldEyeIconOpen () { return $(''); }
    get PasswordFieldEyeIconClose () { return $(''); }

    get Done() { return $('~Return'); }

    // Helper methods for actions
    async enterEmail(email) {
        await expect(this.emailField).toBeDisplayed();
        await this.emailField.setValue(email);

    }

    async enterPassword(password) {
        await expect(this.passwordField).toBeDisplayed();       
        await this.passwordField.setValue(password);

    }

    async clickLogin() {
        await expect(this.loginButton).toBeDisplayed();
        const isEnabled = await this.loginButton.isEnabled();
        expect(isEnabled).toBe(true);
        await this.loginButton.click();
    }

    async restartApp() {
        await driver.terminateApp('com.thinkhat.formD');
        await driver.activateApp('com.thinkhat.formD');
    }
}

export default new LoginPage();
