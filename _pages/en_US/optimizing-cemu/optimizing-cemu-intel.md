Ensure you are running the [latest drivers](https://downloadcenter.intel.com/product/80939/Graphics-Drivers) and that your iGPU supports [Vulkan or OpenGL 4.5+](https://www.intel.com/content/www/us/en/support/articles/000005524/graphics-drivers.html).
{: .notice--primary}

OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.
{:.notice--info}

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Open the "Graphics API" drop-down menu 
1. If Vulkan appears, select it
  - This can increase performance and decrease graphical issues
1. Ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
  - If this is an NVIDIA or AMD card, follow the respective instructions instead of the Intel instructions
  
### Vulkan

1. Set "VSync" to `Match emulated display (Experimental)`
1. For Vulkan, enable "Async shader compiler"
  - This will cause graphical bugs on first playthroughs in exchange for a smoother experience
  - Ensure that you have the latest GPU drivers before enabling this
  - This only works on 6th-gen CPUs and above
  
### OpenGL

1. Set "VSync" to `Off`

### Audio

1. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`

## Shortcuts and Drivers

1. Ensure you are running in maximum performance mode.
1. If a game isn't working, consider creating a shortcut to Cemu and add `-legacy` to the target
  - This may cause other games to stop working
1. If it still doesn't work, update your iGPU driver.
1. If the issue still persists, it's likely that game won't work for your iGPU, or it is too old to run
