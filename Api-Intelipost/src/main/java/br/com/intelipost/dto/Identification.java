package br.com.intelipost.dto;

public class Identification {

	private String session;

	private String pageName;

	private String url;

	private String ip;

	public String getSession() {
		return session;
	}

	public void setSession(String session) {
		this.session = session;
	}

	public String getPage_name() {
		return pageName;
	}

	public void setPage_name(String page_name) {
		this.pageName = page_name;
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
		return "ClassPojo [session = " + session + ", page_name = " + pageName + ", url = " + url + ", ip = " + ip
				+ "]";
	}
}