---
title: Optimizing Breath of the Wild
permalink: /optimizing-botw
excerpt: Improving gameplay and performance of Breath of the Wild in the Cemu emulator.
---

<!--{% include toc title="Table of Contents" %}-->

Breath of the Wild is a particularly demanding game for a lot of systems, so people have created modifications to help you get the best performance possible in the game.

![]({{ "/assets/images/reshade.png" | absolute_url }})
{: .notice}

This game is much more demanding on your GPU than other Wii U titles. We recommend a more powerful GPU than the ones recommended on the home page, especially if you are interested in playing at higher resolutions and framerates.
{: .notice--info}

Like the previous guide, some of these instructions are GPU specific, so make sure you know what type of GPU you have before proceeding. You'll also need to make note of what rendering API you're using, either OpenGL or Vulkan.

Make sure you have followed our [Optimizing Cemu](optimizing-cemu) guide before proceeding.
{: .notice--textbox}

Ensure that you are using [Multi-core Recompiling](/multicore-recompiling) for Breath of the Wild.
{: .notice--primary}

Follow our [Using Async](using-async) guide to reduce shader compilation stuttering
{: .notice--info}

If you don't know what type of GPU you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. It should say either Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

![]({{ "/assets/images/get_gpu.png" | absolute_url }})
{: .notice--info}

## Graphics Packs

Please make sure to the read the descriptions and presets for each graphic pack that you consider using.
{: .notice--danger}

1. Open the Cemu application
1. Right click on `The Legend of Zelda - Breath of the Wild`
1. Click `Edit graphics packs`
1. On the bottom-right of the window, use the `Download latest community graphic packs` button.
1. After your packs are downloaded or verified, navigate to the `Graphics` category
1. Enable the `Resolution` checkbox
  - If you have a more powerful GPU, you may be able to change the resolution to a higher value, e.g. 1920x1080
  - If you have a weaker GPU, you may want to leave this box unchecked or consider changing it to a lower value to increase performance

    For higher resolutions, consider using the Vulkan rendering API for increased performance.
    {:.notice--info}

1. Navigate to `Mods` -> `FPS++`
1. Enable all of the options in this subcategory

    Changing FPS to 60FPS can cause [some issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild#Issues_arising_by_using_FPS.2B.2B_or_static_FPS.2B.2B) during gameplay. When these occur, simply set `Limit FPS (Required)` to 30FPS temporarily until you're past that point in the game.
    {: .notice--info}

1. Open the `Workarounds` category

### OpenGL Instructions

1. Enable `Kakariko Torch Shadows (OpenGL)` and `LWZX Crash (OpenGL)`
  - Kakariko Torch Shadows resolves issues with square lighting around torches.
  - LWZX Crash prevents random crashes which can occur under specific circumstances.
1. Open the `GPU specific workarounds for OpenGL` subcategory
1. Enable all the options corresponding to your GPU (Intel, AMD or NVIDIA)
  - Do not enable packs that are not meant for your GPU.
  - This means do not enable Intel fixes if you are not using your Intel GPU for Cemu.

### Vulkan Instructions

1. Enable `Grass Swaying (Vulkan)`
  - If you're using a compatible Vulkan 1.2 driver for Nvidia, this is no longer required.
  - This is still required for AMD and Intel GPUs.
1. If using an Intel GPU, enable `Intel GPU Shadows (Vulkan)`
  - This may be resolved by Intel with future updates, feel free to test.

---

Once understanding what each setting does, we recommend you configure your own options. These settings should work for most people as a base however.
