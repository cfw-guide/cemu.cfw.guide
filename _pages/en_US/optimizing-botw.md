---
title: Optimizing Breath of the Wild
permalink: /optimizing-botw
excerpt: Improving gameplay and performance of Breath of the Wild in the Cemu emulator.
---

{% include toc title="Table of Contents" %}

Breath of the Wild is a particularly demanding game for a lot of systems, so people have created modifications to help you get the best performance possible in the game.

![]({{ "/assets/images/reshade.png" | absolute_url }})
{: .notice}

This game is much more demanding on your GPU than other Wii U titles. We recommend a more powerful GPU than the ones recommended on the home page, especially if you are interested in playing at higher resolutions and framerates.
{: .notice--info}

Like the previous guide, some of these instructions are GPU specific, so make sure you know what type of GPU you have before proceeding. You'll also need to make note of what rendering API you're using, either OpenGL or Vulkan.

Make sure you have followed our [Optimizing Cemu](optimizing-cemu) guide before proceeding.
{: .notice--textbox}

If you don't know what type of GPU you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. It should say either Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

![]({{ "/assets/images/get_gpu.png" | absolute_url }})
{: .notice--info}

## Graphic Packs

Please make sure to the read the descriptions and presets for each graphic pack that you consider using.
{: .notice--danger}

1. Open the Cemu application
1. Right click on `The Legend of Zelda - Breath of the Wild`
1. Click `Edit graphics packs`
1. On the bottom-right of the window, use the `Download latest community graphic packs` button
1. Once the download has finished, select and enable the `Graphics` checkbox
1. You should see a menu on the right half of the window, where you can edit graphical settings
- <div class="wrap-collabsible-1">
      <input id="collapsible-1" class="toggle-1" type="checkbox">
      <label for="collapsible-1" class="lbl-toggle-1"><a>Aspect Ratio</a></label>
      <div class="collapsible-content-1">
        <div class="content-inner notice--info">
          <div style="padding:.5em;">
            <p>Breath of the Wild runs on a 16:9 aspect ratio on the Wii U. If you have a monitor that isn't 16:9, you may change the aspect ratio to match it in Cemu. Please be aware that UI elements will stretch on wide screens and cannot be fixed at this time.</p>          
          </div>
        </div>
      </div>
- <div class="wrap-collabsible-2">
      <input id="collapsible-2" class="toggle-2" type="checkbox">
      <label for="collapsible-2" class="lbl-toggle-2"><a>Resolution</a></label>
      <div class="collapsible-content-2">
        <div class="content-inner notice--info">
        <div style="padding:.5em;">
          <p>If you have a more powerful GPU, you may be able to change the resolution to a higher value, e.g. 1080p or 1440p.</p>
          <p>Run the game with different resolutions to see which works best for you.</p>          
        </div>
      </div>
        <div class="content-inner notice--textbox">
        <div style="padding:.5em;">
          <p>For higher resolutions, consider using the Vulkan rendering API for increased performance.</p>          
        </div>
      </div>
- <div class="wrap-collabsible-3">
      <input id="collapsible-3" class="toggle-3" type="checkbox">
      <label for="collapsible-3" class="lbl-toggle-3"><a>Anti-Aliasing</a></label>
      <div class="collapsible-content-3">
        <div class="content-inner notice--info">
        <div style="padding:.5em;">
          <p>BOTW has anti-aliasing enabled by default. If you would like to use NVIDIA's implementation, or disable it entirely, you can switch to that here.</p>
        </div>
      </div>
- <div class="wrap-collabsible-4">
      <input id="collapsible-4" class="toggle-4" type="checkbox">
      <label for="collapsible-4" class="lbl-toggle-4"><a>Shadows</a></label>
      <div class="collapsible-content-4">
        <div class="content-inner notice--info">
        <div style="padding:.5em;">
          <p>This setting increases the resolution of the shadows. You can increase it up to 400% to make it sharper, or down to 50% to save performance.</p>
        </div>
      </div>
        <div class="content-inner notice--danger">
        <div style="padding:.5em;">
          <p>Setting this to 400% can cause some instabilities so we recommend a maximum of 300%.</p>
        </div>
      </div>

1. Navigate to the `Mods` category
1. Select and enable the `FPS++` checkbox

    By default, this is set to 60FPS. This increases the smoothness of gameplay, however it can cause some issues [(click here)](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild#Issues_arising_by_using_FPS.2B.2B_or_static_FPS.2B.2B). When these occur, simply set `Temporary 30FPS Limit` to `Enabled` until you've gotten beyond that point.
    {: .notice--info}
    
    If you use a framerate above 72 FPS, set `Mode` to `Advanced Settings` and set `Menu Cursor Fix (Experimental)` to `Enabled At 72FPS And Higher (Recommended)`, otherwise it will become difficult to use your cursor in any menus.
    {: .notice--info}

---

Once understanding what each setting does, we recommend you configure your own options. These settings should work for most people as a base however.

**If you're not sure what a Graphic Pack does, please click on it and read the description before using it!**
