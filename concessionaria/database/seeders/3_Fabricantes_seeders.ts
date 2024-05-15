import Fabricante from '#models/fabricante'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Fabricante.createMany([
    {cnpj:'111111111111111111', nome_fantasia: 'AutoLatina', UF: 'DF'},
    {cnpj:'111111111111111111', nome_fantasia: 'AutoPantana', UF: 'DF'},
    {cnpj:'111111111111111111', nome_fantasia: 'AutoGirassol', UF: 'DF'},
    ])
  }
}