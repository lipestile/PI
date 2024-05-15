import Venda from '#models/venda'
import { BaseSeeder } from '@adonisjs/lucid/seeders'


export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
     await Venda.createMany([
     {comissao: 0.5, nota_fiscal: 'xxxxxxxxxxxx-xxxxx-xxx-xxxx-xx--xxx-xx', preco_total: 170000, pagamento_id: 1, cliente_id: 1, concessionaria_id: 1, transportador_id: 3, funcionario_id: 3, veiculo_id: 1}
    ])
  }
}