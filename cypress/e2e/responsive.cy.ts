describe('Responsive', () => {
  context('<=840 resolution', () => {
    beforeEach(() => {
      cy.viewport(840, 500)
    })
    
    it('is not visible when viewport is narrow', () => {
      cy.visit('/')
      cy.get('.toggle').should('not.be.visible')
    })
  })

  context('>840 resolution', () => {
    beforeEach(() => {
      cy.viewport(841, 500)
    })
    
    it('is visible when viewport is wide ', () => {
      cy.visit('/')
      cy.get('.toggle').should('be.visible')
    })
  })
})