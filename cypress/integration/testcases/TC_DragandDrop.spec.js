/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Handling Drag and Drop',()=>{

        cy.visit('https://jqueryui.com/resources/demos/droppable/default.html')
        
        cy.get('#draggable').drag('#droppable',{force: true})


    
      })





})