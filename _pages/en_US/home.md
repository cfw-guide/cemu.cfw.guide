---
layout: splash
title: Cemu Guide
excerpt: "A complete guide to installing CEMU and optimizing performance."
permalink: /
header:  
  overlay_image: /assets/images/splash-image.png
  overlay_filter: 0.5
  overlay_color: "#1a1d24"
  cta_label: "Get Started"
  cta_url: "#get-started"
---

For complete guides to homebrew and custom firmware for other devices, check out [CFW.Guide](https://cfw.guide).
{: .notice--primary}

If you appreciate these guides, consider [donating](/donations) to support the guide.
{: .notice--textbox}

<div class="wrap-collabsible notice--danger">
  <input id="collapsible" class="toggle" type="checkbox">
  <label for="collapsible" class="lbl-toggle">Cemu can only run on 64-bit Windows systems.</label>
  <div class="collapsible-content">
    <div class="content-inner">
      <li>If you have a 32-bit Windows system, this will not work.</li>
      <li>Some users have managed to get Cemu running using <a href="https://www.winehq.org">Wine</a>, however your mileage may vary.</li>
    </div>
  </div>
</div>

Thoroughly read all of the introductory pages (including this one!) before proceeding.
{: .notice--info}

## What is Cemu?

Cemu is experimental software used to emulate Wii U applications on your PC. This means that if you will be able to run commercial Wii U games directly off of your system.

The majority of games are completely playable from start to finish. You can check to see if your game is playable on the [wiki](https://wiki.cemu.info/wiki/Category:List_of_games).

## How well can I run games?

It depends. A lot of people will be able to run most games at full speed, however you must take hardware requirements into account. While the Wii U is not a particularly demanding console, emulation requires a machine with much greater hardware than the original machine. Check below to see if your PC can cut it.

### CPU
---

{% capture cpu-notice %}

A good processor will definitely help speed things up. While modern video-games can be less dependent, emulation can rely quite heavily on CPU performance. We recommend an Intel or an AMD Ryzen chip.

Non-Ryzen AMD chips are not recommended as they lack in single-core processing speed. These processors will struggle running demanding games on Cemu.
{% endcapture %}

<div class="notice--textbox">{{ cpu-notice | markdownify }}</div>

### RAM
---

{% capture ram-notice %}

The official [Cemu website](https://cemu.info/) states that it can run with a minimum of 4GB of RAM, with 8GB or more recommended, however most users will struggle immensely with 4GB, and will suffer extreme stuttering and other issues.

Using 8GB can be fine, and you will be able to run most games well, however for maximum performance and compatibility we recommend 12GB or more.
{% endcapture %}

<div class="notice--textbox">{{ ram-notice | markdownify }}</div>

### GPU
---

{% capture gpu-notice %}

NVIDIA GPUs are mainly recommended, being able to take some load off of the CPU. Our second choice would be an AMD GPU, but they can be very reliant on the performance of your CPU.

For running any game in general, the minimum recommendation is an NVIDIA GTX 600 card or AMD HD 7000 Series card. For better results, we recommend a GPU that's more powerful. If you want increased FPS or resolution, consider looking at more expensive options. Ideally you should not build your PC just for a singular emulator, so keep this in mind.

If you're running on a thinner laptop or other low-powered machine, you may be using an iGPU/APU instead. These integrated graphic cards are currently not supported very well on Cemu. While [some users](http://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild#Testing) have reported playable framerates using integrated graphics in games such as Breath of the Wild, we highly stress that playing on a more powerful machine will yield much better results.
{% endcapture %}

<div class="notice--textbox">{{ gpu-notice | markdownify }}</div>

A lot of users will want to play games at higher resolutions, with better framerates and other enhancements. To do this, you will require better hardware than the guidelines listed above.

Now that you're aware of the requirements, you may proceed with downloading and setting up the emulator.

Continue to [Installing Cemu](installing-cemu).
{: .notice--info}

<a id="get-started"/>
