import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'


export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column()
  declare nome: string

  @column()
  declare cpf: string

  @column()
  declare salario: number

  @column()
  declare pis: string

  @column.date()
  declare datanascimento: DateTime

  @column()
  declare endereco: string

  @column()
  declare cargoId: number

  @column()
  declare cargo_id: number

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}