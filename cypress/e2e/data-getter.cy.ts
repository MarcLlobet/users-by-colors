describe('Data getter', () => {
    it('returns data', () => {
        cy.request('/user-colors-data').should((response) => {
            expect(response.status).to.eq(200)
            expect(response).to.have.property('headers')

            expect(response.body).to.have.property('length')
            expect(response.body.length).to.be.at.least(100)
        })
    })
})
