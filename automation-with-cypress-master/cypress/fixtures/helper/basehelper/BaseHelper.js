class BaseHelper {

    /**
     * Open the application.
     */
    openApplication() {
        cy.visit('https://test.myconnectsecure.com');
    };

    getIframeDocument() {
        return cy
            .get('object')
            .its('0.contentDocument')
    };

    getIframeBody() {
        return cy
            .get('object')
            .its('0.contentDocument').
            its('body')
            .then(cy.wrap)
    };

    getCurrentDateAndTime() {
        var currentdate = new Date();
        var datetime = currentdate.getFullYear()
            + "-" + currentdate.getMonth()
            + "-" + currentdate.getDate()
            + "-" + currentdate.getHours()
            + "-" + currentdate.getMinutes()
            + "-" + currentdate.getSeconds();
        return datetime.toString();
    };

    clickWebElement(locater) {
        if (locater.charAt(0) == "/") {
            cy.xpath(locater).click();
        } else {
            cy.get(locater).click();
        }
    };

    isElementVisible(locater) {
        if (locater.charAt(0) == "/") {
            cy.xpath(locater).should('be.visible');
        } else {
            cy.get(locater).should('be.visible');
        }
    };

    isElementNotVisible(locater) {
        if (locater.charAt(0) == "/") {
            cy.xpath(xpathLocater).should('not.exist');
        } else {
            cy.get(locater).should('not.exist');
        }
    };

    sendKeys(locater, value) {
        if (locater.charAt(0) == "/") {
            cy.xpath(locater).type(value);
        } else {
            cy.get(locater).type(value);
        }
    };

    printmessage(message) {
        cy.log(message);
    };

    verifyIfTableRowContainsText(xpath, data) {
        cy.xpath(xpath).each($element => {
            var text = $element.text();
            if (text.includes(data)) {
                cy.log('Content of the table have some correct data')
            } else {
                cy.log('Fail');
                throw new Error("Content of the table have some wrong data")
            }
        })
    };

    readJsonFile(fileName) {
        return cy.fixture(fileName).then(function (data) {
        })

    };

}
export default BaseHelper;