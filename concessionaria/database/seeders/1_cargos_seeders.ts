import Cargo from '#models/cargo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Cargo.createMany([
     {nome: 'Dono'},
     {nome: 'Gerente'},
     {nome: 'Vendedor'},
     {nome: 'Limpeza'},
     {nome: 'Recepcionista'},
     {nome: 'Secretaria'},
     {nome: 'Vigilante'}
    ])
  }
}