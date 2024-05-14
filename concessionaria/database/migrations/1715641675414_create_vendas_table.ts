import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'vendas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id_venda').notNullable()
      table.integer('comissao').notNullable()
      table.date('data').notNullable()
      table.string('nota_fiscal', 45).notNullable()
      table.decimal('preco_total').notNullable()
      table.integer('tipo de pagamento_id_pagamento').unsigned().references('id_pagamento').inTable('tipopagamentos').notNullable()
      table.integer('cliente_id_cliente').unsigned().references('id_cliente').inTable('clientes').notNullable()
      table.integer('concessionaria_id_concessionaria').unsigned().references('id_concessionaria').inTable('concessionarias').notNullable()
      table.integer('transportador_idtransportador').unsigned().references('idtransportador').inTable('trasportador')
      table.integer('funcionario_id_funcionario').unsigned().references('id_funcionario').inTable('funcionarios').notNullable()
      table.integer('veiculo_idveiculo').unsigned().references('idveiculo').inTable('veiculos').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}