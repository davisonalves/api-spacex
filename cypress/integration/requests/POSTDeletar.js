it('Deletar usuário', () => {
    var deletarUser = `
mutation{
        delete_users(where: {name: {_eq: "testequatro"}}) {
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
       query: deletarUser
    }
})
});