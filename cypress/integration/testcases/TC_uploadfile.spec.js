/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Uploading a file',()=>{

        cy.visit('https://www.w3schools.com/howto/howto_html_file_upload_button.asp')
        
        const yourFixturePath = 'cyimg.png'; // the file to be uploaded, from the cypress/fixtures/ directory
        cy.get('[type="file"]').attachFile(yourFixturePath);



    
      })





})