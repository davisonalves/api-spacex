it('Deletar usuário', () => {
    var atualizarUser = `
mutation {
        update_users(where: {name: {_eq: "testequatro"}}, _set: {name: "testecinco"}) {
          returning {
            name
        }
    }
}  
`
cy.request({
    method: 'POST',
    url: 'https://api.spacex.land/graphql/',
    body: {
       query: atualizarUser
    }
})
});