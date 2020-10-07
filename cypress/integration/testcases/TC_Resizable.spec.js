/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Handling Slider',()=>{

        cy.visit('https://jqueryui.com/resources/demos/resizable/default.html')
        

        cy.wait(2000)
        cy.get('#resizable').invoke('attr','style','width: 410px; height: 265px;')



    
      })





})