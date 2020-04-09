---
title: Controller Configuration
permalink: /controller-configuration
---

In this section we'll be configuring controller inputs for Cemu, and setting up motion controls.

This can vary between controllers, as some controllers _do_ support motion controls (e.g. Switch and PS4), however some don't (e.g. Xbox controllers).

If you have a generic controller, it may possibly simply emulate an Xbox controller. Try following the Xbox guide. If that doesn't work, try again but with the controller API set to `DirectInput` instead.

Please select your controller type below:

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">Nintendo Switch</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Dualshock 4</button>
<button class="btn btn--large btn--info" id="cbtn" onclick="showc()">Xbox</button>
<button class="btn btn--large btn--info" id="dbtn" onclick="showd()">Others</button>

{% capture a-instructions %}{% include_relative controllers-switch.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative controllers-ds4.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

{% capture c-instructions %}{% include_relative controllers-xbox.md %}{% endcapture %}
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

Your Cemu set-up should now be complete, but there's one thing we're missing here -- games.

The next section of the guide will take you through how to "dump" (copy) your games, updates, saves and more over from your Wii U to your PC.

If you already have your games sorted, work on optimization next.

**1.** Continue to [Dumping Games](dumping-games).
{: .notice--primary}

**2.** Continue to [Optimizing Cemu](optimizing-cemu).
{: .notice--info}
