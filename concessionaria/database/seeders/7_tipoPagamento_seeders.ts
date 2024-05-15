import TipoPagamento from '#models/tipo_pagamento'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await TipoPagamento.createMany([
        {forma: 'Pix'},
        {forma: 'Parcelado'},
        {forma: 'Finaciado'},
        {forma: 'Bitcoin'}
     ])
  }
}