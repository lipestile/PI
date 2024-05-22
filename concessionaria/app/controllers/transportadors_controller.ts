import Transportador from '#models/transportador';
import type { HttpContext } from '@adonisjs/core/http'

export default class TransportadorsController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Transportador.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Transportador.query()
        .where('id', params.id)
        .preload('vendas')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["nome_fantasia","cnpj","precokm_rodado"])
        return await Transportador.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const transportador =  await Transportador.findOrFail(params.id)
        const dados = request.only(["nome_fantasia","cnpj","precokm_rodado"])
        
        transportador.merge(dados)
    
        return await transportador.save()
    };


    async destroy({params}: HttpContext) {

        const transportador =  await Transportador.findOrFail(params.id)

        await transportador.delete()

        return {msg:'registro deletado com sucesso', Transportador}
    };
}