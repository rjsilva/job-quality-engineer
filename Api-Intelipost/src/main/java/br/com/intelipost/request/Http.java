package br.com.intelipost.request;

import br.com.intelipost.dto.Response;
import br.com.intelipost.model.Body;

/**
 * 
 * @author Ronaldo silva
 *
 */
public interface Http {
	
	Response http(Body body);
	

}
