---
title: Dumping Games (FTP and disc2app)
permalink: /dumping-games-(ftp-and-disc2app)
redirect_from:
  - /dumping-games-old
  - /dumping-games-(ftp)
---

In this section, we look at how to "dump" (copy) your games from your Wii U system over to your PC.

To do this, we're going to need to use a custom homebrew application to dump your games. This is done using an exploit in the Wii U browser.

---

This process is different for physical and digital games, so select the method that applies to you.

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">Physical</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Digital</button>

{% capture a-capture %}{% include_relative dumping-physical-games.md %}{% endcapture %}
<div id="a">{{ a-capture | markdownify }}</div>

{% capture b-capture %}{% include_relative dumping-digital-games.md %}{% endcapture %}
<div id="b">{{ b-capture | markdownify }}</div>

Continue to [Dumping Updates and DLC (FTP)](dumping-updates-and-dlc-(ftp))
{:.notice--info}

<script>
  var a = document.getElementById("a");
  var abtn = document.getElementById("abtn");

  var b = document.getElementById("b");
  var bbtn = document.getElementById("bbtn");

  a.style.display = "block";
  b.style.display = "none";
  abtn.classList.remove("btn--info");
  abtn.classList.add("btn--primary");

  function showa() {
    a.style.display = "block";
    b.style.display = "none";

    abtn.classList.remove("btn--info");
    bbtn.classList.remove("btn--primary");
    abtn.classList.add("btn--primary");
    bbtn.classList.add("btn--info");
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";

    abtn.classList.remove("btn--primary");
    bbtn.classList.remove("btn--info");
    abtn.classList.add("btn--info");
    bbtn.classList.add("btn--primary");
  }
</script>
