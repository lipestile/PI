import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Venda from './venda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Transportador extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cnpj: number

  @column()
  declare nome_fantasia: string

  @column()
  declare precokm_rodado: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Venda)
  declare vendas: HasMany<typeof Venda>
}