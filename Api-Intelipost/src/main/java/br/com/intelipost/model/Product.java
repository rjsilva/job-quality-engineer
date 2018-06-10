package br.com.intelipost.model;

public class Product {

	private Integer weight;

    private Double height;

    private String product_category;

    private Double cost_of_goods;

    private Double width;

    private Integer length;

    private Integer quantity;

    private String sku_id;

    public Integer getWeight ()
    {
        return weight;
    }

    public void setWeight (Integer weight)
    {
        this.weight = weight;
    }

    public Double getHeight ()
    {
        return height;
    }

    public void setHeight (Double height)
    {
        this.height = height;
    }

    public String getProduct_category ()
    {
        return product_category;
    }

    public void setProduct_category (String product_category)
    {
        this.product_category = product_category;
    }

    public Double getCost_of_goods ()
    {
        return cost_of_goods;
    }

    public void setCost_of_goods (Double cost_of_goods)
    {
        this.cost_of_goods = cost_of_goods;
    }

    public Double getWidth ()
    {
        return width;
    }

    public void setWidth (Double width)
    {
        this.width = width;
    }

    public Integer getLength ()
    {
        return length;
    }

    public void setLength (Integer length)
    {
        this.length = length;
    }

    public Integer getQuantity ()
    {
        return quantity;
    }

    public void setQuantity (Integer quantity)
    {
        this.quantity = quantity;
    }

    public String getSku_id ()
    {
        return sku_id;
    }

    public void setSku_id (String sku_id)
    {
        this.sku_id = sku_id;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [weight = "+weight+", height = "+height+", product_category = "+product_category+", cost_of_goods = "+cost_of_goods+", width = "+width+", length = "+length+", quantity = "+quantity+", sku_id = "+sku_id+"]";
    }
}