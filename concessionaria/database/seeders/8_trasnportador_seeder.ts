import Transportador from '#models/transportador'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Transportador.createMany([

    {cnpj: 11111111111111, nome_fantasia: 'Cleito trasporte', precokm_rodado: 250},
    {cnpj: 11111114441111, nome_fantasia: 'Pietro trasporte', precokm_rodado: 350},
    {cnpj: 11111111666111, nome_fantasia: 'Caio trasporte', precokm_rodado: 450},

    ])
  }
}