---
title: Controller Configuration
description: Setting up different controller types for use in the Cemu emulator.
redirect_from: /motion-controls
---

In this section we will be configuring controller inputs and motion controls for Cemu.

Motion control support can vary between controllers. Nintendo Switch, Dualshock 4 and DualSense controllers all have support for motion controls. We can use the SDL controller API to automatically detect and enable motion controls for these controllers.

Other controllers, such as all Xbox controllers, may not support motion controls. Regular buttons should still work, however.

## Instructions

1. Open the Cemu application and go to **Options** -> **Input settings**
    - If you're following along from the previous page, this window will already be open
1. Change **Emulated controller** to **Wii U GamePad**
1. Click on the **Controller** field
1. Set **API** to **SDLController**
    - If your controller does not show up, try reconnecting it or using a different controller API
1. Set **Controller** to your desired controller
    - If no controller appears after connecting it to your computer, try changing your **Controller API**
1. Proceed to map all your controller button inputs
1. If you would like to add another controller input, press the **+** button next to the **Controller** field in the input settings
    - This has many uses, such as using two Nintendo Switch Joy-Con's, or using a phone for motion input
1. To enable motion controls or rumble, click **Settings** and change the corresponding settings
1. At the top, enter in a controller profile name, e.g. "GamePad Controller"
1. Click **Save**
