import * as POSTCriar from '../requests/POSTCriar'

describe('POST Criar', () => {
    it('Cria um novo usuário', () => {
        POSTCriar.criarUsuario().should((response => {
            expect(response.status).to.eq(200);
            expect(response.body.data.insert_users.returning[0].name).to.eq('Davison');
        }));
    });
});