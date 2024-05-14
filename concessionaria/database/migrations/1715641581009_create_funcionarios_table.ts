import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_funcionario').notNullable()
      table.string('nome', 200).notNullable()
      table.integer('cpf', 11).notNullable()
      table.decimal('salario').notNullable()
      table.integer('pis', 45).notNullable()
      table.date('data_nascimento').notNullable()
      table.string('endereco', 100).notNullable()
      table.integer('cargo_id').unsigned().references('id_cargo').inTable('cargo').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}