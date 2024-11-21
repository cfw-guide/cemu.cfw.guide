---
title: Using Dumpling
description: Dumping decrypted Wii U games for use in Cemu.
redirect_from: /dumping-games
---

In this section, we look at how to "dump" (copy) any games, updates, DLC, saves and account data from your Wii U system over to your PC.

To do this, we are going to run a dumping application through the Wii U browser to transfer your games and account information to a USB storage device or SD card.

## Requirements

- A Wii U console
- A FAT32 formatted USB storage device or SD card

::: tip

All storage devices must be formatted to FAT32 with a 32KB (32768) allocation. For storage devices larger than 32GB, use [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) to format it correctly.

:::

## Instructions

### Preparations

1. Turn on your Wii U console
    - If prompted, **do not** format any USB devices through the Wii U
1. Load up the account you are going to use online
    - To switch accounts, open the top-left avatar
1. After you are on the correct account, open the top-left avatar once again
1. Scroll down and turn on the "Save password?" feature

### Launching Dumpling

1. Return to the Wii U Home Menu
1. If dumping a disk, ensure it is inserted before launching Dumpling
1. Insert your USB storage device or SD card
1. Launch the internet browser and open `https://dumplingapp.com/`
1. Tap `Launch Dumpling`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

## Using dumpling

Dumpling can be used to dump both games and any files necessary for online usage. We recommend dumping any disc games, and then dumping the relevant online files. This way, any digital games, updates or DLCs can be downloaded directly from the eShop servers.

Due to the slow transfer speeds of the Wii U, this can often be a lot faster than directly copying the files over. If you have a weaker internet speed, you can also use dumpling to dump any other titles on your system.

We also recommend dumping the Friend List application. If you wish to play online using Cemu in the future, running this in Cemu will allow you to add friends without using your Wii U.

### Game discs

1. Select `Dump a game disc`
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
    - This may take a long time
1. When finished, go back to the Dumpling main menu

### Online files

1. Select `Dump files to use Cemu online`
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
1. When finished, go back to the Dumpling main menu

### Friend List application

This can be installed like any other game dump in the next section.

1. Select `Dump Wii U applications (e.g. Friend List, eShop etc.)`
1. Select `Friend List` from the list 
1. Press `+` then select `[Confirm]` to begin dumping
1. When finished, go back to the Dumpling main menu

## Copying Online Files to Cemu

1. Exit the Dumpling app and turn off your Wii U
1. Take your USB storage device or SD card out of your Wii U and put it in your PC
1. Launch Cemu, then click on File -> Open Cemu Folder
1. Copy `otp.bin` and `seeprom.bin` from the `/dumpling/Online Files` folder to your Cemu folder, which you can open with Cemu's File menu, Open Cemu Folder
1. Copy the `sys` and `usr` folders from `/dumpling/Online Files/mlc01` on your SD/USB device to the `mlc01` folder
    - Open the `mlc01` folder with Cemu's File menu, Open MLC Folder
    - Overwrite any files if prompted

Now that you have got your online data and dumps, you can proceed to the next step which takes you through how to install your games in Cemu.
