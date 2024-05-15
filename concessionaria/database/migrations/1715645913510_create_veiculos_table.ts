import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'veiculos'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('fabricante_idfabricante').unsigned().references('id').inTable('fabricantes').notNullable()
      table.integer('chassi', 100).notNullable()
      table.date('ano_fabricacao').notNullable()
      table.string('marca', 45).notNullable()
      table.string('modelo', 45).notNullable()
      table.string('cor', 45).notNullable()
      table.string('ipva', 2).notNullable()
      table.decimal('preco').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}