## Does my iGPU support OpenGL 4.1/Vulkan?

OpenGL and Vulkan are both rendering APIs, meaning that they help Cemu to emulate the Wii U graphics on your system. Your iGPU **must** support at least OpenGL 4.1 for Cemu to run. If it does not, then you **will not** be able to run Cemu, and there is no way around this for now.

Vulkan is preferred, and if your iGPU supports Vulkan you may see a performance boost, however even fewer chips support it.

You can check to see if your graphics processor is supported [here](https://www.intel.com/content/www/us/en/support/articles/000005524/graphics-drivers.html){:target="_blank"}.

## Game Profiles

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to `Triplecore-recompiler`
  - Switch to `Dualcore-recompiler` or `Singlecore-recompiler` if this stops a game from working

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Open the drop down menu `Graphics API`
1. If Vulkan appears, select it
  - This can increase performance and decreases graphical issues
  - However it can cause stuttering when playing for the first time or after a driver update, but will go away after time
1. Enable "VSync" to double or triple buffering

    ---

7. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`
1. We don't recommend reducing audio latency as it may cause crackling audio in games

## Windows, Shortcuts and Drivers

1. Ensure you are running in maximum performance mode.
1. If a game isn't working, consider creating a shortcut to Cemu and add `-legacy` to the target
  - This may cause other games to stop working
1. If it still doesn't work, update your iGPU driver.
1. If the issue still persists, it's likely that game won't work for your iGPU, or it is too old to run