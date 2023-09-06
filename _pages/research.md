---
title: "NetNeuroLab - Research"
layout: textlay
excerpt: "NetNeuroLab - Research"
sitemap: false
permalink: /research/
---

# Research


{% assign number_printed = 0 %}
{% for proj in site.data.projlist %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if proj.highlight == 1 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
 <div class="well">
  <pubtit class="text-center">{{ proj.title }}</pubtit>
  <img src="{{ site.url }}{{ site.baseurl }}/images/respic/{{ proj.image }}" class="img-responsive" width="100%" style="float: center" />
  <p>{{ proj.description }}</p>
 </div>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}

{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

<p> &nbsp; </p>
