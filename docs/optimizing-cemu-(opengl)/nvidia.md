---
title: Optimizing Cemu (OpenGL) (NVIDIA)
description: Improving gameplay and performance in the Cemu emulator.
---

::: tip
Ensure you are running the [latest drivers](https://www.nvidia.com/Download/index.aspx) and that your GPU supports OpenGL 4.5+.
:::

::: warning
OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.
:::

## GPU Settings

1. Open the NVIDIA Control Panel
    - You can access it by right clicking on your Desktop -> `NVIDIA Control Panel`
1. Make sure you are on the `Manage 3D settings` section
    - This is the default section when opening the control panel
1. Go to the `Program Settings` tab
1. In "1. Select a program to customise" click `Add` -> `Browse`
1. Navigate to your Cemu folder and select the Cemu executable
1. Set "Triple Buffering" to `On`
1. If you have a compatible display, enable G-Sync

![A screenshot of NVIDIA settings](/assets/images/nvidia-gpu-settings.png)

## Cemu settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar
1. Navigate to the `Graphics` tab
1. Set "VSync" to `Off`
1. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`

---

Cemu should now be running the fastest it can on OpenGL.
