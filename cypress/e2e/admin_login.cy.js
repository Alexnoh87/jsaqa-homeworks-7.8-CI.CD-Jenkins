const {validEmail, validPassword, invalidEmail, invalidPassword, email, password} = require("../fixtures/login.json")

describe("tests to check admin login", () => {
  
    it("happy path test to check admin login", () => {
      cy.login(validEmail, validPassword)
      cy.contains('Управление залами').should('be.visible')
    })
  
    it("sad path test to check admin login", () => {
      cy.login(invalidEmail, invalidPassword)
      cy.contains('Ошибка авторизации').should('be.visible')
    })
  
    it("sad path test to check admin empty email", () => {
      cy.login(null, validPassword)
      cy.get(email).then ((elements) => {
        expect(elements[0].checkValidity()).to.be.false
        expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
      })
    })
  
    it("sad path test to check admin empty password", () => {
      cy.login(validEmail, null)
      cy.get(password).then ((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
      })
    })
})