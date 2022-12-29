describe('Toggle', () => {
    it('is checked', () => {
        cy.visit('/')
        cy.get('.toggle__input').should('be.checked')
    })

    it('is not checked after clicking', () => {
        cy.visit('/')
        cy.get('.toggle').click()
        cy.get('.toggle__input').should('not.be.checked')
    })

    it('shows list by default', () => {
        cy.visit('/')
        cy.get('.grid').should('have.class', 'grid--list')
    })

    it('shows grid after click', () => {
        cy.visit('/')
        cy.get('.toggle').click()
        cy.get('.grid').should('not.have.class', 'grid--list')
    })
})
