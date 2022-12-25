describe('Toggle', () => {
    it('is checked', () => {
        cy.visit('/')
        cy.get('input.toggle__input').should('.not.be.checked')
    })

    it('is not checked after clicking', () => {
        cy.visit('/')
        cy.get('.toggle').click()
        cy.get('.toggle__input').should('be.checked')
    })
})
