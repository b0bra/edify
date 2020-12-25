import {browser, by, element, ElementFinder, ExpectedConditions as EC} from 'protractor';
import {isElementClickable} from '../support/util';

const addButton: ElementFinder = element(by.css('#content > div > button'));
const deleteButton: ElementFinder = element(by.css('#elements > button'));

export async function clickAddButton(){
    await isElementClickable(addButton);
    await addButton.click();
}

export async function clickDeleteButton(){
    await isElementClickable(deleteButton);
    await deleteButton.click();
}

export async function countDeleteButtons(){
    let count =  await element.all(by.css('#elements > button')).count();
    return count;
}
