class API {
 
    registraUsuario(usermail, password) {
        cy.registraUsuarioCommand(usermail, password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('201').and.to.contain('User created!');
        })

    }

    verificaUsuario(usermail, password) {
        const urlVerify = '/api/getUserDetailByEmail';
        cy.request({
            method: 'GET',
            url: urlVerify,
            qs: {
                email: usermail,
                password: password
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('200').and.to.contain(usermail);
        })
    }


    eliminaUsuario(usermail, password) {
        cy.eliminaUsuarioCommand(usermail, password).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.contain('200').and.to.contain('Account deleted!');
        })

    }
}
export default API;