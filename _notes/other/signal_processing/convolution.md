

### Commutativity of Convolution

Let $$x, h$$ be two functions such that $$x*h$$ exist.
Then, $$x*h = h*x$$.\\

*Proof*

We have:

$$
(x*h)(t) = \int_{-\infty}^{\infty} d\tau x(\tau)h(t-\tau)
$$

We make the change of variable $$\nu = t-\tau$$:

$$
\begin{aligned}
(x*h)(t) &= -\int_{t+\infty}^{t-\infty} d\nu x(t-\nu)h(\nu)\\
&= \int_{t -\infty}^{t+\infty} d\nu h(\nu)x(t-\nu)\\
&= \int_{-\infty}^{\infty} d\nu h(\nu)x(t-\nu)\\
&= (h*x)(t)
$$