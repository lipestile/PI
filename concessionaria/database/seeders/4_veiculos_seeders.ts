import Veiculo from '#models/veiculo'
import { BaseSeeder } from '@adonisjs/lucid/seeders'
import { DateTime } from 'luxon'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Veiculo.createMany([
        {fabricante_idfabricante: 1, chassi: 12356474890404, ano_fabricacao: DateTime.fromISO('2024-02-13'), marca: 'Fiat', modelo: 'Pulse Abarth', cor: 'Black', ipva: 'P', preco: 120000 },
        {fabricante_idfabricante: 2, chassi: 12356474890404, ano_fabricacao: DateTime.fromISO('2024-02-13'), marca: 'Fiat', modelo: 'cronos Abarth', cor: 'Black', ipva: 'P', preco: 120000 },
        {fabricante_idfabricante: 3, chassi: 12356474890404, ano_fabricacao: DateTime.fromISO('2024-02-13'), marca: 'Fiat', modelo: 'punto Abarth', cor: 'Black', ipva: 'P', preco: 120000 },

    ])
  }
}