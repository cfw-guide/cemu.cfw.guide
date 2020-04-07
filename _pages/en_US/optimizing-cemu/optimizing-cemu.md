---
title: Optimizing Cemu
permalink: /optimizing-cemu
---

In this section, we make sure that Cemu is running as fast as possible. This involves changing some options in Cemu and your GPU settings to make sure we're getting the best performance.

To continue, we need to know what GPU your system is using. If you don't know what type of graphics processor you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. It should say either Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

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
{: .notice--textbox}

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
  nvidiabtn.classList.add("btn--success");

  function shownvidia() {
    nvidia.style.display = "block";
    amd.style.display = "none";
    intel.style.display = "none";

    nvidiabtn.classList.remove("btn--info");
    amdbtn.classList.remove("btn--danger");
    amdbtn.classList.add("btn--info");
    intelbtn.classList.remove("btn--primary");
    intelbtn.classList.add("btn--info");
    nvidiabtn.classList.add("btn--success");
  }

  function showamd() {
    nvidia.style.display = "none";
    amd.style.display = "block";
    intel.style.display = "none";

    amdbtn.classList.remove("btn--info");
    nvidiabtn.classList.remove("btn--success");
    nvidiabtn.classList.add("btn--info");
    intelbtn.classList.remove("btn--primary");
    intelbtn.classList.add("btn--info");
    amdbtn.classList.add("btn--danger");
  }

  function showintel() {
    nvidia.style.display = "none";
    amd.style.display = "none";
    intel.style.display = "block";

    intelbtn.classList.remove("btn--info");
    nvidiabtn.classList.remove("btn--success");
    nvidiabtn.classList.add("btn--info");
    amdbtn.classList.remove("btn--danger");
    amdbtn.classList.add("btn--info");
    intelbtn.classList.add("btn--primary");
  }
</script>
