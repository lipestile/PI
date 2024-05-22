import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Veiculo from './veiculo.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Fabricante extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare cnpj: string
  @column()
  declare nome_fantasia: string
  @column()
  declare UF: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime 

  @hasMany(() => Veiculo)
  declare funcionarios: HasMany<typeof Veiculo>
}