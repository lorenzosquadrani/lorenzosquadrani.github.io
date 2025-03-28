---
title: "Jekyll"
permalink: /notes/informatics/jekyll
---

Jekyll is a _static site generator_.
This means that if run the command `jekyll build`, within a folder in which there is a Gemfile (jekyll is written in Ruby) and a bunch of folders and files appropriately organized, the command will produce a website ready to be host on web server.

The file `_config.yml` looks very important in the Academics template.
Oh well, to organize my notes page, it seems like I have to read of Jekyll works for real. 
I realized I am "killing" jekyll phylosophy. 
It is like I am using a hammer to hit my target with the wooden handle.
This is because every time a make some new content (write a new note), I have also to go the notes page and udpdate the table in order to add the note. 
In Jekyll, this process should be all automated, so that you just focus on writing content, and the mental bargain of updating your website is way lower.


To understand Jekyll, I hoped that reading the documentation on the website would have been enough.
Unfortunately, it seems limited to the bare minimum. 
Thus, I try to build a website from scratch.

First I create a directory for my website:
```
mkdir TestWebsite
```

Then I use the command:
```
jekyll new TestWebsite/ --blank
```
which creates new jekyll site with the basic structure and nothing else.
I run `jekyll serve` or `jekyll build` to see how it looks: it is just a blank page with written "you are ready to go".

The basic structure includes:
- empty folders (`_data`, `_drafts`, `_includes`, `_posts`)
- a folder `_layouts` containing a single layout called `default.html`
- a folder `_sass` containing a single file `base.scss`
- a folder `assets/css` containing a single file `main.scss`
- a file `_config.yml` and a file `index.md`

After I run the command `jekyll build` the following folders are created:
- `.jekyll-cache`, which probably contains just some info used to speedup subsequent builds on the website
- a folder `_site` containing a file `index.html` and a folder `assets/css`
Importantly, this last folder is the website: just a collection of `.html` files, telling the browser what to draw, and `.css` files, telling the browser how to draw.

