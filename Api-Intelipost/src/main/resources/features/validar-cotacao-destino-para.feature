#language:pt
Funcionalidade: Validar cotacao de frete todos os canais de vendas destino para

  @Test
  Esquema do Cenario: validar cotacao de frente destino para
    Dado que eu faco requisicao <metodo> para quote_by_product com os parametros
      | metodo | cep origem | cep destino | sku_id |
      | post   | <origem>   |    66020446 | SKU456 |
    Entao recebo status code "OK"
    E devo visualizar o prazo de entrega igual a '20' dias

    Exemplos: 
      | origem   | destino  |
      | 29010120 | 66020446 |
      | 29010120 | 66020446 |
      | 77001054 | 66020446 |
      | 77001054 | 66020446 |
      | 78005170 | 66020446 |
      | 78005170 | 66020446 |
