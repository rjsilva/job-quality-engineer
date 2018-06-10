#language:pt
Funcionalidade: Validar cotacao de frete origem tocantins destino regiao sudeste

  @Test
  Esquema do Cenario: validar cotacao sudeste nordeste
    Dado que eu faco requisicao <metodo> para quote_by_product com os parametros
      | metodo | cep origem | cep destino | sku_id |
      | post   | <origem>   | <destino>   | SKU456 |
    Entao recebo status code "ERROR"
    E recebo uma mensagem "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos."

    Exemplos: 
      | origem   | destino  |
      | 77001054 | 21370080 |
      | 77001054 | 31270100 |
      | 77001054 | 29045460 |
      | 77001054 | 05033110 |
