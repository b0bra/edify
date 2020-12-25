import {When, Then} from 'cucumber';
import {expect} from 'chai';
import * as dynamicControlsPage from '../pages/dynamicControlsPage';

When(/^I (.*) checkbox$/, async function (addRemove:string) {
    let text = await dynamicControlsPage.clickAddRemoveButton();
    if(addRemove === 'Remove'){
        expect(text).to.equal("It's gone!");
    } else if(addRemove === 'Add'){
        expect(text).to.equal("It's back!");
    }
});

When(/^I click (.*) button$/, async function (enableDisable:string) {
    if(enableDisable === 'Enable'){
        await dynamicControlsPage.inputEnabled(false);
        await dynamicControlsPage.clickEnabledDisabled();
    } else if( enableDisable === 'Disable'){
        await dynamicControlsPage.inputEnabled(true);
        await dynamicControlsPage.clickEnabledDisabled();
    }
    else{
        throw Error;
    }
});

Then(/^Input is (.*)$/, async function (enableDisable:string) {
    if(enableDisable === 'enabled'){
        await dynamicControlsPage.inputEnabled(true);
    } else if( enableDisable === 'disabled'){
        await dynamicControlsPage.inputEnabled(false);
    }
    else{
        throw Error;
    }
});
