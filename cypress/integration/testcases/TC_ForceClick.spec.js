/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Force and Multiple click options',()=>{

        cy.visit('http://qa.way2automation.com')
        cy.get('#load_form > div > div.span_1_of_4 > input').click({multiple: true,force: true})
      
    })





})