import TipoPagamento from '#models/tipo_pagamento';
import type { HttpContext } from '@adonisjs/core/http'

export default class TipoPagamentosController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await TipoPagamento.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await TipoPagamento.query()
        .where('id', params.id)
        .preload('vendas')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["forma"])
        return await TipoPagamento.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const tipo_pagamento =  await TipoPagamento.findOrFail(params.id)
        const dados = request.only(["forma"])
        
        tipo_pagamento.merge(dados)
    
        return await tipo_pagamento.save()
    };


    async destroy({params}: HttpContext) {

        const tipo_pagamento =  await TipoPagamento.findOrFail(params.id)

        await tipo_pagamento.delete()

        return {msg:'registro deletado com sucesso', TipoPagamento}
    };
}