---
title: Dumping games (FTP)
---

## Introduction

For this method, we will be directly copying game files from your Wii U storage over to your PC.

This is done over the internet using an FTP (File Transfer Protocol) server and client. This will allow you to copy files over your local network directly to your computer.

::: danger
This process involves accessing the Wii U's internal memory! If you do not follow the instructions correctly, you could potentially cause serious damage to your console.
:::

## Requirements

- A USB storage device or SD card for homebrew

## Downloads

- The latest release of [MochaCFW](https://www.wiiubru.com/appstore/zips/mocha.zip)
  - This will also work with (Coldboot) Haxchi
- The Mocha [config](/assets/files/config.ini)
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - You will need to download the `payload.zip` file
- The v1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` file
- A modified release of [FTPiiU](/assets/files/ftpiiu_everywhere.elf) (FTP server)
  - If you use (Coldboot) Haxchi, download the latest release of [FTPiiU](https://github.com/FIX94/ftpiiu/releases) (FTP server)
- The latest release of [FileZilla](https://filezilla-project.org/download.php?show_all=1) (FTP client)

## Preparations

1. Download and install FileZilla to your computer
1. Extract the `mocha.zip` file to the root of your USB storage device or SD card
    - If prompted to, replace any pre-existing files
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your USB storage device or SD card
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder in your USB storage device or SD card
1. Copy the `payload.elf` file from the `payload.zip` file to the `/wiiu` folder in your USB storage device or SD card
1. Download and move the `ftpiiu.elf` file to the `\wiiu\apps` folder in your USB storage device or SD Card
1. Ensure you have enough space on your PC for your game
1. Eject your USB storage device or SD card from Windows and put it into your Wii U console

## Launching MochaCFW

1. Turn on your Wii U console
1. Launch the internet browser and open `http://wiiuexploit.xyz/`
1. Tap `Run Homebrew Launcher!`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again
1. Once in the Homebrew Launcher, launch MochaCFW
    - This should return you back to the Homebrew Launcher

## Connecting to your Wii U

1. Run `FTPiiU Everywhere` from the Homebrew Launcher
1. On your screen, you should see a line saying:<br>
      `Listening for data connections at xxx.xxx.xxx.xxx:PORT`<br>
      where each `x` and `PORT` is a number
    - This is the IP address and port of your FTP server
1. Keep this screen open on your Wii U
1. On your computer, open FileZilla
1. On the left-side panel, navigate to your Cemu games folder
1. Enter in your IP address to the `Host` field on the top bar
    - This is the `xxx.xxx.xxx.xxx` part
1. Enter in your port to the `Port` field on the top bar
    - This is the `PORT` part
1. When warned about an insecure connection, ignore and continue
1. You should now see your Wii U storage displayed on the right half of the FileZilla window

## Transferring Files

1. If your game is stored on your Wii U's internal memory, navigate to `/storage_mlc/usr/title/00050000`
1. If your game is stored on an external storage device, navigate to `/storage_usb/usr/title/00050000`
1. In this directory, you should see folders with 8 character names
    - This is the last 8 digits of each game's "Title ID", which allows the console to uniquely identify each game by a number, instead of a name
1. You can use the full list of each game's Title ID to identify which game is which, found [here](http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles)
    - Copy the Title ID of the game and use **Ctrl + F** to search for it
1. Once you have found the game you want, drag and drop it to your Cemu games folder on the left-side panel of FileZilla

::: tip
A lot of the data-less files will fail to transfer, but these can be ignored. To be safe, make sure to retry all failed downloads before exiting to ensure that all files that _should_ be transferred have done so.
:::

Your game should now begin copying over to your computer. This will take a very long time and you may want to go do something else while the process takes place.

After this is finished, you can exit FileZilla and turn off your Wii U. You can then go to your Cemu games folder and rename the Title ID to something recognisable.
