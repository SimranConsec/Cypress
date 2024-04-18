import CompanyPageHelper from "../../fixtures/helper/connectsecure/CompanyPageHelper";
import LoginPageHelper from "../../fixtures/helper/connectsecure/LoginPageHelper";
import DeleteCompanyPageHelper from "../../fixtures/helper/connectsecure/DeleteCompanyPageHelper";


describe('Test company page', function () {

    var loginPageHelper = new LoginPageHelper();
    var companyPageHelper = new CompanyPageHelper();
    var deleteCompanyPageHelper = new DeleteCompanyPageHelper();

    beforeEach(() => {
        companyPageHelper.openApplication();
        loginPageHelper.logIntoTheApplication();

    });

    it('Test new company is created', function () {
        const companyName = companyPageHelper.getCurrentDateAndTime();
        const description = companyPageHelper.getCurrentDateAndTime();
        companyPageHelper.clickSettings();
        companyPageHelper.clickSettings();
        companyPageHelper.clickLabelCompanies();
        companyPageHelper.clickButtonAdd();
        companyPageHelper.enterCompanyName(companyName);
        companyPageHelper.enterDescription(description);
        companyPageHelper.enterCity('Pune');
        companyPageHelper.enterState('MP');
        companyPageHelper.enterCountry('India');
        companyPageHelper.enterZipCode('zipcode');
        companyPageHelper.clickSaveButton();
        companyPageHelper.isCompanyNameDisplayed(companyName);
    });

    it('Test company is deleted', function () {
        const companyName= companyPageHelper.getCurrentDateAndTime();
        companyPageHelper.clickSettings();
        companyPageHelper.clickSettings();
        companyPageHelper.clickLabelCompanies();
        companyPageHelper.clickButtonAdd();
        companyPageHelper.enterCompanyName(companyName);
        companyPageHelper.enterDescription('Testing');
        companyPageHelper.enterCity('Pune');
        companyPageHelper.enterState('MP');
        companyPageHelper.enterCountry('India');
        companyPageHelper.enterZipCode('zipcode');
        companyPageHelper.clickSaveButton();
        companyPageHelper.isCompanyNameDisplayed(companyName);
        deleteCompanyPageHelper.clickSearchCompanyInput();
        deleteCompanyPageHelper.enterCompanyGlobal('Global');
        deleteCompanyPageHelper.clickGlobalCompany();
        deleteCompanyPageHelper.clickSettings();
        deleteCompanyPageHelper.clickLabelCompanies();
        deleteCompanyPageHelper.clickBoxSearch(companyName);
        deleteCompanyPageHelper.clickButtonAction();
        deleteCompanyPageHelper.clickActionDelete();
        deleteCompanyPageHelper.clickConfirmDeleteButton();
        deleteCompanyPageHelper.isRemovedSuccessfullyTextDisplayed();
    })
})