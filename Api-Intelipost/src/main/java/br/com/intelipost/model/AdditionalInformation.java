package br.com.intelipost.model;

public class AdditionalInformation {


	private Integer lead_time_business_days;

    private String client_type;

    private String sales_channel;

    public Integer getLead_time_business_days ()
    {
        return lead_time_business_days;
    }

    public void setLead_time_business_days (Integer lead_time_business_days)
    {
        this.lead_time_business_days = lead_time_business_days;
    }

    public String getClient_type ()
    {
        return client_type;
    }

    public void setClient_type (String client_type)
    {
        this.client_type = client_type;
    }

    public String getSales_channel ()
    {
        return sales_channel;
    }

    public void setSales_channel (String sales_channel)
    {
        this.sales_channel = sales_channel;
    }

    @Override
    public String toString()
    {
        return "ClassPojo [lead_time_business_days = "+lead_time_business_days+", client_type = "+client_type+", sales_channel = "+sales_channel+"]";
    }
}