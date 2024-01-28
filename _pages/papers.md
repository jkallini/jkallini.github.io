---
layout: page
permalink: /papers/
title: Papers
description: My publications and preprints, sorted in reverse chronological order.
years: [2024, 2023, 2022, 2021]
nav: true
nav_order: 4
---
<!-- _pages/papers.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>
