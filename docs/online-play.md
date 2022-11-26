---
title: Online Play
description: Enabling online play on the Cemu emulator.
---

In this section, we look at how to enable online play on Cemu. This involves dumping a set of online files from your Wii U to make Nintendo think that the connection from Cemu is actually coming from your console. This means you will be able to play online with both other Cemu users and real Wii U users.

If you do not plan on using online services you may skip this page. Using Cemu online has not resulted in any bans to date.

## Getting Started

As we will be connecting to real Nintendo servers, do not:
- Use mods, cheats or hacks
- Share your online files for other people to use
- Play on both your console and Cemu at the same time
  - There have been no confirmed ban cases, but this may still be unsafe
  - Using the same account to play online will kick the other player offline

Doing any of these may get your console banned, restricting you from accessing online play temporarily or permanently.

::: danger

#### Warning regarding reformatting or selling your Wii U Console:

- Reformatting your console will result in your NNID being unlinked from that console. You will no longer be able to use online features on Cemu until you re-link your account to that console and re-obtain the files necessary for online play.

- Selling your console (which is not permitted by Cemu because you technically do not own that data anymore) will likely also result in the new owner reformatting the console or otherwise removing your account from the same. This will result in permanent loss of access.

**If you want to play online with Cemu, keep your Wii U console.**

:::

## Requirements

- Online files from your Wii U (<router-link to="/using-dumpling">Using dumpling</router-link>)
- A FAT32 formatted USB storage device or SD card

::: tip

All storage devices must be formatted to FAT32 with a 32KB (32768) allocation. For storage devices larger than 32GB, use [guiformat](http://ridgecrop.co.uk/index.htm?guiformat.htm) to format it correctly.

:::

## Enabling Online Mode

1. Open the Cemu emulator
1. On the top bar, go to `Options` -> `General settings`
1. Navigate to the `Account` tab
1. Ensure you have read the text at the top of the page
1. Check the box `Enable online mode`

![A screenshot of a Cemu online account](/assets/images/cemu-account-settings.png)

Your Wii U should now be ready to go online. If you ever want to disable online features, simply uncheck the box `Enable online mode`.
