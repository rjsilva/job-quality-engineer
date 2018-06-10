package br.com.intelipost.funcionalidade;

import br.com.intelipost.dto.Response;
import br.com.intelipost.factory.ObjectFactory;
import br.com.intelipost.model.Body;
import br.com.intelipost.model.Product;
import br.com.intelipost.request.MetodosHttpImpl;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class QuoteByProductFuncionalidade {

	private Body body;

	private Product produto;

	public QuoteByProductFuncionalidade() {

		this.body = new Body();
		this.produto = new Product();

	}

	public Response validarCotacaoFrete(String metodo, String cepOrigen, String cepDestino, String skuId) {

		body = ObjectFactory.createObject(cepOrigen, cepDestino, skuId);
		MetodosHttpImpl httpImpl = MetodosHttpImpl.valueOf(metodo.toUpperCase());

		return httpImpl.http(body);
	}

}
