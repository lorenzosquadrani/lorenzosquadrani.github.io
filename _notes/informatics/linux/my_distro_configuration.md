---
layout: note
title: "My Linux Distro Configuration"
---

## Distro: Linux Mint

When configuring a linux system, we need to know all the software and hardware specifications.
To get such information, we can use the software `inxi`, available in most Linux distribution repositories, pre-installed in Ubuntu and all its derivatives (learn more about it with `man inxi`).

To get the information about the system, including the base distribution if any, run the command:

    inxi -Sx

and this is what I currently get:
    
    System:
    Host: lorenzos-ThinkPad-P15v-Gen-3 Kernel: 6.8.0-40-generic arch: x86_64
        bits: 64 compiler: gcc v: 13.2.0
    Desktop: Cinnamon v: 6.2.9 Distro: Linux Mint 22 Wilma
        base: Ubuntu 24.04 noble

## Email client: Thunderbird
I use thunderbird as email client and I want it to stay in the system tray. 
However, thunderbird does not have such feature as for now (May 2024).

There some extensions trying to cope for this lacking feature, but for me they did not work.

The solution for me was `kdocker`. 
I made a shorcut to run the command `kdocker -q -t thunderbird`, and I set it to run at startup.

I installed the extensions "Minimize on Close" by thunderbird, so that when I close it, it goes back to the tray (kdocker has the option iconify when minimized, but not iconify when closed, that's why we need to minimize thunderbird).