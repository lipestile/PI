import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fabricante_idfabricante: number

  @column()
  declare chassi: number

  @column.date()
  declare ano_fabricacao: DateTime

  @column()
  declare marca: string

  @column()
  declare modelo: string

  @column()
  declare cor: string

  @column()
  declare ipva: string
  
  @column()
  declare preco: Number


  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}