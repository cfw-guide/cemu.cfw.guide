---
title: Optimizing (Intel)
---

This section makes sure you're running the fastest you can on an Intel iGPU. It's still not advised to run Cemu on integrated graphics as they are not officially supported, but you can still get some good results at times.

1. Ensure you are running in maximum performance mode.
1. If a game isn't working, consider creating a shortcut to Cemu and add `-legacy` to the target
  - This may cause other games to stop working
1. If it still doesn't work, update your iGPU driver.
1. If the issue still persists, it's likely that game won't work for your iGPU, or it is too old to run

## Cemu Settings

1. Open the Cemu application once more
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Set the "Graphics API" to `Vulkan`
  - If you experience graphical glitches or errors, switch to `OpenGL`
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
