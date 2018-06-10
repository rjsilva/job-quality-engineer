package br.com.intelipost.model;

public class Body {

	private String origin_zip_code;

	private Identification identification;

	private String destination_zip_code;

	private String quoting_mode;

	private Product[] products;

	private AdditionalInformation additional_information;
	
	public Body() {
		this.identification = new Identification();
		this.products = new Product[]{};
		this.additional_information = new AdditionalInformation();
	}

	public String getOrigin_zip_code() {
		return origin_zip_code;
	}

	public void setOrigin_zip_code(String origin_zip_code) {
		this.origin_zip_code = origin_zip_code;
	}

	public Identification getIdentification() {
		return identification;
	}

	public void setIdentification(Identification identification) {
		this.identification = identification;
	}

	public String getDestination_zip_code() {
		return destination_zip_code;
	}

	public void setDestination_zip_code(String destination_zip_code) {
		this.destination_zip_code = destination_zip_code;
	}

	public String getQuoting_mode() {
		return quoting_mode;
	}

	public void setQuoting_mode(String quoting_mode) {
		this.quoting_mode = quoting_mode;
	}

	public Product[] getProducts() {
		return products;
	}

	public void setProducts(Product[] products) {
		this.products = products;
	}

	public AdditionalInformation getAdditional_information() {
		return additional_information;
	}

	public void setAdditional_information(AdditionalInformation additional_information) {
		this.additional_information = additional_information;
	}

	@Override
	public String toString() {
		return "ClassPojo [origin_zip_code = " + origin_zip_code + ", identification = " + identification
				+ ", destination_zip_code = " + destination_zip_code + ", quoting_mode = " + quoting_mode
				+ ", products = " + products + ", additional_information = " + additional_information + "]";
	}
}