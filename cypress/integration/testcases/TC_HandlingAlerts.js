/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Handling Alerts',()=>{

        cy.visit('https://www.w3resource.com/javascript/alert-example1.html')
        
        cy.on('window:alert',(alertText)=>{

          expect(alertText).eq('This is a alert box1')

        })
    
      })





})