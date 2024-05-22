import Venda from '#models/venda';
import type { HttpContext } from '@adonisjs/core/http'

export default class VendasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Venda.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Venda.query()
        .where('id', params.id)
        .preload('funcionario')
        .preload('cliente')
        .preload('concessionaria')
        .preload('transportador')
        .preload('veiculo')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["comissao", "nota_fiscal", "preco_total","pagamento_id", "cliente_id", "concessionaria_id", "transportador_id","funcionario_id", "veiculo_id"])
        return await Venda.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const venda =  await Venda.findOrFail(params.id)
        const dados = request.only(["comissao", "nota_fiscal", "preco_total","pagamento_id", "cliente_id", "concessionaria_id", "transportador_id","funcionario_id", "veiculo_id"])
        
        venda.merge(dados)
    
        return await venda.save()
    };


    async destroy({params}: HttpContext) {

        const venda =  await Venda.findOrFail(params.id)

        await venda.delete()

        return {msg:'registro deletado com sucesso', Venda}
    };
}