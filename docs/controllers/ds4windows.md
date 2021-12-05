---
title: Controller Configuration (DS4Windows)
description: Setting up different controller types for use in the Cemu emulator.
---

## Downloads

::: warning
DualShock 3 controller motion support may not be compatible with DS4Windows. Please refer to the "<router-link to="xbox">Xbox / Others</router-link>" section.
:::

- The latest release of [DS4Windows by Ryochan7](https://ryochan7.github.io/ds4windows-site/)
- The latest release of [Cemuhook](https://cemuhook.sshnuke.net/)
    - If you installed Cemuhook earlier, you don't need to download this

## Installing Cemuhook

1. Extract the contents of the Cemuhook `.zip` file to the Cemu directory
1. Open the Cemu application
1. In the bottom-right-hand corner, it should say `Cemu plugin x.x.x.x by rajkosto`
    - This means Cemuhook has been successfully installed
    - If doesn't say this, ensure that your Cemu directory looks like this:

![A screenshot of Cemuhook correctly set up](/assets/images/cemuhook.png)

## Instructions

1. Download and extract DS4Windows to your computer
    - Select the `_x64.zip` file
1. Connect your controller to Windows via USB or Bluetooth
1. Open the DS4Windows application
2. Microsoft .NET 5.0 or newer is required; install it if asked
3. Ensure your controller is registered with DS4Windows
4. Navigate to the `Settings` tab
5. Enable `UDP Server`
    - This should say `127.0.0.1` with port `26760`
1. Open the Cemu application
1. On the top bar, go to `Settings` -> `Input settings`
1. Change `Emulate controller` to `Wii U Gamepad`
1. Change `Controller API` to `XInput`
1. Change `Controller` to `Controller X`
1. Proceed to map all your controller button inputs
1. At the top, enter in a controller profile name, e.g. `Gamepad Controller`
1. Click `Save`

![](/assets/images/ds4windows.png)

## Motion Controls

1. On the top bar, go to `Settings` -> `Gamepad Motion Source`
1. Select your controller from this list
1. Select `By slot`
