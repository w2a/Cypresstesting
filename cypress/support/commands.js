// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
require('@4tw/cypress-drag-drop')
import 'cypress-file-upload';
require('cypress-downloadfile/lib/downloadFileCommand')


Cypress.Commands.add("addcustomer", (firstname, lastname,postcode) => {

    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.center > button:nth-child(1)').click()
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(1) > input').type(firstname)
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(2) > input').type(lastname)
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > div:nth-child(3) > input').type(postcode)
    cy.get('body > div.ng-scope > div > div.ng-scope > div > div.ng-scope > div > div > form > button').click()
   


})

