---
title: Optimizing Breath of the Wild
description: Improving gameplay and performance of Breath of the Wild in the Cemu emulator.
---

Breath of the Wild is a particularly demanding game for a lot of systems, so people have created modifications to help you get the best performance possible in the game.

![A screenshot of Breath of the Wild](/assets/images/reshade.png)

This game is much more demanding on your graphics card than other Wii U titles. We recommend a more powerful GPU than the ones recommended on the home page, especially if you are interested in playing at higher resolutions and framerates.

<!--Like the previous guide, some of these instructions are GPU specific, so make sure you know what type of GPU you have before proceeding. You'll also need to make note of what rendering API you're using, either OpenGL or Vulkan.-->

<!--If you don't know what type of GPU you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. It should say either Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

![](/assets/images/get_gpu.png)-->

## Installing Graphic Packs

::: tip
If you're not sure what a Graphic Pack does, please click on it and read the description before using it.
:::

1. Open the Cemu application
1. Right click on `The Legend of Zelda - Breath of the Wild`
1. Click `Edit graphics packs`
1. On the bottom-right of the window, use the `Download latest community graphic packs` button

## Increasing FPS

1. Once the download has finished, navigate to the `Mods` category
1. Select and enable the `FPS++` checkbox

By default, this is set to 60FPS. This increases the smoothness of gameplay, however it can cause [some issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild#Issues_arising_by_using_FPS.2B.2B_or_static_FPS.2B.2B). When these occur, simply set the limit to `30` until you've gotten beyond the point where the issue occurs.

## Graphics and Enhancements

1. Minimize the mods category
1. Select and enable the `Graphics` checkbox
1. You should see a menu on the right half of the window, where you can edit graphical settings

::: details Aspect Ratio

Breath of the Wild runs on a 16:9 aspect ratio on the Wii U. If you have a monitor that isn’t 16:9, you may change the aspect ratio to match it in Cemu.

:::

::: details Resolution

If you have a more powerful GPU, you may be able to change the resolution to a higher value, e.g. 1080p, 1440p (2K) or 2160p (4K).

For higher resolutions, consider using the Vulkan rendering API for increased performance. For lower resolution monitors, you can also set your resolution to a higher value for a higher quality anti-aliasing effect, however this is very computationally expensive.

Run the game with different resolutions to see which works best for you.

:::

::: details Anti-Aliasing

BOTW has anti-aliasing enabled by default. If you would like to use NVIDIA's implementation, or disable it entirely, you can switch to that here. We recommend leaving this at the default setting.

:::

::: details Shadows

This setting changes the resolution of the shadows. Increasing it makes shadows sharper and more accurate, while decreasing it can gain performance while sacrificing quality.

Setting this to 400% may cause some instabilities so we recommend a maximum of 300%.

:::

::: details Shadow Draw Distance

This setting changes the draw distance of the shadows. Increasing it makes shadows render further away, but can make shadows blurrier.

We recommend setting to "Very High" to increase draw distance without sacrificing too much shadow detail.

:::

---

Once understanding what each setting does, we recommend you configure your own options. These settings should work for most people as a base however.
