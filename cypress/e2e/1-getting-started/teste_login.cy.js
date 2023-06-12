/// <reference types="cypress" />


const paginas = require('./exportar.json')

describe('Teste Compliance', () => {  //Arrow function sem parametros.

  it('Login com sucesso', () => {
      
    cy.visit('https://teste-apps.compliancehcm.com.br/')
    let user = 'admin_comvert'
    cy.get('#P101_USERNAME').type(user)
    let password = '123'
    cy.get('#P101_PASSWORD').type(password)
    cy.get('#P101_LOGIN').click()
    cy.wait(1000)

    
    cy.get('.search-field > span').realClick().realClick().realType('430')
    // cy.get('ui-autocomplete-input').realClick()
    cy.get('#ui-id-109').realClick()
    cy.get('#R164684043599546848-tabs > :nth-child(5) > a').click()
    cy.get('#P50_LABEL_3_LABEL > span').should('contain', 'Eventos não períodicos pendentes de integração - Alteração contrato/cadastro')
    
    // cy.get('search-field hovered').realClick()

  
    });


    });
   






    
  
  
 
  