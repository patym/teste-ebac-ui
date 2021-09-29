/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page';
import EnderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    
    beforeEach(() => {
        cy.visit("minha-conta")
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    });

    it.only('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Patricia', 'Machado', 'EBAC', 'Brasil', 'Av Brasil', '3100', 'São Paulo', 'São Paulo', '01000100', '11111111', 'email@email.com')    
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});