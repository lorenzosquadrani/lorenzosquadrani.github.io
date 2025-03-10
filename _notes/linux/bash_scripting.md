Everything is taken from this amazing [guide](https://guide.bash.academy/).

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
The first it looks if in the list of all the previously defined functions there is a function matching the name.
If not, it looks if the name matches any of the builtin (which are small operations built into bash, so that it does not need an external program to do that).
Finally, it looks among all the programs contained in the `PATH`.
If no function, builtin nor program is found that matches the name, bash shows the error message `bash: name: command not found`.

### Tests and Conditionals

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
See the [example](https://guide.bash.academy/conditionals/?=Conditional_test_commands#p1.3.0_5) for clarification.
Anyway, in the guide I read that nowadays the `test` command should be superseeded by the more powerfull `[[` command. 
However, in all the scripts I read, I see much more the first one.

Very useful will be to type

```
help test
```

when you are not sure about what the args mean.

### Bash Scripts

A crash course on bash scripts.

Actually, all the resources collected here look amazing: https://learnbyexample.github.io/curated_resources/linux_cli_scripting.html.

For getting quick technical information directly from the bash shell, use the `man bash` page and the commands `help`, `help read`.

First you add or not add the `shebang` (`#!`) at the beginning of the script, followed by the absolute path of the shell that you want to exectute the script.
You also can not adding it I think, and the shell that you call the script from will execute the script.
Anyway, it is worth adding it explicitely:

```
#! /bin/bash
```

You can define variables as easily as:

```
x = 2
name = Pippo
```

To get the value of the variable, you need to add `$` before the variable name:

```
echo $name
```

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

To get user input we use the command `read`.
Is you use `read x` the input value will be stored in the variable `x`.

The basic syntax for `if` statements is:

```
if [ conditions ]
  then
    commands
fi

if [[ conditions ]]
  then
    commands
  elif [[conditions]]; then
    commands
  else
    do commands
fi
```

Conditions are usually comparision between the values of variables and numbers, for which you use the keywords `-eq`, `gt`, `lt`, etc.
To use AND and OR operators you use the keywords `-a` and `-o`.
