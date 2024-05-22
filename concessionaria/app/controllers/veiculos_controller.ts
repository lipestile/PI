import Veiculo from '#models/veiculo';
import type { HttpContext } from '@adonisjs/core/http'

export default class VeiculosController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Veiculo.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Veiculo.query()
        .where('id', params.id)
        .preload('cargo')
        .preload('vendas')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["fabricante_idFabricante","chassi","ano_fabricacao", "marca", "modelo", "cor", "ipva", "preco"])
        return await Veiculo.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const veiculo =  await Veiculo.findOrFail(params.id)
        const dados = request.only(["fabricante_idFabricante","chassi","ano_fabricacao", "marca", "modelo", "cor", "ipva", "preco"])
        
        veiculo.merge(dados)
    
        return await veiculo.save()
    };


    async destroy({params}: HttpContext) {

        const veiculo =  await Veiculo.findOrFail(params.id)

        await veiculo.delete()

        return {msg:'registro deletado com sucesso', Veiculo}
    };
}