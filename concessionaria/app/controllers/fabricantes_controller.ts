import Fabricante from '#models/fabricante';
import type { HttpContext } from '@adonisjs/core/http'

export default class FabricantesController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Cargos?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Fabricante.query().paginate(page, perPage)
        // return await Cargo.query()
    };

    async show({params}: HttpContext) {
        return await Fabricante.query()
        .where('id', params.id)
        .preload('funcionarios')
        .firstOrFail();
    };

    async store({request}: HttpContext){

        const dados = request.only(["nome_fantasia","cnpj","UF"])
        return await Fabricante.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const fabricante =  await Fabricante.findOrFail(params.id)
        const dados = request.only(["nome_fantasia","cnpj","UF" ])
        
        fabricante.merge(dados)
    
        return await fabricante.save()
    };


    async destroy({params}: HttpContext) {

        const fabricante =  await Fabricante.findOrFail(params.id)

        await fabricante.delete()

        return {msg:'registro deletado com sucesso', Fabricante}
    };
}