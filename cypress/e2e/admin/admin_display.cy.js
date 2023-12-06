describe('tests admin panel', () => {

    beforeEach (() => {
      cy.visit('http://qamid.tmweb.ru/admin/')
    })
  
    it('test page display', () => {
      cy.contains('Администраторррская').should('be.visible')
      cy.contains('Авторизоваться').should('be.visible')
    })
  })
  