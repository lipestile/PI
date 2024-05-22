import Concessionaria from '#models/concessionaria';
import type { HttpContext } from '@adonisjs/core/http'

export default class ConcessionariasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Concessionaria.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Concessionaria.query()
        .where('id', params.id)
        .preload('vendas')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["nome_fantasia","cnpj", "telefone", "qtd_veiculos_max", "endereco" ])
        return await Concessionaria.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const concessionaria =  await Concessionaria.findOrFail(params.id)
        const dados = request.only(["nome_fantasia","cnpj", "telefone", "qtd_veiculos_max", "endereco"])
        
        concessionaria.merge(dados)
    
        return await concessionaria.save()
    };


    async destroy({params}: HttpContext) {

        const concessionaria =  await Concessionaria.findOrFail(params.id)

        await concessionaria.delete()

        return {msg:'registro deletado com sucesso', Concessionaria}
    };
}