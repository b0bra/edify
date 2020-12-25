import {When, Then} from 'cucumber'
import * as notificationPage from '../pages/notificationPage';
import {expect} from 'chai';

When(/^I load new message$/, async function () {
    await notificationPage.loadNewMessage();
});

Then(/^New message is displayed$/, async function () {
    expect(await notificationPage.getMessage()).to.be.oneOf(["Action successful\n×", "Action unsuccesful, please try again\n×"]);
});
