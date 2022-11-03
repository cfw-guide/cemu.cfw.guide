---
title: Troubleshooting
description: Common issues and their solutions.
sidebarDepth: 1
---

## Cemu

The first step is to ensure the game you are wanting to play has been deemed playable, as many games are either: not yet supported, are only known to boot but simply crash, or they have regressions in compatibility due to Cemu updates or issues with new GPU drivers. Before asking for any help, please check the [Game Compatibility List](http://compat.cemu.info/) and subsequent Wiki entries, just be aware of outdated testing results.

We encourage our users to submit their testing results and to otherwise keep the wiki up-to-date so that everyone's questions may be answered.

### Stuck on "Loading..." / Crash to Desktop (CTD) when starting a game

#### Cause #1

1. Open `Task Manager` on Windows
1. Click the `(^) More details` button if necessary
1. Navigate to the `Details` tab
1. Make sure Cemu.exe is not available in your process list before trying to run Cemu again - that it is otherwise fully closed

There is an issue recently where Cemu.exe can get stuck in the background which will cause issues for saving your games, running games, loading your shaderCache, and a wider assortment of other complications.

#### Cause #2

1. Open your Cemu folder and temporarily rename your `shaderCache` folder
    - This will allow you to test a fresh cache to see if the problem was related to the cache that was being used
1. If renaming the `shaderCache` folder did not help, ensure Cemu is fully closed and then rename your earlier `shaderCache` folder back to the name "shaderCache"
    - You will need to delete the one that was created by Cemu after you renamed your original copy

#### Cause #3

Accidentally loading an Update or DLC as a game by using `File` -> `Load` can cause this. Alternatively if you accidentally merged the Update or DLC data into the Base Game trying to save space, this will break the Base Game - all of the game's data will need to be <router-link to="/dumping-games">redumped</router-link> from your Wii U and replaced. Ensure you're launching the game correctly or otherwise that Update and DLC data are being installed <router-link to="/installing-games/#games-updates-and-dlc">properly</router-link>.

#### Cause #4

To continue off of Cause #3, this could be caused by an incomplete or otherwise corrupt dump of your Base Game / Update / DLC copy. Sometimes dumping software just doesn't work the way it's intended to, but it's better than not having it available. Try <router-link to="/dumping-games">redumping</router-link> the data from your Wii U again - reinstalling any game data will not affect your saves.

#### Cause #5

Illicitly obtained game data will also cause this to happen. <router-link to="/dumping-games">Dumping</router-link> your game data is the only method that Cemu provides support for. Asking for help with illegally downloaded data will result in an immediate ban or warning.

### "Error: This title is encrypted. To run this application ..."

If you followed this guide you should not be dealing with this type of problem. [dumpling](https://github.com/emiyl/dumpling) will dump your games in a decrypted format and does not require you to have Encryption Keys or have you mess with keys.txt - if you used the wrong homebrew to dump the game software, please go back and use dumpling instead.

This error means the key that came with your encrypted game dump is not in your keys.txt file. Random keys from the internet will not work. To get the correct keys from your console without redumping the game again, you must follow this small guide:

- [Obtaining your Wii U Common Key and Encryption Keys for your keys.txt](https://wiki.cemu.info/wiki/Obtaining_Keys_for_Keys.txt)

### "Error: Can't initialise DirectInput"

This can be fixed by unplugging the controller and restarting your computer. After your PC has fully booted, plug the controller back in. Ensure you are using the latest official version of Cemu, it is also encouraged to be using the latest version of Windows 10/11.

### Constant stuttering / visual lag during gameplay

This is caused by shaderCache creation or Vulkan's pipelineCache creation. With OpenGL and Vulkan, the shaderCache will build as you play and will eventually become nearly unnoticable. As mentioned, Vulkan also requires a pipelineCache - this cache type will build quickly and have minor stutter. Keep in mind that it has to be rebuilt from scratch every time you update your GPU driver or Cemu as a sideeffect from becoming invalidated when either of these change.

To alleviate gameplay stalls caused by shader and pipeline building, read [Async Shader Compile](#async-shader-compile) further below.

### Can I disable, preload, or download shader caches?

If you simply want to turn off the notification that tells you they are being made, you can do this in `Options` -> `General settings` -> `Overlay`.

Unfortunately, you cannot create a cache before playing the game, nor can you disable shaders or pipelines to prevent stalling. Shaders and pipelines are what allow your games to work on your GPU. If they were disabled, you would only see a black screen, with no graphical output.

Pre-compiled shader and pipeline caches are available at [chriztr.github.io/cemu_shader_and_pipeline_caches](https://chriztr.github.io/cemu_shader_and_pipeline_caches/), however not all games are supported. Follow [Optimizing Cemu](/optimizing-cemu.html#importing-shader-caches-1) for more information on importing shader and pipeline caches.

### Async Shader Compile

This feature is only available for GPUs with drivers that support Vulkan 1.2 or newer; not Vulkan 1.1!

Users that fit this criteria should navigate to Cemu's `Options` -> `General settings` -> `Graphics` section, then enable the `Async shader compile` feature. While using `Async Shader Compile` almost all Shaders and Pipelines will be built at the same time while you are playing, greatly reducing the amount of gameplay stalling that you could encounter without this option; some temporary graphical issues should be expected. Not all shaders and pipelines can be created in this way and will still result in some minor stalling.

Newer Intel iGPUs support this feature as long as they both support Vulkan 1.2 and are using the latest available drivers. If you encounter issues while using this feature, please disable it and try again after a future driver update.

### I use Steam to launch Cemu, what can happen?

Steam caches shaders on its own unless you turn this off, this majorly conflicts with `Async Shader Compile`. The symptoms are graphics or models failing to render, usually a very broken-looking game. To prevent this, look for the Shader Precaching option within Steam's settings and disable it to resolve the issue. We recommend that you do not use 3rd party launchers like Steam to launch Cemu due to potential problems that we have no control over.

If you encounter similar symptoms to this but you aren't using Steam to launch Cemu, please refer to [this section below](#a-lot-of-objects-or-other-assets-aren-t-appearing).

Otherwise, beyond problems with Async Shader Compile, you may also experience some controller difficulties as Steam enforces their own drivers; this may prevent Cemu from working as expected with your device.

### Problems with Vulkan within Cemu

Such problems include:

- When I try to open General Settings, Cemu crashes.
- There is no Vulkan option even though my GPU should have Vulkan Support.
- I have a Vulkan option but my GPU doesn't show up in the dropdown.
- When I select the Vulkan option in the dropdown menu, Cemu crashes.
- When I try to launch a game that's supposed to work with Vulkan, it immediately crashes.

If you experience any of the above symptoms, please do the following:

1. Ensure Cemu is fully up-to-date; issues with older Cemu versions will not be available for troubleshooting support.
1. Verify that your GPU supports Vulkan 1.1 or newer and is up-to-date with Nvidia/AMD/Intel's latest driver version.
    - Multi-vendor Lists: [Here](https://vulkan.gpuinfo.org/), [here](https://www.khronos.org/conformance/adopters/conformant-products#vulkan), & [here](https://en.wikipedia.org/wiki/Vulkan_(API)#Hardware)
    - Nvidia GPU Support: [Here](https://developer.nvidia.com/vulkan-driver)
    - AMD GPU Support: [Here](https://www.amd.com/en/technologies/vulkan)
    - Intel GPU Support: [Here](https://www.intel.com/content/www/us/en/support/articles/000005524/graphics.html)
1. If you've confirmed your support and yet it still fails, please reinstall both your iGPU/APU & dGPU drivers with DDU:

[DDU - Display Driver Uninstaller Guide](https://www.wagnardsoft.com/content/ddu-guide-tutorial)

Yes, you must install both the iGPU/APU and dGPU drivers; skipping one will likely cause the issue to not be resolved.

If this fails to help then it's time to see what our Discord Server has to say; you may also try downgrading your GPU driver to an earlier version. Please do some research on the subject to see if any other people with your GPU have had issues with Vulkan in other games (not specifically Cemu.)

### Crashing with `[File] -> [Load]` or `[Install Game Title, Update, or DLC]`

This refers to when the Window's File Explorer window is supposed to pop up. This is a longstanding issue that's caused by either:

1. Incompatibility with a 3rd party program installed on your PC, usually one that edits how Windows visually looks or those that edit the Taskbar/Tray.
2. If your PC supports Intel Optane / RST, you must keep the drivers and features for it installed. Not having the software available can cause this issue; if you removed them or never installed them, it is encouraged for you to do so, but only if your motherboard supports this feature and you get this type of crash.
3. A broken or semi-corrupt Windows installation.

We encourage you to try and find the afflicting program and remove it, otherwise you should consider installing the latest version of Windows 10, cleanly. Migrations, in-place upgrades, "refresh" and any other non-clean installation methods can result in the problem migrating with you to your newer installation. If you are not sure of how to do a clean Windows reinstallation, we suggest you follow a tutorial. Please be smart and back-up any files, settings, and programs / program names / product keys that you want to transfer beforehand.

## The Legend of Zelda: Breath of the Wild

[Full Cemu Wiki listing of issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild)

Please review the above link as it goes over nearly every problem that has been recorded to date!  Most (but not all) of the common issues are listed below.

### "A System update is required" / White or Yellow Screen after "Open your eyes..."

This is caused by the game's latest update not being installed. Breath of the Wild must be using the latest update to work properly. Follow our <router-link to="/dumping-games">dumping guide</router-link> to rip and then install the latest game update on Cemu, make sure the game is updated on your Wii U console before proceeding.

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

### Cutscenes cause the game to freeze / softlock

This can be caused by setting the framerate above 60FPS. If it still occurs at 60FPS, then set it to 30FPS or disable FPS++ temporarily, then change the setting back after the cutscene has finished, save, and then restart Cemu. Alternatively you may try using OpenGL instead of Vulkan.

If disabling FPS++ and using OpenGL doesn't resolve this, this is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### Invisible water in the air

This is an infrequent issue on Vulkan, a simple Cemu restart should resolve the invisible water. This may be fixed in the future. Contrary to popular belief, this has nothing to do with Async Shader Compile.

### A lot of objects or other assets aren't appearing

It's recommended that if you use Steam to launch Cemu that you refer to this: [Click Here](#i-use-steam-to-launch-cemu-what-can-happen)

1. Disable any 3rd party mods if you downloaded and installed any, then test the game.
2. Disable the Extended Memory and Draw Distance GraphicPacks, then test the game.
3. Test FPS++'s `Advanced Settings`'s `Fence Method` set to `Accurate` instead of `Performance`

If none of these helped, this is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### I get a white or black screen when a cutscene is supposed to start

This is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### I get a green screen when a cutscene is supposed to start

This should only affect Linux users for now. You must have Cemuhook installed and correctly hooked into Cemu and have the `Debug` -> `Use Cemuhook H264` option enabled. If you do not know how to do this, visit the #Linux channel on the Cemu Discord server for assistance. This should no longer be required after Cemu's H264 support is updated / after Cemu gets a native Linux build.

If you are also getting this behavior on Windows, try using `Debug` -> `Use Cemuhook H264`. If you are already using this option and you are an older Intel iGPU user, try disabling `Use Cemuhook H264` instead. Otherwise you may request assistance on our Discord Server.

## Other miscellaneous issues with any game on Cemu

Emulation isn't a perfect science and new or old problems can surface, or ones that don't match other descriptions. If you do encounter something that isn't listed here, check the [Game Compatibility List](http://compat.cemu.info/) as each game has its own wiki entry.

If what you're having problems with is not listed there, please [make sure that your GPU supports Vulkan 1.1 or OpenGL 4.5](#problems-with-vulkan-within-cemu); if it doesn't you will not have full support, which will result in a multitude of game-breaking bugs that you cannot fix.

If you do have confirmed support, the safest bet is to:

1. Disable all 3rd-party game mods and test the result; many mods cause problems.
2. Disable all graphicPacks (excluding FPS++) and then see if the issue stops.
3. Try renaming your shaderCache folder to see if it's the cause of the problem. If the shaderCache isn't the culprit, you can rename your shaderCache folder back to its original name in order to resume using it after a Cemu restart.
4. Unfortunately not all issues are repairable; you should always try to <router-link to="/dumping-games">fully redump the game, update, and DLC</router-link> from your Wii U console.

---

You may always visit us on our Discord to see if we can figure out the problem together.
