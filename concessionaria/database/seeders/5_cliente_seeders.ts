import Cliente from '#models/cliente'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Cliente.createMany([
       {nome: 'Luara', cpf: 11111111111, renda: 5000, telefone: 61987655687, data_nascimento: DateTime.fromISO('2000-05-13'), endereco:'rua andorinha 406'},
       {nome: 'Mauro', cpf: 11111111111, renda: 10000, telefone: 61987655687, data_nascimento: DateTime.fromISO('2000-05-13'), endereco:'rua torta 46'},
       {nome: 'Stuart', cpf: 11111111111, renda: 1000, telefone: 61987655687, data_nascimento: DateTime.fromISO('2000-05-13'), endereco:'rua LUli 4'},

    ])
  }
}