---
layout: compress
---

{% assign first = true %}
gambar = [
	{% assign banyak = site.gambar.size %}
	{% assign acak = site.gambar | sample: banyak %}
	{% for gambar in acak %}
		{% unless first %},{% endunless %}'{{ gambar }}'
	{% assign first = false %}
	{% endfor %}
];