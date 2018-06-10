package br.com.intelipost.dto;

public class Volumes {

	private Double height;

	private Integer weight;

	private String productCategory;

	private String costOfGoods;

	private String description;

	private Double width;

	private Integer length;

	private String volumeType;

	private String quantityOfItems;

	private String[] skuGroupsIds;

	public Double getHeight() {
		return height;
	}

	public void setHeight(Double height) {
		this.height = height;
	}

	public Integer getWeight() {
		return weight;
	}

	public void setWeight(Integer weight) {
		this.weight = weight;
	}

	public String getProduct_category() {
		return productCategory;
	}

	public void setProduct_category(String product_category) {
		this.productCategory = product_category;
	}

	public String getCost_of_goods() {
		return costOfGoods;
	}

	public void setCost_of_goods(String cost_of_goods) {
		this.costOfGoods = cost_of_goods;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getWidth() {
		return width;
	}

	public void setWidth(Double width) {
		this.width = width;
	}

	public Integer getLength() {
		return length;
	}

	public void setLength(Integer length) {
		this.length = length;
	}

	public String getVolume_type() {
		return volumeType;
	}

	public void setVolume_type(String volume_type) {
		this.volumeType = volume_type;
	}

	public String getQuantity_of_items() {
		return quantityOfItems;
	}

	public void setQuantity_of_items(String quantity_of_items) {
		this.quantityOfItems = quantity_of_items;
	}

	public String[] getSku_groups_ids() {
		return skuGroupsIds;
	}

	public void setSku_groups_ids(String[] sku_groups_ids) {
		this.skuGroupsIds = sku_groups_ids;
	}

	@Override
	public String toString() {
		return "ClassPojo [height = " + height + ", weight = " + weight + ", product_category = " + productCategory
				+ ", cost_of_goods = " + costOfGoods + ", description = " + description + ", width = " + width
				+ ", length = " + length + ", volume_type = " + volumeType + ", quantity_of_items = "
				+ quantityOfItems + ", sku_groups_ids = " + skuGroupsIds + "]";
	}

}