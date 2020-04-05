---
title: Optimizing Cemu
---

In this section we make sure that Cemu is running the fast it possibly can. This involves changing some options in Cemu and your GPU settings to make sure we're getting the best performance.

To continue, we need to know what GPU your system is using. If you don't know what type of graphics processor you have, open the Settings app on Windows 10. Then navigate to `System` -> `Display` -> `Advanced display settings`.

Under your display name, it should say `Display #: Connected to [GPU]`. It should say either Intel, AMD or NVIDIA. That will tell you what brand of GPU you have.

Please select your GPU brand below:

<button class="btn btn--large btn--info" id="nvidiabtn" onclick="shownvidia()">NVIDIA</button>
<button class="btn btn--large btn--info" id="amdbtn"    onclick="showamd()"   >AMD</button>
<button class="btn btn--large btn--info" id="intelbtn"  onclick="showintel()" >Intel</button>

{% capture nvidia-instructions %}

## Game Profiles

1. Open the Cemu main menu
1. Right click on your game(s) and click `Edit game profile`
1. Set "Mode" to `Triplecore-recompiler`
  - Switch to `Dualcore-recompiler` or `Singlecore-recompiler` if this stops a game from working

## GPU Settings

1. Open NVIDIA Control Panel
  - You can access this by right clicking on your Desktop
1. Make sure you are on the `Manage 3D Settings` section
  - This is the default section when opening the control panel
1. Go to the `Program Settings` tab
1. In "1. Select a program to customise" click `Add` -> `Browse`
1. Navigate to your Cemu folder and select the Cemu executable
1. If you are on a laptop with dual graphics, under "2. select the preferred graphics processor for this program" select `High-performance NVIDIA processor`
1. Under `OpenGL rendering GPU` select your main graphics processor
1. Under `Power management` select `Prefer maximum performance`
1. Enable the `Threaded optimization` option
1. Enable the `Triple buffering` option
1. Enable the `Vertical sync` option
  - If you have a more powerful system, you can set it to `Fast` instead
  - Enabling will reduce [screen tearing](https://en.wikipedia.org/wiki/Screen_tearing){:target="_blank"}, however can increase input lag in some rare cases
1. If you have a compatible display, enable G-Sync

## Cemu Settings

1. Open the Cemu main menu
1. Click `Options` -> `General settings` on the top bar

    ---

3. Navigate to the `Graphics` tab
1. Change the `Graphics API` to `OpenGL`
  - This can cause stuttering when playing for the first time, but will go away after time
1. Ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
1. Enable `VSync` to double or triple buffering

    ---

7. Navigate to the `Audio` tab
1. Under `General`, change `API` to `XAudio2`
1. We don't recommend reducing audio latency as it may cause crackling audio in games

{% endcapture %}

<div id="nvidiainstr">{{ nvidia-instructions | markdownify }}</div>

{% capture amd-instructions %}

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
1. Change the `Graphics API` to `Vulkan`
  - This is very important and will increase performance by up to 50% on AMD GPUs
  - This can cause stuttering when playing for the first time or after a driver update, but will go away after time
1. Ensure that `Graphics Device` is correct and using your most powerful card in the case of devices with dual graphics
1. Enable `VSync` to double or triple buffering

    ---

7. Navigate to the `Audio` tab
1. Under `General`, change "API" to `XAudio2`
1. We don't recommend reducing audio latency as it may cause crackling audio in games

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

{% endcapture %}

<div id="amdinstr">{{ amd-instructions | markdownify }}</div>

{% capture intel-instructions %}

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

{% endcapture %}

<div id="intelinstr">{{ intel-instructions | markdownify }}</div>

<script>
  var nvidia = document.getElementById("nvidiainstr");
  var nvidiabtn = document.getElementById("nvidiabtn");

  var amd = document.getElementById("amdinstr");
  var amdbtn = document.getElementById("amdbtn");

  var intel = document.getElementById("intelinstr");
  var intelbtn = document.getElementById("intelbtn");

  nvidia.style.display = "block";
  amd.style.display = "none";
  intel.style.display = "none";
  nvidiabtn.classList.remove("btn--info");
  nvidiabtn.classList.add("btn--success");

  function shownvidia() {
    nvidia.style.display = "block";
    amd.style.display = "none";
    intel.style.display = "none";

    nvidiabtn.classList.remove("btn--info");
    amdbtn.classList.remove("btn--danger");
    amdbtn.classList.add("btn--info");
    intelbtn.classList.remove("btn--primary");
    intelbtn.classList.add("btn--info");
    nvidiabtn.classList.add("btn--success");
  }

  function showamd() {
    nvidia.style.display = "none";
    amd.style.display = "block";
    intel.style.display = "none";

    amdbtn.classList.remove("btn--info");
    nvidiabtn.classList.remove("btn--success");
    nvidiabtn.classList.add("btn--info");
    intelbtn.classList.remove("btn--primary");
    intelbtn.classList.add("btn--info");
    amdbtn.classList.add("btn--danger");
  }

  function showintel() {
    nvidia.style.display = "none";
    amd.style.display = "none";
    intel.style.display = "block";

    intelbtn.classList.remove("btn--info");
    nvidiabtn.classList.remove("btn--success");
    nvidiabtn.classList.add("btn--info");
    amdbtn.classList.remove("btn--danger");
    amdbtn.classList.add("btn--info");
    intelbtn.classList.add("btn--primary");
  }
</script>
