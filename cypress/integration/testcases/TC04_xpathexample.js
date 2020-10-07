/// <reference types="cypress" />
describe('Xpath Example',()=>{

    let userInfo

    before(()=>{


        cy.fixture('example').then((data)=>{

            userInfo=data

        })

    })

    it('Verify Xpath',()=>{

        cy.log("Execution Started")

        cy.visit('/')
       
       cy.xpath("//input[@name='q']").type('Hello Cypress !!!')

      /* cy.fixture('example').then((data)=>{

        cy.log(data.name)

       })*/

       cy.log(userInfo.name)
       cy.log(userInfo.email)

    })





})