import DashBoardPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/dashBoard.js';
import { verify, verifyAndClick, textField, swipe, performScroll } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js';
import LoginPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/login.js';
import ForgotPassword from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/forgotPassword.js';
it('DashBoard Elements Flow Check', async () => {
  await verifyAndClick(LoginPage.forgotPassword)
  await ForgotPassword.enterEmail('')
  await verifyAndClick(ForgotPassword.sendResetLinkBtn);
  await verify(ForgotPassword.emptyEmail);
  await verifyAndClick(ForgotPassword.loginBtn);
  await verify(LoginPage.emailField);

      
})