---
layout: note
title: "Ito Calculus"
sidebar: true
---

Here we denote a stochastic process as $$f(t, \omega)$$, $$f: I \times \Omega \longrightarrow \mathbb{R}$$.

### Motivation
This piece is taken from the video of MIT 18.S096, from Mr Lee.

Suppose we want to compute $$f(B_t)$$, where $$B_t$$ is a the brownian motion and $$f$$ is a very regular function.

For example $$B_t$$ could be some stock, or any financial asset, and $$f(B_t)$$ describes a so-called financial derivative.
Then you want to understand how the value of the financial derivative varies as the value of the underlying financial asset varies.

If $$B_t$$ was not a stupid brownian motion, but a differentiable function instead, we could write:

$$
df = f'(B_t) \frac{dB_t}{dt}dt
$$

but unfortunately that differentiation does not exist, so it does not make sense.
So we stop before:

$$
df = f'(B_t) dB_t
$$

Now the "small" difference of the brownian motion $$dB_t$$ does exist of course, we understand what it is.
But what we wrote is still wrong, damn it. 
Why? 
Because the quadratic variation of the brownian motion is not zero. LoL.
Let us see really why.
Notice that for a differentiable function of $$t$$, the quadratic variation woule be zero.
And that we are so used to the fact that the above equation is right.
Now that conditions are changed, we need to remember where we got that equation from.
That followed from the Taylor expansion, since:

$$
f(t+dt) = f(t) + f'(t)dt + \frac{f''(t)}{2} dt^2 + ...
$$

Then, in classical calculus we ignore all the terms from the second order in $$dt$$ on.
In our case:

$$
\begin{align}
f(B_{t+x}) - f(B_t) &= f'(B_t) (B_{t+x} - B_t) + \frac{f''(B_t)}{2} (B_{t+x} - B_t)^2+ ...\\
&= f'(B_t) dB_t + \frac{f''(B_t)}{2} dB_t^2 + ...
\end{align}
$$

but from the quadratic variations theorem we know that $$dB_t^2$$ is of the order of $$dt$$, thus we cannot drop it.

Finally, the correct equation connecting the infinitesimal difference of the financial derivative value in an infinitesimal time step $dt$ and the infinitesimal differene of the brownian motion, is:

$$
df = f'(B_t) dB_t + \frac{f''(B_t)}{2} dt^2
$$

and it is called *Ito's lemma* (simple form).

Let us formulate a slightly more general form of the Ito's lemma, considering $$f(t, B_t)$$.
Again, if we had a normal function $$f(t,x)$$, Taylor's expansion would be:

$$
d f(t, x)  = \frac{\partial f}{\partial t} dt +  \frac{\partial f}{\partial x} dx + \frac{1}{2} \left (\frac{\partial^2 f}{\partial t^2} dt^2 + 2 \frac{\partial f}{\partial t \partial x} dt dx + \frac{\partial^2 f}{\partial x^2}dx^2 \right) + ...
$$

If instead of $$x$$ we have a brownian motion, however, $$(dB_t)^2 \sim dt$$, while the term $$dt^2$$ and $$dt dB_t$$ are still neglectable. 
Thus we get the Ito's lemma:

$$
df = \left(\frac{\partial f}{\partial t} + \frac{1}{2} \frac{\partial^2 f}{\partial x^2}\right)dt+\frac{\partial f}{\partial x} dB_t
$$


### Ito Integral

Let X_t be a stochastic process and $$W_t$$ be a Brownian motion.
The Ito integral of $$X_t$$ with respect to $$W_t$$ over the time interval $$[0,t]$$ is defined as:

$$
\int_0^t X_s dW_s = \lim_{n \to \infty} \sum_{i=0}^{n-1} X_{t_i} (W_{t_{i+1}} - W_{t_i})
$$

where $$0=t_0 < t_1 < \ldots < t_n = t$$ is a partition of the interval $$[0, t]$$.

Note that the limit is defined in a probabilistic sense.

### Stochastic Differential Equation

Let $$(\Omega, \mathbb{F}, \mathbb{P})$$ be a probability space.
Let $$X_t: [0, +\infty[ \times \Omega \longrightarrow \mathbb{R}$$ be a stochastic process.
Let $$\mu: [0, +\infty[ \times \mathbb{R} \longrightarrow \mathbb{R}$$ and
$$\sigma:  [0, +\infty[ \times \mathbb{R} \longrightarrow \mathbb{R}$$
be continuous functions.
If $$X_t$$ satisfies the equation:

$$
X_t = x_0 + \int_0^t \mu(s, X_s) ds + \int_0^t \sigma(s, X_s) dW_s
$$

then we say that $$X_t$$ is a strong solution of the stochastic differential equation denoted by:

$$
dX_t = \mu(t, X_t) dt + \sigma(t, X_t) dW_t
$$

with initial initial condition $$X_0=x_0$$.