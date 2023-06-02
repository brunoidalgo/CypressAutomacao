/// <reference types="cypress" />




describe('Teste Compliance', () => {
  it.only('Deve realizar o Login', () => {
    cy.login_teste("admin_comvert", "123", "0430")
    
  });

  it('Login sem sucesso', () => {
    
  });

})
