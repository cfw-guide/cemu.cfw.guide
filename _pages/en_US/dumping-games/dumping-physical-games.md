## Introduction

For this method, we will be dumping a physical disc game to an SD card or USB storage device. This can take some time.

After dumping, we copy the game over to the PC. Unfortunately, all Wii U disc images are encrypted, which means we need to decrypt them on our PC. Luckily this is quite easy.

## Requirements

- An SD card
  - This must be large enough to store your dumped game on
  - You may also use USB storage to dump the physical game to, however an SD card is still required to launch the dumping application
- An SD card reader for your PC
- A [homebrewed Wii U](https://wiiu.hacks.guide/) with Custom Firmware
- Enough space on your PC for the game dump
  - The largest Wii U game is around 17GB, however very few actually are that big

## Downloads

- The latest release of [disc2app](https://github.com/koolkdev/disc2app/releases/latest)
- v2.0b of [Cdecrypt](/assets/files/Cdecrypt_v2.0b.zip)

## Preparations

1. Extract the disc2app `.zip` file to the root of your Wii U's SD card
1. Double check that you have enough storage space for your game
  - The maximum game size is around 17GB although few games are actually that large
1. Eject your SD card from Windows and put it into your Wii U console
1. Insert your USB storage if you are using one to dump to

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
