---
title: Online Play
description: Enabling online play on the Cemu emulator.
---

In this section, we look at how to enable online play on Cemu. The Nintendo servers have shut down, so you will need to connect to an alternative game service to play online: [Pretendo](https://pretendo.network/). This involves configuring the Pretendo network on your Wii U according to the [instructions available at their website](https://pretendo.network/docs/install/wiiu), then using Dumpling to dump the set of online files from your Wii U and installing them to Cemu. This means you will be able to play online with both other Cemu users and real Wii U users.

If you do not plan on using online services you may skip this page. 

## Getting Started

As we will be connecting to Pretendo servers, do not:
- Use mods, cheats or hacks
- Share your online files for other people to use
- Using the same account more than once at the same time, eg on both your console and Cemu, will kick one or all players offline in most games

Doing any of these may get your console banned, restricting you from accessing online play temporarily or permanently.

::: danger

#### Warning regarding reformatting or selling your Wii U Console:

- Reformatting your console will result in your PNID being unlinked from that console. You will no longer be able to use online features on Cemu until you re-link your account to that console and re-obtain the files necessary for online play.

- Selling your console (which is not permitted by Cemu because you technically do not own that data anymore) will likely also result in the new owner reformatting the console or otherwise removing your account from the same. This will result in permanent loss of access.

**If you want to play online with Cemu, keep your Wii U console.**

:::

## Requirements

- A Pretendo PNID set up on your Wii U and tested working (essential to collect Pretendo certificates)
- Online files dumped from your Wii U (<router-link to="/using-dumpling">Using Dumpling</router-link>)
- And installed into Cemu (<router-link to="/using-dumpling.html#copying-online-files-to-cemu">Copying Online Files to Cemu</router-link>)

:::

## Enabling Online Mode

1. Open the Cemu emulator
1. On the top bar, go to `Options` -> `General settings`
1. Navigate to the `Account` tab
1. Ensure you have read the text at the top of the page
1. Check the box `Pretendo`

![A screenshot of a Cemu online account](/assets/images/cemu-account-settings.png)


If you want to connect to a custom server that is not Pretendo, Select the custom button and put the network_services.xml file in your cemu folder. The custom server will provide a network_services.xml



Your Wii U should now be ready to go online. If you ever want to disable online features, simply check the box `Offline`.


