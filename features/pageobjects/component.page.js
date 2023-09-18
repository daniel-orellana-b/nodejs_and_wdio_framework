import { $ } from '@wdio/globals'
import Page from './page.js';
import { expect } from 'chai'

class ComponentPage extends Page {
    async navigateToPage(url) {
        await browser.url(url);
    }

    async selectACheckbox(filterAttribute) {
        const checkbox = $(`//td[contains(text(), "${filterAttribute}")]//preceding-sibling::td[@class="p-selection-column"]//div[contains(@class, "p-checkbox-box")]`)
        checkbox.scrollIntoView({ block: 'start', inline: 'nearest' }); 
        checkbox.click(); 
    }

    async validateThatCheckboxIsSelected(filterAttribute) {
        await browser.pause(3000)
        const checkbox = await $(`//td[contains(text(), "${filterAttribute}")]//preceding-sibling::td[@class="p-selection-column"]//span`)
        const classFromCheckbox = await checkbox.getAttribute('class');
        expect(String(classFromCheckbox).includes("pi-check")).to.be.true;
    }
}

export default new ComponentPage();
