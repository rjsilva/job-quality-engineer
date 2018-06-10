package br.com.intelipost.model;

public class Identification {

	private String session;

	private String page_name;

	private String url;

	private String ip;

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}

	public String getPage_name() {
		return page_name;
	}

	public void setPage_name(String page_name) {
		this.page_name = page_name;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getIp() {
		return ip;
	}

	public void setIp(String ip) {
		this.ip = ip;
	}

	@Override
	public String toString() {
		return "ClassPojo [session = " + session + ", page_name = " + page_name + ", url = " + url + ", ip = " + ip
				+ "]";
	}

}