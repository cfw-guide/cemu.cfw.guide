---
title: Home
description: "A complete guide to installing CEMU and optimizing performance."
home: true
actions:
  - text: Get Started
    link: installing-cemu
    type: secondary
heroImage: /assets/images/splash-image.png
heroFilter: 0.5
---

::: tip
For complete guides to homebrew and custom firmware for other devices, check out [CFW.Guide](https://cfw.guide).
:::

::: tip
Thoroughly read all of the introductory pages (including this one!) before proceeding.
:::

## What is Cemu?

Cemu is an experimental software used to emulate Wii U applications on your PC. This means that you will be able to run commercial Wii U games directly off of your computer.

The majority of games are completely playable from start to finish. You can check to see if your game is playable on the [wiki](https://wiki.cemu.info/wiki/Category:List_of_games).

## How do I get the games?

The guide will take you through how to dump your game copies from your Wii U over to your PC for use in Cemu. This process is easy and quick to set up, and does not require any permanent modification to your console.

If you do not have a Wii U console, you will not be able to dump games to your PC and therefore you will not be able to use Cemu.

## Can I play online?

Yes! Cemu supports online play, using official Nintendo servers. To do this, we will need to dump your account data from your Wii U to use for connecting to the servers. This process is easy and quick to set up, and does not require any permanent modification to your console.

If your account is banned, or if you do not own a Wii U console, you will not be able to use online play with Cemu.

The native macOS and Linux releases of Cemu currently don't support online play. If you are running Linux, we recommend that you run the Windows release in compatibility software such as Wine or Lutris.

## How well can I run games?

It depends. A lot of people will be able to run most games at full speed, however you must take hardware requirements into account. While the Wii U is not a particularly demanding console, emulation requires a machine with much greater hardware than the original machine. Check below to see if your PC will work.

::::: tabs

:::: tab name="CPU" :default="true"

A good processor will definitely help speed things up. While modern video-games can be less dependent, emulation can rely quite heavily on CPU performance. We recommend at least an AMD Ryzen 3 or an Intel i5 processor.

Non-Ryzen AMD chips are not recommended as they lack single-core processing speed. These processors will struggle running most games on Cemu.

Apple Silicon chips should be able to run compatible games fairly well, however [game compatibility](https://cemu.emiyl.com/) is quite low for macOS.

::::

::: tab name="GPU"

NVIDIA GPUs are recommended as they can take some of the load off of the CPU. AMD GPUs are also good, but heavily reliant on the performance of the CPU.

Generally, the bare minimum should be an NVIDIA GTX 700 card or AMD HD 7000 Series card, however you may want to consider something more powerful, especially for games such as Breath of the Wild.

If you are running on a thinner laptop or other low-powered machine, you may be using an iGPU instead, which is not officially supported by Cemu. While some users have reported playable framerates using integrated graphics, playing on a more powerful machine will yield much better results.

::::

:::: tab name="RAM"

For the best performance across all games, we recommend using 8GB of RAM or more. While the Cemu website says it can run off of a minimum of 4GB of RAM, this is not recommended and may cause crashes, stuttering and general performance issues in a lot of games.

::::

:::::