---
layout: compress
---

{% assign first = true %}
gambar = [
	{% assign banyak = site.gambar.size %}
	{% assign acak = site.gambar | sample: banyak %}
	{% for gambar in acak %}
		{% unless first %},{% endunless %}'https://scontent.fupg2-1.fna.fbcdn.net/v/t31.0-8/fr/cp0/e15/q65/27709909_355402628261729_3639387719857202251_o.jpg?efg=eyJpIjoiYiJ9&_nc_eui2=v1%3AAeFxNCpDAUdFdTsaBEpt-u-3GREgkggQcvLp5yhvCB2l3qg-hX8kX_wHS13ISirtv-FYNOqleYB8QHF6GjPDevFoDH2MPBJg1Z2WBqh0XYhyqhcWpRqs_0II5muTpGFmsVo&oh=c14337b62743fc6c932626e376496136&oe=5B1BA8C2'
	{% }
];