---
layout: note
title: "Point Processes"
sidebar: true
---
# Point Processes

As far as I understood, point processes are a special class of stochastic processes.
Very special, because nobody seems to know them.
Despite this, there is this subfield of computational neuroscience, which I happen to work in, where they are heavily used.
They are used, but with a total lack of formalism.
It is a nightmare for a PhD student who needs to learn and use them, like me. 
Unless you happen to be in the lab of a professor who can teach you, like not me.
But enough crying, let us get to work.

To understand how confused is the starting point here, is sufficient to read the Wikipedia page, "Convetions" section: there is not even agreement 
whether a point process is a stochastic process or not.


## Introduction from D.r. Cox
In many fields of application of probability theory a certain type of stochastic processes arise, such that their realization
consist of a set of points in time or space. 
These processes where thus studied in many different ways, according to the field. 
The theory of point processes is developed to unify the description of such matter.


## The informal point of view

A somehow naive point of view is that a point process is just a normal 
stochastic process in time, which takes binary values (for example 0 and 1) according to whether an event occurred at a certain time or not.

Imagine we have some data from a phenomenon we wish to study.
The data looks like an ordered series of numbers, each one representing the time of occurence of an event.
A Point Process is a set of points in an ordered set.



## Poisson Process

#### Treatment by Point Processes D.R. Cox
The Poisson process is the simplest point process, because points occur "totally randomly" (now we define what that means).
Let $$H_t$$ denote the history of the process at time $$t$$, i.e. a specification of the positions of all points in $$[-\infty, t].
Now let $$N(u, v)$$ with $$u<v$$ be a random variable giving the number of points in $$(u,v]$$.
Let $$\rho$$ be a constant with dimensions $$[T]^{-1}$$. 
A Poisson process of rate $$\rho$$ is defined by the requirement that $$\forall t$$, as $$\Delta t \rightarrow 0^+$$:

$$
\text{prob}(N(t, t+\Delta t)=1 | H_t) = \rho \Delta t + o(\Delta t)
$$

$$
\text{prob}(N(t, t+\Delta t)>1 | H_t) = o(\Delta t)
$$

An important aspect of the requirements is that the probability does not depend on the history $$H_t$$. 
The second requirement excludes the possibility of multiple simulatneous occurrences.
Another important aspect is that the rate $$\rho$$ is constant.

We now present the key properties deriving from the definition.
Let $$X$$ be the random variable representing the time from a fixed time origin $$t=0$$ to the first subsequent point.

... derivation of the p.d.f. of $$X$$ ...

The Poisson process could be defined by any of these mutually equivalent properties:
1. the ones we used, which we call an intensity specification.
2. by the property that starting from the time origin, the intervals $$X_1$$, $$X_2$$, between successive points are 
independently exponentially distributed with parameter $$\lambda$$, which we call interval specification.
3. By the specification of the joint distribution of $$N(A_1), N(A_2),...$$, which we call counting specification.



#### Treatment by renewal processes D.R. Cox
Let $$X$$ be random variable continuosly distributed over the range $$[0, \infty]$$, with p.d.f. given by:

$$
f(x) = \lambda e^{-\lambda x} \qquad \forall x \in [0, \infty].
$$


## Renewal Process

Renewal theory arises in connection to many applications of probability theory.
Moreover, the fundamental theorems of renewal theory are of general interest in probability theory,

The initial development of the theory was however mainly connected the study of failure and replacement of electrical components. 
That is why, to fix the ideas, sometimes we use the related terminology.


### Distribution of failure time

Consider a random variable $$X$$ continuosly distributed over the range $$[0, \infty]$$.
To fix the ideas, the variable could represent the failure time of a component.
We assume that the exists a probality density function (p.d.f.) for $$X$$, i.e.

$$
\exist f \text{ such that } f(x) = \lim_{\Delta x \rightarrow 0^+} \frac{\text{prob}(x<X<x+\Delta x)}{\Delta x}
,  \qquad \int_0^\infty f(x) dx = 1
$$

Thus, we can define the cumulative distribution function, the survivor function, and the age-specific failure rate function. 
They are all equivalent ways of representing the statistical properties of $$X$$.
We can also define all the moments of $$X$$.

### Laplace Tranform

We introduce the Laplace transform, a mathematical tools widely used in renewal theory.

Let $$f(x)$$ be the p.d.f. of a non-negative random variabel $$X$$. 
The Laplace transform of $$f(x)$$ is defined by:

$$
f^*(s) = E[e^{- s X}] = \int_0^\infty e^{-s x} f(x) dx
$$

The Laplace transform has a number of nice properties which we do not need to tell now.

### Ordinary renewal process
Suppose we have a population of components.
Let $$X_1$$ be the failure time of the first component.
When the component fails, we replace it.
Let $$X_2$$ be the failure time of the second component.
The process goes on, a componenent being replaces immediately on failure by a new component.
The $$r$$-th failure occurs at time $$S_r$$, given by:

$$
S_r = X_1 + ... + X_r
$$

If the random variables $$X_1, X_2, ...$$ are independent and identically distributed, we
call the process an ordinary renewal process.

The followin objects are used to described a renewal process:
1. *Time up to the r-th renewal*, which is the random variable $$S_r$$.
2. *Number of renewals up to time t*, denoted as $$N_t$$; more generally, sometimes one considers
the number of renewals between two fixed time points $$N_{t_1, t_2}=N_{t_2} - N_{t_1}$$.
3. *Renewal function* $$H(t) = E[N_t]$$.
4. *Renewal density* $$h(t) = H'(t)$$, where the derivative is defined in the limit from the right.
It specificies the number of renewals expected in a small interveal near $$t$$.



## References
- Wikipedia
- http://www.stat.columbia.edu/~liam/teaching/neurostat-fall13/uri-eden-point-process-notes.pdf
- Point Processes - D.R. Cox, Valerie Isham