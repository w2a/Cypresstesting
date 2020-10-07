/// <reference types="cypress" />
describe('Check the Page Navigation',()=>{

    it('Verify Page title',()=>{

        cy.visit('http://qa.way2automation.com')
        cy.url().should('include','/index.php')
        cy.get('#load_box > #load_form > :nth-child(5) > input').type('Rahul')
        cy.title().should('contains','Welcome1')
        cy.title().then(($text)=>{
            //expect($text).to.equal('Welcome')
            assert.equal($text,'Welcome to the Test Site')
        })
        

        cy.get('#load_form > fieldset:nth-child(5) > label').eq(1).then((label) =>{

            cy.log(label.text());


        })

        cy.get('#load_form > fieldset:nth-child(5) > label').eq(1).should('contains.text','Name')


        cy.get('#load_form > fieldset:nth-child(5) > label').eq(1).should('have.text','Name:')

    })





})