/// <reference types="cypress" />
describe('Check links',()=>{

    it('Verify Links',()=>{

        cy.log("Execution Started")

        cy.visit('https://www.wikipedia.org/')
        

       
        cy.get('a').contains('Commons').click()
        cy.get('.mainpage-welcome-sitename').should('contain.text','Commons')

        cy.get('a').its('length').then((elelength)=>{

            cy.log(elelength)
        })

        cy.get('.vector-menu-content-list').eq(5).find('a').its('length').then((elelength)=>{

            cy.log(elelength)
        })

        cy.get('.vector-menu-content-list').eq(5).find('a').then((linktext)=>{

            cy.log(linktext.text())
        })

        cy.log("Execution finished")

    })





})