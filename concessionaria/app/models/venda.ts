import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Venda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare comissao: number

  @column()
  declare nota_fiscal: string

  @column()
  declare preco_total: number

  @column()
  declare pagamento_id: number

  @column()
  declare cliente_id: number

  @column()
  declare concessionaria_id: number

  @column()
  declare transportador_id: number

  @column()
  declare funcionario_id: number

  @column()
  declare veiculo_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}