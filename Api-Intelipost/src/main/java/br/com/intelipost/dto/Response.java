package br.com.intelipost.dto;

public class Response {

	private Content content;

	private String timezone;

	private String time;

	private String status;

	private String locale;

	private Messages[] messages;

	public Content getContent() {
		return content;
	}

	public void setContent(Content content) {
		this.content = content;
	}

	public String getTimezone() {
		return timezone;
	}

	public void setTimezone(String timezone) {
		this.timezone = timezone;
	}

	public String getTime() {
		return time;
	}

	public void setTime(String time) {
		this.time = time;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getLocale() {
		return locale;
	}

	public void setLocale(String locale) {
		this.locale = locale;
	}

	public Messages[] getMessages() {
		return messages;
	}

	public void setMessages(Messages[] messages) {
		this.messages = messages;
	}

	@Override
	public String toString() {
		return "ClassPojo [content = " + content + ", timezone = " + timezone + ", time = " + time + ", status = "
				+ status + ", locale = " + locale + ", messages = " + messages + "]";
	}
}