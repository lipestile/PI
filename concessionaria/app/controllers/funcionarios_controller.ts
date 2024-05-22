import Funcionario from '#models/funcionario';
import type { HttpContext } from '@adonisjs/core/http'

export default class FuncionariosController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Funcionario.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Funcionario.query()
        .where('id', params.id)
        .preload('cargo')
        .preload('vendas')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["nome","cpf","salario","pis","datanscimento","endereco","cargoId","cargo_id"])
        return await Funcionario.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const funcionario =  await Funcionario.findOrFail(params.id)
        const dados = request.only(["nome","cpf","salario","pis","datanscimento","endereco","cargoId","cargo_id"])
        
        funcionario.merge(dados)
    
        return await funcionario.save()
    };


    async destroy({params}: HttpContext) {

        const funcionario =  await Funcionario.findOrFail(params.id)

        await funcionario.delete()

        return {msg:'registro deletado com sucesso', Funcionario}
    };
}