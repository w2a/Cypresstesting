/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Force and Multiple click options',()=>{

        cy.visit('http://www.way2automation.com/')
      
      
       cy.get('#wrapper > header > div.container > div > div.col-sm-6.text-right > div > a.btn.btn-danger').invoke('removeAttr','target').click()
      

    cy.get('#navbar > div > div > div > ul > li:nth-child(6) > a').click()


    })





})