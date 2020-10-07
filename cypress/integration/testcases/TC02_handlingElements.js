/// <reference types="cypress" />
describe('Check the Page Navigation',()=>{

    it('Verify Element visibility and attribute values',()=>{

        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').type('Rahul')
       

        cy.get('#load_box > #load_form > :nth-child(5) > input').should('be.visible').invoke('attr','type').should('contain','text')
       
    })


    it.only('Verify Parent, Child and Within Elements',()=>{

        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box').find('input').invoke('attr','type').should('not.have','hidden').its('length').then((elelength)=>{

            cy.log(elelength)

        })

        //find children
        cy.get('#load_box > form > fieldset').children('input').should('not.have','hidden').its('length').then((elelength)=>{

            cy.log(elelength)

        })


        //find within that form / section / block

        cy.get('#load_box > form > fieldset').within((section) =>{

            cy.get('input').its('length').should('eq',6)
            cy.get('input').first().type('Way2Automation')
            cy.get('input').first().prev().then((label)=>{

                cy.log('Sibling element text is : '+label.text())

            })
            cy.get("input[name='phone']").type('2344545')
            cy.wait(5000)
            cy.get('input',{timeout:3000}).last().type('lksdjfhsdf')

        })

      
    })




})