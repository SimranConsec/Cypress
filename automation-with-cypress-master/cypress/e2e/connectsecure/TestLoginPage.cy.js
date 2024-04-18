import LoginPageHelper from "../../fixtures/helper/connectsecure/LoginPageHelper";

describe('Test login page', function () {

    var loginPageHelper = new LoginPageHelper();

    beforeEach(() => {
        loginPageHelper.openApplication();
        loginPageHelper.logIntoTheApplication();
    });

    it('Test user is able to login', function () {
        cy.log('User is able to LogIn');
    });
})