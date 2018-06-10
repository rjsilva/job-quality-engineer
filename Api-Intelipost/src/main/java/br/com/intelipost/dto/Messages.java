package br.com.intelipost.dto;

public class Messages {
	
	private String text;

	private String type;

	private String key;

	public String getText() {
		return text;
	}

	public void setText(String text) {
		this.text = text;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	public String getKey() {
		return key;
	}

	public void setKey(String key) {
		this.key = key;
	}

	@Override
    public String toString()
    {
        return "ClassPojo [text = "+text+", type = "+type+", key = "+key+"]";
    }
}