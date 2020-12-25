import {When, Then} from 'cucumber';
import {expect} from 'chai';
import * as withoutCountry from "../pages/withoutCountryPage";

When(/^I enter phone number (.*)$/, async function (phoneInput:string) {
    await withoutCountry.addPhone(phoneInput);
    await withoutCountry.getValidationValue();
});

Then(/^code is formatted to '(.*)'$/, async function (phoneValidation:string) {
    let actualPhone = await withoutCountry.getValidationValue();
    expect(actualPhone).to.equal(phoneValidation);
});