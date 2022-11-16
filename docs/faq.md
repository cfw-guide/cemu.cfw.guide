---
title: "FAQ"
description: Answers to commonly asked questions about the Cemu emulator.
---

## Does Cemu support 32-bit systems?

No, Cemu will never support 32-bit systems. 32-bit applications can only use up to 4GB of RAM, which Cemu frequently exceeds.

## Does Cemu support macOS or Linux?

Yes, experimental native builds are now available for both macOS and Linux.

For Linux users, we suggest using [Wine](https://www.winehq.org/) and [Lutris](https://lutris.net/) to run Cemu. Experimental native builds and AppImage builds are also [available](https://github.com/cemu-project/Cemu/releases) if you would like to use them.

If you have an Intel Mac, we suggest running [Bootcamp](https://support.apple.com/en-gb/guide/bootcamp-control-panel/bcmp29b8ac66/mac) to install Windows, and to run Cemu there instead. The macOS build uses a translation layer that can cause low compatibility, crashes, graphical issues and slow performance.

If you have an Apple Silicon Mac, or don't want to install Windows on your Intel Mac, I have written an installation guide for the native macOS builds on my personal site at [cemu.emiyl.com/installation](https://cemu.emiyl.com/installation).

## How do I play games if I do not have a Wii U?

You can not. We do not support piracy here and obtaining games without dumping them from your own console is illegal.

## Can I play online without dumping files from my Wii U?

No, you must dump files from your Wii U to play online.

Think of them as a "username and password" to Nintendo servers. Nintendo gives each Wii U an authentication to access their servers, and without it, Nintendo will not allow you to connect to them.

## What is the mlc01 folder?

The mlc01 path stores the emulated Wii U internal memory, including:

- System files and apps
- Installed games, updates and DLC's
- User-created save data

This should be on a storage drive that Cemu will always have access to, with lots of free space. By default, the `mlc01` path will be stored in the Cemu directory.

If you delete this folder everything will be gone. If this path ever gets reset, make sure to set it again in `Options` -> `General settings` -> `MLC Path`.

## What are community graphic packs?

Community graphic packs allow you to visually alter a game and how it will run, including:

- Displaying at higher resolutions
- Running at higher framerates
- Adjusting colours and bloom
- Improving anti-aliasing
- Applying game modifications

We recommend that you download these to allow tweaking your games for better performance.
