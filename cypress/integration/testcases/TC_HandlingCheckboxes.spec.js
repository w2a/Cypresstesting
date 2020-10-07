/// <reference types="cypress" />
describe('Handling Checkboxes',()=>{

    it('Verify Checkbox elements',()=>{

    
       cy.visit('http://www.tizag.com/htmlT/htmlcheckboxes.php')

     //  cy.get('input[type="checkbox"]').check().should('be.checked')
//      cy.wait(2000)
  //    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')

      cy.get('.mainIn > :nth-child(9)').within((section)=>{

        cy.get('input[type="checkbox"]').check(['football','baseball'])
      })
  

    })




})