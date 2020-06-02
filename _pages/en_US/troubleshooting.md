---
title: "Troubleshooting"
permalink: /troubleshooting
---

{% include toc title="Table of Contents" %}

## Cemu

### Can't initialise DirectInput

This can be fixed by unplugging the controller and restarting Windows. Afterwards, plug the controller back in. Ensure you are using the latest official version of Cemu.

### Stuck loading or crashing when booting a game

This could be caused by a bad game dump. Try dumping your game from your Wii U again.

It can also be caused by loading an update or DLC as a game, instead of the base game files. Ensure you're installing updates [properly](dumping#updatesdlc).

Illegally obtained game copies will also cause this to happen. Dumping your game from your Wii U console is the only method that Cemu supports.

## The Legend of Zelda: Breath of the Wild

[Full Cemu Wiki listing of issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild)

Please review the above link as it goes over nearly every problem that has been recorded to date!  Most (but not all) of the common issues are listed below.

### System update requested at boot or freezing after "Open your eyes..."

This is caused by the game's update not being installed to Cemu. BOTW must be using the latest update to work properly. Follow our [dumping guide](dumping) to dump and install the latest BOTW update to Cemu, make sure the game is updated on your console before doing so.

### Constant stuttering during gameplay

This can be caused by `shaderCache` compilation or Vulkan's `pipeline cache` building. With OpenGL, the `shader cache` will build up over time and will become unnoticable. Vulkan `pipeline cache` will build quicker, however it has to rebuild every time you update your GPU drivers or Cemu itself as it becomes invalidated when either of these change.

`Nvidia` and `AMD` users that have support for the latest drivers can mitigate this by using a supported `Vulkan 1.2` driver for their GPU and navigating to Cemu's `Debug > Experimental` section, then enable the `Async Compile` feature.  Expect visual or physical glitches, these should only last during the first encounter; almost all Shaders and Pipelines will be compiled in the background while you are playing, greatly reducing the amount of performance drops due to them.

### Off-coloured "milky" sea/water

This is caused by disabling `Full Sync at GX2Drawdone()` on OpenGL within Cemu's `General Settings > Graphics` area. You can either enable it, or switch to Vulkan which has it forcefully enabled.  Another option is to try lowering your resolution and using FPS++'s `Fence Method` set to `Accurate` instead of `Performance`.

### Black/grey sky

This is caused by some NVIDIA graphics drivers while using Vulkan. You can fix it by using the latest `Vulkan 1.2` Beta Driver or using the latest `Game Ready` driver for your device.

### Cutscenes (Rito Village/Vah Medoh) cause the game to freeze

This can be caused by setting the framerate to 60FPS. `Set it to 30FPS` or `disable FPS++` temporarily, then set it back after the cutscene has finished; this may require a Cemu restart.

### Thunderblight Ganon disappears during battle

This can be caused by setting the framerate to 60FPS. `Set it to 30FPS` or `disable FPS++` temporarily, then set it back after the cutscene has finished; this may require a Cemu restart.

### Flurry-rush attacks won't connect with enemy

This can be caused by setting the framerate to 60FPS. We found that if you were close enough, all hits would land anyway. Setting framerate to 30FPS will fix this properly.  This issue normally only affects larger enemies or bosses.
