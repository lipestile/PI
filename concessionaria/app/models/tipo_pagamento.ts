import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Venda from './venda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class TipoPagamento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare forma: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Venda)
  declare vendas: HasMany<typeof Venda>
}