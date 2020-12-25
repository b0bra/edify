import {When, Then} from 'cucumber';
import * as loginPage from '../pages/loginPage';
import {expect} from 'chai';

When(/^I enter credentials$/, async function (data) {
    await loginPage.enterUsername(data.raw()[0][0]);
    await loginPage.enterPassword(data.raw()[0][1]);
    await loginPage.clickLogin();
});

Then(/^(.*) message appears$/, async function (status:string) {
    let message = await loginPage.validateNotification();
    if(status === 'Success'){
        expect(message).to.contain("You logged into a secure area!");
    } else if(status === 'Error'){
        expect(message).to.contain("Your username is invalid!");
    }
});

When(/^I log out$/, async function () {
    await loginPage.logout();
    let message = await loginPage.validateNotification();
    expect(message).to.contain("You logged out of the secure area!");
});

Then(/^login page is displayed$/, async function () {
    await loginPage.loginDisplayed();
});