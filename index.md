---
layout: default
permalink: /
---


I'm a senior computer science student at Arizona State University.

Find me on: 
<nav>
    {% for item in site.data.links %}
        <a href="{{ item.url }}">{{ item.name }}</a>
    {% endfor %}
</nav>
