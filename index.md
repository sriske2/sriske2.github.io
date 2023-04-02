---
layout: default
title: Skyler Riske
permalink: /
---


I'm a Junior Computer Science student at Arizona State University.

Find me on: 
<nav>
    {% for item in site.data.links %}
        <a href="{{ item.url }}">{{ item.name }}</a>
    {% endfor %}
</nav>