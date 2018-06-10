package br.com.intelipost.dto;

public class AdditionalInformation {

	private boolean calculateEstimatedDateExact;

	private Integer leadTimeBusinessDays;

	private String clientType;

	private boolean freeShipping;

	private boolean extraCostAbsolute;

	private boolean taxId;

	private boolean extraCostPercentage;

	private String[] deliveryMethodIds;

	private boolean shippedDate;

	private boolean isStateTaxPayer;

	private boolean paymentType;

	private String salesChannel;

	public boolean getCalculateEstimatedDateExact() {
		return calculateEstimatedDateExact;
	}

	public void setCalculate_estimated_date_exact(boolean calculate_estimated_date_exact) {
		this.calculateEstimatedDateExact = calculate_estimated_date_exact;
	}

	public Integer getLead_time_business_days() {
		return leadTimeBusinessDays;
	}

	public void setLead_time_business_days(Integer lead_time_business_days) {
		this.leadTimeBusinessDays = lead_time_business_days;
	}

	public String getClient_type() {
		return clientType;
	}

	public void setClient_type(String client_type) {
		this.clientType = client_type;
	}

	public boolean getFree_shipping() {
		return freeShipping;
	}

	public void setFree_shipping(boolean free_shipping) {
		this.freeShipping = free_shipping;
	}

	public boolean getExtra_cost_absolute() {
		return extraCostAbsolute;
	}

	public void setExtra_cost_absolute(boolean extra_cost_absolute) {
		this.extraCostAbsolute = extra_cost_absolute;
	}

	public boolean getTax_id() {
		return taxId;
	}

	public void setTax_id(boolean tax_id) {
		this.taxId = tax_id;
	}

	public boolean getExtra_cost_percentage() {
		return extraCostPercentage;
	}

	public void setExtra_cost_percentage(boolean extra_cost_percentage) {
		this.extraCostPercentage = extra_cost_percentage;
	}

	public String[] getDelivery_method_ids() {
		return deliveryMethodIds;
	}

	public void setDelivery_method_ids(String[] delivery_method_ids) {
		this.deliveryMethodIds = delivery_method_ids;
	}

	public boolean getShipped_date() {
		return shippedDate;
	}

	public void setShipped_date(boolean shipped_date) {
		this.shippedDate = shipped_date;
	}

	public boolean getIs_state_tax_payer() {
		return isStateTaxPayer;
	}

	public void setIs_state_tax_payer(boolean is_state_tax_payer) {
		this.isStateTaxPayer = is_state_tax_payer;
	}

	public boolean getPayment_type() {
		return paymentType;
	}

	public void setPayment_type(boolean payment_type) {
		this.paymentType = payment_type;
	}

	public String getSales_channel() {
		return salesChannel;
	}

	public void setSales_channel(String sales_channel) {
		this.salesChannel = sales_channel;
	}

	@Override
	public String toString() {
		return "ClassPojo [calculate_estimated_date_exact = " + calculateEstimatedDateExact
				+ ", lead_time_business_days = " + leadTimeBusinessDays + ", client_type = " + clientType
				+ ", free_shipping = " + freeShipping + ", extra_cost_absolute = " + extraCostAbsolute
				+ ", tax_id = " + taxId + ", extra_cost_percentage = " + extraCostPercentage
				+ ", delivery_method_ids = " + deliveryMethodIds + ", shipped_date = " + shippedDate
				+ ", is_state_tax_payer = " + isStateTaxPayer + ", payment_type = " + paymentType
				+ ", sales_channel = " + salesChannel + "]";
	}

}