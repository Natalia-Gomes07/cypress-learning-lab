
/// <reference types="cypress" />
import { faker } from "@faker-js/faker"
import commom_page from "../support/pages/commom_page"
import login_page from "../support/pages/login_page"
import cadastro_usuario_page from "../support/pages/cadastro_usuario_page"

describe('Login do usuário', () => {

    beforeEach('Acessar login do usuário', () => {
        commom_page.acessarLogin()
    })

    it('Login com campo E-mail vazio', () => {
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com campo E-mail inválido', () => {
        login_page.preencheEmail('emailtest@invalid')
        login_page.clicarLogin()
        login_page.validarMensagemErro('E-mail inválido.')
    })

    it('Login com campo Senha vazio', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })

    it('Login com Senha inválido', () => {
        login_page.preencheEmail(faker.internet.email())
        login_page.preencheSenha('12345')
        login_page.clicarLogin()
        login_page.validarMensagemErro('Senha inválida.')
    })
})

describe('Autenticação com sucesso', () => {

    it('Login com sucesso', () => {
        const email = faker.internet.email()
        const senha = '123456'

        commom_page.acessarCadastroUsuario()
        cadastro_usuario_page.preencheNome(faker.person.fullName())
        cadastro_usuario_page.preencheEmail(email)
        cadastro_usuario_page.preencheSenha(senha)
        cadastro_usuario_page.clicarCadastrar()
        
        commom_page.acessarLogin()
        login_page.preencheEmail(email)
        login_page.preencheSenha('123456')
        login_page.clicarLogin()
        login_page.validarMensagemSucesso(email)
    })
})