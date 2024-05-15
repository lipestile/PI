import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'transportadors'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      
      table.increments('id').notNullable()
      table.integer('cnpj', 18).notNullable() 
      table.string('nome_fantasia', 200).notNullable() 
      table.decimal('precokm_rodado').notNullable() 
      table.timestamp('created_at') 
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}