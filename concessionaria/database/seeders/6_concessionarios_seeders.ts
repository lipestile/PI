import Concessionaria from '#models/concessionaria'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Concessionaria.createMany([
        {cnpj: 111111111111111, nome_fantasia: 'Juninho Carros', telefone: 619010101029, qtd_veiculos_max: 20, endereco: 'Rua Itapema 30'},
        {cnpj: 111111111111111, nome_fantasia: 'Dadinho Carros', telefone: 619010101029, qtd_veiculos_max: 30, endereco: 'Rua Itapema 40'},
        {cnpj: 111111111111111, nome_fantasia: 'Galantia Carros', telefone: 619010101029, qtd_veiculos_max: 50, endereco: 'Rua Itapema 49'},

    ])
  }
}