---
title: "Stochastic Processes"
collection: notes
tag: Stochastic Analysis for Finance
permalink: /notes/stochastic_analysis_for_finance/stochastic_processes
---

## Some definitions

### Stochastic Process
Let $$(\Omega, \mathcal{F})$$ be a measurable space and $$I \subset \mathbb{R}$$ be an index set.
We call stochastic process any sequence of random variables $$\{X_t\}_{t \in I}$$ on the same sample space $$\Omega$$.
We denote a stochastic process as $$\{X_t\}_{t \in I}$$, or $$X: I \times \Omega \rightarrow \mathbb{R}$$, or simply $$X_t$$.

If the index set is discrete, we call it a discrete-time stochastic process.
If the index set is continuous, we call it a continuous-time stochastic process.

A stochastic process can be fully characterized by its joint probability distribution.
If the index set is discrete, the joint probability distribution is given by:

$$
p(x_1, t_1; x_2, t_2; x_3, t_3; ...)
$$

The most simple stochastic process is one in which each random variable is independent, so that:

$$
p(x_1, t_1; x_2, t_2; x_3, t_3; ...) = \prod_i p(x_i, t_i)
$$



### Filtration
Let $$(\Omega, \mathcal{F})$$ be a measurable space and $$I \subset \mathbb{R}$$ be an index set.
We call filtration any sequence of $$\sigma$$-algebras $$\{\mathcal{F}_t\}_{t \in I}$$, such that $$\mathcal{F}_s \subset \mathcal{F}_t$$ for any $$s \leq t$$.

Note that any stochastic process induces a filtration, defined as $$\mathcal{F}_t = \sigma(X_s, s \leq t)$$, which is called the natural filtration of the $$\sigma$$-algebra $$\mathcal{F}$$ with respect to the stochastic process $$\{X_t\}_{t \in I}$$.

### Adapted Process
A stochastic process $$\{X_t\}_{t \in I}$$ is said to be adapted to the filtration $$\{\mathcal{F}_t\}_{t \in I}$$ if $$X_t$$ is $$\mathcal{F}_t$$-measurable for any $$t \in I$$.


## Brownian Motion

Originally, the term *Brownian motion* referred to a physical phenomenon observed by the botanist Robert Brown in 1827.
He observed that pollen grains suspended in water perform an apparently random motion.
It phenomenon was modeled mathematically by the mathematician Louis Bachelier in 1900, and later by Albert Einstein in 1905.
Later, Norbert Wiener devoloped a rigorous mathematical theory of Brownian motion, which is now a fundamental concept in stochastic analysis, and sometimes called *Wiener process*.

### Definition

Let $$W_t$$, $$t \geq 0$$, be a stochastic process on a probability space $$(\Omega, \mathcal{F}, \mathbb{P})$$.
We say that $$W_t$$ is a Brownian motion if:
- $$W_0 = 0$$ with probability 1.
- $$t \mapsto W_t$$ is continuous with probability 1.
- For any $$0 \leq s < t$$, the increment $$W_t - W_s$$ is normally distributed with mean 0 and variance $$t-s$$.
- For $$0 \leq t_1 < t_2 < \ldots < t_n$$, the increments $$W_{t_2} - W_{t_1}, W_{t_3} - W_{t_2}, \ldots, W_{t_n} - W_{t_{n-1}}$$ are independent.


## Martingales

### Definition
Let $$\{ X_t \}_{t \in I}$$ be a stochastic process adapted to the filtration $$\{ \mathcal{F}_t \}_{t \in I}$$.
Let the random variable $$X_t$$ be integrable for any $$t \in I$$, i.e. $$\mathbb{E}[|X_t|] < \infty$$.
We say that $$\{ X_t \}_{t \in I}$$ is a martingale with respect to the filtration $$\{ \mathcal{F}_t \}_{t \in I}$$ if:

$$
\mathbb{E}[X_t | \mathcal{F}_s] = X_s$$ for any $$s \leq t
$$.

