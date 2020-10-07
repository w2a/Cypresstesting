/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Handling Slider',()=>{

        cy.visit('https://jqueryui.com/resources/demos/slider/default.html')
        

        cy.wait(2000)
        cy.get('#slider > span').invoke('attr','style','left: 40%;')



    
      })





})