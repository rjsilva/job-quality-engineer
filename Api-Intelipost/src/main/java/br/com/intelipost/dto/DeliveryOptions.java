package br.com.intelipost.dto;

public class DeliveryOptions {
	
	private String schedulingEnabled;

	private Double cubicWeight;

	private String removedByReturnModes;

	private String removedByQuoteRules;

	private Double providerShippingCost;

	private String shownToClient;

	private String logisticProviderName;

	private Double finalShippingCost;

	private boolean deliveryNote;

	private String description;

	private String pickupEnabled;

	private Integer deliveryEstimateTransitTimeBusinessDays;

	private String deliveryMethodType;

	private String deliveryMethodName;

	private Integer deliveryEstimateBusinessDays;

	private Integer deliveryMethodId;

	public String getScheduling_enabled() {
		return schedulingEnabled;
	}

	public void setScheduling_enabled(String scheduling_enabled) {
		this.schedulingEnabled = scheduling_enabled;
	}

	public Double getCubic_weight() {
		return cubicWeight;
	}

	public void setCubic_weight(Double cubic_weight) {
		this.cubicWeight = cubic_weight;
	}

	public String getRemoved_by_return_modes() {
		return removedByReturnModes;
	}

	public void setRemoved_by_return_modes(String removed_by_return_modes) {
		this.removedByReturnModes = removed_by_return_modes;
	}

	public String getRemoved_by_quote_rules() {
		return removedByQuoteRules;
	}

	public void setRemoved_by_quote_rules(String removed_by_quote_rules) {
		this.removedByQuoteRules = removed_by_quote_rules;
	}

	public Double getProvider_shipping_cost() {
		return providerShippingCost;
	}

	public void setProvider_shipping_cost(Double provider_shipping_cost) {
		this.providerShippingCost = provider_shipping_cost;
	}

	public String getShown_to_client() {
		return shownToClient;
	}

	public void setShown_to_client(String shown_to_client) {
		this.shownToClient = shown_to_client;
	}

	public String getLogistic_provider_name() {
		return logisticProviderName;
	}

	public void setLogistic_provider_name(String logistic_provider_name) {
		this.logisticProviderName = logistic_provider_name;
	}

	public Double getFinal_shipping_cost() {
		return finalShippingCost;
	}

	public void setFinal_shipping_cost(Double final_shipping_cost) {
		this.finalShippingCost = final_shipping_cost;
	}

	public boolean getDelivery_note ()
    {
        return deliveryNote;
    }

	public void setDelivery_note (boolean delivery_note)
    {
        this.deliveryNote = delivery_note;
    }

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPickup_enabled() {
		return pickupEnabled;
	}

	public void setPickup_enabled(String pickup_enabled) {
		this.pickupEnabled = pickup_enabled;
	}

	public Integer getDelivery_estimate_transit_time_business_days() {
		return deliveryEstimateTransitTimeBusinessDays;
	}

	public void setDelivery_estimate_transit_time_business_days(Integer delivery_estimate_transit_time_business_days) {
		this.deliveryEstimateTransitTimeBusinessDays = delivery_estimate_transit_time_business_days;
	}

	public String getDelivery_method_type() {
		return deliveryMethodType;
	}

	public void setDelivery_method_type(String delivery_method_type) {
		this.deliveryMethodType = delivery_method_type;
	}

	public String getDelivery_method_name() {
		return deliveryMethodName;
	}

	public void setDelivery_method_name(String delivery_method_name) {
		this.deliveryMethodName = delivery_method_name;
	}

	public Integer getDelivery_estimate_business_days() {
		return deliveryEstimateBusinessDays;
	}

	public void setDelivery_estimate_business_days(Integer delivery_estimate_business_days) {
		this.deliveryEstimateBusinessDays = delivery_estimate_business_days;
	}

	public Integer getDelivery_method_id() {
		return deliveryMethodId;
	}

	public void setDelivery_method_id(Integer delivery_method_id) {
		this.deliveryMethodId = delivery_method_id;
	}

	@Override
	public String toString() {
		return "ClassPojo [scheduling_enabled = " + schedulingEnabled + ", cubic_weight = " + cubicWeight
				+ ", removed_by_return_modes = " + removedByReturnModes + ", removed_by_quote_rules = "
				+ removedByQuoteRules + ", provider_shipping_cost = " + providerShippingCost
				+ ", shown_to_client = " + shownToClient + ", logistic_provider_name = " + logisticProviderName
				+ ", final_shipping_cost = " + finalShippingCost + ", delivery_note = " + deliveryNote
				+ ", description = " + description + ", pickup_enabled = " + pickupEnabled
				+ ", delivery_estimate_transit_time_business_days = " + deliveryEstimateTransitTimeBusinessDays
				+ ", delivery_method_type = " + deliveryMethodType + ", delivery_method_name = "
				+ deliveryMethodName + ", delivery_estimate_business_days = " + deliveryEstimateBusinessDays
				+ ", delivery_method_id = " + deliveryMethodId + "]";
	}

}