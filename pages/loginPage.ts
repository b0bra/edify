import {by, element, ElementFinder} from 'protractor';
import * as util from '../support/util';

const usernameEl: ElementFinder = element(by.id('username'));
const passwordEl: ElementFinder = element(by.css('#password'));
const loginButton: ElementFinder = element(by.css('#login > button'));
const flashMessage:ElementFinder = element(by.css('#flash-messages > div'));
const logoutButton:ElementFinder = element(by.css('#content > div > a'));

export async function enterUsername(user:string){
    await util.sendKeystoElement(usernameEl, user);
}

export async function enterPassword(password:string){
    await util.sendKeystoElement(passwordEl, password);
}

export  async function clickLogin(){
    await util.clickElement(loginButton);
}

export  async function loginDisplayed(){
    await util.isElementVisible(loginButton);
}

export async function validateNotification(){
    return await util.getElementText(flashMessage);
}
export async function logout(){
    await util.clickElement(logoutButton);
}