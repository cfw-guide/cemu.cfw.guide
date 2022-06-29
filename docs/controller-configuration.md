---
title: Controller configuration
description: Setting up different controller types for use in the Cemu emulator.
redirect_from: /motion-controls
---

In this section we will be configuring controller inputs and motion controls for Cemu.

Motion control support can vary between controllers. Nintendo Switch, Dualshock 4 and DualSense controllers all have support for motion controls. Using the SDL controller API, this will be automatically detected.

Other controllers, such as Xbox controllers, do not support motion controls and will require alternative methods to enable them. Regular buttons should still work, however.

::: tip
Cemuhook was previously required for motion controls, however Cemu now natively supports motion controls using the SDL controller API. If you have used Cemuhook in the past for motion controls, make sure to change `Options` -> `GamePad motion source` to "Default".
:::

## Instructions

1. Open the Cemu application
1. On the top bar, go to `Options` -> `Input settings`
1. Change `Emulated controller` to "Wii U GamePad"
1. Click on the `Controller` field
1. Set `API` to "SDLController" 
1. Set `Controller` to your desired controller
    - If no controller appears after connecting it to your computer, try changing your controller API
1. Proceed to map all your controller button inputs
1. If you would like to add another controller input, press the `+` button next to the `Controller` field
    - This has many uses, such as using two Nintendo Switch Joy-Con's, or using a phone for motion input
1. At the top, enter in a controller profile name, e.g. "GamePad Controller"
1. Click `Save`
