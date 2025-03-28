
Git [submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) is a tool that allows you to include a repository within another repository.
It is useful when you want to be able to treat the two repository as separate yet still be able to use one from within the other.

In my case, I wanted to include content in my personal website that is stored in a separate repositories.
For example the [superhearo](https://github.com/lorenzosquadrani/superhearo) repository, sharing data on my hearing.

To include the repository in my website repository as a submodule, I run the following command:

```bash
git submodule add https://github.com/lorenzosquadrani/superhearo
```

This adds two "changes to be commited":
- a `.gitmodules` file in which the mapping local path - remote repository for all your submodules will be stored;
- a new directory in your repository, named after the path you are including as a submodule, containing the content of the repository; the directory is created in the same location where you run the command.



