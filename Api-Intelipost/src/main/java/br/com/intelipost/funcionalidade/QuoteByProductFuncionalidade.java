package br.com.intelipost.funcionalidade;

import br.com.intelipost.dto.Response;
import br.com.intelipost.factory.ObjectFactory;
import br.com.intelipost.model.Body;
import br.com.intelipost.request.MetodosHttpImpl;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public class QuoteByProductFuncionalidade {

	private Body body;

	public QuoteByProductFuncionalidade() {

		this.body = new Body();

	}

	/**
	 * 
	 * @param metodo
	 * @param cepOrigen
	 * @param cepDestino
	 * @param skuId
	 * @return retorna o Response da chamada
	 */
	public Response validarCotacaoFrete(String metodo, String cepOrigen, String cepDestino, String skuId) {

		body = ObjectFactory.createObject(cepOrigen, cepDestino, skuId);
		/**
		 * recebe o metodo http que deve ser chamado
		 */
		MetodosHttpImpl httpImpl = MetodosHttpImpl.valueOf(metodo.toUpperCase());

		return httpImpl.http(body);
	}

}
