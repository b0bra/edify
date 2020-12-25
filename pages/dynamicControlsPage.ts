import {by, element, ElementFinder} from 'protractor';
import * as util from '../support/util';
import {expect} from 'chai';

const addRemoveButton: ElementFinder = element(by.css('#checkbox-example > button'));
const checkBox: ElementFinder = element(by.css('#checkbox'));
const message: ElementFinder = element(by.css('#message'));
const loading: ElementFinder = element(by.css('#loading'));
const inputField: ElementFinder = element((by.css('#input-example > input[type=text]')))
const enableDisableButton: ElementFinder = element(by.css('#input-example > button'));

export async function clickCheckBox(){
    await util.clickElement(checkBox);
}

export async function clickAddRemoveButton(){
    await util.clickElement(addRemoveButton);
    await util.waitForElement(loading);
    await util.isElementVisible(message);
    return util.getElementText(message);
}

export async function inputEnabled(enabled:boolean){
    if(enabled){
        expect(await inputField.isEnabled()).to.be.true;
    } else{
        expect(await inputField.isEnabled()).to.be.false;
    }
}

export async function clickEnabledDisabled(){
    await util.clickElement(enableDisableButton);
    await util.waitForElement(loading);
}

