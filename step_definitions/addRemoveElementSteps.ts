import {Given, When, Then} from 'cucumber';
import { browser} from 'protractor';
import {expect} from 'chai';
import * as addRemovePage from '../pages/addRemoveElementsPage';

Given('I go to {string}', async function (url:string) {
    await browser.waitForAngularEnabled(false);
    await browser.get(url);
});

When(/^I Add Element$/, async function () {
    await addRemovePage.clickAddButton();
});

When(/^I click Delete Element$/, async function () {
    await addRemovePage.clickDeleteButton();
});

Then(/^(\d+) Delete Element is displayed$/, async function (count: number) {
    let actualCount = await addRemovePage.countDeleteButtons();
    expect(count).to.equal(actualCount);
});