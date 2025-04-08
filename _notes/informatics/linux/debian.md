
### Visual Studio Code
Microsoft itself provides a [repository](https://code.visualstudio.com/docs/setup/linux#_install-vs-code-on-linux) to distribute VS code to Debian.
Of course, they provide the copy-paste snippet of bash commands to add and configure it, but let us try to understand them.

First, we make sure we have the tools `wget` and `gpg`.
[GNU Wget](https://www.gnu.org/software/wget/) is a free software package for retrieving files using HTTP, HTTPS, FTP and FTPS, the most widely used Internet protocols.
[GnuPG](https://gnupg.org/) is a complete and free implementation of the OpenPGP standard.
Of course, if you have a full Desktop Environment like GNOME, they will be already installed.
```
sudo apt-get install wget gpg
```

Now we used both tools, piping them with the bash symbol `|`.
The pipe symbol passes the output (stdout) of a previous command to the input (stdin) of the next one, or to the shell. 
This is a method of chaining commands together.
With `wget` we download the file at the specified address (if you put the address in a web browser, the browser will 
probably automatically download it).
The arguments `-q` and `-O` are the usual quiet and output file options; since as 'output file' we give a dash, 
the fetched content will be given to the standard output.
With `gpg` I am not sure what we do. 
Normally `gpg` should be followed by a command, and if it is not it will execute the most reasonable command according
to the file it is provided with.
In our case the file is of course the `microsoft.asc` file.
According to ChatGPT, such file could be a simple ASCII text file, but also a ASCII Armored File.
An ASCII Armored File usually contains encrypted data or a digital signature in a format that can be transmitted over text-based protocols (like email) or stored in a text format, which is human-readable.
If we double-click the file, it is opened by the GNOME password and keyrings tool, trying to add a signature!
I guess now we know the file contains a signature, but let us open it with a simple text editor to check.
Well it contains a single block of text, headed `-----BEGIN PGP PUBLIC KEY BLOCK-----`.
So the file provides us with a public key.
In the man page I read that a file containing keys is 'listed', which I do not undestand.
Enough, let us run it and see.
```
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
```
Of course it created a file named `packages.microsoft.gpg`, in which it wrote the stdout.
Let us run it again without redirecting the stout.
Uh, we get some text with unknown font. 
And ChatGPT explains us why: a `.gpg` file is a file that contains GPG (GNU Privacy Guard) encrypted data.

In the next passage we install a keyring using this encrypted file.
The `install` command simply copy files in different locations and set attributes of the files.

```
sudo install -D -o root -g root -m 644 packages.microsoft.gpg /etc/apt/keyrings/packages.microsoft.gpg
```
If I check know the password and keyrings tool, there is nothing new. So this type of keyring is probably specific for
`apt`, and not relevant for the user. 

Now an easy step, we use the command `tee` which reads from the standard input and write to standard output or files.
We use it add the repository for Visual Studio Code to the sources of `apt`. 
This repository needs a signature, for which we use the `gpg` file we created before.
```
echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" |sudo tee /etc/apt/sources.list.d/vscode.list > /dev/null
```

Finally we remove the files we do not need anymore.
```
rm -f packages.microsoft.gpg
```

Now we install the package `apt-transport-https`. 
Actually, it seems like it is available by default in recent versions of `apt`, so we skip this step.
We directly run `sudo apt update` and we see that the new repository is being detected.
Now we can install code with `sudo apt install code`.
