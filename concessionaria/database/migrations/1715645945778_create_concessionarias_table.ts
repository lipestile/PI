import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'concessionarias'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('cnpj', 15).notNullable()
      table.string('nome_fantasia', 100).notNullable()
      table.string('telefone', 20).notNullable()
      table.integer('qtd_veiculos_max').notNullable()
      table.string('endereco', 100).notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}