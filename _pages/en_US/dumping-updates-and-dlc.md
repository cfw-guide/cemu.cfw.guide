---
title: Dumping Games
permalink: /dumping-updates-and-dlc
---

{% include toc title="Table of Contents" %}

In this section, we look at how to "dump" (copy) your updates and DLC from your Wii U system over to your PC.

You will need to have a homebrewed Wii U for this, as system access is required to retrieve game files. You can do this quite easily if you follow the instructions in [wiiu.hacks.guide](https://wiiu.hacks.guide/). Once you've completed this, come back to this page and continue.

These instructions are nearly identical to copying over digital games, however we will copy the update/DLC files to another place and install them a different way.
{: .notice--info}

## Introduction

For this method, we will be copying update/DLC files over the internet using an FTP (File Transfer Protocol) server and client. This allows you to copy files over your local network directly to your computer.

This process involves accessing the Wii U internal memory! If you don't follow the instructions correctly, you could potentially cause serious damage to your console.
{: .notice--danger}

Never modify any file on your Wii U internal storage unless you know what you're doing.
{: .notice--textbox}

## Requirements

- An SD card
- An SD card reader for your PC
- A [homebrewed Wii U](https://wiiu.hacks.guide/) with Custom Firmware
- Enough space on your PC for the update/DLC dump

## Downloads

- If you use Haxchi or CBHC, download the latest release of [FTPiiU](https://github.com/FIX94/ftpiiu/releases) (FTP server)
- If you use Mocha CFW, download this modified release of [FTPiiU](/assets/files/ftpiiu_everywhere.elf) (FTP Server)
- The latest release of [FileZilla](https://filezilla-project.org/download.php?show_all=1) (FTP Client)

## Preparations

1. Download and install FileZilla to your computer
1. Download and move the `ftpiiu.elf` file to the `\wiiu\apps` folder on your SD Card
1. Ensure you have enough space on your PC for your update/DLC dump
1. Eject your SD card from Windows and put it into your Wii U console

## Dumping Files

### Connecting via FTP

1. Power on your Wii U console
1. Open the Homebrew Channel
1. Run `FTPiiU Everywhere`
1. On your screen you should see a line saying:<br>
    `Listening for data connections at xxx.xxx.xxx.xxx:PORT`<br>
    where each `x` and `PORT` is a number
  - This is the IP address and port of your FTP server
1. Keep this screen open on your Wii U
1. On your computer, open FileZilla
1. Enter in your IP address to the `Host` field on the top bar
  - This is the `xxx.xxx.xxx.xxx` part
1. Enter in your port to the `Port` field on the top bar
  - This is the `PORT` part
1. When warned about an insecure connection, ignore and continue
1. You should now see your Wii U storage displayed on the right half of the FileZilla window

### Transferring Files

1. If your game is stored on your Wii U internal memory, navigate to `storage_mlc/usr/title/`
1. If your game is stored on a USB storage device, navigate to `storage_usb/usr/title/`
1. If you want to dump an update, open the `005000E` folder
1. If you want to dump DLC, open the `005000C` folder
1. In this directory, you should see folders with 8 character names
  - This is the last 8 digits of each game's "Title ID", which allows to Wii U to uniquely identify each game by a number, instead of a name
1. You can use the full list of each game's Title ID to identify which game is which, found [here](http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles)
  - Copy the Title ID of the game and use **Ctrl+F** to search for it
1. Once you've found the game you want, drag and drop it to a folder on your PC on the left-side panel of FileZilla

A lot of the data-less files will fail to transfer, but these can be ignored. To be safe, make sure to retry all failed downloads before exiting to ensure that all files that _should_ be transferred have done so.
{: .notice--primary}

Your game should now begin copying over to your computer. This will take a very long time and you may want to go do something else while this is happening.

After this is finished, you can exit FileZilla and turn off your Wii U.

## Installing to Cemu

1. Open the Cemu application
1. On the top bar, navigate to `File` -> `Install game update or DLC`
1. Go to the location of the update/DLC dump you just made
1. Open the dump folder and open the `meta` folder
1. Double click the `meta.xml` file

Cemu will now automatically install your update/DLC to your mlc01 storage folder. This may take a long time.

When finished, your game should now run with the update/DLC automatically. We can then start on transferring save data from your console over to Cemu.

If you don't want to use your Wii U's save data, simply skip ahead to optimizing.

**1.** Continue to [Transferring Save Data](transferring-save-data)
{: .notice--primary}

**2.** Continue to [Optimizing Cemu](optimizing-cemu)
{: .notice--info}
