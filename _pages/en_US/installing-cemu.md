---
title: Installing Cemu
permalink: /installing-cemu
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

Setting this is optional. However, if left unchecked, the mlc01 path will be stored in the Cemu directory. If the drive you're using to store Cemu has a low amount of remaining space, we recommend you set this to store your mlc01 (and thus your Updates, DLC, and Save Data) on a different drive.  If you choose to do this, it's very important that you remember this location.

###### _Note: Default mlc01 path may be changed in the future_
{% endcapture %}

<div class="notice--textbox">{{ mlc01-notice | markdownify }}</div>

### Games path

{% capture games_path-notice %}
This is rather self explanatory. Set this path to where you're going to keep your games. It's important to note that you **must not** store your Updates or DLCs in this directory and you cannot use the `mlc01` directory, either. We typically recommend to place a `Games` folder in your `Cemu` folder/directory for easy access.

If you don't have any games, don't worry, we're going to cover that later. For now, set it to where you're going to put those games.
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

3. Set your Wii U internal storage folder by clicking "Browse" under `mlc01 path`
  - Read the introductions at the top of this page if you do not know what the `mlc01 path` or `games path` are.
1. Set your `Game paths` to your games folder by clicking "Browse"
1. Click `Download community graphics packs` button to automatically download the latest packs
1. Click `Next`

### Finishing set-up
---

1. For now, don't click `Configure Input`
  - We will do this next in more detail
1. Enable "Automatically check for updates" 
  - If you don't wish to get update notifications, you may update Cemu manually with an option under the Help menu
1. Click `Close`

Now we've gone through the quickstart guide, we'll move onto properly mapping controller inputs, (including motion controls).

Continue to [Controller Configuration](controller-configuration)
{: .notice--info}
