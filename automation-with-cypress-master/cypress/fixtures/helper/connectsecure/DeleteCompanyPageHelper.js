import BaseHelper from "../basehelper/BaseHelper";

class DeleteCompanyPageHelper extends BaseHelper {

    clickSearchCompanyInput() {
        cy.wait(2000);
        cy.xpath('//mat-select[@id="sSearchCompanyInput"]').click();
    }

    enterCompanyGlobal(input) {
        cy.xpath('//input[@placeholder="Search Company"]').type(input);
    }

    clickGlobalCompany() {
        cy.xpath('//mat-option/span[contains(text(),"Global")]').click();
    }

    clickSettings() {
        cy.xpath('//mat-icon[@data-mat-icon-name="admin_panel_settings"]').click();
    }

    clickLabelCompanies() {
        cy.xpath('//span[contains(text(),"Companies")]').click();
    }

    clickBoxSearch(companyName) {
        cy.xpath('//input[@id="companies_filter_sub"]').type(companyName);
    }

    clickButtonAction() {
        cy.xpath('//mat-icon[contains(text(),"more_vert")]').click();
    }

    clickActionDelete() {
        cy.xpath('//span[@id="Delete"]').click();
    }

    clickConfirmDeleteButton() {
        cy.xpath('//span[contains(text(),"Delete")]').click();
    }

    isRemovedSuccessfullyTextDisplayed() {
        cy.xpath('//div[contains(text(),"Removed successfully")]').should("be.visible");
    }
}

export default DeleteCompanyPageHelper;