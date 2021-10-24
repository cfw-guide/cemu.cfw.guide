---
title: Dumping Games (disc2app)
---

## Introduction

For this method, we will be dumping a physical disc game to an SD card or USB storage device. This can take some time.

After dumping, we copy the game over to the PC. Unfortunately, all Wii U disc images are encrypted, which means we need to decrypt them on our PC.

## Requirements

- An SD card for homebrew and dumping
- (Optional) A USB storage device to dump the game to
  - Only required if the game is too big for the SD card
  - Wii U games can vary in size up to 17GB, but having 12GB of storage should be okay for most games

## Downloads

- The latest release of [MochaCFW](https://www.wiiubru.com/appstore/zips/mocha.zip)
  - This will also work with (Coldboot) Haxchi
- The Mocha [config](/assets/files/config.ini)
- The latest release of [Homebrew Launcher Installer](https://github.com/wiiu-env/homebrew_launcher_installer/releases/latest)
  - You will need to download the `payload.zip` file
- The v1.4 release of [The Homebrew Launcher](https://github.com/dimok789/homebrew_launcher/releases/tag/1.4)
  - You will need to download the v1.4 `homebrew_launcher.v1.4.zip` release of The Homebrew Launcher
- The latest release of [disc2app](https://github.com/koolkdev/disc2app/releases/latest)
- [Cdecrypt v2.0b](/assets/files/Cdecrypt_v2.0b.zip)

## Preparations

1. Extract the `mocha.zip` file to the root of your SD card
    - If prompted to, replace any pre-existing files
1. Extract the `homebrew_launcher.v.1.4.zip` file to the root of your SD card
1. Copy the `config.ini` file to the `/wiiu/apps/mocha` folder on your SD card
1. Copy the `payload.elf` file from the `payload.zip` file to the `/wiiu` folder on your SD card
1. Extract the disc2app `.zip` file to the root of your Wii U's SD card
1. Double check that you have enough storage space for your game
    - The maximum game size is around 17GB although few games are actually that large
1. Eject your SD card from Windows and put it into your Wii U console
1. Insert your USB storage if you are using one to dump to

## Launching MochaCFW

1. Turn on your Wii U console
1. Launch the internet browser and open `wiiuexploit.xyz`
1. Tap `Run Homebrew Launcher!`
    - If your console freezes for more than 10 seconds, hold down the Power button for 4 seconds and reboot
    - Once rebooted, [reset the browser's save data](https://en-americas-support.nintendo.com/app/answers/detail/a_id/1507/~/how-to-delete-the-internet-browser-history) and try again
1. Once in the Homebrew Launcher, launch MochaCFW
    - This should return you back to the Homebrew Launcher

## Dumping

1. Power on your Wii U console
1. Ensure your target game disc is **not** inserted in your Wii U
1. Open the Homebrew Channel
1. Run `disc2app`
1. Press **(A)** to dump to the SD card, or **(B)** to dump to your USB storage
1. Insert the game disc you'd like to dump when prompted
1. The game will now be dumped to `\install\[TitleID]` on your SD/USB device
    - This may take a long time, be patient
    - TitleID will be a 16-character string of numbers and letters
1. Once finished, exit the application and turn off your console
1. Remove your SD or USB device from your Wii U and insert it to your computer
1. Copy the `\install\[TitleID]` folder from your SD or USB device to your Cemu games folder
    - You can identify your TitleID with the [Title Database](http://wiiubrew.org/wiki/Title_database#00050000:_eShop_and_disc_titles)

## Decrypting

1. Extract the Cdecrypt `.zip` file to your dumped game folder
    - Not the Cemu games folder, but in the folder you just copied
1. Double click the decrypt `.bat` file
    - This may appear as just `decrypt` if you have file extensions disabled
1. Once done, you can delete all files and folders in the directory except for the `code`, `content` and `meta` folders
