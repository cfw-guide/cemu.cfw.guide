---
title: Dumping Games
description: Dumping decrypted Wii U games for use in Cemu.
---

In this section, we look at how to "dump" (copy) your games, updates, DLC and saves from your Wii U system over to your PC.

To do this, we're going to need to use a custom homebrew application to dump your games. This is done using an exploit in the Wii U browser.

If your games are stored on USB storage, it may be faster to use the [DumpsterU](https://github.com/GaryOderNichts/DumpsterU) tool instead.

## Requirements

- A USB storage device or SD card to dump your games to

::: tip
All storage devices must be formatted to FAT32 with 32KB (32768) allocation. For storage devices larger than 32GB, use [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) to format it correctly.
:::

::: warning
Ensure you have enough storage space for your dump. The largest Wii U game is 17GB, however the majority of games won't need that much.

## Launching dumpling

1. Turn on your Wii U console
    - If prompted, **do not** format any USB devices through the Wii U
1. Ensure that the title you want to dump has the latest update and any relevant DLC installed
    - Some games, such as Breath of the Wild, require an update to function correctly in Cemu
1. If using a disk, ensure it is inserted before launching dumpling
1. Insert your USB storage device or SD card
1. Launch the internet browser and open `crementif.github.io/dumpling-launcher`
1. Tap `Launch dumpling`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again

## Using the dumpling app

1. Select `Dump digital games` or `Dump a game disc` depending on your scenario
    - For Digital, select your games then press **(START)**
    - For Disc, continue below
1. Verify that the dump's destination is correct (SD or USB)
1. Ensure your desired Wii U Account is set
1. Select `Start` to begin dumping
    - This can take a very long time, we encourage you to dump one game at first.
1. Once finished, dump your next game at Step 1 or turn off your Wii U and put your SD or USB that you dumped to into your computer

---

Now you've got your dumps, you can proceed to the next step which takes you through how to install your games in Cemu.
