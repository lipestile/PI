import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Venda from './venda.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare cpf: number
  
  @column()
  declare renda: number
  
  @column()
  declare telefone: number
  
  @column()
  declare endereco: string

  @column.date()
  declare data_nascimento: DateTime

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Venda)
  declare vendas: HasMany<typeof Venda>
}