Now the first thing I want to do is to add some text, describing myself, in the `index.md` page, and also a picture.
To do that, I try to follow the organization from [academicpages](https://github.com/academicpages/academicpages.github.io) and/or [al-folio](https://github.com/alshedivat/al-folio) (from now on called "the guys").

They both moved the `index.md` basic page into the folder `_pages`. 
Now big question: if I do it, will the website still build correctly?
Only a way to find out.
Nope! I mean the build went fine, but the generated site is different: the is no `index.html` file anymore.
The _pages folder was completely ignored.
So let us see where the guys cites this folder.
Ah-ah, they added this line in their `_config.yml` file:

```
include: ["_pages"]
```

If I do it as well, the site has now another folder `_pages` containing the `index.html` file.
However, this is not displayed as the first page when I open the website with `jekyll serve` running.
How to tell Jekyll that that is my main page?
Well the main page of the guys I think is called `about.md`, let us see were they mention it.
Mmh, nowhere interesting. 
But it might be referred somewhere so that it is set as the main page.
One explanation could be that all the pages in the `_pages` folder are included with a single statement, or maybe they loop over them, so the name is never actually referred.
So let us look again for `_pages`.
Nope, nothing useful.
Maybe where the page `about.md` goes is specified within the content of the file itself, i.e. in its header (which I think Jekyll calls "front matter").
There are many things there, that the basic file `index.html` does not have.
The most interesting seems `permalink`. 
Ye babe! I added to the front matter of:

```
permalink: /
```

and now `index.html` is the root of my website.
The site built looks now _exacly_ like in the beginning, before creating the `_pages` folder.

I added some text in the `index.html`, point at other webpages (emtpy for now) that I created in the `_pages` folder.
To point at other webpages I simply add to use the link syntax of markdown, where the link to ther local page is obtained with a Liquid command, like this:

```
[CV]({% link _pages/cv.md %})
```

Nice, time to add an image of myself!
Here the guys do not agree: `academicpages` has a folder `/images`, while `al-folio` has a folder `/assets/img/`.
I guess this is an arbitrary choice. 
To avoid making the root too crowded, I go for a folder `/assets/images/`, and put my pic inside.
The guys have a picture called `profile_pic.jpg` or similar, let us follow that.
I know they like cut the image in circular shape, so there must be some script it is connected to. 
A lot to learn, ye.
So, `al-folio` refers it only in the front matter of `about.md`, under the `profile:image` keyword.
While `academicpages` refers it in the `_config.yml` under the keyword `avatar`.
I guess we need to follow this keywords now.
I choose to follow `al-folio` because it should be simpler (according to how its website looks).

The important file seems to be `about.liquid`, which is a layout (since it is in the `_layouts` folder). 
It does not sound right to have a layout just for a specific page. 
Indeed, `academicpages` does not have it, and the layout of its `about.md` is `default.html` (I guess, since it is not specified).
Moreover, the some code is repeated identical in the layout `profiles.liquid`.
Let us see what this code does.
First I notice that the main structure is actually `html`, thus I like more the extension `.html`, like `academicpages` thus (and also like the priginal jekyll blank website).

The main html element of interest seems a div.
But is the variable `site.max_width` automatically defined? Let us try to use this snippet in my `index.md`.
Ok, of course we miss the file `figure.liquid`.
This is in the `_includes` folder, and it provides a single html figure element. 
To do that though, it uses a lot of Liquid commands, and invokes also imagemagick.
Instead, `academicpages` does not use any tool apparently, it looks more elegant but more difficult to understand.
It seems to be overcomplicated for what I want to do. 
I will just use basic html elements and css for floating behavior I guess.
So I just added this (thanks ChatGPT):

```
<img src="/assets/images/profile.jpg" alt="Profile picture" 
     style="float: right; margin-left: 10px; margin-right: 50px; width: 200px;">
```

Not rounded, but not bad! Actually to round it I just had to add a stylying option. 

The next thing we want to do is add a navigation bar at the top.
We need to follow closely the guys because I want my website to be mobile friendly as theirs.

Ok I got fed up of following the guys, because everything is so convoluted and complicated, and I want something simple.
On the other hand, I still miss a whole understanding of Jekyll workflow.
You know who has it instead? ChatGPT. 
I asked it this:
```
I would like to add a page titled 'Personal Notes'. This page should present links to all the markdown files in the folder _data/notes/ in which some notes are written. For example the path to a note will be _data/notes/field/subfield/topic.md. The page should divide the notes in the different fields and subfields, and every time I add a new folder or a new file in the _data/notes/ it should update correctly. How to do it?
```

And it immediately warned me that Jekyll expects only structured data in the folder `_data`, not markdowns.
Good ChatGPT.
So here's what we have to do:
1. Create a `_notes/` folder with the structure `field/subfield/topic.md`.
2. Create a collection in `_config.yml` (the concept of collection is important in Jekyll).
3. Make the page `_pages/notes.md` with the appropriate Liquid code to fetch the fields, subfields, topics.

To understand the idea of how Liquid code works, consider that this code:


Will write all the paths of the notes that you stored in the folder `_notes`. Powerful!

### Support for Latex: Mathjax
Quite suprisingly to me, there is no official documentation on how to implement mathjax support.
Since I am surprised, I am probably missing something.
First, what is [MathJax](https://www.mathjax.org/)?
It is a program written in JavaScript that takes latex code and renders it nicely.
It is developed by the homonymous non-profit organization MathJax.
The fact that is in JavaScript tells us that will work in all browsers.
Thus, tecnically, Jekyll already supports MathJax, since of course it supports JavaScripts.
We just have to tell Jekyll were to look for the scripts, and on the MathJax webpage they tell you exactly how to do it:

So let us try to add the script in our note layout, and see what happens.
