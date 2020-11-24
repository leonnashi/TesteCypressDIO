describe( 'Login', () => {
    it('Login Sucesso', () => {
        cy.login('testecypress@testecypress.com', 'testecypress')
        cy.get('.nav-item:nth-child(4) > .nav-link').click()
        cy.get('.btn:nth-child(5)').click()
        cy.url().should('contain', '/settings')
    })
    it('Dados Invalidos' , () => {
        cy.login('usuario@inexistente.com', 'senha errada')
        cy.get('.error-messages > li')
        .should('contain', 'email or password is invalid')
    })

})