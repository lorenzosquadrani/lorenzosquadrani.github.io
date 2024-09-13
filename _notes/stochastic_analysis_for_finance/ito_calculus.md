---
title: "Ito Calculus"
collection: notes
tag: Stochastic Analysis for Finance
permalink: /notes/stochastic_analysis_for_finance/ito_calculus
---

Here we denote a stochastic process as $$f(t, \omega), $$f: I \times \Omega \longrightarrow \mathbb{R}$$.

### Ito Integral

Let X_t be a stochastic process and $$W_t$$ be a Brownian motion.
The Ito integral of $$X_t$$ with respect to $$W_t$$ over the time interval $$[0,t]$$ is defined as:

$$
\int_0^t X_s dW_s = \lim_{n \to \infty} \sum_{i=0}^{n-1} X_{t_i} (W_{t_{i+1}} - W_{t_i})
$$

where $$0=t_0 < t_1 < \ldots < t_n = t$$ is a partition of the interval $$[0, t]$$.

Note that the limit is defined in a probabilistic sense

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