/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Handling MouseOver',()=>{

        cy.visit('http://www.way2automation.com/')
        
        cy.contains('Selenium').trigger('mouseover')
        cy.contains('Selenium Corporate Training').click()

    
      })





})