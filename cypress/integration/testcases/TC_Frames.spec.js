/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Force and Multiple click options',()=>{

        cy.visit('https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_submit_get')
      
        cy.get('#iframeResult').then(($iframe)=>{

           let element = $iframe.contents().find('body > button')
            cy.wrap(element).click();

        })
      
       cy.get('body > div.trytopnav > div > button').click()
      
    })





})