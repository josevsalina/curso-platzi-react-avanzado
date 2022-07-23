/* global describe , it, cy */

describe('Petgram Tests', function () {
  it('Home', function () {
    cy.visit('/')
  })
  it('Ver categoria y su foto', function () {
    cy.visit('/pets/1')
    cy.get('article')
  })
  it('Navegar con el navbar de home', function () {
    cy.visit('/pet/1')
    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
  it('usuario no registrados ven el formulario de registro', function () {
    cy.visit('/favs')
    cy.get('form').should('have.length', 2)
    cy.url().should('include', '/')
  })
})
