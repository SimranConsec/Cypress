/// <reference types = "Cypress" />
describe('Test ReqRes dummy APIs', () => {

    it('Get list of Users and verify the details', () => {
        cy.request({
            method: 'GET',
            url: 'https://reqres.in/api/users?page=2'
        }).then((res) => {
            expect(res.status).to.eq(200);
            expect(res.body.page).to.eq(2);
            expect(res.body.per_page).to.eq(6);
            expect(res.body.total).to.eq(12);
            expect(res.body.total_pages).to.eq(2);
            expect(res.body.data).to.be.a('array');
        })
    })
});