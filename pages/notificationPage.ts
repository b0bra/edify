import {by, element, ElementFinder} from 'protractor';
import * as util from '../support/util';

const loadMessage: ElementFinder = element(by.css('#content > div > p > a'));
const message: ElementFinder = element(by.css('#flash'));

export async function loadNewMessage(){
    await util.clickElement(loadMessage);
}

export async function getMessage(){
    return await util.getElementText(message);
}
