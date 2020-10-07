/// <reference types="cypress" />
describe('Verify Click options',()=>{

    it('Force and Multiple click options',()=>{

        cy.visit('http://www.way2automation.com/')
      
      cy.window().then((win) =>{

        cy.stub(win,'open',()=>{


            win.location.href='https://sso.teachable.com/secure/673/users/sign_in?reset_purchase_session=1'

        }).as('popup')


      })


      cy.get('#wrapper > header > div.container > div > div.col-sm-6.text-right > div > a.btn.btn-primary').click()

      cy.get('@popup').should('be.calledWith','https://sso.teachable.com/secure/673/users/sign_in?reset_purchase_session=1')
   //   cy.get('#user_email').type('trainer@way2automation.com')

      cy.go('back')
    })





})