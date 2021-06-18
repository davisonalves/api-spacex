import * as POSTConsultar from '../requests/POSTConsultar'

describe('POST Consultar', () => {
    it('Listar todos os usuários por id', () => {
        POSTConsultar.todosUsuarios().should((response) =>{
           expect(response.status).to.eq(200);
           expect(response.body).to.be.not.null;
        });
    });
});