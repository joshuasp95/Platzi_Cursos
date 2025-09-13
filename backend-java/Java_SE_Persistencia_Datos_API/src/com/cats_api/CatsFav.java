package com.cats_api;

public class CatsFav {
	private String id;
	private String image_id;
	private String apiKey = Cats.I_API_KEY;
	private ImageX image;

	public String getId() {
		return id;
	}

	public String getImage_id() {
		return image_id;
	}

	public String getApiKey() {
		return apiKey;
	}

	public ImageX getImage() {
		return image;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setImage_id(String image_id) {
		this.image_id = image_id;
	}

	public void setApiKey(String apiKey) {
		this.apiKey = apiKey;
	}

	public void setImage(ImageX image) {
		this.image = image;
	}

}
