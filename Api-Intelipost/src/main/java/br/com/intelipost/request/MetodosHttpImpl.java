package br.com.intelipost.request;

import br.com.intelipost.dto.Response;
import br.com.intelipost.model.Body;
import br.com.intelipost.model.EndPoint;
import br.com.intelipost.model.Token;
import io.restassured.RestAssured;
import io.restassured.config.EncoderConfig;
import io.restassured.http.ContentType;

/**
 * 
 * @author Ronaldo Silva
 *
 */
public enum MetodosHttpImpl implements Http {

	POST("post") {

		@Override
		public Response http(Body body) {

			Response response = RestAssured.given()
					.config(RestAssured.config().encoderConfig(
							EncoderConfig.encoderConfig().encodeContentTypeAs("aplication/json", ContentType.JSON)))
					.header("api-key", Token.API_KEY).when()
					.body(body).post(EndPoint.BASE_URL)
					.body()
					.as(Response.class);

			return response;

		}

	},
	GET("get") {

		@Override
		public Response http(Body body) {
			// TODO Auto-generated method stub
			return null;
		}


	},
	PUT("put") {

		@Override
		public  Response http(Body body) {
			// TODO Auto-generated method stub
			return null;
		}

	

	},
	DELETE("delete") {

		@Override
		public Response http(Body body) {
			// TODO Auto-generated method stub
			return null;
		}

	

	};

	public String value;

	private MetodosHttpImpl(String value) {
		this.value = value;
	}

	public String getValue() {
		return value;
	}

}
