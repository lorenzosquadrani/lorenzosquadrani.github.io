A crash course on bash scripts.

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
