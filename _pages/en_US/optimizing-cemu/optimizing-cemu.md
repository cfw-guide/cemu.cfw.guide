---
title: Optimizing Cemu
permalink: /optimizing-cemu
redirect_from:
  - /using-async
excerpt: Improving gameplay and performance in the Cemu emulator.
toc: true
toc_sticky: true
sidebar:
  nav: guide
---

In this section, we make sure that Cemu is running as fast as possible. This involves changing some options in Cemu and your GPU settings to make sure we're getting the best performance.

To continue, we need to know what GPU your system is using. If you don't know what type of graphics processor you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. This should start with Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

![]({{ "/assets/images/get_gpu.png" | absolute_url }})
{: .notice--info}

Please select your GPU brand below:

<button class="btn btn--large btn--info" id="nvidiabtn" onclick="shownvidia()">NVIDIA</button>
<button class="btn btn--large btn--info" id="amdbtn"    onclick="showamd()"   >AMD</button>
<button class="btn btn--large btn--info" id="intelbtn"  onclick="showintel()" >Intel</button>

{% capture nvidia-instructions %}{% include_relative optimizing-cemu-nvidia.md %}{% endcapture %}
<div id="nvidiainstr">{{ nvidia-instructions | markdownify }}</div>

{% capture amd-instructions %}{% include_relative optimizing-cemu-amd.md %}{% endcapture %}
<div id="amdinstr">{{ amd-instructions | markdownify }}</div>

{% capture intel-instructions %}{% include_relative optimizing-cemu-intel.md %}{% endcapture %}
<div id="intelinstr">{{ intel-instructions | markdownify }}</div>

---

Cemu should now be running the fastest it can, with a huge increase in performance for some users. There are even more ways to improve framerates in Breath of the Wild. Follow our optimization guide for more info.

Continue to [Optimizing Breath of the Wild](optimizing-botw) (Optional)
{: .notice--info}

<script>
  var nvidia = document.getElementById("nvidiainstr");
  var nvidiabtn = document.getElementById("nvidiabtn");

  var amd = document.getElementById("amdinstr");
  var amdbtn = document.getElementById("amdbtn");

  var intel = document.getElementById("intelinstr");
  var intelbtn = document.getElementById("intelbtn");

  nvidia.style.display = "block";
  amd.style.display = "none";
  intel.style.display = "none";
  nvidiabtn.classList.remove("btn--info");
  nvidiabtn.classList.add("btn--nvidia");

  var toc0 = document.getElementById("toc0");
  var toc1 = document.getElementById("toc1");
  var toc2 = document.getElementById("toc2");
  var toc3 = document.getElementById("toc3");
  var toc4 = document.getElementById("toc4");
  var toc5 = document.getElementById("toc5");
  var toc6 = document.getElementById("toc6");
  var toc7 = document.getElementById("toc7");
  var toc8 = document.getElementById("toc8");
  var toc9 = document.getElementById("toc9");
  var toc10 = document.getElementById("toc10");

  toc0.style.display = "block";
  toc1.style.display = "block";
  toc2.style.display = "block";
  toc3.style.display = "block";
  toc4.style.display = "block";
  toc5.style.display = "none";
  toc6.style.display = "none";
  toc7.style.display = "none";
  toc8.style.display = "none";
  toc9.style.display = "none";
  toc10.style.display = "none";
  toc11.style.display = "none";
  toc12.style.display = "none";

  function shownvidia() {
    nvidia.style.display = "block";
    amd.style.display = "none";
    intel.style.display = "none";

    nvidiabtn.classList.remove("btn--info");
    amdbtn.classList.remove("btn--danger");
    amdbtn.classList.add("btn--info");
    intelbtn.classList.remove("btn--intel");
    intelbtn.classList.add("btn--info");
    nvidiabtn.classList.add("btn--nvidia");

	toc0.style.display = "block";
	toc1.style.display = "block";
	toc2.style.display = "block";
	toc3.style.display = "block";
	toc4.style.display = "block";
	toc5.style.display = "none";
	toc6.style.display = "none";
	toc7.style.display = "none";
	toc8.style.display = "none";
	toc9.style.display = "none";
	toc10.style.display = "none"
	toc11.style.display = "none";
	toc12.style.display = "none";
  }

  function showamd() {
    nvidia.style.display = "none";
    amd.style.display = "block";
    intel.style.display = "none";

    amdbtn.classList.remove("btn--info");
    nvidiabtn.classList.remove("btn--nvidia");
    nvidiabtn.classList.add("btn--info");
    intelbtn.classList.remove("btn--intel");
    intelbtn.classList.add("btn--info");
    amdbtn.classList.add("btn--danger");

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "none";
    toc4.style.display = "none";
	toc5.style.display = "block";
	toc6.style.display = "block";
	toc7.style.display = "block";
	toc8.style.display = "none";
	toc9.style.display = "none";
	toc10.style.display = "none"
	toc11.style.display = "none";
	toc12.style.display = "none";
  }

  function showintel() {
    nvidia.style.display = "none";
    amd.style.display = "none";
    intel.style.display = "block";

    intelbtn.classList.remove("btn--info");
    nvidiabtn.classList.remove("btn--nvidia");
    nvidiabtn.classList.add("btn--info");
    amdbtn.classList.remove("btn--danger");
    amdbtn.classList.add("btn--info");
    intelbtn.classList.add("btn--intel");

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "none";
    toc4.style.display = "none";
	toc5.style.display = "none";
	toc6.style.display = "none";
	toc7.style.display = "none"
	toc8.style.display = "block";
	toc9.style.display = "block";
	toc10.style.display = "block";
	toc11.style.display = "block";
	toc12.style.display = "block";
  }
</script>
