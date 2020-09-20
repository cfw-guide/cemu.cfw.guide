---
title: "Using Async"
permalink: /using-async
excerpt: Enabling asynchronous shader compilation for a smoother gameplay experience.
---

{% include toc title="Table of Contents" %}

Asynchronous shader compilation is a feature that, with the Vulkan rendering API, will enable Cemu to compile shaders and pipelines in the background.

This means that, rather than halting the game to wait for the shader or pipeline to compile, the shader or pipeline is skipped while Cemu waits for it to compile.

It's a popular feature, as it reduces stuttering on first playthrough. However, as they're compiled in the background, they won't appear until they're called again, causing temporary graphical issues.

This feature is still experimental and may cause other graphical issues and instabilities.
{: .notice--textbox}

{% capture async-gif %}
![]({{ "/assets/images/async.gif" | absolute_url }})

Asynchronous shader compilation in Cemu as of 1.19.2b
{% endcapture %}

<div class="notice">{{ async-gif | markdownify }}</div>

To continue, we need to know what GPU your system is using. If you don't know what type of graphics processor you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. This should start with Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

![]({{ "/assets/images/get_gpu.png" | absolute_url }})
{: .notice--info}

Before enabling async, we need to first download new drivers that support Vulkan 1.2 features. This is already included with the latest AMD and NVIDIA GPU drivers.

For Intel iGPUs, a beta driver may be required to be installed. You must have a 6th gen iGPU or later to use Async.

Be aware that beta drivers can cause issues. If you are experiencing issues on a beta driver, please revert to the latest stable driver.
{: .notice--primary}

## Downloads

- The latest available Vulkan 1.2-supported Driver
    - [Latest Nvidia Drivers](https://www.nvidia.com/Download/index.aspx)
    - [Latest AMD Drivers](https://www.amd.com/en/support)
    - [Intel iGPU Drivers - 6th Gen or Newer](https://downloadcenter.intel.com/product/80939/Graphics)

Async on Intel may or may not be fully supported by the driver and may result in more problems on Cemu than not using Async. Please make sure you install a proper driver for your Intel GPU as supported by your GPU and by your OS, especially if you're using a Laptop with a Dual Graphics design.
{: .notice--info}

## Instructions

1. Download and install the relevant driver
1. Restart your PC
1. Open the Cemu emulator
1. On the top bar, click `Options` -> `General Settings`
1. Navigate to the `Graphics` tab
1. Change `Graphics API` to `Vulkan`
1. Change `Graphics Device` to your primary GPU
1. Exit the settings and return to the Cemu games list
1. On the top bar, click `Debug` -> `Experimental`
1. Enable `Async compile (Vulkan)`

Cemu should now start compiling shaders and pipelines asynchronously. If you have downloaded new drivers or update Cemu, you will have to recompile all pipelines while playing again.
