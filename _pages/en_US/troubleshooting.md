---
title: "Troubleshooting Steps"
permalink: /troubleshooting
excerpt: Common issues and their solutions.
toc: true
toc_sticky: true
sidebar:
  nav: guide
---

## Cemu

### Stuck on "Loading..." or Crashing to Desktop (CTD) when starting a game

1. Ensure the game you are wanting to play has been deemed playable, many games are not yet supported or have regressions after Cemu updates. You can check the [Game Compatibility List](http://compat.cemu.info/) and subsequent Wiki entries, just be aware of outdated testing results. We encourage our users to submit their testing results to keep the wiki up to date.

1. Accidentally loading an Update or DLC as a game (by erroneously putting them in your game directory or) by using `File` -> `Load` can cause this. Ensure you're launching the game correctly or otherwise that Update and DLC data is being installed [properly](dumping#updatesdlc).

1. This could be caused by a bad Base Game / Update / DLC copy. Try redumping the data from your Wii U again. Reinstalling any game data will not affect your saves.

1. Illicitly obtained game data will also cause this to happen. Dumping your game data as covered in this guide is the only method that Cemu provides support for.

### Constant stuttering or visual lag during gameplay

This can be caused by shader cache compilation or Vulkan's pipeline cache building. With OpenGL, the shader cache will build up over time and will become unnoticable. Vulkan pipeline cache will build quicker, however it has to rebuild every time you update your GPU drivers or Cemu itself as it becomes invalidated when either of these change.

Nvidia and AMD users that have support for the latest drivers can mitigate this by using a supported Vulkan 1.2 driver for their GPU and navigating to Cemu's `Options` -> `General Settings` -> `Graphics` section, then enable the `Async shader compile` feature.  Expect visual or physical glitches, these should only last during the first encounter; almost all Shaders and Pipelines will be compiled in the background while you are playing, greatly reducing the amount of performance drops due to them.

Newer Intel iGPUs should support this feature as long as they both support Vulkan 1.2 and are using the latest available drivers. If you encounter issues while using this feature, please disable it and try again after a future driver update.

### Crashing with `Options` -> `General Settings`

This is uncommon. We recommend you do a clean installation of Cemu to see if this problem is a result of your current Cemu. If you cannot resolve this problem, feel free to ask for assistance on our Discord Server.

### Crashing with `File` -> `Install Game Title, Update, or DLC` or `File` -> `Load`

This is a longstanding issue that's caused by either:

1. Incompatibility with a 3rd party program installed on your PC, usually one that edits how Windows visually looks or those that edit the Taskbar/Tray.
2. A broken or semi-corrupt Windows installation.

We encourage you to try and find the afflicting program and remove it, otherwise you should consider installing the latest version of Windows 10, cleanly. Migrations, in-place upgrades, "Refresh" and any other non-fresh installation methods can result in many issues and will likely just bring the problem over to your newer installation. If you are not sure of how to do a clean Windows installation, we suggest you follow a tutorial and ensure you have a product key ready for activation. Back-up any files and settings you want to transfer beforehand.

### Can't initialise DirectInput

This can be fixed by unplugging the controller and restarting Windows. After your PC has fully booted plug the controller back in. Ensure you are using the latest official version of Cemu, it is also encouraged to be using the latest version of Windows 10.

## The Legend of Zelda: Breath of the Wild

[Full Cemu Wiki listing of issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild)

Please review the above link as it goes over nearly every problem that has been recorded to date!  Most (but not all) of the common issues are listed below.

### "A System update is required" at boot or a White/Yellow Screen after "Open your eyes..."

This is caused by the game's latest update not being installed. Breath of the Wild must be using the latest update to work properly at all. Follow our [dumping guide](dumping) to dump and install the latest game update and then install it on Cemu, make sure the game is updated on your Wii U console before doing so.

### Game is stuck at around 20~30FPS

1. Ensure you're running the latest game update and Cemu version.
2. Ensure FPS++ is enabled and set to above 30 or you will be locked into this state.
3. Make sure your hardware is supposed to be able to exceed 30FPS, try going into a Shrine.
4. Try disabling Vsync temporarily and see if this changes the behavior.

### Game feels like it's playing in Slowmotion or Fastforward

1. This will occur if you do not have the game fully updated and you haphazardly enable FPS++
2. On occasion FPS++ will incorrectly apply after starting the game. Restarting Cemu usually resolves this.
3. Do not use FPS++'s `Static Mode (Enabled)` instead of `Disabled (Default, Dynamic)`; `Static Mode` will cause this behavior.
4. Changing the `Frame Average` to a higher value instead of using the default value `8` can also cause this issue.

### Cutscenes (Rito Village/Vah Medoh/possibly others) cause the game to freeze

This can be caused by setting the framerate above 60FPS. If it still occurs at 60FPS, then set it to 30FPS or disable FPS++ temporarily, then change the setting back after the cutscene has finished; restarting Cemu afterwards is encouraged. Alternatively you may try using OpenGL instead of Vulkan.

If disabling FPS++ and using OpenGL doesn't resolve this, This is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### I ran into invisible water that's in the middle of the air

This is an infrequent issue on Vulkan, a simple Cemu restart should resolve the invisible water. This may be fixed in the future.

### A lot of buildings or other assets aren't loading in or take several minutes to load

1. Disable any 3rd party mods if you downloaded and installed any, then test the game.

1. Disable the Extended Memory and Draw Distance GraphicPacks, then test the game.

1. Use FPS++'s `Advanced Settings` and set the `Fence Method` to `Accurate` instead of `Performance`

1. If none of these helped, this is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### I get a black screen when a cutscene is supposed to start

This is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### I get a green screen when a cutscene is supposed to start

This should only affect Linux users for now. You must have Cemuhook installed and correctly hooked into Cemu and have the `Debug` -> `Use Cemuhook H264` option enabled. If you do not know how to do this, visit the #Linux channel on the Cemu Discord server for assistance. This should no longer be required after Cemu's H264 support is updated / after Linux gets a native Cemu build.

If you are also getting this behavior on Windows, try using `Debug` -> `Use Cemuhook H264` or otherwise request assistance on our Discord Server.


