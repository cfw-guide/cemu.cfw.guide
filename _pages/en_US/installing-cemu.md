---
title: Installing Cemu
permalink: /installing-cemu
excerpt: Installing and configuring Cemu for the first time.
---

{% include toc title="Table of Contents" %}

This section will take you through installing and configuring Cemu for the very first time. It is important you read all of the text here before proceeding to fully understand the instructions.

## Introduction

Cemu can be installed by extracting a `.zip` file to somewhere on your PC. In this guide, we use the Desktop as this location.

Before we launch it, we tweak the program slightly to run better, including fixing some scaling issues and making sure it runs as administrator. This is to ensure it has access to all the files it needs.

When we finally open the application, it will take us through the quick-start guide. This helps to set up the emulator properly with the necessary files and folders.

### mlc01 path

{% capture mlc01-notice %}
The mlc01 path stores what the Wii U would normally store on its internal memory. It's essentially the emulated hard drive of the system. This means it stores all system files, system apps, installed updates, DLC, and created save data.

Setting this is optional. By default, the mlc01 path will be stored in the Cemu directory. We recommend not changing this unless you have limited space available on the current disk.
{% endcapture %}

<div class="notice--textbox">{{ mlc01-notice | markdownify }}</div>

### Games path

{% capture games_path-notice %}
This is rather self explanatory, it's a folder where you keep your games. Due to the way that Cemu now installs games, this is unnecessary.
{% endcapture %}

<div class="notice--textbox">{{ games_path-notice | markdownify }}</div>

### Community Graphics Packs

{% capture games_path-notice %}
There's a button you can press called "Download community graphics packs". This will download a set of graphics packs for a select number of games, these packs will allow you to alter a game visually or how it will run.

This includes letting games display at higher resolutions, run with higher framerates, adjusting bloom, improve anti-aliasing, use game mods, and an assortment of other features. We recommend that you download these to allow tweaking your games for better performance.
{% endcapture %}

<div class="notice--textbox">{{ games_path-notice | markdownify }}</div>

## Downloads

- The latest release of [Cemu](https://cemu.info/#download)

## Preparations

1. Extract the Cemu `.zip` file to your Desktop
1. Open the Cemu folder
1. Right click on the Cemu executable
1. Click `Properties`
1. Navigate to the `Compatibility` tab
1. Enable the option "Disable fullscreen optimizations"
1. Enable "Run this program as administrator"
1. Click on `Change high DPI settings`
1. Enable "Use this setting to fix scaling programs for this program instead of the one in settings"
1. Enable "Override high DPI scaling behaviour. Scaling performed by: Application"
1. Click `Apply` -> `OK`

    These options are set to help avoid issues on various Windows versions, file restrictions, or display resolutions.  That said, one or more of these options will not be necessary for everyone, but not setting them may result in complications.
    {:.notice--textbox}

![]({{ "/assets/images/cemu-properties.png" | absolute_url }})
{:.notice--textbox}

## Configuration

1. Double click the Cemu application
1. When prompted, grant administrator access

    You will now be greeted with the Cemu quickstart guide. This take you through setting up the emulator for first use.
    {:.notice--textbox}

    ![]({{ "/assets/images/cemu-quickstart-guide.png" | absolute_url }})
    {:.notice--textbox}

3. `Custom mlc01 path`
  - On a storage drive that Cemu will always have access to, with a lot of free space, create a folder in a safe location named `mlc01`. Otherwise, leave this field blank to have `mlc01` default to be next to Cemu.exe in Cemu's folder. `mlc01` contains all of your game installs, installed updates, DLCs, and game save files. If you delete this folder everything will be gone. If this path ever gets reset, make sure to set it again in `Options > General Settings`
1. `Game paths`
  - You can leave this field blank and install RPX format titles to Cemu's `mlc01` storage with `File > Install ...` but keep in mind that you will need double the space of the game while installing it. You will likely want to remove the source installation files after you are done to save space.
  - Alternatively, on a storage drive that Cemu will always have access to, with a lot of free space, create a folder in a safe location named `Games` or equivalent. In this directory you can place your WUD/WUX format games, or if you have extracted RPX format titles, make a folder for each game (labeled for the game) to place their `code` `content` and `meta` folders. Once you set your `Game paths` to the `Games` folder itself, it will list all of the games in Cemu.
  
    If your hardware changes where the storage drive letters change, this can disrupt Cemu from finding your `mlc01` path or your `Game paths`, if you ever start Cemu and something is missing, make sure to restart your computer - otherwise, please make sure you verify your paths are set correctly!
    {:.notice--textbox}
  
5. Click `Download community graphics packs` button to automatically download the latest packs
1. Click `Next`

### Finishing set-up
---

1. For now, do not click `Configure Input`
  - We will do this next in more detail
1. Enable "Automatically check for updates"
  - If you don't wish to get update notifications, you may update Cemu manually with an option under the Help menu
1. Click `Close`

Now we've gone through the quickstart guide, we'll move onto properly mapping controller inputs, (including motion controls).

Continue to [Controller Configuration](controller-configuration)
{: .notice--info}
