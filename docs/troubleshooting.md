---
title: "Troubleshooting"
description: Common issues and their solutions.
sidebarDepth: 1
---

`Note from Serfrost:`

Troubleshooting steps listed on this page are curated for Windows users.

Many examples here may happen regardless of OS.

For `MacOS` and `Linux` troubleshooting requests, you may use the [Cemu Discord](https://discord.gg/5psYsup) to discuss.

## Cemu

The first step is to ensure the game you are wanting to play has been deemed playable, as many games fall under these categories: 
   - Not yet supported
   - Boots but unplayable
   - Experience regressions in compatibility due to Cemu updates or issues with new GPU drivers.

Before asking for assistance, please check the [Game Compatibility List](http://compat.cemu.info/) and subsequent Wiki entries, just be aware of outdated testing results. Additionally you should review the current Issues that are live on [Cemu's GitHub](https://github.com/cemu-project/Cemu/issues).

We encourage our users to submit their testing results and to otherwise keep the wiki up-to-date so that everyone's questions may be answered. When submitting results, please make sure that your tests are created while using a clean Cemu setup `without` any enabled `graphicPacks` or `3rd Party Mods` so they are not confused for issues with the emulator. (Unless a graphicPack is required to boot.)

### "Cemu Hook error | Could not find required functions in Cemu"

Cemuhook is no longer required and should be removed, especially for Cemu 2.0+

Within Cemu's directory, `delete` the following files if present:
1. `cemuhook.dll`
2. `dbghelp.dll`
3. `keystone.dll`
4. `cemuhook.ini`

After this you may try to open Cemu.exe once again.

### "Search for app in the Store?" | Cemu 2.0-X fails to run

This problem is caused by broken .EXE and .EXEFILE associations and can be an issue on some newly set up devices.

1. Download and import [this Registry File](https://cdn.discordapp.com/attachments/802338126940340225/1047852604492877864/smartscreenfix.reg)
1. Download and import [this second Registry File](https://cdn.discordapp.com/attachments/802338126940340225/1047852604782297218/smartscreenfix2.reg)

Restart your PC and then try running Cemu again. If this doesn't help...

1. Copy the following command:
   - `Get-AppXPackage -AllUsers | Foreach {Add-AppxPackage -DisableDevelopmentMode -Register "$($_.InstallLocation)\AppXManifest.xml"}`
1. Press `Win+R` to open a `Run Prompt`, then type `Powershell` and hit `Enter`
1. In the `Powershell` window, `right-click` to `paste` the command and then hit `Enter`
1. If no errors are thrown and it finishes, close `Powershell` and restart your PC. Test Cemu again.

If this has not resolved your problem, please come by our Discord for more assistance.

### Stuck on "Loading..." / Black Screen / Crash to Desktop (CTD) when starting a game

#### `Cause #1`

Please verify that you're using the latest driver for your GPU to ensure compatibility.

Verify that the GPU supports either Vulkan 1.1 or OpenGL 4.5
  - Vulkan Support List: [Here](https://www.khronos.org/conformance/adopters/conformant-products/vulkan) or [here](https://vulkan.gpuinfo.org/)
  - OpenGL Support List: [Here](https://www.khronos.org/conformance/adopters/conformant-products/opengl)

GPUs that do not meet the requirements will not be able to run most, if not all games.

#### `Cause #2`

1. Open your Cemu folder and temporarily rename your `shaderCache` folder to `shaderCache.old`
    - This will allow you to test a fresh cache and see if the issue is cache-related.
1. If renaming the `shaderCache` folder did not help, delete the newly created `shaderCache` folder.
1. Rename your original `shaderCache.old` folder to its original name to resume using it.

#### `Cause #3`

Accidentally loading an Update or DLC as a game by using `File → Load` can cause this. Alternatively if you accidentally merged the Update or DLC data into the Base Game trying to save space, this will break the Base Game - all of the game's data will need to be <router-link to="/dumping-games">redumped</router-link> from your Wii U and replaced. Ensure you're launching the game correctly or otherwise installed <router-link to="/installing-games/#games-updates-and-dlc">properly</router-link>.

#### `Cause #4`

To continue off of Cause #3, this result may be due to an incomplete or otherwise corrupt dump of your Base Game / Update / DLC copy. Sometimes dumping software just doesn't work the way it's intended to. Try <router-link to="/dumping-games">redumping</router-link> the data from your Wii U again - overwriting games will not affect your Save Data as long as you ensure not to overwrite your mlc01 folder with older data.

#### `Cause #5`

1. Open `Task Manager` | (Right-click on the Start Button or the Task Bar)
1. Within `Task Manager`, click the `(∆)` `More details` button if necessary
1. Navigate to the `Details` tab or press the `[∙≡] Details` button.
1. Make sure Cemu.exe is not available in your process list before trying to run Cemu again - that it is otherwise fully closed

Cemu.exe can get stuck in the background which will cause issues for saving your games, running games, loading your shaderCache, and a wider assortment of other complications.

#### `Cause #6`

Illicitly obtained game data will also cause this to happen. <router-link to="/dumping-games">Dumping</router-link> your game data is the only method that Cemu provides support for. 

Do not ask for any alternatives.

### "Error: This title is encrypted. To run this application ..."

If you followed this guide you should not be dealing with this type of problem. <router-link to="/dumping-games">Use dumpling</router-link> to dump your games in a decrypted format, removing the necessity for Encryption Keys - if you used the wrong homebrew software to dump the game, please go back and use dumpling instead so you may get troubleshooting support on our Discord if necessary.

If you simply lost your keys, this error means the key that is dumped with your game title is not in the keys file or the file doesn't exist. To get the correct keys from your console without redumping the game again, you may follow this small guide:

- [Obtaining your Wii U Common Key and Encryption Keys for your keys.txt](https://wiki.cemu.info/wiki/Obtaining_Keys_for_Keys.txt)

### Constant stuttering / visual lag during gameplay

This is caused by shaderCache creation or Vulkan's pipelineCache creation. With OpenGL and Vulkan, the shaderCache will build as you play and will eventually become less intrusive. As mentioned, Vulkan also requires a pipelineCache which will build quickly and have minor stutter.

`Please read the next section.`

### Can I disable, preload, or download shader caches?

If you simply want to turn off the notification that tells you they are being made, you can do this in `Options` → `General settings` → `Overlay`.

Unfortunately, you cannot create a cache before playing the game, nor can you disable shaders or pipelines to prevent stalling. Shaders and pipelines are what allow your games to work on your GPU. If they were disabled, you would only see a black screen with no graphical output.

Many ready-to-use caches are available at [Chriztr's Unofficial Cache Repository](https://chriztr.github.io/cemu_shader_and_pipeline_caches/), however not all games are supported. Follow [Optimizing Cemu](/optimizing-cemu.html#importing-shader-caches-1) for more information on importing shader and pipeline caches.

`For further improvement, please read the next section.`

### Async Shader Compile

This feature is only available for GPUs with drivers that support Vulkan 1.2 or newer; not Vulkan 1.1!

Users that fit this criteria should navigate to Cemu's `Options` → `General settings` → `Graphics` section, then enable the `Async Shader Compile` feature. While using `Async` almost all Shaders and Pipelines will be built silently while you play, greatly reducing the amount of interrupted gameplay that you would encounter without this setting enabled. Note: Some temporary graphical issues should be expected. Unsurprisingly, not all shaders and pipelines can be created in this way and will still result in some minor stutters.

Newer Intel iGPUs that support Vulkan 1.2 may use `Async` as long as their drivers are fully up-to-date. If you encounter issues while using this feature, please disable it and try again after installing a newer driver for your Intel iGPU.

### I use Steam to launch Cemu, what can happen?

Steam caches shaders on its own unless you turn this option off, this setting majorly conflicts with `Async Shader Compile`. The symptoms are graphics or models failing to render or otherwise a very broken-looking game. To prevent these issues, look for the Shader Precaching option within Steam's settings and disable it; afterwards you should close and reopen Cemu. We recommend that you do not use 3rd party launchers like Steam to launch Cemu due to potential problems that we have no control over.

If you encounter similar symptoms to this but you aren't using Steam to launch Cemu, please refer to [this section below](#a-lot-of-objects-or-other-assets-aren-t-appearing).

Otherwise, while using Steam to launch Cemu, you may also experience some controller difficulties as Steam prioritizes their own controller drivers; this may prevent Cemu from working as intended with your input devices. This can be resolved by closing Steam and then reconnecting your controller.

### Problems with Vulkan within Cemu

Such problems include:

- When I try to open General Settings, Cemu crashes.
- There is no Vulkan option even though my GPU should have Vulkan Support.
- I have a Vulkan option but my GPU doesn't show up in the dropdown.
- When I select the Vulkan option in the dropdown menu, Cemu crashes.
- When I try to launch a game that's supposed to work with Vulkan, it immediately crashes.

If you experience any of the above symptoms, please do the following:

1. Ensure Cemu is fully up-to-date; issues with older Cemu versions will not be available for troubleshooting support.
1. If you use a laptop with an AMD Radeon iGPU with Switchable Graphics, [see here.](https://nvidia.custhelp.com/app/answers/detail/a_id/5182/)
1. Verify that your GPU supports Vulkan 1.1 or newer and is up-to-date with Nvidia/AMD/Intel's latest driver version.
    - Multi-vendor Lists: [Here](https://vulkan.gpuinfo.org/), [here](https://www.khronos.org/conformance/adopters/conformant-products#vulkan), & [here](https://en.wikipedia.org/wiki/Vulkan_(API)#Hardware)
    - Nvidia Support Webpage: [Here](https://developer.nvidia.com/vulkan-driver)
    - AMD Support Webpage: [Here](https://www.amd.com/en/technologies/vulkan)
    - Intel Support Webpage: [Here](https://www.intel.com/content/www/us/en/support/articles/000005524/graphics.html)
1. If you've confirmed support for Vulkan 1.1 and yet it still fails, please reinstall both your iGPU/APU & dGPU drivers with DDU:

[DDU - Display Driver Uninstaller Guide](https://www.wagnardsoft.com/content/ddu-guide-tutorial)

Yes, you must install both the iGPU/APU and dGPU drivers; skipping one will likely cause the issue to not be resolved.

If this fails to help, then it may be time to speak with others on our Discord server. Please do some research on the subject to see if any other people with your GPU have had issues with Vulkan in other games (not specifically with Cemu.)

### Crashing with `File → Load` or `Install game title, update, or DLC`

This refers to when the Window's File Explorer window is supposed to present itself for selection. 

This is a longstanding issue that's caused by:

1. Incompatibility with a 3rd party program installed on your PC, usually one that edits how Windows visually looks or those that edit the Taskbar/Tray.
2. A broken or otherwise semi-corrupt Windows installation.
3. If your PC supports Intel Optane / RST and it is enabled, you must keep the drivers and features for it installed. Not having the software available can cause this issue. If you removed them or never installed them, you may try disabling this feature but otherwise you may wish to install the necessary software. Only do this if your motherboard supports this feature and you get this type of crash.

We encourage you to try and find the afflicting program and remove it, otherwise you should consider installing the latest version of Windows 10 or Windows 11, cleanly. Migrations, in-place upgrades, "refresh" and any other non-clean installation methods will likely result in the problem migrating with you to your newer installation. If you are not sure of how to do a clean Windows reinstallation, we suggest you follow a tutorial. Please be smart and back-up your Windows Serial Key, any files, settings, program names you wish to reinstall, and their product keys that you want to transfer -- all of these will be removed.

## The Legend of Zelda: Breath of the Wild

### "A System update is required" / White or Yellow Screen after "Open your eyes..."

Breath of the Wild must be using the latest update to work properly. 

Follow our <router-link to="/dumping-games">dumping guide</router-link> to dump and set up the game's data within Cemu. Make sure the game is updated on your Wii U console before using dumpling to copy the game's data over to Cemu.

### The game is stuck at 20~30FPS

1. Ensure you're running the latest game update.
2. Ensure `FPS++` is enabled and set to `Normal Settings` at `45` or above.
3. Make sure your hardware is performant enough to exceed 30FPS. (i.e. Try going into a Shrine.)
4. Disable Vsync temporarily to see if this changes the behavior.

### The game feels like it's playing in Slowmotion or Fastforward

1. This will occur if the game's latest update has not been applied while also using `FPS++`
2. On a rare occasion `FPS++` will incorrectly apply after booting the game. Restarting Cemu usually resolves this.
3. `FPS++`'s `Static Mode` will cause this behavior.
4. Changing `FPS++`'s `Frame Average` to a value larger than `8` or `6` will cause this behavior.
5. Injecting ReShade on Vulkan can cause this behavior on the titlescreen while in Fullscreen mode.
   - Turn ReShade off using a hotkey until you're in-game.

### Cutscenes cause the game to freeze / softlock

1. Ensure `FPS++` is set to use `Normal Settings` instead of `Advanced`
1. Alternatively you may try using `OpenGL` instead of `Vulkan`

If neither resolve this issue, you should try to <router-link to="/dumping-games">fully redump the game, update, and DLC</router-link> from your Wii U console.

### Invisible water in the air

- `From Zalnor on Discord`

This is the known info the Cemu team has gathered:

The bug has apparently been in Cemu for years, but has been more apparent from version 1.19.0 to current 2.0-X (Experimental) because of increased performance, with no known version having it less or more. Users seem to encounter it randomly. The reason for the bug is thought to be a heightmap issue caused by the game loading areas too quickly.

To help reduce how often this issue happens you can do the following.
1. Set `FPS++` to `55FPS`
   - Users have reported that this resolves the problem; if not, `30FPS` is also worth trying.
1. Use OpenGL instead of Vulkan.
   - OpenGL tends to be "more accurate" for emulation in Cemu and has "slower" loading times.
   - Expect a difference in performance compared to Vulkan.
1. Have your `Cemu Folder` / `MLC path` / `Games` on slower storage (i.e. HDD instead of an SSD) 
   - This should not affect Cemu performance if the drive is in good health.

The Cemu Devs have not been able to reproduce the issue on their end but have gotten a lot of info from users. There is no guarantee that this issue can be fixed within any sort of timely manner.

### A lot of objects or other assets aren't appearing

It's recommended that if you use Steam to launch Cemu that you refer to [this](#i-use-steam-to-launch-cemu-what-can-happen).

1. Disable any `3rd party mods` if you're using any, then test the game.
2. Disable the `Extended Memory` and `Draw Distance` GraphicPacks, then test the game.

If neither resolved this issue, you should try to <router-link to="/dumping-games">fully redump the game, update, and DLC</router-link> from your Wii U console.

### I get a white or black screen when a cutscene is supposed to start

This is a sign that your game's data is corrupt and needs replaced. You should replace the Update and DLC as well.

### I get a green screen when a cutscene is supposed to start

This should no longer occur, if it does, request assistance on our Discord Server.

## Other miscellaneous issues with any game on Cemu

Emulation isn't a perfect science and new or old problems can surface, or ones that don't match other descriptions. If you do encounter something that isn't listed here, check the [Game Compatibility List](http://compat.cemu.info/) in addition to [Cemu's GitHub](https://github.com/cemu-project/Cemu/issues).

If what you're having problems with is not listed there, please [make sure that your GPU supports Vulkan 1.1 or OpenGL 4.5](#problems-with-vulkan-within-cemu); if it doesn't you will not have full support, which will result in a multitude of game-breaking bugs that you cannot fix.

If you do have confirmed support, the safest bet is to:

1. Disable all 3rd-party game mods and test the result; many mods cause problems.
2. Disable all graphicPacks (excluding FPS++) and then see if the issue stops.
3. Try renaming your `shaderCache` folder to `shaderCache.old` to check if it's the problem. If the shaderCache isn't the culprit, you can rename your `shaderCache.old` folder back to its original name in order to resume using it after a Cemu restart.

Unfortunately not all issues are repairable. You should always try to <router-link to="/dumping-games">fully redump the game, update, and DLC</router-link> from your Wii U console.

Lastly, please review the following link as it goes over nearly every problem that has been recorded to date! However, most issues are already here.

[Wiki Page for Breath of the Wild Issues](https://wiki.cemu.info/wiki/The_Legend_of_Zelda:_Breath_of_the_Wild)

`You may always visit us on our Discord to see if we can figure out the problem together.`
