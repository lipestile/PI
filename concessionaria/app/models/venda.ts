import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import Funcionario from './funcionario.js'
import Cliente from './cliente.js'
import Concessionaria from './concessionaria.js'
import Transportador from './transportador.js'
import Veiculo from './veiculo.js'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'

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


  @belongsTo(() => Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>


  @belongsTo(() => Concessionaria)
  declare concessionaria: BelongsTo<typeof Concessionaria>

  @belongsTo(() => Transportador)
  declare transportador: BelongsTo<typeof Transportador>

  @belongsTo(() => Veiculo)
  declare veiculo: BelongsTo<typeof Veiculo>

}