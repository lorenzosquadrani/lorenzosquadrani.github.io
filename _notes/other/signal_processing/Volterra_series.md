
---
title: "Volterra Series"
collection: notes
tag: signal processing
permalink: /notes/signal_processing/Volterra_series
---

### Input-Output Systems

Definitions
-----------

In the following we refer to **input-output system**, or simply system, as a process that, given an input $$x(t)$$, produces an output $$y(t)$$.

We say the system is **static** if the output at time $$t$$ does not depend on the values of the input at times $$s<t$$.
Otherwise we say that the system is **dynamic**.

We say that the system is **linear** if the properties of superposition and scaling of the output with respect to the input hold.
Otherwise we say that the system is **nonlinear**.

We say that the system is **time invariant** if the output does not depend explicitily on time, but only through the input 
(i.e. the output of the system to a given input does not depend on the time the input is presented).
Otherwise we do not say anything.

Examples 
--------

1. A time invariant nonlinear static system could be:

$$
y(t) = e^{x(t)}
$$

2. A time invariant linear dynamic system could be:

$$
y(t) = \int_{t-5}^t x(s) ds
$$

3. A generic time invariant linear static system has the form:

$$
y(t) = a x + b
$$

4. A time invariant nonlinear dynamic system could be:

$$
y(t) = \int_{t-5}^t x^2(s) ds
$$

### Static Systems and Taylor Series

A generic time invariant static system has the form:

$$
y(t) = F(x(t))
$$

Under certain regularity conditions, the system can be represented with a Taylor series, i.e.:

$$
y(t) = \sum_{n=0}^\infty f_n x^n(t)
$$

Note that, if $$F$$ is linear, the system is linear, and its Taylor series representation has only the 0th and 1st order terms:

$$
y(t) = f_0 + f_1 x
$$

(On the other hand, that is exactly the only form a generic linear function can have, so the two representations coincide).


### Dynamical Systems and Volterra Series

A generic time invariant dynamical system is defined by one or more differential equations of arbitrary order.
Recall that any n-th order differential equation can be written as a system of 1st order differential equations.
Thus, a generic time invariant dynamical system has the form:

$$
\dot y = F(y, x(t))
$$

Notice that, if $$F$$ is linear in both arguments, the system is linear.
In this case, it can be represented as:

$$
y(t) = \int_{-\infty}^{\infty} h(\tau) x(t - \tau) d\tau
$$

where $$h(\tau)$$, called Unit Input Response (UIR) or Green function, is the solution of the equation:

$$
\dot y = F(y, \delta(t))
$$

This representation for linear differential equations was first developed by Green in 1820s.
In 1870s, Volterra extended the representation to nonlinear dynamical systems.
In general, a nonlinear dynamical system can be represented with a Volterra series, i.e.:

$$
y(t) = h_0 + \int_{-\infty}^{\infty} h_1(\tau) x(t - \tau) d\tau + \iint_{-\infty}^{\infty} h_2(\tau_1, \tau_2) x(t - \tau_1) x(t - \tau_2) d\tau_1 d\tau_2 + ...
$$

where $$h_n(\tau_1, ..., \tau_n)$$ are the called Volterra kernels.
Notice that the kernels of order higher than 1 are no completely defined by the response to a unit impulse.
Just do the calculations to verify that. 
You will find that the response to a unit impulse is sufficient only to determine the diagonal of the kernels.

A more compact notation is:

$$
y(t) = h_0 + H_1[x] + H_2[x] + ...
$$

Maybe I should tell more about the analogy with the Taylor series. Maybe.



First-order Volterra system
---------------------------

Let us con



### Wiener Series

The Volterra series has a problem: the terms of different order are not independent.
The notion of independence needs to be clarified. 
It is related to that of orthogonality in a vector space.

The consequence is that you cannot compute each term sequentially. 
Different series representation have thus been developed, in which terms of different order are orthogonal to each other.
Examples are the Fourier series and the Wiener series.
The latter was developed as a Volterra-like series with orthogonal components.
In this way, one can compute each term sequentially, stopping at the order at which the output is sufficiently well approximated.


References
----------

- Book from Wim van Drongelen - Signal Processing for Neuroscientists