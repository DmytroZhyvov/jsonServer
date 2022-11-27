import user from '../fixtures/user.json'

describe('User can', () => {
    it('be registered via POST', () => {
        cy.request('POST', '/register', user).then(response => {
            expect(response.status).to.be.eq(201);
            console.log(response.body);
        })
    })

})