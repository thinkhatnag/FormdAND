import DashBoardPage from '/Users/nagasubarayudu/Desktop/FormDAND/Test/screenObjectMopdel/dashBoard.js';
import { verify, verifyAndClick, textField, swipe, performScroll } from '/Users/nagasubarayudu/Desktop/FormDAND/helper/helper.js';
it('DashBoard Elements Flow Check', async () => {
   
// await driver.action('pointer')
// .move({ duration: 0, x: 412, y: 1272 })
// .down({ button: 0 })
// .move({ duration: 1000, x: 419, y: 410 })
// .up({ button: 0 })
// .perform();
await performScroll(driver)
const elem = await;
await elem.scrollIntoView({
  direction: 'left',
  maxScrolls: 5,
  scrollableElement: $('')
});    
  });

      
    //    await swipe('right',DashBoardPage.quickAccessScrollingElement)
    //    await swipe('right',DashBoardPage.quickAccessScrollingElement)
