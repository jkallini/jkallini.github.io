---
layout: page
permalink: /publications/
title: Publications
description: My publications, sorted in reversed chronological order.
years: [2022, 2021]
nav: true
nav_order: 4
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
