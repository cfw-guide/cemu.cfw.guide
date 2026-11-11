---
title: Optimizing Cemu
description: Improving gameplay and performance in the Cemu emulator.
---

## Required Reading

### Graphics APIs

A graphics API is the interface between the emulator and your graphics hardware, and it can affect the performance and visual quality depending on which one you choose. Broadly, we recommend:

- **Vulkan**: Windows and Linux
- **Metal**: macOS
- **OpenGL**: Older GPUs that do not support Vulkan/Metal

Vulkan and Metal will generally provide the best performance, but may have compatibility issues with certain games or older hardware. If you have issues with an API, try switching to another supported API for your platform.

If you want to use OpenGL, follow the <router-link to="/optimizing-cemu-(opengl)/">OpenGL Optimisation Guide</router-link> instead.

### Asynchronous Shader Compilation

When using an emulator, any graphical shaders will need to be translated first to run on your graphics processor. These cannot be predicted ahead of time, so there is a small stutter every time when the program must wait for it to be ready. 

Doing this asynchronously allows the game to carry on running anyway, and wait for the shader to compile in the background. This improves the smoothness of the gameplay, but will cause graphical errors the first time a shader is compiled.

We recommend enabling this as we think it improves the gameplay experience overall, but you can choose which mode you prefer.

<video autoplay loop muted playsinline aria-label="Asynchronous shader compilation, showing various items in Breath of the Wild popping in when the shader finishes compiling." style="width: 100%;">
  <source src="/assets/images/async.mp4" type="video/mp4"/>
</video>

*Asynchronous shader compilation in an older, slower Cemu version. More recent builds can do this in under 1/10th of a second, depending on the CPU.*

### Importing shader caches

Asynchronous shader compilation goes a long way to speed up running games for the first time, however we can also simply download the shaders needed to run each game from the internet. If another user has previously compiled the shaders, they can upload them for other users to import into Cemu.

If you're using OpenGL, you will only need to download the shader cache. If you're using Vulkan, you will need to download both the shader cache and pipeline cache. Shader caches work on each game regardless of its region, while pipeline caches are locked to the region of the game that they were generated on.

### VSync Matching

Vulkan also allows us to use a new experimental VSync technique which allows Cemu to use the game's built-in frame-pacing instead. This avoids tearing and reduces input latency compared to previous methods.

## Cemu Settings

1. Open the Cemu main menu
1. Click **Options** -> **General settings** on the top bar
1. Navigate to the **Graphics** tab
1. Change the **Graphics API** to your preferred option ([unsure?](#graphics-apis))
1. Ensure that your **Graphics Device** is set to use your most powerful GPU if your device has dual graphics

::::: tabs

:::: tab name="Windows" :default="true"

6. Set **VSync** to "Match emulated display (Experimental)"
    - If you use a display with variable refresh rate (G-SYNC), set this to "Off" instead
    - This feature is experimental and may cause issues
1. Enable **Async shader compiler**
1. Navigate to the **Audio** tab
1. Under **General**, change **API** to "XAudio2"

::::

:::: tab name="macOS"

6. Set **VSync** to "Double buffering"
1. Enable **Async shader compiler**
1. Navigate to the **Audio** tab
1. Under **General**, change **API** to "Cubeb"
1. Under **TV**, set **Device** to your primary audio output device
1. Set **Volume** to 100%
1. Under **Gamepad**, set **Device** to your primary audio output device
1. Set **Volume** to 100%
1. Close the Settings window
1. At the top of your display, click "Debug"

::::

:::: tab name="Linux"

6. Set **VSync** to "Double buffering"
1. Enable **Async shader compiler**
1. Navigate to the **Audio** tab
1. Under **General**, change **API** to "Cubeb"

::::

:::::

## Importing shader caches

1. Open [chriztr.github.io/cemu_shader_and_pipeline_caches](https://chriztr.github.io/cemu_shader_and_pipeline_caches/) in your browser
1. Scroll down to the game and region that you want to download
1. Click the download icon ( <i class="fas fa-download"></i> )
    - Alternatively, click the "Download all" button near the top of the page
1. Extract the contents of the `.zip` file to your Cemu folder
1. Repeat this for every game needed

---

Cemu should now be running the fastest it can, with a huge increase in performance for some users.
