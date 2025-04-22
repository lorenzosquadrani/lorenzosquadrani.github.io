A computer is a machine that can be programmed to perform automatic computation.
A minimal set of computer programs that allow a user to interact with the hardware is called *operating system*.
Another perspective is that an operating system is the main software that operates on a computer.
The core computer program of an operatying system is called *kernel* or *supervisor*.

Of course there cannot be more than one supervisor running on one computer. Or can it?
Well it can if you have a *hypervisor* (LoL).
This is a computer program that can supervise one or more supervisors (kernels), hence one or more operating systems.
In any case, you start from a single not-virtual machine, called *host machine*, with one operating system and thus one kernel/supervisor.

Let us say the *host machine* is running Debian OS, then everything you need to know is [here](https://wiki.debian.org/SystemVirtualization). 

The most basic and effective software solution seems to be KVM, in Linux.
Coupled with this Qemu, which I do no understand.

On the other hand it seems like GNOME provides a software called Gnome Boxes, which automates for you all the hussle of creating a virtual machine and installing an operating system and running it. Wow. Tempting. Let us try cmon. Uh it also offers you the feature drag-and-drop to move files from the host to the guest machines.
It seems like it saves you a lot of time. But of course: from where is it downloading the iso? Where does it store everything? How to find out?
For example now I tried to create a new virtual machine. I selected download OS, Arch Linux Live. But when it finished downloading it said unrecognized OS. I went back and now I have no idea were the ISO was downloaded.
Of course there is no manual entry for gnome-boxes.
So I run 

```
find -iname '*gnome-boxes*'
```

and I see three interesting folders in my home: ```.local/share/gnome-boxes```, ```.config/gnome-boxes```, ```.cache/gnome-boxes```.
None of the folders contained anything interesting anyway.
If I try to uninstall ```gnome-boxes```, I find out that the following packages were installed for me:

```dmeventd genisoimage ibverbs-providers ipxe-qemu libaio1 libcacard0
  libcapstone4 libdaxctl1 libdevmapper-event1.02.1 libexecs0 libfdt1 libfmt9
  libgfapi0 libgfrpc0 libgfxdr0 libglusterfs0 libibverbs1 libiscsi7
  liblvm2cmd2.03 libndctl6 libosinfo-bin libphodav-3.0-0 libphodav-3.0-common
  libpmem1 librados2 librbd1 librdmacm1 libslirp0 libspice-client-glib-2.0-8
  libspice-client-gtk-3.0-5 libspice-server1 libssh-4 libtpms0 liburing2
  libusbredirhost1 libusbredirparser1 libvdeplug2 libvirglrenderer1
  libvirt-daemon libvirt-daemon-driver-lxc libvirt-daemon-driver-qemu
  libvirt-daemon-driver-vbox libvirt-daemon-driver-xen libvirt-glib-1.0-0
  libvirt-glib-1.0-data libvirt-l10n libvirt0 libxencall1 libxendevicemodel1
  libxenevtchn1 libxenforeignmemory1 libxengnttab1 libxenhypfs1 libxenmisc4.17
  libxenstore4 libxentoolcore1 libxentoollog1 lvm2 netcat-openbsd ovmf
  qemu-block-extra qemu-system-common qemu-system-data qemu-system-gui
  qemu-system-x86 qemu-utils seabios spice-client-glib-usb-acl-helper swtpm
  swtpm-libs swtpm-tools thin-provisioning-tools
```

Quite a lot LoL. 
So one lesson to learn: if I want to maintain a certain level of understanding and control on what happens on my system, I should not use `gnome-software`, which hides everything to me. 
Also `gnome-boxes` in the end, it is just doing all the libvirt, qemu, kvm stuff for me. 
Not sure it is worth it: when something does not work, like in this case, what do you do?

By the way, I run:

```
find -iname '*archlinux*'
```

and I find that the archlinux iso was saved in the Downloads folder (LoL).
Very very well, I just mounted that iso on a virtual machine with 5GB ram and 20GB hd, using boxes. Now I am installing arch linux on the virtual machine.
Everything flows amazingly, good gnome-boxes.
Of course when I am in the virtual machine, the keyboard shortcuts are caught. I was asked permission for that. And I can escape that with Ctrl+Alt.

