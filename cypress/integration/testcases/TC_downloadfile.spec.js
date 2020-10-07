/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Downloading a file',()=>{

       
      cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

      cy.readFile('./mydownloads/example.jpg').should('exist')

    
      })





})