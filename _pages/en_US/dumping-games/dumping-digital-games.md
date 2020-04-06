## Introduction

For this method, we will be directly copying game files from your Wii U storage over to your PC.

This is done over the internet using an FTP (File Transfer Protocol) server and client. This will allow you to copy files over your local network directly to your computer.

This process involves accessing the Wii U internal memory! If you don't follow the instructions correctly, you could potentially cause serious damage to your console.
{: .notice--danger}

Never modify any file on your Wii U internal storage unless you know what you're doing.
{: .notice--warning}

## Requirements

- An SD card
- An SD card reader for your PC
- A [homebrewed Wii U](https://wiiu.hacks.guide/) with Custom Firmware
- Enough space on your PC for the game dump
  - The largest Wii U games is around 17GB, however very few actually are that big

## Downloads

- The latest release of [FTPiiU](https://github.com/FIX94/ftpiiu/releases) (FTP server)
- The latest release of [FileZilla](https://filezilla-project.org/download.php?show_all=1) (FTP Client)

## Preparations

1. Download and install FileZilla to your computer
1. Download and move the `ftpiiu.elf` file to the `\wiiu\apps` folder on your SD Card
1. Ensure you have enough space on your PC for your game
1. Eject your SD card from Windows and put it into your Wii U console

## Connecting to your Wii U

1. Power on your Wii U console
1. Open the Homebrew Channel
1. Run `FTPiiU Everywhere`
1. On your screen you should see a line saying:<br>
    `Listening for data connections at xxx.xxx.xxx.xxx:PORT`<br>
    where each `x` and `PORT` is a number
  - This is the IP address and port of your FTP server
1. Keep this screen open on your Wii U
1. On your computer, open FileZilla
1. On the left-side panel, navigate to your Cemu games folder on your computer
1. Enter in your IP address to the `Host` field on the top bar
  - This is the `xxx.xxx.xxx.xxx` part
1. Enter in your port to the `Port` field on the top bar
  - This is the `PORT` part
1. When warned about an insecure connection, ignore and continue
1. You should now see your Wii U storage displayed on the right half of the FileZilla window

## Transferring Files

1. If your game is stored on your Wii U internal memory, navigate to `storage_mlc/usr/title/00050000`
1. If your game is stored on a USB storage device, navigate to `storage_usb/usr/title/00050000`
1. In this directory, you should see folders with 8 character names
  - This is the last 8 digits of each games "Title ID", which allows to Wii U to uniquely identify each game by a number, instead of a name
1. You can use the full list of each game's Title ID to identify which game is which, found [here](http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles)
  - Copy the Title ID of the game and use **Ctrl+F** to search for it
1. Once you've found the game you want, drag and drop it to your Cemu games folder on the left-side panel of FileZilla

A lot of the data-less files will fail to transfer, but these can be ignored. To be safe, make sure to retry all failed downloads before exiting to ensure that all files that _should_ be transferred have done so.
{: .notice--primary}

Your game should now begin copying over to your computer. This will take a very long time and you may want to go do something else while this is happening.

After this is finished, you can exit FileZilla and turn off your Wii U. You can then go to your Cemu games folder and rename the Title ID to something recognisable.
