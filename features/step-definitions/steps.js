import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'

import ComponentPage from '../pageobjects/component.page.js';

const pages = {
    component: ComponentPage
}

Given(/^I navigate to "(.*)" page$/, async (page) => {
    await ComponentPage.navigateToPage(page)
});

When(/^I select the checkbox with "(.*)" name$/, async (filterName) => {
    await ComponentPage.selectACheckbox(filterName);
});

Then(/^Validate that the checkbox with "(.*)" name was checked$/, async(value) => {
    await ComponentPage.validateThatCheckboxIsSelected(value);
})