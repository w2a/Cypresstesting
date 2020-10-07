/// <reference types="cypress" />
describe('Handling dropdown',()=>{

    it('Verify Dropdown elements',()=>{

      //  cy.visit('https://www.wikipedia.org/')
       // cy.get('#searchLanguage').select('hi').should('have.value','hi')

       cy.visit('https://www.goibibo.com/')
       cy.get('#gosuggest_inputSrc').type('Delhi')
       cy.contains('Delhi Airport').click()
    })




})