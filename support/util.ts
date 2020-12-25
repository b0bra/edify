import {browser, by, element, ElementFinder, ExpectedConditions as EC} from 'protractor';

export async function isElementClickable(element:ElementFinder){
    return browser.wait(EC.elementToBeClickable(element),5000, 'element is not clickable');
}

export async function isElementVisible(element:ElementFinder){
    return browser.wait(EC.presenceOf(element),5000, 'element is not present');
}

export async function clickElement(element:ElementFinder){
    await browser.wait(EC.presenceOf(element),5000, 'clickable Element not present');
    await browser.wait(EC.elementToBeClickable(element),5000, 'element not clickable');
    await element.click();
}

export async function waitForElement(element:ElementFinder){
    return browser.wait(EC.invisibilityOf(element),5000, 'element is still visible');
}

export async function sendKeystoElement(element: ElementFinder, text: string) {
    await browser.wait(EC.presenceOf(element),5000);
    await element.clear().then(() => {
        element.sendKeys(text)
    })
}

export async function getElementText(element:ElementFinder){
    await browser.wait(EC.presenceOf(element),5000, 'elementText not found');
    return await element.getText().then(function (text) {
        if(text){
            return text;
        } else {
            return 'Error';
        }
    });
}