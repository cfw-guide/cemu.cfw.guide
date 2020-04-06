---
title: Transferring Save Data
permalink: /transferring-save-data
---

{% include toc title="Table of Contents" %}

In this section, we look at how to copy over your game saves from your Wii U system over to your PC.

You will need to have a homebrewed Wii U for this, as system access is required to retrieve game files. You can do this quite easily if you follow the instructions in [wiiu.hacks.guide](https://wiiu.hacks.guide/). Once you've completed this, come back to this page and continue

These instructions are nearly identical to copying over digital games/updates/DLC, however we will copy the save data to another place and install them a different way.
{: .notice--info}

## Introduction

For this method, we will be copying save files over the internet using an FTP (File Transfer Protocol) server and client. This allows you to copy files over your local network directly to your computer.

This process involves accessing the Wii U internal memory! If you don't follow the instructions correctly, you could potentially cause serious damage to your console.
{: .notice--danger}

Never modify any file on your Wii U internal storage unless you know what you're doing.
{: .notice--warning}

## Requirements

- An SD card
- An SD card reader for your PC
- A [homebrewed Wii U](https://wiiu.hacks.guide/) with Custom Firmware

## Downloads

- If you use Haxchi or CBHC, download the latest release of [FTPiiU](https://github.com/FIX94/ftpiiu/releases) (FTP server)
- If you use Mocha CFW, download this modified release of [FTPiiU](/assets/files/ftpiiu_everywhere.elf) (FTP Server)
- The latest release of [FileZilla](https://filezilla-project.org/download.php?show_all=1) (FTP Client)

## Preparations

1. Download and install FileZilla to your computer
1. Download and move the `ftpiiu.elf` file to the `\wiiu\apps` folder on your SD Card
1. Eject your SD card from Windows and put it into your Wii U console

## Copying Files

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

### Transferring saves

1. If your game is stored on your Wii U internal memory, navigate to `storage_mlc/usr/save/00050000`
1. If your game is stored on a USB storage device, navigate to `storage_usb/usr/save/00050000`
1. In this directory, you should see folders with 8 character names
  - This is the last 8 digits of each game's "Title ID", which allows to Wii U to uniquely identify each game by a number, instead of a name
1. You can use the full list of each game's Title ID to identify which game is which, found [here](http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles)
  - Copy the Title ID of the game and use **Ctrl+F** to search for it
1. Once you've found the save for the game you want, open that folder
1. There will be a folder named `8000000X` for each user, numbered in the order of creation
1. Find the one that belongs to your account, and then copy that over to the left-side panel in FileZilla, over to your computer

If any downloads fail, right click on them in the bottom panel and try to download them again.
{: .notice--primary}

After this is finished, you can exit FileZilla and turn off your Wii U.

## Copying to Cemu

1. Open the Cemu application
1. Right click on the game you'd like to import save data to
1. Click `Save directory`
1. Enter the `user` folder
1. Copy over your save data to that folder
1. If there is a `80000001` folder already there, rename it to something else
  - This will make your old save data inaccessible until you rename it back
1. Copy over your `8000000X` folder and rename it to `80000001` if it is not named that already

The game should now boot with your save data installed. If it doesn't check your account settings and make sure you are using the default Cemu user `80000001`.

If you want to enable online multiplayer and play with people across the world on Nintendo servers, proceed to our online play guide.

If you're not going to use online, skip ahead to our optimization guide to ensure you get the best performance.

**1.** Continue to [Online Play](online-play)
{: .notice--primary}

**2.** Continue to [Optimizing Cemu](optimizing-cemu)
{: .notice--info}
