---
title: Dumping Games
permalink: /dumping-games
---

In this section, we look at how to "dump" (copy) your games from your Wii U system over to your PC.

You will need to have a homebrewed Wii U for this, as system access is required to retrieve game files. You can do this quite easily if you follow the instructions in [wiiu.hacks.guide](https://wiiu.hacks.guide/). Once you've completed this, come back to this page and continue

---

This process is different for physical and digital games, so select the method that applies to you.

<button class="btn btn--large btn--info" id="abtn" onclick="showa()">Physical</button>
<button class="btn btn--large btn--info" id="bbtn" onclick="showb()">Digital</button>

{% capture a-capture %}{% include_relative dumping-physical-games.md %}{% endcapture %}
<div id="a">{{ a-capture | markdownify }}</div>

{% capture b-capture %}{% include_relative dumping-digital-games.md %}{% endcapture %}
<div id="b">{{ b-capture | markdownify }}</div>

## Notes

You should now be able to run your game in Cemu. We now recommend that you dump any updates or DLC to install to Cemu as well. Some games, such as Breath of the Wild, require an update to actually boot the game.

If your game doesn't have any updates available, or you simply don't need to install them, you can continue to transferring your save data across to Cemu.

If you don't want updates _or_ save data, you can continue onto optimizing, to ensure that the game runs as best it can.

**1.** Continue to [Dumping Updates and DLC](dumping-updates-and-dlc)
{: .notice--success}

**2.** Continue to [Transferring Save Data](transferring-save-data)
{: .notice--primary}

**3.** Continue to [Optimizing Cemu](optimizing-cemu)
{: .notice--info}

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
