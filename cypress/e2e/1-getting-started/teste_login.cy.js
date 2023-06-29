/// <reference types="cypress" />

import { paginas } from "./exportar.json";

describe('Teste Compliance', () => {  //Arrow function sem parametros.

  it('Login com sucesso', () => {
      
    cy.visit('https://teste-apps.compliancehcm.com.br/apex/f?p=132:')
    let user = "bruno.teste"
    cy.get('#P101_USERNAME').type(user)
    let password = 'teste123'
    cy.get('#P101_PASSWORD').type(password)
    cy.get('#P101_LOGIN').click()
    cy.wait(1000)
    



    let program = '1010'
    cy.get('.search-field > span').realClick().realClick().realType(program)
    // cy.get('#ui-id-109').realClick()
    cy.get('#ui-id-176').realClick()
    cy.get('#B189377130290553611').click()
    cy.pause()
    cy.get('text_field apex-item-text').realClick().realType('RH - COMPLIANCE')
    // cy.get('select2-P30_NRINSC-container').type('36635')
    // cy.get('select2-P30_NRINSC-result-oo1n-36635643').realClick()

})
    
    

  
    });
   






    
  
  
 
  