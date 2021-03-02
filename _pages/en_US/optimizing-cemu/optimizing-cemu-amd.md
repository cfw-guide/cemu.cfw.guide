Ensure you are running the [latest drivers](https://www.amd.com/en/support) and that your GPU supports Vulkan or OpenGL 4.5+.
{: .notice--primary}

 OpenGL 4.1 to 4.4 will work, however you may experience graphical issues.
 {:.notice--info}

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

### Graphics

1. Navigate to the `Graphics` tab
1. Change the "Graphics API" to `Vulkan`
  - This is very important and will increase performance by up to 50% on AMD GPUs
1. Ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
1. Set "VSync" to `Match emulated display (Experimental)`
  - If you use a display with variable refresh rate (FreeSync), set this to `Off` instead
  
    This feature is experimental and may cause issues. If you experience instabilities or other issues, disable it.
	{:.notice--danger}

1. Enable "Async shader compiler"
  - This will cause graphical bugs on first playthroughs in exchange for a smoother experience
  - Ensure that you have the latest GPU drivers before enabling this
  
### Audio

1. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`
