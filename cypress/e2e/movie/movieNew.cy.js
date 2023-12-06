import seats from '../../fixtures/seats.json'

describe('tests booking tickets', () => {

    beforeEach (() => {
      cy.visit('/')
    })
      
    it("test book tickets", () => {
      cy.get(".page-nav > :nth-child(3)").click()
      cy.get(".movie").first().contains("12:00").click()
      seats.forEach((seat) => {
        cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
      })
    })
  })