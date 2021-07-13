---
title: Controller Configuration
permalink: /controller-configuration-old
excerpt: Setting up different controller types for use in the Cemu emulator.
toc: true
toc_sticky: true
sidebar:
  nav: guide
---

In this section we'll be configuring controller inputs for Cemu, and setting up motion controls.

This can vary between controllers. Nintendo Switch, Dualshock 4 and DualSense controllers all have support for motion controls.

Other controllers, such as Xbox controllers, don't support motion controls and will need to use an alternate method.

Please select your controller type below:

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">Nintendo Switch / Playstation</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Xbox / Others</button>

{% capture a-instructions %}{% include_relative controllers-ds4windows.md %}{% endcapture %}
<div id="ainstr">{{ a-instructions | markdownify }}</div>

{% capture b-instructions %}{% include_relative controllers-others.md %}{% endcapture %}
<div id="binstr">{{ b-instructions | markdownify }}</div>

---

<script>
  var a = document.getElementById("ainstr");
  var abtn = document.getElementById("abtn");
  var aclr = "btn--primary"

  var b = document.getElementById("binstr");
  var bbtn = document.getElementById("bbtn");
  var bclr = "btn--primary"

  var toc0 = document.getElementById("toc0");
  var toc1 = document.getElementById("toc1");
  var toc2 = document.getElementById("toc2");
  var toc3 = document.getElementById("toc3");
  var toc4 = document.getElementById("toc4");
  var toc5 = document.getElementById("toc5");
  var toc6 = document.getElementById("toc6");
  var toc7 = document.getElementById("toc7");
  var toc8 = document.getElementById("toc8");

  var clr = "btn--info"

  a.style.display = "block";
  b.style.display = "none";

  abtn.classList.remove("btn--info");
  abtn.classList.add(aclr);

  toc4.style.display = "none";
  toc5.style.display = "none";
  toc6.style.display = "none";
  toc7.style.display = "none";
  toc8.style.display = "none";

  function showa() {
    a.style.display = "block";
    b.style.display = "none";

    toc0.style.display = "block";
    toc1.style.display = "block";
    toc2.style.display = "block";
    toc3.style.display = "block";
    toc4.style.display = "none";
    toc5.style.display = "none";
    toc6.style.display = "none";
    toc7.style.display = "none";
    toc8.style.display = "none";

    abtn.classList.remove(clr);
    bbtn.classList.add(clr);

    abtn.classList.add(aclr);
    bbtn.classList.remove(bclr);
  }

  function showb() {
    a.style.display = "none";
    b.style.display = "block";

    toc0.style.display = "none";
    toc1.style.display = "none";
    toc2.style.display = "none";
    toc3.style.display = "none";
    toc4.style.display = "block";
    toc5.style.display = "block";
    toc6.style.display = "block";
    toc7.style.display = "block";
    toc8.style.display = "block";

    abtn.classList.add(clr);
    bbtn.classList.remove(clr);

    abtn.classList.remove(aclr);
    bbtn.classList.add(bclr);
  }
</script>

Your Cemu set-up should now be complete, but there's one thing we're missing here -- games.

The next section of the guide will take you through how to "dump" (copy) your games, updates, saves and more over from your Wii U to your PC.

Continue to [Dumping Games](dumping-games).
{: .notice--info}
