## Game Profiles

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to:
  - If you use a hex-core or higher CPU, set to `Triplecore-recompiler`
  - With a quad-core CPU, set to `Dualcore-recompiler`
  - With a dual-core CPU, set to `Singlecore-recompiler`

Using triple or dualcore recompiler can cause some games to crash. If a game stops working because of this, try at a lower setting.

![]({{ "/assets/images/cemu-game-profile.png" | absolute_url }})

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Change the `Graphics API` to `Vulkan`
  - This is very important and will increase performance by up to 50% on AMD GPUs
  - This can cause stuttering when playing for the first time or after a driver update, but will go away after time
1. Ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
1. Enable `VSync` to double or triple buffering

    ---

7. Navigate to the `Audio` tab
1. Under `General`, change `API` to `XAudio2`

## GPU Settings

1. Open Catalyst Control Center
  - You can access this by right clicking on your Desktop
1. Navigate to the `Gaming` tab
1. Manually add a program and navigate to your Cemu directory
1. Select your Cemu executable
1. Disable `Anti-Aliasing` for performance increase
1. Disable `Anisotrophic Filtering` to reduce texture issues
1. Set `Texture Filtering Quality` to `Performance`
1. Enable `Surface Format Optimization` for the chance to benefit performance
1. Disable `Tessellation Mode` to reduce texture/graphical glitches
1. Enable `OpenGL Triple Buffering` to reduce screen tearing
1. Disable `Integer Scaling` to avoid getting a blurry image in Cemu
