/// <reference types="cypress" />

const { realClick } = require("cypress-real-events/commands/realClick");
// const paginas = require('./')


Cypress.Commands.add('login_com_sucesso', (user, password) => {
    cy.visit('https://teste-apps.compliancehcm.com.br/')
    cy.get('#P101_USERNAME').type(user)
    cy.get('#P101_PASSWORD').type(password)
    cy.get('#P101_LOGIN').click()
    cy.get('[style="font-size: 2em;display: inline-block;margin-left: 20px;float: left;max-width: 50%;text-overflow: ellipsis;overflow: hidden;white-space: nowrap;"]').should('contain', 'Menu Principal')
})


