/// <reference types= "cypress"/>

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')  

        
    });

    it('Deve completar o pré cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName ()
        let sobrenomeFaker = faker.name.lastName ()
        let emailFaker = faker.internet.email ()
        
    });
    
});