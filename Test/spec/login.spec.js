import LoginPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/login.js';
import { verify } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js';
import ForgotPassword from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/forgotPassword.js';
describe('login screen test cases',() => {

    it('Verify forgot password screen not providing the email', async() => {
        await verifyAndClick(LoginPage.forgotPassword)
        await ForgotPassword.enterEmail('')
        await verifyAndClick(ForgotPassword.sendResetLinkBtn);
        await verify(ForgotPassword.emptyEmail);
        await verifyAndClick(ForgotPassword.loginBtn);
        await verify(LoginPage.emailField);
        await ForgotPassword.restartApp();

    });
    it('Verify forgot password screen providing the improper mail email', async() => {
        await verifyAndClick(LoginPage.forgotPassword)
        await ForgotPassword.enterEmail('kcsnqfjngmail.com')
        await verifyAndClick(ForgotPassword.sendResetLinkBtn);
        await verify(ForgotPassword.invalidEmailFormet);
        await ForgotPassword.restartApp();
    });
    it('Verify forgot password screen providing the not registered email', async() => {
        await verifyAndClick(LoginPage.forgotPassword)
        await ForgotPassword.enterEmail('kcsnqfjn@gmail.com')
        await verifyAndClick(ForgotPassword.sendResetLinkBtn);
        await verify(ForgotPassword.notRegisterdMailError);
        await ForgotPassword.restartApp();
    });
    it('Verify forgot password screen providing the registered email', async() => {
        await verifyAndClick(LoginPage.forgotPassword)
        await ForgotPassword.enterEmail('thinkhatnag@gmail.com')
        await verifyAndClick(ForgotPassword.sendResetLinkBtn);
        await verify(ForgotPassword.emailSentVerifation);
        await verifyAndClick(ForgotPassword.continueToLoginBtn);
        await ForgotPassword.restartApp();
    });

    it('Verify error message when password is not provided {TC01}', async() => {
        await LoginPage.enterEmail('thinkhatnag@gmail.com')
        await LoginPage.clickLogin();
        await verify(LoginPage.passwordRequired);
        await LoginPage.restartApp();
    });

    it('Verify error message when an incorrect password is entered {TC02}', async() => {
        await LoginPage.enterEmail('thinkhatnag@gmail.com')
        await LoginPage.enterPassword('wlfdihbfver')
        await LoginPage.clickLogin();
        await verify(LoginPage.WrongPassword);
        await LoginPage.restartApp();
    });

    it('Verify error message when email is not provided {TC03}', async() => {
        await LoginPage.enterPassword('')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailRequired);
        await LoginPage.restartApp();
    });

    it('Verify error messages when both email and password are not provided {TC04}', async() => {
        await LoginPage.enterEmail('')
        await LoginPage.enterPassword('')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailRequired);
        await LoginPage.restartApp();
    });

    it('Verify error message when an incorrectly formatted email is entered {TC05}', async() => {
        await LoginPage.enterEmail('djhbkfcek@gmailcom')
        await LoginPage.enterPassword('eihfueirb')
        await LoginPage.clickLogin();
        await verify(LoginPage.invalidEmailError)
        await LoginPage.restartApp();
    });

    it('Verify error message when the email is not registered {TC06}', async() => {
        await LoginPage.enterEmail('vqejvcievciye@gmail.com')
        await LoginPage.enterPassword('123456')
        await LoginPage.clickLogin();
        await verify(LoginPage.emailNotRegisteredError)
        await LoginPage.restartApp();
    });

    it('Verify login performance within an acceptable time limit {TC07}', async() => {
        await LoginPage.enterEmail('thinkhatnag@gmail.com')
        await LoginPage.enterPassword('Test@1234')
        await LoginPage.clickLogin();
        await verify(LoginPage.homescreenAnimation)
        await LoginPage.restartApp();
    });
    
})