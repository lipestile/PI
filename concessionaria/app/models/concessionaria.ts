import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Venda from './venda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Concessionaria extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome_fantasia: string

  @column()
  declare cnpj: number

  @column()
  declare telefone: number

  @column()
  declare qtd_veiculos_max: number

  @column()
  declare endereco: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Venda)
  declare vendas: HasMany<typeof Venda>
}