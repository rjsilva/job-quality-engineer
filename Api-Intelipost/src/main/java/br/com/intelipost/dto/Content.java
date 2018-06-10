package br.com.intelipost.dto;

public class Content {

	private String originZipCode;

	private String createdIso;

	private String cached;

	private String platform;

	private String destinationZipCode;

	private Volumes[] volumes;

	private Long id;

	private DeliveryOptions[] deliveryOptions;

	private Long created;

	private Identification identification;

	private String quotingMode;

	private Long clientId;

	private AdditionalInformation additionalInformation;

	public String getOrigin_zip_code() {
		return originZipCode;
	}

	public void setOrigin_zip_code(String origin_zip_code) {
		this.originZipCode = origin_zip_code;
	}

	public String getCreated_iso() {
		return createdIso;
	}

	public void setCreated_iso(String created_iso) {
		this.createdIso = created_iso;
	}

	public String getCached() {
		return cached;
	}

	public void setCached(String cached) {
		this.cached = cached;
	}

	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}

	public String getDestination_zip_code() {
		return destinationZipCode;
	}

	public void setDestination_zip_code(String destination_zip_code) {
		this.destinationZipCode = destination_zip_code;
	}

	public Volumes[] getVolumes() {
		return volumes;
	}

	public void setVolumes(Volumes[] volumes) {
		this.volumes = volumes;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public DeliveryOptions[] getDelivery_options() {
		return deliveryOptions;
	}

	public void setDelivery_options(DeliveryOptions[] delivery_options) {
		this.deliveryOptions = delivery_options;
	}

	public Long getCreated() {
		return created;
	}

	public void setCreated(Long created) {
		this.created = created;
	}

	public Identification getIdentification() {
		return identification;
	}

	public void setIdentification(Identification identification) {
		this.identification = identification;
	}

	public String getQuoting_mode() {
		return quotingMode;
	}

	public void setQuoting_mode(String quoting_mode) {
		this.quotingMode = quoting_mode;
	}

	public Long getClient_id() {
		return clientId;
	}

	public void setClient_id(Long client_id) {
		this.clientId = client_id;
	}

	public AdditionalInformation getAdditional_information() {
		return additionalInformation;
	}

	public void setAdditional_information(AdditionalInformation additional_information) {
		this.additionalInformation = additional_information;
	}

	@Override
	public String toString() {
		return "ClassPojo [origin_zip_code = " + originZipCode + ", created_iso = " + createdIso + ", cached = "
				+ cached + ", platform = " + platform + ", destination_zip_code = " + destinationZipCode
				+ ", volumes = " + volumes + ", id = " + id + ", delivery_options = " + deliveryOptions
				+ ", created = " + created + ", identification = " + identification + ", quoting_mode = " + quotingMode
				+ ", client_id = " + clientId + ", additional_information = " + additionalInformation + "]";
	}
}