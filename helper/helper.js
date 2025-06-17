export async function verify(element) {
    await element?.waitForDisplayed({ timeout: 10000 });
} 
  
export async function verifyAndClick(element) { 
    await verify(element)
    await element?.click();
}   
export async function back() { 
    await driver.executeScript("mobile: pressKey", [{"keycode":4}]);
} 

export async function waitForElement(element, timeout = 120000) {
    await element?.waitForDisplayed({ timeout });
} 
export async function textField(element, text) {
    await verifyAndClick(element);
    await element.setValue(text);
    await driver.pause(2000)
    await back()
}   
export async function hideKeyboard() {
    
    if (await driver.isKeyboardShown()) {
        await driver.executeScript("mobile: hideKeyboard", []);
    }    
}
export async function swipe(direction, scrollElement) {
    const validDirections = ['up', 'down', 'left', 'right'];
    if (!validDirections.includes(direction)) {
        throw new Error(`Invalid direction: ${direction}. Must be one of ${validDirections.join(', ')}`);
    }

    // Resolve scroll element
    let element;
    try {
        element = typeof scrollElement === 'string' ? await $(scrollElement) : scrollElement;
        if (!element || !(await element.isDisplayed())) {
            throw new Error('Scrollable element is not found or not displayed');
        }
    } catch (error) {
        throw new Error(`Failed to locate scrollable element: ${error.message}`);
    }

    // Perform swipe using Appium 2 mobile gesture
    try {
        await driver.execute('mobile: swipeGesture', {
            direction,
            duration: 5000,                     // Last for 5 seconds
            elementId: (await element.elementId),
            percent: 0.13
            // direction,
            // maxScrolls: 5,
            // duration: 1500,
            // percent: 0.95,
            // scrollableElement: element
        });
    } catch (error) {
        throw new Error(`Swipe action failed: ${error.message}`);
    }
}
export async function performScroll(driver) {
    // Get device window size
    const { width, height } = await driver.getWindowSize();
  
    // Define relative start and end points (as percentages of screen dimensions)
    const startX = width * 0.5; // 50% of screen width (center)
    const startY = height * 0.8; // 80% from top (near bottom)
    const endX = width * 0.5; // Same x-position (vertical scroll)
    const endY = height * 0.2; // 20% from top (scroll up)
  
    // Perform scroll action
    await driver.action('pointer')
      .move({ duration: 0, x: startX, y: startY })
      .down({ button: 0 })
      .move({ duration: 1000, x: endX, y: endY })
      .up({ button: 0 })
      .perform();
  }


// await driver.execute('mobile: swipe', { direction: 'up' });
// await driver.execute('mobile: swipe', { direction: 'down' });