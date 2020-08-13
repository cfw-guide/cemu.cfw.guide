---
title: Motion Controls
permalink: /motion-controls
excerpt: Setting up motion controls for different controllers in the Cemu emulator.
---

In this section we'll be configuring controller inputs and motion controls for Cemu.

Only a select few controllers properly support motion controls. We recommend using either official Nintendo Switch controllers or a Dual Shock 4 controller.

If you have an Xbox controller, this will not work as they don't have the hardware to support motion controls. For other controllers, please check the "Others" tab to see compatibility.

Please select your controller type below:

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">Nintendo Switch</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Dualshock 4</button>
<button class="btn btn--large btn--info" id="cbtn" onclick="showc()">Xbox</button>
<button class="btn btn--large btn--info" id="dbtn" onclick="showd()">Others</button>

{% capture a-instructions %}{% include_relative controllers-switch.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative controllers-ds4.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

{% capture c-instructions %}{% include_relative controllers-xbox-motion.md %}{% endcapture %}
<div id="cinstr">{{ c-instructions | markdownify }}</div>

{% capture d-instructions %}{% include_relative controllers-others.md %}{% endcapture %}
<div id="dinstr">{{ d-instructions | markdownify }}</div>

---

<script>
  var a = document.getElementById("ainstr");
  var abtn = document.getElementById("abtn");
  var aclr = "btn--danger"

  var b = document.getElementById("binstr");
  var bbtn = document.getElementById("bbtn");
  var bclr = "btn--facebook"

  var c = document.getElementById("cinstr");
  var cbtn = document.getElementById("cbtn");
  var cclr = "btn--success"

  var d = document.getElementById("dinstr");
  var dbtn = document.getElementById("dbtn");
  var dclr = "btn--primary"

  var clr = "btn--info"

  a.style.display = "block";
  b.style.display = "none";
  c.style.display = "none";
  d.style.display = "none";

  abtn.classList.remove("btn--info");
  abtn.classList.add(aclr);

  function showa() {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";

    abtn.classList.remove(clr);
    bbtn.classList.add(clr);
    cbtn.classList.add(clr);
    dbtn.classList.add(clr);

    abtn.classList.add(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.remove(cclr);
    dbtn.classList.remove(dclr);
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";
    c.style.display = "none";
    d.style.display = "none";

    abtn.classList.add(clr);
    bbtn.classList.remove(clr);
    cbtn.classList.add(clr);
    dbtn.classList.add(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.add(bclr);
    cbtn.classList.remove(cclr);
    dbtn.classList.remove(dclr);
  }

  function showc() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "block";
    d.style.display = "none";

    abtn.classList.add(clr);
    bbtn.classList.add(clr);
    cbtn.classList.remove(clr);
    dbtn.classList.add(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.add(cclr);
    dbtn.classList.remove(dclr);
  }

  function showd() {
    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "block";

    abtn.classList.add(clr);
    bbtn.classList.add(clr);
    cbtn.classList.add(clr);
    dbtn.classList.remove(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.remove(bclr);
    cbtn.classList.remove(cclr);
    dbtn.classList.add(dclr);
  }
</script>
