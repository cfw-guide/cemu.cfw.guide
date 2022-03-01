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

### Importing shader caches

Asynchronous shader compilation goes a long way to speed up running games for the first time, however we can also simply download the shaders needed to run each game from the internet. If another user has previously compiled the shaders, they can upload them for other users to import into Cemu.

If you're using OpenGL, you will only need to download the shader cache. If you're using Vulkan, you will need to download both the shader cache and pipeline cache. Shader caches work on each game regardless of its region, while pipeline caches are locked to the region of the game that they were generated on.

### VSync Matching

Vulkan also allows us to use a new experimental VSync technique which allows Cemu to use the game's built-in frame-pacing instead. This avoids tearing and reduces input latency compared to previous methods.

::: details Ensure you are running the latest drivers and that your GPU supports Vulkan.
If your GPU doesn't support Vulkan, follow the <router-link to="/optimizing-cemu-(opengl)">OpenGL Guide</router-link>.
:::

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar
1. Navigate to the `Graphics` tab
1. Change the "Graphics API" to `Vulkan` if it is not already
    - If this doesn't appear, or you have problems using Vulkan, read the <router-link to="/optimizing-cemu-(opengl)">OpenGL Optimization Guide</router-link>
1. Ensure that your "Graphics Device" is set to use your most powerful GPU if your device has dual graphics
1. Set "VSync" to `Match emulated display (Experimental)`
    - If you use a display with variable refresh rate (G-SYNC), set this to `Off` instead
    - This feature is experimental and may cause issues
1. Enable `Async shader compiler`
1. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`

## Importing shader caches

1. Make a note of the title and region of the game which shader cache you want to import (e.g. `Mario Kart 8`, `USA`)
1. Open [chriztr.github.io/cemu_shader_and_pipeline_caches](https://chriztr.github.io/cemu_shader_and_pipeline_caches/) in your browser
1. Scroll down to the game and region that you want to download
1. Download the shader and pipeline `.bin` files
1. Copy the `.bin` files to the `shaderCache/transferable` in your Cemu folder
1. Repeat this for every game needed

---

Cemu should now be running the fastest it can, with a huge increase in performance for some users.
