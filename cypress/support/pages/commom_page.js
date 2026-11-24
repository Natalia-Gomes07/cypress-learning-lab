/// <reference types="cypress" />

export default{

    acessarCadastroUsuario() {
        cy.visit('/')

        cy.get('#top_header')
            .should('be.visible')

        cy.get('.fa-lock')
            .click()
    },

    acessarLogin() {
        cy.visit('/')

        cy.get('#top_header')
            .should('be.visible')

        cy.get('.fa-user')
            .click()
    }

}