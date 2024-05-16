/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CargosController from '#controllers/cargos_controller'
import ClientesController from '#controllers/clientes_controller'
import ConcessionariasController from '#controllers/concessionarias_controller'
import FabricantesController from '#controllers/fabricantes_controller'
import FuncionariosController from '#controllers/funcionarios_controller'
import TipoPagamentosController from '#controllers/tipo_pagamentos_controller'
import TransportadorsController from '#controllers/transportadors_controller'
import VeiculosController from '#controllers/veiculos_controller'
import VendasController from '#controllers/vendas_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/cargos', CargosController).apiOnly()
router.resource('/clientes', ClientesController).apiOnly()
router.resource('/concessionarias', ConcessionariasController).apiOnly()
router.resource('/fabricantes', FabricantesController).apiOnly()
router.resource('/funcionarios', FuncionariosController).apiOnly()
router.resource('/tipopagamentos', TipoPagamentosController).apiOnly()
router.resource('/trasportadores', TransportadorsController).apiOnly()
router.resource('/veiculos', VeiculosController).apiOnly()
router.resource('/vendas', VendasController).apiOnly()
