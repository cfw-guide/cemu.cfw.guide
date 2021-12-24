---
title: Controller Configuration
description: Setting up different controller types for use in the Cemu emulator.
redirect_from: /motion-controls
---

In this section we’ll be configuring controller inputs for Cemu, and setting up motion controls.

This can vary between controllers. Nintendo Switch, Dualshock 4 and DualSense controllers all have support for motion controls. Using the SDL controller API, this will be automatically detected.

Other controllers, such as Xbox controllers, don’t support motion controls and will need to use an alternate method.

::: tip
Cemuhook was previously required for motion controls, however Cemu now natively supports motion controls using the SDL controller API. If you've used Cemuhook in the past for motion controls, make sure to change `Settings` -> `GamePad motion source` to "Default".
:::

## Instructions

1. Open the Cemu application
1. On the top bar, go to `Settings` -> `Input settings`
1. Change `Emulated controller` to "Wii U Gamepad"
1. Click on the `Controller` field
1. Set `API` to "SDLController" 
1. Set `Controller` to your desired controller
    - If it doesn't appear, try changing your controller API
1. Proceed to map all your controller button inputs
1. At the top, enter in a controller profile name, e.g. "Gamepad Controller"
1. Click `Save`