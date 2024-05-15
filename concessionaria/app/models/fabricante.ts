import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
}