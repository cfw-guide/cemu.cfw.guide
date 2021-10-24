---
title: Optimizing Cemu (OpenGL) (Intel)
description: Improving gameplay and performance in the Cemu emulator.
---

::: tip
Ensure you are running the [latest drivers](https://downloadcenter.intel.com/product/80939/Graphics-Drivers) and that your iGPU supports [OpenGL 4.5+](https://www.intel.com/content/www/us/en/support/articles/000005524/graphics-drivers.html).
:::

::: warning
OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.
:::

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar
1. Navigate to the `Graphics` tab
1. Set "VSync" to `On`
1. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`

## Shortcuts and Drivers

1. Ensure you are running in maximum performance mode.
1. If a game isn't working, consider creating a shortcut to Cemu and add `-legacy` to the target
    - This may cause other games to stop working
1. If it still doesn't work, update your iGPU driver.
1. If the issue still persists, it's likely that game won't work for your iGPU, or it is too old to run

---

Cemu should now be running the fastest it can on OpenGL.