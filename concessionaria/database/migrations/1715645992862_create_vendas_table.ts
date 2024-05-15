import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('comissao').notNullable()
      table.string('nota_fiscal', 45).notNullable()
      table.decimal('preco_total').notNullable()
      table.integer('pagamento_id').unsigned().references('id').inTable('tipo_pagamentos').notNullable()
      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('concessionaria_id').unsigned().references('id').inTable('concessionarias').notNullable()
      table.integer('transportador_id').unsigned().references('id').inTable('transportadors').notNullable()
      table.integer('funcionario_id').unsigned().references('id').inTable('funcionarios').notNullable()
      table.integer('veiculo_id').unsigned().references('id').inTable('veiculos').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}