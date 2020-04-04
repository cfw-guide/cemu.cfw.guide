---
title: Optimizing (AMD)
---

{% include toc title="Table of Contents" %}

This section makes sure you're running the fastest you can on an AMD GPU. This is optional, however if you are getting low performance in games, this could help.

## GPU Settings

1. Open Catalyst Control Center
  - You can access this by right clicking on your Desktop
1. Navigate to the `Gaming` tab
1. Manually add a program and navigate to your Cemu directory
1. Select your Cemu executable
1. Disable "Anti-Aliasing" for performance increase
1. Disable "Anisotrophic Filtering" (will cause texture issues)
1. Set "Texture Filtering Quality" to `Performance`
1. Enable "Surface Format Optimization" for the chance to benefit performance
1. Disable "Tessellation Mode" to reduce texture/graphical glitches
1. Enable "OpenGL Triple Buffering" to reduce screen tearing
1. Disable "Integer Scaling" to avoid getting a blurry image in Cemu

## Cemu Settings

1. Open the Cemu application once more
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. **Change the "Graphics API" to** `Vulkan`
  - This is very important and will increase performance by up to 50% on AMD GPUs
1. Ensure that the "Graphics Device" is correct and using your most powerful card in the case of devices with dual graphics
1. Enable "VSync" to double or triple buffering

    ---

7. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`
1. Set latency to `48ms`
  - If you notice crackling audio in games, increase the latency until it stops

## Game Settings

1. Go back to the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to `Triplecore-recompiler`
  - Switch to `Dualcore-recompiler` or `Singlecore-recompiler` if this stops a game from working
1. Set "Thread quantum" to `10000` cycles
