---
title: Optimizing Breath of the Wild
permalink: /optimizing-botw
excerpt: Improving gameplay and performance of Breath of the Wild in the Cemu emulator.
toc: true
toc_sticky: true
sidebar:
  nav: guide
---

Breath of the Wild is a particularly demanding game for a lot of systems, so people have created modifications to help you get the best performance possible in the game.

![]({{ "/assets/images/reshade.png" | absolute_url }})

This game is much more demanding on your graphics card than other Wii U titles. We recommend a more powerful GPU than the ones recommended on the home page, especially if you are interested in playing at higher resolutions and framerates.

<!--Like the previous guide, some of these instructions are GPU specific, so make sure you know what type of GPU you have before proceeding. You'll also need to make note of what rendering API you're using, either OpenGL or Vulkan.-->

Make sure you have followed our [Optimizing Cemu](optimizing-cemu) guide before proceeding.
{: .notice--textbox}

<!--If you don't know what type of GPU you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. It should say either Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

![]({{ "/assets/images/get_gpu.png" | absolute_url }})
{: .notice--info}-->

## Installing Graphic Packs

If you're not sure what a Graphic Pack does, please click on it and read the description before using it.
{: .notice--danger}

{% capture aspect-ratio-description-1 %}

Breath of the Wild runs on a 16:9 aspect ratio on the Wii U. If you have a monitor that isn't 16:9, you may change the aspect ratio to match it in Cemu.
{% endcapture %}

{% capture aspect-ratio-description-2 %}

Please be aware that while the game will render correctly at different aspect ratios, the UI elements will become stretched. This can be fixed by using [mods](https://gamebanana.com/gamefiles/10266) for supported aspect ratios.
{% endcapture %}

{% capture resolution-description-1 %}

If you have a more powerful GPU, you may be able to change the resolution to a higher value, e.g. 1080p, 1440p (2K) or 2160p (4K).
{% endcapture %}

{% capture resolution-description-2 %}

For higher resolutions, consider using the Vulkan rendering API for increased performance. For lower resolution monitors, you can also set your resolution to a higher value for a higher quality anti-aliasing effect, however this is very computationally expensive.
{% endcapture %}

{% capture resolution-description-3 %}

Run the game with different resolutions to see which works best for you.
{% endcapture %}

{% capture anti-aliasing-description %}

BOTW has anti-aliasing enabled by default. If you would like to use NVIDIA's implementation, or disable it entirely, you can switch to that here. We recommend leaving this at the default setting.
{% endcapture %}

{% capture shadows-description-1 %}

This setting changes the resolution of the shadows. Increasing it makes shadows sharper and more accurate, while decreasing it can gain performance while sacrificing quality.
{% endcapture %}

{% capture shadows-description-2 %}

Setting this to 400% may cause some instabilities so we recommend a maximum of 300%.
{% endcapture %}

{% capture aspect-ratio-html %}

<div class="wrap-collabsible-1" style="padding-bottom: .2em;">
    <input id="collapsible-1" class="toggle-1" type="checkbox">
    <label for="collapsible-1" class="lbl-toggle-1"><a>Aspect Ratio</a></label>
    <div class="collapsible-content-1">
        <div class="content-inner notice--info">
            <div style="padding:.5em;">{{ aspect-ratio-description-1 || markdownify }}</div>
        </div>
        <div class="content-inner notice--warning">
            <div style="padding:.5em;">{{ aspect-ratio-description-2 || markdownify }}</div>
        </div>
    </div>
</div>
{% endcapture %}

{% capture resolution-html %}

<div class="wrap-collabsible-2" style="padding-bottom: .2em;">
    <input id="collapsible-2" class="toggle-2" type="checkbox">
    <label for="collapsible-2" class="lbl-toggle-2"><a>Resolution</a></label>
    <div class="collapsible-content-2">
        <div class="content-inner notice--info">
            <div style="padding:.5em;">{{ resolution-description-1 || markdownify }}</div>
        </div>
        <div class="content-inner notice--textbox">
            <div style="padding:.5em;">{{ resolution-description-2 || markdownify }}</div>
        </div>
        <div class="content-inner notice--primary">
            <div style="padding:.5em;">{{ resolution-description-3 || markdownify }}</div>
        </div>
    </div>
</div>
{% endcapture %}

{% capture anti-aliasing-html %}

<div class="wrap-collabsible-3" style="padding-bottom: .2em;">
    <input id="collapsible-3" class="toggle-3" type="checkbox">
    <label for="collapsible-3" class="lbl-toggle-3"><a>Anti-Aliasing</a></label>
    <div class="collapsible-content-3">
        <div class="content-inner notice--info">
            <div style="padding:.5em;">{{ anti-aliasing-description || markdownify }}</div>
        </div>
    </div>
</div>
{% endcapture %}

{% capture shadows-html %}

<div class="wrap-collabsible-4" style="padding-bottom: .2em;">
    <input id="collapsible-4" class="toggle-4" type="checkbox">
    <label for="collapsible-4" class="lbl-toggle-4"><a>Shadows</a></label>
    <div class="collapsible-content-4">
        <div class="content-inner notice--info">
            <div style="padding:.5em;">{{ shadows-description-1 || markdownify }}</div>
        </div>
        <div class="content-inner notice--warning">
            <div style="padding:.5em;">{{ shadows-description-2 || markdownify }}</div>
        </div>
    </div>
</div>
{% endcapture %}

{% capture graphical-settings %}
<div style="text-indent: 1em;">
    {{ aspect-ratio-html }}
    {{ resolution-html }}
    {{ anti-aliasing-html }}
    {{ shadows-html }}
</div>
{% endcapture %}

1. Open the Cemu application
1. Right click on `The Legend of Zelda - Breath of the Wild`
1. Click `Edit graphics packs`
1. On the bottom-right of the window, use the `Download latest community graphic packs` button

## Increasing FPS

1. Once the download has finished, navigate to the `Mods` category
1. Select and enable the `FPS++` checkbox

    By default, this is set to 60FPS. This increases the smoothness of gameplay, however it can cause some issues [(click here)](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild#Issues_arising_by_using_FPS.2B.2B_or_static_FPS.2B.2B). When these occur, simply set `Temporary 30FPS Limit` to `Enabled` until you've gotten beyond that point.
    {: .notice--info}

    If you use a framerate above 72 FPS, set `Mode` to `Advanced Settings` and `Menu Cursor Fix (Experimental)` to `Enabled At 72FPS And Higher (Recommended)` otherwise it will become difficult to use your cursor in any menus.
    {: .notice--warning}

## Graphics and Enhancements

1. Minimize the mods category
1. Select and enable the `Graphics` checkbox
1. You should see a menu on the right half of the window, where you can edit graphical settings

{{ graphical-settings }}

---

Once understanding what each setting does, we recommend you configure your own options. These settings should work for most people as a base however.
