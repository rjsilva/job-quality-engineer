package br.com.intelipost.factory;

import com.github.javafaker.Faker;

import br.com.intelipost.model.Body;
import br.com.intelipost.model.Product;


/**
 * cria objeto e popula e retorna 
 * @author Ronaldo Silva
 *
 */
public class ObjectFactory {

	private static Body body;
	private static Product[] array = new Product[1];
	private static Product produto;
	private static Faker faker;

	/**
	 * 
	 * @param cepOrigen
	 * @param cepDestino
	 * @param skuId
	 * @return retorna o objeto Body para ser enviado no corpo da requisicao
	 */
	public static Body createObject(String cepOrigen, String cepDestino, String skuId) {

		/**
		 * objeto que será inserido no corpo da requisição
		 */
	    body = new Body();
	    
	    /**
	     * objeto do tipo produto
	     */
		produto = new Product();
		
		/**
		 * cria dados aleatório
		 */
		faker = new Faker();
		
		body.setOrigin_zip_code(cepOrigen);

		body.setDestination_zip_code(cepDestino);

		body.setQuoting_mode("DYNAMIC_BOX_ALL_ITEMS");

		produto.setHeight(faker.number().randomDouble(2, 1, 2));

		produto.setWeight(faker.number().randomDigit());

		produto.setCost_of_goods(faker.number().randomDouble(2, 3, 70));
		
		produto.setProduct_category("20.90f");
		
		produto.setWidth(faker.number().randomDouble(2, 10, 20));

		produto.setLength(faker.number().numberBetween(10, 100));

		produto.setQuantity(faker.number().randomDigit());

		produto.setSku_id(skuId);
		
		produto.setProduct_category("celulares");

		/**
		 * 
		 */
		array[0] = produto;

		body.setProducts(array);

		body.getAdditional_information().setLead_time_business_days(faker.number().randomDigit());

		body.getAdditional_information().setSales_channel("meu_canal_de_vendas");

		body.getAdditional_information().setClient_type("gold");

		body.getIdentification().setSession("04e5bdf7ed15e571c0265c18333b6fdf1434658753");

		body.getIdentification().setIp("000.000.000.000");

		body.getIdentification().setPage_name("carrinho");

		body.getIdentification().setUrl("http://www.intelipost.com.br/checkout/cart/");

		return body;

	}

}
