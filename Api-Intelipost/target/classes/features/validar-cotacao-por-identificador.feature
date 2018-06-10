#language:pt
Funcionalidade: Validar cotacao de frete por identificador

  @Test
  Esquema do Cenario: validar cotacao por identificador SKU
    Dado que eu faco requisicao <metodo> para quote_by_product com os parametros
      | metodo | cep origem | cep destino | sku_id |
      | post   | <origem>   | <destino>   | SKU123 |
    Entao recebo status code "OK"
    Mas nao devo visualizar a opcao entrega "Correios PAC"

    Exemplos: 
      | origem   | destino   |
      | 29010120 |  69918020 |
      | 77001054 |  51240450 |
      | 78005170 |  66020446 |
      | 94090720 |  66020446 |
