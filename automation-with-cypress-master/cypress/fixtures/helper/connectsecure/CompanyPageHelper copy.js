import BaseHelper from "../basehelper/BaseHelper";

class CompanyPageHelper extends BaseHelper {

    clickSettings() {
        cy.wait(5000);
        cy.xpath('//mat-icon[@data-mat-icon-name="admin_panel_settings"]').click();
    }

    clickLabelCompanies() {
        cy.xpath('//span[contains(text(),"Companies")]').click();
    }

    clickButtonAdd() {
        cy.xpath('//span[contains(text(),"Add")]').click();
    }

    enterCompanyName(companyName) {
        cy.xpath('//input[@id="name"]').type(companyName);
    }

    enterDescription(description) {
        cy.xpath('//textarea[@id="description"]').type(description);
    }

    enterCity(city) {
        cy.xpath('//input[@id="adddress_city"]').type(city);
    }

    enterState(state) {
        cy.xpath('//input[@id="adddress_state"]').type(state);
    }

    enterCountry(country) {
        cy.xpath('//input[@id="adddress_country"]').type(country);
    }

    enterZipCode(zipcode) {
        cy.xpath('//input[@id="adddress_zipcode"]').type(zipcode);
    }

    clickSaveButton() {
        cy.xpath('//button[@id="saveButton"]').click();
    }

    isCompanyNameDisplayed(companyName) {
        cy.xpath(`//span[contains(text(),"${companyName}")]`).click();
    }


}

export default CompanyPageHelper;