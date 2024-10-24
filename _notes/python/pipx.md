### Pipx

Pipx is a tool to install python-written applications on your machine.

How would you install an application written in pure Python on your machine?
This is what we need to run the application:
- a Python interpreter (with a version compatible with the application's code)
- all the python libraries the application depends on
and that's actually it!

So, why do we need a tool to do that? 
Because you want the python interpreter and the libraries to be in a separate virtual environment, 
rather than your system (tons of reasons for that).
Thus the procedure can become a bit bothersome to on your own. 
In any case, we want to install an application with a single command line.

So we already know what Pipx does: create a virtual python environment with the right python version and libraries 
for the application you wish to install, put everything in folders and add paths in such a way that you can use your 
application without even noticing the change of python environment.


**Conflict with conda**