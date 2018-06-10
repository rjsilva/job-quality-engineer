#language:pt
Funcionalidade: Validar cotacao de frete canais de vendas

  @Test
  Esquema do Cenario: validar cotacao canais de venda CN1 e CN2
    Dado que eu faco requisicao <metodo> para quote_by_product com os parametros
      | metodo | cep origem | cep destino | sku_id |
      | post   | <origem>   | <destino>   | SKU456 |
    Entao recebo status code "ERROR"
    E recebo uma mensagem "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos."

    Exemplos: 
      | origem   | destino  |
      | 29010120 | 11095450 |
      | 77001054 | 52111155 |
