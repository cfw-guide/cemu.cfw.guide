---
title: Dumping Games
description: Dumping decrypted Wii U games for use in Cemu.
---

In this section, we look at how to "dump" (copy) your games, updates, DLC and saves from your Wii U system over to your PC.

To do this, we are going to run a dumping application through the Wii U browser to transfer your games to a USB storage device or SD card.

For digital games, it is easier to simply dump the account data from your Wii U, then use that to download the games from the eShop directly to your computer. If you have a weaker internet connection, you can also dump digital games directly from the console using the dumping app.

## Requirements

- A FAT32 formatted USB storage device or SD card

::: tip

All storage devices must be formatted to FAT32 with a 32KB (32768) allocation. For storage devices larger than 32GB, use [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) to format it correctly.

:::

<br>

::::: tabs

:::: tab name="Digital titles" :default="true"

1. Turn on your Wii U console
    - If prompted, **do not** format any USB devices through the Wii U
1. Load up the account you are going to use online
    - To switch accounts, open the top-left avatar
1. After you are on the correct account, open the top-left avatar once again
1. Scroll down and turn on the "Save password?" feature

### Launching Dumpling

1. Return to the Wii U Home Menu
1. Ensure that the title you want to dump has the latest update and any relevant DLC installed
    - Some games, such as Breath of the Wild, require an update to perform correctly in Cemu
1. If using a disk, ensure it is inserted before launching Dumpling
1. Insert your USB storage device or SD card
1. Launch the internet browser and open `https://dumplingapp.com/`
1. Tap `Launch Dumpling`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

### Using the Dumpling app

1. Select `Dump files to use Cemu online`
1. Verify that the dump's destination is correct (SD or USB)
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
1. When finished, go back to the Dumpling main menu
1. Exit the Dumpling app

### Copying the online files to Cemu

1. Take your USB storage device or SD card out of your Wii U and put it in your PC
1. Copy `otp.bin` and `seeprom.bin` from the `/dumpling/Online Files` folder to your Cemu directory
    - This is where `Cemu.exe` is located
1. Copy the `sys` and `usr` folders from `/dumpling/Online Files/mlc01` on your SD/USB device to the `mlc01` folder
    - By default, the `mlc01` folder is located in the Cemu folder
    - If you are unsure where it is, check in `Options` -> `General settings` under "MLC Path"
    - Overwrite any files if prompted

::::

:::: tab name="General dumping"

::: warning

Ensure you have enough storage space for your dump. The largest Wii U game is 17GB, however the majority of games will not need that much.

:::

### Launching Dumpling

1. Turn on your Wii U console
    - If prompted, **do not** format any USB devices through the Wii U
1. Ensure that the title you want to dump has the latest update and any relevant DLC installed
    - Some games, such as Breath of the Wild, require an update to perform correctly in Cemu
1. If using a disk, ensure it is inserted before launching Dumpling
1. Insert your USB storage device or SD card
1. Launch the internet browser and open `https://dumplingapp.com/`
1. Tap `Launch Dumpling`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

### Using the Dumpling app

1. Select `Dump a game disc`
1. Verify that the dump's destination is correct (SD or USB)
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
    - This can take a very long time, we encourage you to dump one game at first
1. Once finished, repeat Step 1 to dump your next game or turn off your Wii U and connect your SD card or USB storage device to your computer

::::

:::::

---

Now that you have got your dumps, you can proceed to the next step which takes you through how to install your games in Cemu.
