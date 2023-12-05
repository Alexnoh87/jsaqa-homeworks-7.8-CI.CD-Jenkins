const {validEmail, validPassword} = require("../fixtures/login.json")
const {days, day} = require("../fixtures/page_nav.json")
import seats from '../fixtures/seats.json'

describe('tests booking tickets', () => {

  beforeEach (() => {
    cy.visit('/')
  })

  it('test page display', () => {
    cy.contains('Идём').should('be.visible')
    cy.get(days).should("have.length", 7)
  })
})

describe("tests admin panel", () => {
  
  it("test movie booking added from the admin panel", () => {
    cy.login(validEmail, validPassword)
    cy.get('#start-sales > [style="display: block;"] > .conf-step__selectors-box > :nth-child(1) > .conf-step__radio').click()
    cy.contains('Открыть продажу билетов').click()
    cy.contains('Продажа билетов открыта!!!').should('be.visible')
  })
})

describe('tests booking open session tickets from the admin', () => {

  beforeEach (() => {
    cy.visit('/')
  })
    
  it("test book tickets", () => {
    cy.get(day).click()
    cy.get(".movie").first().contains("12:00").click()
    seats.forEach((seat) => {
      cy.get(`.buying-scheme__wrapper > :nth-child(${seat.row}) > :nth-child(${seat.seat})`).click()
    })
  })
})

    