## Poisson Process

TODO: from source https://gtribello.github.io/mathNET/resources/jim-chap20.pdf

The spiking times are independent on one another, and the "number of firing times in time intervals of the same length" follows a Poisson distribution with a fixed rate $$\nu$$.
We know that in this case, the probability density function of the ISI (inter-spike interval) is an exponential function.
In general, when the Poisson process does not represent a spike train, the time between to successive events is called *interarrival time* or *waiting time*.


## Poisson Process

The historical introduction of Poisson process was maybe related to the study of shot noise.
Shot noise was generated by the arrival of individual electrons at the anode.
The electric current arising from such process can be written as:

$$
I(t) = \sum_{t_k} F(t-t_k)
$$ 

where $$F(t-t_k)$$ is a function that describes the current generated by a single electron arriving at time $$t_k$$.
How should we model the arrival times? 
It reasonable to assume that they are independent, and there is a certain probability of an electron to arrive.
We define $$n$$ as the number of electrons that have arrived up to a time $$t$$.
This is a statistical quantity (random variable) described by a probability $$P(n, t)$$.
The probability that an electron arrives in the interval $$[t, t+dt]$$ is $$\lambda dt$$.
Thus we can write the Master equation for the probability $$P(n, t)$$:

$$
P(n, t+dt) = P(n-1, t) \lambda dt + P(n, t) (1-\lambda dt)
$$

Taking the limit $$dt \rightarrow 0$$, we obtain the differential equation:

$$
\frac{\partial P(n, t)}{\partial t} = \lambda \left[P(n-1, t) - P(n, t) \right]
$$

The equation is solved using the generating function $$G(s, t) = \sum_{n=0}^{\infty} P(n, t) s^n$$, which gives:

$$
\frac{\partial G(s, t)}{\partial t} = \lambda (s-1) G(s, t) 
$$

The solution is:

$$
G(s, t) = e^{\lambda t (s-1)} G(s, 0)
$$

By requiring that no electrons have arrived at time $$t=0$$, we have $$G(s, 0) = 1$$.
If we expand the exponential function in powers of $$s$$, we immediately find:

$$
P(n, t) = \frac{(\lambda t)^n}{n!} e^{-\lambda t}
$$

Thus, $$P(n, t)$$ is a Poisson distribution with mean $$\lambda t$$.

Now if we define the sequence of random variable $$N(t)$$, we have:

$$
P(n, t) = Prob{N(t)=n}
$$

then $$N(t)$$ is called Poisson process.

The quantity $$mu(t)$$, formally defined as:

$$
\mu(t) = dN(t)/dt
$$

is

$$
\mu(t) = \sum_k \delta (t - t_k)
$$

### Expectation, Variance, Autocorrelation function

The probability distribution describing the Poisson process is:

$$
P(X(t)=n) = \frac{(\lambda t)^n}{n!} e^{-\lambda t}
$$

with $$n\in \mathbb{N}$$.

We can directly compute the expectation value of $$X(t)$$:

$$
E[X(t)] = \sum_{n=0}^{\infty} n P(X(t)=n) = \sum_{n=0}^{\infty} n \frac{(\lambda t)^n}{n!} e^{-\lambda t} = \lambda t
$$

The second moment is a bit more tricky, but it can be computed in the same way:

$$
E[X^2(t)] = \sum_{n=0}^{\infty} n^2 P(X(t)=n) = \lambda^2 t^2 + \lambda t
$$

Thus:

$$
V[X(t)] = E[X^2(t)] - E[X(t)]^2 = \lambda t
$$


The autocorrelation function is defined as:

$$
R_{XX}(t_1, t_2) = E[X(t_1)X(t_2)]
$$

We want to exploit the property of independence of the number of events in disjoint intervals.
So we assume that $$t_1 \leq t_2$$, and we rewrite the previous expression as:

$$
E[X(t_1) X(t_2)] = E[X(t_1) (X(t_2) - X(t_1)) + X(t_1)^2]
$$

