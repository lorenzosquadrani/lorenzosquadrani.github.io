What the fuck is Arch Linux?

It is just another distribution of Linux.
What is Linux would be a good question.
Not sure about the answer.

Anyway you can say "apple" and "banana", just as you can say "Arch Linux" and "Ubuntu".

But somehow it feels like Arch Linux is special, like it is "more linux" then the other distributions. 
Why? It is simply because of the principles on which Arch Linux is built.
They includes the usual ones from all distributions like "modernity", "versatility", bla bla.
But one is really important: "simplicity".
Arch linux provides no more than it is strictly needed to run.
Whatever else you want, you need to set it up yourself.
That might sound bad, but then it has the advantage that you know exactly how your system is built.
So it grew very popular among geeks.
And I am a geek so hell I am installing it.

I mean, from the principles you read "GUI configuration utilities are not officially provided, encouraging users to perform most system configuration from the shell and a text editor." LoL.

You compile things for x86_64, or in general for an architecture.

The goal of the bootstrapping procedure is to setup an environment from which the scripts from arch-install-scripts (such as pacstrap(8) and arch-chroot(8)) can be run.

If the host system runs Arch Linux, this can be achieved by simply installing arch-install-scripts. If the host system runs another Linux distribution, you will first need to set up an Arch Linux-based chroot.

I am installing Arch Linux, it would be a nightmare to go deep in everything I do not fully understand. 
I just note down here things I am neglecting.
Not sure how all the checksum and signature verification works.
The commands for making a usb image do not work, I use the Linux Mint tool. LoL.
What is UEFI mode. What is EFI system partition.
So even the kernel is not mandatorily linux. What about the alternatives?
What is chrooting? Apparently it kind of opening a unix shell in the system that I just installed in the root filesystem partition.
Because for example I had nano in the live image of ArchLinux, but I do not have nano in this shell after chroot.
What is the fstab file for?

Overall, it seems like the really key passages when installing an operating system from a console are: make the right partitions, with the right format.
Install the OS in the root partition (which is equivalent to say: create a bunch of folder and files in that partition.
Install the bootloader in the right place, and give it the right configuration.

Now arch-linux is running. I already have a lot of folders that I do not understand, full of things that I do not understand, in my root I mean.
Not very nice.
Anyway, since I am not superexcited of losing time, I head to the Desktop Enviroment page of Arch Linux Wiki.

Damn it, lost a lot of time just to make systemd-netword working. And probably I will end up using a network manager.
Anyway, now I installed hyprland.
I installed kitty terminal emulator.
I installed uwsm (universal wayland session manager).

I installed it from scratch. Now I have the right partinioning.
Janko made me install the tool fd, quite cool.
How does it compare with whereis command?
I chose pulse audio instead of pipewire damn. Now I do know how to switch, because hyprland wants pipewire. Or maybe not.
The audio does not work now anyway, need to check it.
I installed waybar, but did not configure it very much.
I would like it to look like gnome as possible.

What is a fucking socket? How does it differ from a service?

When I installed waybar there was some gtk libraries in the dependencies. Does it mean that the applications I want to use determine which graphics library I use? whether GTK or Qt or others? Is it correct to call them graphics library? 
Libreoffice for examples let you choose if you want to use GTK or Qt. Thus, it is probably up to the developer to make the app compatible with a given graphics library.

VS-code needed a package org.freedesktop.secrets.
Maybe secrets are not actually packages. What are secretes?
To install it, I had to install one package among 4, I chose gnome-keyring.

(from the archlinux guide)
It is important to remember that there are two different kinds of configurations on a GNU/Linux system. System-wide configuration affects all users. Since system-wide settings are generally located in the /etc directory, root privileges are required in order to alter them. For example, to apply a Bash setting that affects all users, /etc/bash.bashrc should be modified.
User-specific configuration affects only a single user. Dotfiles are used for user-specific configuration. For example, the file ~/.bashrc is the user-specific configuration file. The idea is that each user can define their own settings, such as aliases, functions and other interactive features like the prompt, without affecting other users' preferences.

To make a service start at boot, just enable it with systemctl (like you start it, but enable).

Ops, I made a fresh arch linux install, with full GNOME DE.
Now I really want to understand if and how I can change the compositor of GNOME.
GNOME is on wayland. Does it make sense to say so?
Wayland is a display server protocol.
Any display server using the Wayland protocol is called compositor.
So the right sentence is: the GNOME desktop environment includes a compositor using the Wayland protocol.
What is this compositor? It is Mutter. 
Can I replace it with Hyprland? Does not seem easy. I read on GNOME page that they use hardware accelaration to make mutter run smooth.
I am afraid the compositor is a bit at the hearth of the desktop environment, thus changing it is quite challenging. But let us see what we can do.
The point is that I would like a dynamic compositor instead of a stacking one like Mutter.
As I suspected, it is not possible to change mutter in GNOME. GNOME is build on mutter somehow.
Even the gnome extensions that add some tiling power to the windows management of GNOME, do not get close to the power of a tiling compositor.
It is a completely different logic.
So new mission: slowly build hyprland and debuilding GNOME. I already installed hyprland.
We will face each issue one at a time.

### Network Manager
GNOME uses network manager. 
The service is probably already enabled, but we can check it via
```
systemctl list-unit-files
```

The problem is that the GUI that GNOME uses to display the wifi configuration is part of the GNOME core, prbabily of the GNOME applet. Quite hard to use on hyprland.
Although it should be possible. Cmon it is not related to the compositor.
Ye also the GNOME bar would be amazing to have in hyprland.

### Bluetooth

### Notifications Manager
Archlinux has in its core applications libnotify, which implements the Desktop notifications specifications, and it is compatible both with X11 and Wayland.
You also need a notification server (or daemon).

### Specifications
A specification is a set of rules which define a standard way to implement a function, such as making an application run at startupu (XDG autotostart specification), or handling the notifications in a desktop environment (Desktop notifications specifications).
All the specifications for open-source, desktop applications on linux are collected on specifications.freedesktop.com.
