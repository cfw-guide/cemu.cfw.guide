---
title: Installing Cemu
description: Installing and configuring Cemu for the first time.
---

This section will take you through installing and configuring Cemu for the very first time. It is important you read all of the text here before proceeding to fully understand the instructions.

## Introduction

Cemu can be installed by extracting a `.zip` file to somewhere on your PC. In this guide, we use the Desktop as this location.

Before we launch it, we tweak the program slightly to run better, including fixing some scaling issues and making sure it runs as administrator. This is to ensure it has access to all the files it needs.

When we finally open the application, it will take us through the quick-start guide. This helps to set up the emulator properly with the necessary files and folders.

## Community Graphics Packs

Community graphics packs allow you to alter a game visually or how it will run, including:

- Displaying at higher resolutions
- Running at higher framerates
- Adjusting colours and bloom
- Improving anti-aliasing
- Applying game modifications

We recommend that you download these to allow tweaking your games for better performance.

## Downloads

- The latest release of [Cemu](https://cemu.info/#download)
- The latest release of [Cemuhook](https://cemuhook.sshnuke.net/)

## Preparations

1. Extract the Cemu `.zip` file to your Desktop
    - **Do not** extract it to any folders that require admin permissions, such as Program Files
1. Right click on the Cemu executable
1. Click `Properties`
1. Navigate to the `Compatibility` tab
1. Enable the option "Disable fullscreen optimizations"
1. Click on `Change high DPI settings`
1. Enable "Use this setting to fix scaling programs for this program instead of the one in settings"
1. Enable "Override high DPI scaling behaviour. Scaling performed by: Application"
1. Click `Apply` -> `OK`

These options are set to help avoid issues on various Windows versions, file restrictions, or display resolutions.  That said, one or more of these options will not be necessary for everyone, but not setting them may result in complications.

![A screenshot of the settings necessary for Cemu](/assets/images/cemu-properties.png)

## Installing Cemuhook

1. Extract the contents of the Cemuhook `.zip` file to the Cemu directory
1. Ensure that your Cemu directory looks like this:

![A screenshot of the Cemu directory with Cemuhook installed](/assets/images/cemuhook.png)

## Configuration

1. Double click the Cemu application
1. When prompted, grant administrator access
1. You will now be greeted with the Cemu quickstart guide
    - This will take you through setting up the emulator for first use
1. Create a folder in a safe location named "<router-link to="/faq/#what-is-the-mlc01-folder">mlc01</router-link>"
1. Leave the "Game paths" field blank
1. Click "Download <router-link to="/faq/#what-are-community-graphics-packs">community graphics packs</router-link>"
1. Click `Next`

![A screenshot of the Cemu quickstart guide](/assets/images/cemu-quickstart-guide.png)

## Finishing set-up

1. For now, do not click `Configure Input`
    - We will do this next in more detail
1. Enable "Automatically check for updates"
    - If you don't wish to get update notifications, you may update Cemu manually with an option under the Help menu
1. Click `Close`

Now we've gone through the quickstart guide, we'll move onto properly mapping controller inputs, (including motion controls).