Then it is simple to obtain:

$$
R_{XX}(t_1, t_2) = \lambda^2 t_1 t_2 + \lambda t_1  
$$

In the case in which $$t_1 > t_2$$, we have the expression with switched indexes.





### Definition 1

Let the function $$N(t_1, t_2)$$ be the number of events in the interval $$[t_1, t_2]$$.
We say $$X(t)=N(0, t)$$ is a Poisson process if:
- N(t_1, t_2) is a Poisson random variable with mean $$\lambda(t_2 - t_1)$$.
- If the intervals $$[t_1, t_2]$$ and $$[t_3, t_4]$$ are disjoint, then $$N(t_1, t_2)$$ and $$N(t_3, t_4)$$ are independent.

But actually, an alternative definition might be useful.
We can define a Poisson process as $$X(t)=N(t, t+\Delta t)$$ where $$\Delta t$$ is a fixed time interval.
Of course, the properties now become:
- N(t, t+\Delta t) is a Poisson random variable with mean $$\lambda \Delta t$$.
- If the intervals $$[t, t+\Delta t]$$ and $$[t', t'+\Delta t]$$ are disjoint, then $$N(t, t+\Delta t)$$ and $$N(t', t'+\Delta t)$$ are independent.

The reason why I gave this alternative definition is because it seems like the right one to deal with neuronal spike trains.
I have seen that to compute the correlation between two spike trains, they choose a bin size (which is the $$\Delta t$$ in this case) and then compute the number of spikes in each bin. 
In this way they obtain two discrete stochastic processes, on which they compute the cross-correlation.

### Autocorrelation function 1

Let us compute the autocorrelation function for the the Poisson process $$X(t)$$ for two generic times $$t_1$$ and $$t_2$$, with $$t_1 < t_2$$:

$$
\begin{aligned}
R_{XX}(t_1, t_2)&= \mathbb{E}[X(t_1)X(t_2)] = E[N(0, t_1)N(0, t_2)] = \\
                &= E[N(0, t_1)\left(N(0, t_1) + N(t_1, t_2)\right)] = \\
                &= E[N(0, t_1)^2] + E[N(0, t_1)N(t_1, t_2)] = \\
                &= E[N(0, t_1)^2] + E[N(0, t_1)]E[N(t_1, t_2)] = \\
                &= \lambda t_1 + \lambda^2 t^2_1 + \lambda^2 t_1 (t_2 - t_1) = \lambda t_1 + \lambda^2 t_1 t_2
\end{aligned}
$$

### Autocorrelation function 2

Let us compute the autocorrelation function for the the Poisson process $$X(t)$$ for two times $$t_1$$ and $$t_2$$, with $$t_1 + \Delta t< t_2$$:

$$
\begin{aligned}
    R_{XX}(t_1, t_2) = \lambda^2 {\Delta t}^2
\end{aligned}
$$

### Waiting time
The arrival times of events in a Poissson process are continuous random variables. 
We denote with $$T_n = t_{n} - t_{n-1}$$ the time between two successive events.
This is called the *interarrival time* or *waiting time*.

We want to compute now the probability distribution of the waiting time before the first event.
To do so, we compute its cumulative distribution and then take the derivative.
The probability that $$T_1$$, which is the waiting time for the first event, is greater than $$t$$ is the probability that no event occurs in the interval $$[0, t]$$.
Thus:

$$
P(T_1 > t) = P(N(t)=0) = e^{-\lambda t}
$$

From which we have:

$$
P(T_1 \leq t) = 1 - e^{-\lambda t}
$$

Thus, the probability density function of $$T_1$$ is:

$$
f_{T_1}(t) = \lambda e^{-\lambda t}
$$

We can do the same for a generic waiting time $$T_n$$, and the result is the same.




## References

- Wikipedia
- Stochastic Analysis for Finance
- This lectures: http://ee162.caltech.edu/
- Stochastic Methods - Gardiner

