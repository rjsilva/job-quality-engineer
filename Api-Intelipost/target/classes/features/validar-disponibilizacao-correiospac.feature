#language:pt
Funcionalidade: Validar cotacao de frete opcao correios pac

  @Test
  Esquema do Cenario: validar disponibilizacao opcao de entrega Correios PAC
    Dado que eu faco requisicao <metodo> para quote_by_product com os parametros
      | metodo | cep origem | cep destino | sku_id |
      | post   | <origem>   | <destino>   | SKU456 |
    Entao recebo status code "OK"
    Mas nao devo visualizar a opcao entrega "Correios PAC"

    Exemplos: 
      | origem   | destino  |
      | 29010120 | 22710010 |
      | 29010120 | 22710990 |
      | 77001054 | 22710010 |
      | 77001054 | 22710990 |
      | 78005170 | 22710010 |
      | 78005170 | 22710990 |
