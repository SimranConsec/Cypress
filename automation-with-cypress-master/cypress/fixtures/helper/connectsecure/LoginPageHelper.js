import BaseHelper from "../basehelper/BaseHelper";

class LoginPageHelper extends BaseHelper {

    enterTenantName(tenantName) {
        cy.xpath('//input[@id="company"]').type(tenantName);
    }

    clickSignInButton() {
        cy.xpath('//span[contains(text(),"Sign in")]').click();
    }

    enterLoginName(loginName) {
        cy.xpath('//input[@id="loginName"]').type(loginName);
    }

    clickNextButton() {
        cy.xpath('//button[@id="submit-button"]').click();
    }

    enterPassword(password) {
        cy.xpath('//input[@id="password"]').type(password);
    }

    istextDisplayed() {
        cy.xpath('//span[contains(text(),"GLOBAL")]').should("be.visible");
    }

    logIntoTheApplication() {
        var loginPageHelper = new LoginPageHelper();
        loginPageHelper.enterTenantName('ccnstest');
        loginPageHelper.clickSignInButton();
        loginPageHelper.enterLoginName('venu@ccnstest.com');
        loginPageHelper.clickNextButton();
        loginPageHelper.enterPassword('Hash@1234');
        loginPageHelper.clickNextButton();
        loginPageHelper.istextDisplayed();
    }
}

export default LoginPageHelper;