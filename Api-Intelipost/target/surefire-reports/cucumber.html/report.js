$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/validar-cotacao-cn1-cn2.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Validar cotacao de frete canais de vendas",
  "description": "",
  "id": "validar-cotacao-de-frete-canais-de-vendas",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validar cotacao canais de venda CN1 e CN2",
  "description": "",
  "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "\u003corigem\u003e",
        "\u003cdestino\u003e",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2;",
  "rows": [
    {
      "cells": [
        "origem",
        "destino"
      ],
      "line": 13,
      "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2;;1"
    },
    {
      "cells": [
        "29010120",
        "11095450"
      ],
      "line": 14,
      "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2;;2"
    },
    {
      "cells": [
        "77001054",
        "52111155"
      ],
      "line": 15,
      "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "validar cotacao canais de venda CN1 e CN2",
  "description": "",
  "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "29010120",
        "11095450",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 5489840559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERROR",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 4709005,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[ERROR]\u003e but was:\u003c[OK]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"ERROR\"(features/validar-cotacao-cn1-cn2.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.",
      "offset": 21
    }
  ],
  "location": "CotacaoPorProdutoStep.receboUmaMensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "validar cotacao canais de venda CN1 e CN2",
  "description": "",
  "id": "validar-cotacao-de-frete-canais-de-vendas;validar-cotacao-canais-de-venda-cn1-e-cn2;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "52111155",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 1135801490,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERROR",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 360118,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[ERROR]\u003e but was:\u003c[OK]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"ERROR\"(features/validar-cotacao-cn1-cn2.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.",
      "offset": 21
    }
  ],
  "location": "CotacaoPorProdutoStep.receboUmaMensagem(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/validar-cotacao-destino-para.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Validar cotacao de frete todos os canais de vendas destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "\u003corigem\u003e",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;",
  "rows": [
    {
      "cells": [
        "origem",
        "destino"
      ],
      "line": 13,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;1"
    },
    {
      "cells": [
        "29010120",
        "66020446"
      ],
      "line": 14,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;2"
    },
    {
      "cells": [
        "29010120",
        "66020446"
      ],
      "line": 15,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;3"
    },
    {
      "cells": [
        "77001054",
        "66020446"
      ],
      "line": 16,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;4"
    },
    {
      "cells": [
        "77001054",
        "66020446"
      ],
      "line": 17,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;5"
    },
    {
      "cells": [
        "78005170",
        "66020446"
      ],
      "line": 18,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;6"
    },
    {
      "cells": [
        "78005170",
        "66020446"
      ],
      "line": 19,
      "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "29010120",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 511088870,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 84182,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "CotacaoPorProdutoStep.devoVisualizarOPrazoDeEntregaIgualADias(int)"
});
formatter.result({
  "duration": 26354074,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "29010120",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 525066547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 61799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "CotacaoPorProdutoStep.devoVisualizarOPrazoDeEntregaIgualADias(int)"
});
formatter.result({
  "duration": 160534,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 468223839,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 75641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "CotacaoPorProdutoStep.devoVisualizarOPrazoDeEntregaIgualADias(int)"
});
formatter.result({
  "duration": 106312,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 457029566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 93493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "CotacaoPorProdutoStep.devoVisualizarOPrazoDeEntregaIgualADias(int)"
});
formatter.result({
  "duration": 160110,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "78005170",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 633153247,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 74496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "CotacaoPorProdutoStep.devoVisualizarOPrazoDeEntregaIgualADias(int)"
});
formatter.result({
  "duration": 145599,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "validar cotacao de frente destino para",
  "description": "",
  "id": "validar-cotacao-de-frete-todos-os-canais-de-vendas-destino-para;validar-cotacao-de-frente-destino-para;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "78005170",
        "66020446",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "devo visualizar o prazo de entrega igual a \u002720\u0027 dias",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 424395907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 232675,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[OK]\u003e but was:\u003c[ERROR]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"OK\"(features/validar-cotacao-destino-para.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 44
    }
  ],
  "location": "CotacaoPorProdutoStep.devoVisualizarOPrazoDeEntregaIgualADias(int)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("features/validar-cotacao-por-identificador.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Validar cotacao de frete por identificador",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validar cotacao por identificador SKU",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "\u003corigem\u003e",
        "\u003cdestino\u003e",
        "SKU123"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;",
  "rows": [
    {
      "cells": [
        "origem",
        "destino"
      ],
      "line": 13,
      "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;1"
    },
    {
      "cells": [
        "29010120",
        "69918020"
      ],
      "line": 14,
      "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;2"
    },
    {
      "cells": [
        "77001054",
        "51240450"
      ],
      "line": 15,
      "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;3"
    },
    {
      "cells": [
        "78005170",
        "66020446"
      ],
      "line": 16,
      "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;4"
    },
    {
      "cells": [
        "94090720",
        "66020446"
      ],
      "line": 17,
      "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "validar cotacao por identificador SKU",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "29010120",
        "69918020",
        "SKU123"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 460043859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 90320,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "duration": 948788,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validar cotacao por identificador SKU",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "51240450",
        "SKU123"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 433043882,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 305395,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[OK]\u003e but was:\u003c[ERROR]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"OK\"(features/validar-cotacao-por-identificador.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "validar cotacao por identificador SKU",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "78005170",
        "66020446",
        "SKU123"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 449037146,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 72158,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "duration": 84680,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validar cotacao por identificador SKU",
  "description": "",
  "id": "validar-cotacao-de-frete-por-identificador;validar-cotacao-por-identificador-sku;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "94090720",
        "66020446",
        "SKU123"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 438837530,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 96232,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "duration": 117324,
  "status": "passed"
});
formatter.uri("features/validar-cotacao-regiao-sudeste-nordeste.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Validar cotacao de frete origem tocantins destino regiao sudeste",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validar cotacao sudeste nordeste",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "\u003corigem\u003e",
        "\u003cdestino\u003e",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;",
  "rows": [
    {
      "cells": [
        "origem",
        "destino"
      ],
      "line": 13,
      "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;1"
    },
    {
      "cells": [
        "77001054",
        "21370080"
      ],
      "line": 14,
      "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;2"
    },
    {
      "cells": [
        "77001054",
        "31270100"
      ],
      "line": 15,
      "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;3"
    },
    {
      "cells": [
        "77001054",
        "29045460"
      ],
      "line": 16,
      "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;4"
    },
    {
      "cells": [
        "77001054",
        "05033110"
      ],
      "line": 17,
      "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;5"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "validar cotacao sudeste nordeste",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "21370080",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 634017033,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERROR",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 109566,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.",
      "offset": 21
    }
  ],
  "location": "CotacaoPorProdutoStep.receboUmaMensagem(String)"
});
formatter.result({
  "duration": 1093578,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "validar cotacao sudeste nordeste",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "31270100",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 471253468,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERROR",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 162375,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.",
      "offset": 21
    }
  ],
  "location": "CotacaoPorProdutoStep.receboUmaMensagem(String)"
});
formatter.result({
  "duration": 168557,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "validar cotacao sudeste nordeste",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "29045460",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 479880234,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERROR",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 78785,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.",
      "offset": 21
    }
  ],
  "location": "CotacaoPorProdutoStep.receboUmaMensagem(String)"
});
formatter.result({
  "duration": 226622,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "validar cotacao sudeste nordeste",
  "description": "",
  "id": "validar-cotacao-de-frete-origem-tocantins-destino-regiao-sudeste;validar-cotacao-sudeste-nordeste;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "05033110",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"ERROR\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"",
  "keyword": "E "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 451890840,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ERROR",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 503387,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.",
      "offset": 21
    }
  ],
  "location": "CotacaoPorProdutoStep.receboUmaMensagem(String)"
});
formatter.result({
  "duration": 428528,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[Faltando o peso do produto]\u003e but was:\u003c[Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.lambda$1(CotacaoPorProdutoStep.java:48)\n\tat java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\n\tat java.util.stream.ReferencePipeline$Head.forEach(ReferencePipeline.java:580)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboUmaMensagem(CotacaoPorProdutoStep.java:46)\n\tat ✽.E recebo uma mensagem \"Sem opções de entrega viável. Por favor, verifique se os códigos postais estão corretos.\"(features/validar-cotacao-regiao-sudeste-nordeste.feature:10)\n",
  "status": "failed"
});
formatter.uri("features/validar-disponibilizacao-correiospac.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#language:pt"
    }
  ],
  "line": 2,
  "name": "Validar cotacao de frete opcao correios pac",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "\u003corigem\u003e",
        "\u003cdestino\u003e",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;",
  "rows": [
    {
      "cells": [
        "origem",
        "destino"
      ],
      "line": 13,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;1"
    },
    {
      "cells": [
        "29010120",
        "22710010"
      ],
      "line": 14,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;2"
    },
    {
      "cells": [
        "29010120",
        "22710990"
      ],
      "line": 15,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;3"
    },
    {
      "cells": [
        "77001054",
        "22710010"
      ],
      "line": 16,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;4"
    },
    {
      "cells": [
        "77001054",
        "22710990"
      ],
      "line": 17,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;5"
    },
    {
      "cells": [
        "78005170",
        "22710010"
      ],
      "line": 18,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;6"
    },
    {
      "cells": [
        "78005170",
        "22710990"
      ],
      "line": 19,
      "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;7"
    }
  ],
  "keyword": "Exemplos"
});
formatter.scenario({
  "line": 14,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "29010120",
        "22710010",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 409648649,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 590370,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[OK]\u003e but was:\u003c[ERROR]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"OK\"(features/validar-disponibilizacao-correiospac.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "29010120",
        "22710990",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 756215346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 93808,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "duration": 698953,
  "error_message": "java.lang.AssertionError:  expected null, but was:\u003cClassPojo [scheduling_enabled \u003d false, cubic_weight \u003d 0.521, removed_by_return_modes \u003d false, removed_by_quote_rules \u003d false, provider_shipping_cost \u003d 35.95, shown_to_client \u003d true, logistic_provider_name \u003d Correios, final_shipping_cost \u003d 35.95, delivery_note \u003d false, description \u003d Correios PAC, pickup_enabled \u003d false, delivery_estimate_transit_time_business_days \u003d 9, delivery_method_type \u003d STANDARD, delivery_method_name \u003d Correios PAC, delivery_estimate_business_days \u003d 12, delivery_method_id \u003d 1]\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotNull(Assert.java:755)\n\tat org.junit.Assert.assertNull(Assert.java:737)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(CotacaoPorProdutoStep.java:59)\n\tat ✽.Mas nao devo visualizar a opcao entrega \"Correios PAC\"(features/validar-disponibilizacao-correiospac.feature:10)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 16,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "22710010",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 433880181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 293703,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[OK]\u003e but was:\u003c[ERROR]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"OK\"(features/validar-disponibilizacao-correiospac.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "77001054",
        "22710990",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 439445471,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 268488,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[OK]\u003e but was:\u003c[ERROR]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:115)\n\tat org.junit.Assert.assertEquals(Assert.java:144)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.receboStatusCode(CotacaoPorProdutoStep.java:39)\n\tat ✽.Entao recebo status code \"OK\"(features/validar-disponibilizacao-correiospac.feature:9)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 18,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "78005170",
        "22710010",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 653207122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 85380,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "duration": 609845,
  "error_message": "java.lang.AssertionError:  expected null, but was:\u003cClassPojo [scheduling_enabled \u003d false, cubic_weight \u003d 0.487, removed_by_return_modes \u003d false, removed_by_quote_rules \u003d false, provider_shipping_cost \u003d 166.41, shown_to_client \u003d true, logistic_provider_name \u003d Correios, final_shipping_cost \u003d 166.41, delivery_note \u003d false, description \u003d Correios PAC, pickup_enabled \u003d false, delivery_estimate_transit_time_business_days \u003d 11, delivery_method_type \u003d STANDARD, delivery_method_name \u003d Correios PAC, delivery_estimate_business_days \u003d 16, delivery_method_id \u003d 1]\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotNull(Assert.java:755)\n\tat org.junit.Assert.assertNull(Assert.java:737)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(CotacaoPorProdutoStep.java:59)\n\tat ✽.Mas nao devo visualizar a opcao entrega \"Correios PAC\"(features/validar-disponibilizacao-correiospac.feature:10)\n",
  "status": "failed"
});
formatter.scenario({
  "line": 19,
  "name": "validar disponibilizacao opcao de entrega Correios PAC",
  "description": "",
  "id": "validar-cotacao-de-frete-opcao-correios-pac;validar-disponibilizacao-opcao-de-entrega-correios-pac;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 4,
      "name": "@Test"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "que eu faco requisicao \u003cmetodo\u003e para quote_by_product com os parametros",
  "matchedColumns": [
    0,
    1
  ],
  "rows": [
    {
      "cells": [
        "metodo",
        "cep origem",
        "cep destino",
        "sku_id"
      ],
      "line": 7
    },
    {
      "cells": [
        "post",
        "78005170",
        "22710990",
        "SKU456"
      ],
      "line": 8
    }
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 9,
  "name": "recebo status code \"OK\"",
  "keyword": "Entao "
});
formatter.step({
  "line": 10,
  "name": "nao devo visualizar a opcao entrega \"Correios PAC\"",
  "keyword": "Mas "
});
formatter.match({
  "location": "CotacaoPorProdutoStep.queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable)"
});
formatter.result({
  "duration": 1876903990,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "OK",
      "offset": 20
    }
  ],
  "location": "CotacaoPorProdutoStep.receboStatusCode(String)"
});
formatter.result({
  "duration": 80907,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Correios PAC",
      "offset": 37
    }
  ],
  "location": "CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(String)"
});
formatter.result({
  "duration": 422568,
  "error_message": "java.lang.AssertionError:  expected null, but was:\u003cClassPojo [scheduling_enabled \u003d false, cubic_weight \u003d 0.309, removed_by_return_modes \u003d false, removed_by_quote_rules \u003d false, provider_shipping_cost \u003d 179.66, shown_to_client \u003d true, logistic_provider_name \u003d Correios, final_shipping_cost \u003d 179.66, delivery_note \u003d false, description \u003d Correios PAC, pickup_enabled \u003d false, delivery_estimate_transit_time_business_days \u003d 11, delivery_method_type \u003d STANDARD, delivery_method_name \u003d Correios PAC, delivery_estimate_business_days \u003d 13, delivery_method_id \u003d 1]\u003e\n\tat org.junit.Assert.fail(Assert.java:88)\n\tat org.junit.Assert.failNotNull(Assert.java:755)\n\tat org.junit.Assert.assertNull(Assert.java:737)\n\tat br.com.intelipost.steps.CotacaoPorProdutoStep.naoDevoVisualizarAOpcaoEntrega(CotacaoPorProdutoStep.java:59)\n\tat ✽.Mas nao devo visualizar a opcao entrega \"Correios PAC\"(features/validar-disponibilizacao-correiospac.feature:10)\n",
  "status": "failed"
});
});