import Funcionario from '#models/funcionario'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Funcionario.createMany([
     { nome: "Felipe", cpf: '11111111111', salario: 50000, pis: '12hbh--reb3=449v', endereco:'Avenida rua de cristal 225',datanascimento: DateTime.fromISO('1990-02-01'), cargoId:1 },
     { nome: "Amanda", cpf: '11111222111', salario: 1000, pis: '12hbh--reklj=449v', endereco:'Avenida rua de sapatos 225',datanascimento: DateTime.fromISO('1990-02-01'), cargoId: 2 },
     { nome: "Ruan", cpf: '11118881111', salario: 1000, pis: '12hbh--ryy3=449v', endereco:'Avenida rua de cristal 225',datanascimento:DateTime.fromISO('1990-02-01'), cargoId:3  },
    ])
  }
}