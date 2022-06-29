---
title: Installing Cemu
description: Installing and configuring Cemu for the first time.
---

This section will take you through installing and configuring Cemu for the very first time. It is important you read all of the text here before proceeding to fully understand the instructions.

## Introduction

Cemu can be installed by extracting a `.zip` file to some location on your PC, preferably avoiding locations that require elevated privileges. In this guide, we will use the Desktop.

Before launching it, we will slightly tweak the program to fix some scaling issues.

When we finally open the application, it will take us through the quick-start guide. This will help us to set up the emulator properly with the necessary files and folders.

## Community graphic packs

Community graphic packs allow you to visually alter a game and how it will run, including:

- Displaying at higher resolutions
- Running at higher framerates
- Adjusting colours and bloom
- Improving anti-aliasing
- Applying game modifications

We recommend that you download these to allow tweaking your games for better performance.

## Downloads

- The latest release of [Cemu](https://cemu.info/#download)
    - Linux users can use a [Lutris script](https://lutris.net/games/cemu/) to run Cemu _(Linux is not officially supported; your mileage may vary)_

## Preparations

1. Extract the Cemu `.zip` file to your Desktop
    - **Do not** extract it to any folders that require admin permissions, such as Program Files
1. Right click on the Cemu executable
1. Click `Properties`
1. Navigate to the `Compatibility` tab
1. Enable the option "Disable full-screen optimizations"
1. Click on `Change high DPI settings`
1. Enable "Use this setting to fix scaling problems for this program instead of the one in settings"
1. Enable "Override high DPI scaling behaviour. Scaling performed by: Application"
1. Click `Apply` -> `OK`

These options are set to help avoid issues on various Windows versions, and display resolutions. That said, one or more of these options will not be necessary for everyone, but not setting them may result in complications.

![A screenshot of the settings necessary for Cemu](/assets/images/cemu-properties.png)

## Configuration

1. Double click the Cemu application
1. You will now be greeted with the Cemu quickstart guide
    - This will take you through setting up the emulator for first use
1. Create a folder in a safe location named "<router-link to="/faq/#what-is-the-mlc01-folder">mlc01</router-link>"
1. Leave the "Game path" field blank
1. Click "Download <router-link to="/faq/#what-are-community-graphics-packs">community graphic packs</router-link>"
1. Click `Next`

![A screenshot of the Cemu quickstart guide](/assets/images/cemu-quickstart-guide.png)

## Finishing set-up

1. For now, do not click `Configure input`
    - We will do this next in more detail
1. Enable "Automatically check for updates"
    - If you do not wish to get update notifications, you may disable this option and update Cemu manually with an option under the Help menu
1. Click `Close`

---

Now that we have gone through the quickstart guide, we will move onto properly mapping controller inputs (including motion controls).
