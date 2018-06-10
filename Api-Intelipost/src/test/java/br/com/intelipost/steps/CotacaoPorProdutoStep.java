package br.com.intelipost.steps;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import java.util.Arrays;

import br.com.intelipost.dto.DeliveryOptions;
import br.com.intelipost.dto.Response;
import br.com.intelipost.funcionalidade.QuoteByProductFuncionalidade;
import cucumber.api.DataTable;
import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Entao;

public class CotacaoPorProdutoStep {

	private QuoteByProductFuncionalidade cotacaoCanalVendaFuncionalidade;
	private Response response;

	public CotacaoPorProdutoStep() {
		this.cotacaoCanalVendaFuncionalidade = new QuoteByProductFuncionalidade();
		this.response = new Response();
	}

	@Dado("^que eu faco requisicao <metodo> para quote_by_product com os parametros$")
	public void queEuFacoRequisicaoMetodoParaQuote_by_productComOsParametros(DataTable params) throws Throwable {

		params.asMaps(String.class, String.class).forEach(map -> {

			this.response = cotacaoCanalVendaFuncionalidade.validarCotacaoFrete(map.get("metodo"),
					map.get("cep origem"), map.get("cep destino"), map.get("sku_id"));
		});
	}

	@Entao("^recebo status code \"([^\"]*)\"$")
	public void receboStatusCode(String status) throws Throwable {

		assertEquals(status, response.getStatus());

	}

	@Entao("^recebo uma mensagem \"([^\"]*)\"$")
	public void receboUmaMensagem(String message) throws Throwable {

		Arrays.stream(response.getMessages()).forEach(msg -> {
			System.out.println(msg.getText());
			assertEquals(msg.getText(), message);
		});

	}

	@Entao("^nao devo visualizar a opcao entrega \"([^\"]*)\"$")
	public void naoDevoVisualizarAOpcaoEntrega(String opcaoEntrega) throws Throwable {

		DeliveryOptions result = Arrays.stream(response.getContent().getDelivery_options())
				.filter(op -> op.getDelivery_method_name().equals(opcaoEntrega)).findAny().orElse(null);

		assertNull("", result);
	}
	
	@Entao("^devo visualizar o prazo de entrega igual a '(\\d+)' dias$")
	public void devoVisualizarOPrazoDeEntregaIgualADias(int prazoEntrega) throws Throwable {
	   
		DeliveryOptions result = Arrays.stream(response.getContent().getDelivery_options())
				.filter(op -> op.getDelivery_estimate_business_days() == prazoEntrega).findAny().orElse(null);

		assertTrue(prazoEntrega == result.getDelivery_estimate_business_days());
		
	}

}
