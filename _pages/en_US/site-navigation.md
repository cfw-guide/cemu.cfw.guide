---
title: "Site Navigation" #
layout: single-no-ads
sitemap: false
permalink: /site-navigation
---

{% capture notice-1 %}
**Popular**

+ [Installing cemu](installing-cemu)

{% endcapture %}
<div class="notice--info">{{ notice-1 | markdownify }}</div>

{% capture notice-2 %}
**All**

+ [Credits](credits)
+ [FAQ](faq)
+ [Home](/)
+ [Installing cemu](installing-cemu)
+ [Optimizing (AMD)](optimizing-amd)
+ [Optimizing (Intel)](optimizing-igpu)
+ [Optimizing (NVIDIA)](optimizing-nvidia)
+ [Site Navigation](site-navigation)
+ [Troubleshooting](troubleshooting)

{% endcapture %}
<div class="notice">{{ notice-2 | markdownify }}</div>
