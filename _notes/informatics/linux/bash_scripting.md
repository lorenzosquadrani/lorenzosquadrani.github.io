---
layout: note
title: "Bash Scripting"
date: 2024-03-27
tags: [linux, bash]
related:
  - title: "Bash Scripting Basics"
    url: "/notes/bash_scripting_basics/"
---

Everything is taken from this amazing [guide](https://guide.bash.academy/), or this other amazing [guide](https://ryanstutorials.net/bash-scripting-tutorial/).
Actually, all the resources collected here look amazing: https://learnbyexample.github.io/curated_resources/linux_cli_scripting.html.

## Bash Quick Guide

What is Bash? It is a program on your computer, like any other.
In particular, it is a shell program, which is a program that provides an interface for the user to interact with other programs, using a specific shell language.
Other shell programs includes C shell, Z shell, and others, all with their own shell language.
In following the Bash shell language is explained.

### Simple Commands

The main concept underlying the bash shell language is that of _command_.

The _simple commands_, which are the core of bash shell language, have the following syntax:

```
[ var=value ] name [ arg ... ] [ redirection ... ] 
```

where the squared brackets denotes optional parts of the syntax.
When a simple command is provided to bash, bash uses the `name` to try and find a: (1) function or (2) builtin or (3) program.
First it looks whether in the list of all the previously defined functions there is a function matching the name.
If not, it looks whether the name matches any of the builtin (which are small operations built into bash, so that it does not need an external program to do that).
Finally, it looks among all the programs contained in the `PATH`.
If no function, builtin nor program is found that matches the name, bash shows the error message `bash: name: command not found`.


### If Statement

The syntax for an _if compound_ is:

```
if list [ ;|<newline> ] then list ;|<newline>
    [ elif list [ ;|<newline> ] then list ;|<newline> ] ...
    [ else list ;|<newline> ]
    fi
```

The compound starts with the keyword `if` followed by a list of commands.
Bash will execute the list of commands and hand the final exit code to the if compound.
If the exit code is zero (success), the list of commands following the keyword `then` is executed,
otherwise it is skipped.
The `elif` and `else` keyword works exactly as in any other if statement.

The most common command following the `if` keyword used to be `test` command, better known as the `[` command, which has the following syntax:

```
[ args ... ]
```

Notice that the last argument of the command `[` must be `]`.
Anyway, in the guide I read that nowadays the `test` command should be superseeded by the more powerfull `[[` command. 
However, in all the scripts I read, I see much more the first one.

Very useful will be to type

```
help test
```

when you are not sure about what the args mean.

The boolean operators `&&` and `||` allows you to perform the __and__ and the __or__ between 
multiple test commands:

```
[ args1 ] && [ args2 ] || [ args3 ]
```

### Scripting

For getting quick technical information directly from the bash shell, use the `man bash` page and the commands `help`.

First you add or not add the `shebang` (`#!`) at the beginning of the script, followed by the absolute path of the shell that you want to exectute the script.
You also can avoid adding it I think, and the shell that you call the script from will execute the script.
Anyway, it is good practice to add it explicitely:

```
#! /bin/bash
```

### Variables
Variables are temporaty store for a piece of information.
You can do two things with variables: set their value or read their value.

A variable is set with the syntax:

```
x=2
name=Pippo
sentence='Oh Mamma Mia'
sentence_with_variable="Oh Mamma di $name"
variable_with_substitution = $( ls )
```

Notice that the absence of spaces is mandatory.
When you need to store a string which includes spaces in a variable, you have to use the single quotes or the double quotes.
If you want to use a variable when setting the value, you have to use the double quotes.
If you want to set a variable with the output of a command you need to use the command substitutin syntax `$( command )`, where the spaces between the command and the brackets are not mandatory.

To read the value of a variable you must put a `$` sign before its name.

There are some special variables that the system sets when running a script. 
There are:
- `$0` - The name of the bash script.
- `$1 - $9` - The first 9 arguments of the bash script.
- `$#` - the number of arguments passed to the bash script.
- `$@` - all the arguments supplied to the script.
- `$?$` - The exit status of the most recently run process.
- `$$` - The process ID of the current script.

Additionally, all the environment variables are available in the script.

### User input
To ask the user for input you use the builtin `read`.
There are multiple arguments to alter the behavior of `read`, you can read them with `help read`.
The most basic usage is:

```
read varname
read -p 'Username: ' uservar
read -sp 'Password: ' passvar
read var1 var2 var3
```

### STDIN, STDOUT, STDERR

Maybe you did not know, but for every process your system is running, there is a 
folder called `/proc/<processID>/`.
Inside that folder you can find a lot of things, including the three text files:
- `/proc/<processID>/fd/0` - where the standard input STDIN is written.
- `/proc/<processID>/fd/0` - where the standard output STDOUT is written.
- `/proc/<processID>/fd/0` - where the standard error STDERR is written.

Within a script, these files are also reachable with the shortcuts `dev/stdin`, `/dev/stdout`, `/dev/stderr`.


### Mathematical expressions
To compute mathematical expressions, you need to use the keyword `expr` with the sintax:

```
expr 2 + 2
```

This will compute the addition and then also print it to the standard output.
The spaces are part of the sintax.
To compute expressions, you can also use the syntax:

```
((2+2))
```

but the result is not sent to the standard output.
The following to lines are equivalent (I hope):

```
expr 2 + 2
echo $((2+2))
```


### Arguments

Any bash script automatically accepts an arbitrary number of arguments as space-separated words/numbers.
The arguments are accessible within the script as `$1`, `$2`, `$3`, etc.
Note that the symbol `$0` is reserved for the name of the script itself (which you could consider as the 0-th argument).

For flags here: https://medium.com/@wujido20/handling-flags-in-bash-scripts-4b06b4d0ed04