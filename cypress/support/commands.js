/// <reference types="cypress" />

const { realClick } = require("cypress-real-events/commands/realClick");


Cypress.Commands.add ('login_teste',(user, password, code) => {
    cy.visit('https://teste-apps.compliancehcm.com.br/')
    cy.get('#P101_USERNAME').type(user)
    cy.get('#P101_PASSWORD').type(password, {log:false})
    cy.get('#P101_LOGIN').click()
    cy.get('[style="font-size: 2em;display: inline-block;margin-left: 20px;float: left;max-width: 50%;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"]').should("contain", "Menu Principal")
    cy.get('.search-field > span')
    .realClick()
    .realClick()
    .realType(code)
    // cy.get('#ui-id-2').first().realClick().realClick()
    cy.get('#ui-id-2').realClick()
    // cy.get('#ui-id-9')
});


