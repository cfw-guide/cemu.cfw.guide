---
title: Installing Cemu
---

{% include toc title="Table of Contents" %}

This section will take you through installing and configuring Cemu for the very first time. It is important you read all of the text here before proceeding to fully understand the instructions.

## Introduction

Installing Cemu is very simple. You simply need to extract a `.zip` file to somewhere on your PC. In this guide, we use the Desktop as this location.

Afterwards, we tweak the program slightly to run better, including fixing scaling issues and making sure it runs as administrator to ensure it has access to the files it needs.

When we finally launch the application, it will take us through the quick-start guide. This is very user friendly and explains everything very well. It takes you through setting up your mlc01 path, your games path and downloading graphics packs.

On the next page, it'll ask you to configure your button inputs (this is where you set up your controller) and other settings.

### mlc01 path
---

{% capture mlc01-notice %}
The mlc01 path stores what the Wii U would normally store on its internal memory. It's essentially the emulated hard drive of the system. This means it stores all system files, game saves, updates and DLC.

Setting this is optional. If left unchecked, the mlc01 path will be stored in the Cemu directory, however we recommend you store it somewhere else, so that if the Cemu folder is deleted, your saves will be kept.

###### _Note: Default mlc01 path may be changed in the future_
{% endcapture %}

<div class="notice--textbox">{{ mlc01-notice | markdownify }}</div>

### Games path
---

{% capture games_path-notice %}
This is rather self explanatory. Set this path to where you're going to keep your games.

If you don't have any games, don't worry, we're going to cover that later. For now, set it to where you're going to put those games.
{% endcapture %}

<div class="notice--textbox">{{ games_path-notice | markdownify }}</div>

### Community Graphics Packs
---

{% capture games_path-notice %}
There's a button you can press called "Download community graphics packs". This will download a set of graphics packs for a select number of games that'll allow you to alter how games run.

This includes letting games run at higher resolutions, higher framerates, adjusting bloom, anti-aliasing, shaders and other features. We recommend that you download these to tweak your games for better performance.
{% endcapture %}

<div class="notice--textbox">{{ games_path-notice | markdownify }}</div>

## Downloads

- The latest release of [Cemu](https://cemu.info/#download){:target="_blank"}

## Preparing Cemu

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

## Configuring Cemu

1. Double click the Cemu application
1. When prompted, grant administrator access

    You will now be greeted with the Cemu quickstart guide. This take you through setting up the emulator for first use.
    {:.notice--textbox}

3. Set your Wii U internal storage folder by clicking "Browse" under `mlc01 path`
  - Read the introductions if you don't know what this or the following are
1. Set your game folder clicking "Browse" under `Game paths`
1. Click the `Download community graphics packs` button
1. Click `Next`
1. Ensure whichever controller (or keyboard) you'd like to use is connected to your computer
1. Click `Configure input`

### Controller set-up
---

1. Select what Wii U controller you'd like to emulate
  - If you plan on using motion controls in games such as Splatoon or BOTW, select `Wii U Gamepad`
1. Select the controller API you're using
  - If you're unsure, check XInput or DirectInput for your controller
1. Select the controller you'd like to use
1. Map each Wii U button to the preferred button on your controller
1. Once you're finished, enter a profile name in the `Profile` text box and click `Save`

### Finishing set-up
---

1. Enable "Automatically check for updates"
1. Click `Close`

Your Cemu set-up should now be complete, but there's a couple things we need to do first before we load some games onto the system, to make sure games run as fast as possible.

Continue to [Optimizing Cemu](optimizing-cemu).
{: .notice--info}
