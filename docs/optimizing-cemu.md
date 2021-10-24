---
title: Optimizing Cemu
description: Improving gameplay and performance in the Cemu emulator.
---

## Required Reading

For the best performance, we'll be switching the default graphics API from OpenGL to Vulkan. While less stable, Vulkan tends to run faster and has extra features in Cemu which OpenGL doesn't.

### Asynchronous Shader Compilation

When running games in Cemu, graphical shaders need to be re-compiled to work on a desktop GPU. This can take some time, which causes small stutters in the game every time a new one is sent to the emulator.

Doing this asynchronously allows the emulator to run the process in the background. This means that when the shader is first called, it skips being rendered to the screen, and is instead stored for the next time it's used, providing a much smoother experience.

The video below shows loading Breath of the Wild for the first time using asynchronous shader complation. After these shaders have been recompiled and cached, they won't need to be converted again, so the graphical glitches stop.

![A gif of asynchronous shader compilation](/assets/images/async.gif)

*Asynchronous shader compilation in an older, slower Cemu version. More recent builds can do this in under 1/10th of a second, depending on the CPU.*

### VSync Matching

Vulkan also allows us to use a new experimental VSync technique which allows Cemu to use the game's built-in frame-pacing instead. This avoids tearing and reduces input latency compared to previous methods.

::: details Ensure you are running the latest drivers and that your GPU supports Vulkan.
If your GPU doesn't support Vulkan, follow the [OpenGL Guide](/optimizing-cemu-(opengl)/).
:::

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar
1. Navigate to the `Graphics` tab
1. Change the "Graphics API" to `Vulkan` if it is not already
    - If this doesn't appear, or you have problems using Vulkan, read the [OpenGL Optimization Guide](/optimizing-cemu-(opengl)/)
1. Ensure that your "Graphics Device" is set to use your most powerful GPU if your device has dual graphics
1. Set "VSync" to `Match emulated display (Experimental)`
    - If you use a display with variable refresh rate (G-SYNC), set this to `Off` instead
    - This feature is experimental and may cause issues
1. Enable `Async shader compiler`
1. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`

---

Cemu should now be running the fastest it can, with a huge increase in performance for some users.
