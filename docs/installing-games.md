---
title: Installing Games
excerpt: Installing decrypted Wii U dumps for use in Cemu
---

This page will take you through the installation of decrypted game dumps in Cemu. If you dumped the Friend List application earlier, you can install it like any other dump under "Installing dumps".

If you have an encrypted game dump, you may need to decrypt it using [CDecrypt](/assets/files/Cdecrypt_v2.0b.zip). This is not required for dumps obtained through Dumpling.

## Installing titles

If you have dumped your account data and online files to install an eShop title, follow the "Downloading from eShop" tab to download and install your game. If you have a disc game dump, you can install it through Cemu in the "Installing dumps" tab.

<Tabs>

<Tab title="eShop Installation">

1. Open the Cemu application
1. On the top bar, click **Tools** -> **Download Manager**
1. Select your account, then click "Connect"
1. Right click on the title you want to install, and click "Download"
1. Repeat this for any updates and DLC you want to install

Once installed, you should be able to launch the title from the Cemu menu.

</Tab>

<Tab title="Dump Installation">

### Installing games

1. Open the Cemu application
1. On the top bar, click **File** -> **Install game title, update or DLC**
1. Navigate to the folder where your game dumps are located
    - If you used Dumpling, this folder will be the `dumpling` folder on your SD card or USB storage device
1. Open the relevant folder corresponding the content you want to install
    - If you used Dumpling, this is either the `Games`, `Updates` or `DLC` folder
1. Open the folder of the game, update or DLC you would like to install
1. Open the `meta` folder and select `meta.xml`
1. Cemu should now automatically install the files for you

Repeat this as many times as you need until everything you dumped is installed.

### Transferring saves

1. Open the Cemu application
1. Right click on the game you would like to transfer the save to
1. Click "Save directory"
1. Open the folder that contains your save file backups
    - If you used Dumpling, this will be the `dumpling/Saves` folder on your SD card or USB storage device
1. Copy and paste the contents to the save directory you opened from Cemu

</Tab>

</Tabs>

You should now have all the games you dumped installed onto Cemu.

Some games, such as Breath of the Wild, **require** an update to be installed to be functional in Cemu.

In the next step, we will enable online multiplayer, which will allow us to play on Nintendo servers with other Wii U owners.