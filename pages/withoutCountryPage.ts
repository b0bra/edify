import {by, element, ElementFinder} from 'protractor';
import * as util from '../support/util';

let withoutCountryInput: ElementFinder = element(by.css('#content > div > section:nth-child(3) > section:nth-child(2) > form > input[type=tel]'));
let summaryWithoutCountryValue: ElementFinder = element(by.css('#content > div > section:nth-child(3) > section:nth-child(2) > p:nth-child(5) > code:nth-child(2)'));

export async function addPhone(text: string){
 await util.sendKeystoElement(withoutCountryInput, text);
}

export async function getValidationValue(){
    return util.getElementText(summaryWithoutCountryValue);
}