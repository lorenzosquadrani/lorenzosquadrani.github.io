---
layout: note
title: "Stochastic Processes"
sidebar: true
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
The phenomenon was then modelled by the mathematician Louis Bachelier in 1900 and by Albert Einstein in 1905.
Later, Norbert Wiener devoloped a rigorous mathematical theory of Brownian motion, which is now a fundamental concept in stochastic analysis, and sometimes called *Wiener process*.

### Definition

Let $$W_t$$, $$t \geq 0$$, be a stochastic process on a probability space $$(\Omega, \mathcal{F}, \mathbb{P})$$.
We say that $$W_t$$ is a Brownian motion if:
- $$W_0 = 0$$ with probability 1.
- $$t \mapsto W_t$$ is continuous with probability 1.
- For any $$0 \leq s < t$$, the increment $$W_t - W_s$$ is normally distributed with mean 0 and variance $$t-s$$.
- For $$0 \leq t_1 < t_2 < \ldots < t_n$$, the increments $$W_{t_2} - W_{t_1}, W_{t_3} - W_{t_2}, \ldots, W_{t_n} - W_{t_{n-1}}$$ are independent.

Alternatively, in the course MIT 18.S096, to define the Brownian motion they start by this theorem:

There exist a probability distribution over the set of continuous functions $$B: \mathbf{R}^+ \rightarrow \mathbf{R}$$, such that:
- $$P(B(0)=0) = 1$$
- $$B(t)-B(s) \tilde N(0, t-s) \qquad \forall 0\leq s\leq t$$
- If the intervals $$[a, b]$$ and $$[c, d]$$ are non-overlapping, then $$B(b)-B(a)$$ and $$B(d)-B(c)$$ are independent.
We call this probability distribution *Brownian motion*.

In this theorem, the continuous functions are all the possible paths of the brownian motion.
The brownian motion is defined as the probability distribution over this space of functions, which the properties that were listed.
Mr. Lee says that this is somehow a "inverted" way of definining the process. 
Because we are not saying consider this process, we say it is Brownian motion, if it satisfies this and this.
Instead, we say there exists a process like this, we call it Brownian motion.
It am not gonna lie, it feels a bit the same.
But not sure.

Euristically, the Brownian motion could be seen as the continuous time limit of the simple random walk.

### Properties

1. The brownian motion crosses the time axis infinitely often.
2. The brownian motion does not deviate too much from $$t=y^2$$.

3. If $$B_t$$ is the brownian motion and we define the process $$M_t = \max_{s\leq t} B(s)$$, then:

$$
P(M_t > a) = 2 P(B_t>a) \qquad \forall t
$$

*Proof*
I take the proof from the MIT course.

Let $$\tau_a$$ be the first crossing time of the line $$a$$, i.e. $$\tau_a = \min_{B_\tau =a} \{ \tau \}$$.
Then:

$$
\begin{align}
P(M_t>a) &= P(\tau_a < t) = \\
&= P(B_t - B_{\tau_a} <0 | \tau_a < t) + P(B_t - B_{\tau_a} >0 | \tau_a < t) = \\
&= 2P(B_t - B_{\tau_a} >0 | \tau_a < t) \\
&= 2P(B_t - B_{\tau_a} >0) = \\
&= 2P(B_t >a) 
\end{align}
$$

If the first equatility does not convince you (it raised some doubts in me), just consider this, in which we use the law of total probability, plus the fact that a single value has a probability of 0:

$$
\begin{align}
P(M_t>a) &= P(M_t\geq a) =\\
&= P(\tau_a \leq t) P(M_t\geq a | \tau_a \leq t) + P(\tau_a>t) P(M_t \geq a | \tau_a >t) \\
&= P(\tau_a \leq t) P(M_t\geq a | \tau_a \leq t) = \\
&= P(\tau_a \leq t) = P(\tau_a < t)
\end{align}
$$

4. Even if it is continuous everywhere, the brownian motion is nowhere differentiable. 
More correctly, it is not differentiable with probability 1.

*Proof*

We proceed for absurd. 
Suppose the brownian motion is differentiable at a certain time $$t$$:

$$
\frac{dB(t)}{dt} = A
$$

Then it mush hold (more or less, says Mr Lee):

$$
|B_{t+\epsilon} - B_t | \leq \epsilon A \qquad \forall \epsilon>0
$$

And thus:

$$
|M_\epsilon | \leq \epsilon A
$$

However, using the previous property, we can show that, in the limit $$\epsilon \rightarrow 0$$, the maximum is greater with probability 1.

$$
\begin{align}
P(M_\epsilon>\epsilon A) &= 2 P(B_\epsilon > \epsilon A) = \\
&= 2 P(N(0, \epsilon) > \epsilon A) = \\
&= 2 P(N(0, 1) > \sqrt{\epsilon} A) \rightarrow 1 \qquad \text{ as } $\epsilon \rightarrow 0
\end{align}
$$

From the last property, it follows that we cannot use any tool of calculus anymore :(.
You cannot do any damn analysis on it. 
Quite bad.
Than we have to learn a new theory of calculus, called *Ito's calculus*.

### Theorem of quadratic variation

We proved that the brownian motion is not differentiable, but do we really know why it is so?
The intuitive reason is: it just fluctuates too much, for gods' sake.
In other words, it has a non-zero quadratic variation. LoL.
Enough, let us state the theorem.

If $$B(t)$$ is the brownian motion, then for all $$T>0$$ we with probability 1:

$$
\lim_{n\rightarrow \infty} \sum_{t=1}^n \left( B(t\frac{T}{n}) - B((t-1) \frac{T}{n}) \right)^2 = T
$$

Or, equivalently:

$$
(dB)^2 = dt^2
$$

The proof of the theorem is quite simple, but I do not feel like writing it down now.
Just check the video of Mr Lee. 
It is an application of the strong law of large numbers.

## Martingales

Intuitively, according to Mr. Lee, a martingale is a stochastic process that does not have any natural tendency to go up or down.
Slightly more formally, a process such that the expectation at every time in the future $$s>t$$ is equal to the value at time $$t$$, independently from whatever happened before $$t$$, i.e.:

$$
\mathbb{E}[X_s | \mathcal{F}_t] = X_t \qquad \forall t<s
$$

Weird. I need to correct what I just wrote.


### Definition
Let $$\{ X_t \}_{t \in I}$$ be a stochastic process adapted to the filtration $$\{ \mathcal{F}_t \}_{t \in I}$$.
Let the random variable $$X_t$$ be integrable for any $$t \in I$$, i.e. $$\mathbb{E}[|X_t|] < \infty$$.
We say that $$\{ X_t \}_{t \in I}$$ is a martingale with respect to the filtration $$\{ \mathcal{F}_t \}_{t \in I}$$ if:

$$
\mathbb{E}[X_t | \mathcal{F}_s] = X_s$$ for any $$s \leq t
$$.


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


## Renewal Process
A renewal process is a point process which generalizes the Poisson process.
In a renewal process, events are generated stochastically with an "intensity" or "hazard" which depends on the time since the last event $$\hat t$$:

$$
\rho = \rho(t, t-\hat t)
$$

The process is called "renewal" because of the fundamental assumption that the event probability does not depend on the events preceding the last event (i.e. the last event completely "renews" the probability).
The time since last event $$t-\hat t$$ is also called *age* of the system.

In the case of a stationary renewal process, it is:

$$
\rho = \rho(t-\hat t)
$$

Of course, unlike in a Poisson process, in a renewall process subsequent events are not independent.
However, due to the renewal assumption which restricts the dependence on the most recent event, the *intervals between subsequent events* are independent.
Thanks to this, it is possible to compute the probability density of the intervals, or equivalently the probability density that an event occurs at time $$t=\hat t + \Delta t $$ given that an event occured at time $$\hat t$$:

$$
P_0(\Delta t) = P(\hat t + \Delta t | \hat t) = P(t | \hat t)
$$

From the interval distribution it is possible to compute the autocorrelation function and the power spectrum of the renewal process.


### Autocorrelation function

Let $$y(t)$$ be an events train generated by a renewal process.
We denote with $$\nu=\langle y(t) \rangle$$ the mean firing rate.

First, we consider that firing at time $$t+s$$ is independent of whether or not a spike occurred at time $$t$$, provided that $$s$$ is large enough.
Thus:

$$
\lim_{s \rightarrow \infty} C(s) = \lim_{s\rightarrow \infty} \langle y(t) y(t+s) \rangle=
\lim_{s \rightarrow \infty} P(t+s|t) = P(t+s) P(t) = \nu^2
$$

We substract this known "baseline" value to the autocorrelation function, and we focus on determining what is left:

$$
C^0(s) = C(s) - \nu^2
$$


We construct C(s) in the case $$s>0$$ (we know that the autocorrelation function is symmetric anyway).
We recall that the autocorrelation function is the probability density function of observing two events at distance $$s$$, i.e. $$C(s)=P(t, t+s)$$.
We factorize the probability density of observing a spike at a generic time $$t$$, which is $$\nu$$:

$$
C(s) = P(t, t+s) = P(t) P(t+s|t) = \nu P(t+s|t)
$$

Given the fact that we observed a spike at time $$t$$, what is the probability density of observing a spike at time $$t+s$$?
If the event at time $t+s$ is the exactly the event subsequent to the one at time $t$, we would know its probability density to be $P_0(s)$
(the waiting time probability density).
However, the event at time $t+s$ could also be the second subsequent one, or the third, or so on.
To obtain the probability density of $t+s$ thus need to take into account all the possibilities, thus with a sum of infite terms:

$$
P(t+s|t) = P_0(s) + \int_0^{\infty} ds_1 P_0(s_1)P_0(s - s_1) + \iint_0^\infty ds_1 ds_2 P_0(s_1) P_0 (s_2) P_0(s - s_1 - s_2) + ...
$$

Equivalently, we can write:

$$
P(t+s|t) = P_0(s) + \int_0^\infty P_0(s') P(t + s - s'| t) ds' = P_0(s) + \int_0^\infty P_0(s') C(s - s') ds'
$$

Believe it or not, this equation can be solved. 
Let us define $$f(s)= P(t+s|t)$$.
We need to solve the equation:

$$
f(s) = P_0(s) + \int_0^\infty P_0(s') f(s-s') ds'
$$

Notice the convolution on the right-hand side.
We can solve this equation by taking the Fourier transform of both sides, thanks to the convolution theorem 
(the Fourier transform of a convolution is the product of the Fourier transforms):

$$
\tilde f(\omega) = {\tilde P}_0 (\omega) + {\tilde P}_0 (\omega) \tilde f(\omega)
$$
 
Thus:

$$
\tilde f(\omega) = \frac{  {\tilde P}_0 (\omega)}{1 - {\tilde P}_0 (\omega)}
$$


## Poisson Cumulative Process or Compound Poisson Process

Let $$\{W_n\}$$ be a sequence of independent and identically distributed random variables.
Let $$N_t$$ be a Poisson counting process with rate $$\lambda$$.
Then we define a Poisson cumulative process as:

$$
Z_t = \sum_{n=1}^{N_t} W_n
$$

with the convention that $$Z_t=0$$ if $$N_t=0$$.

### Moment Generating Function
The moment generating function of $$Z_t$$ is:

$$
M_Z(p, t) = \exp(\lambda t M_W(p) - \lambda t)
$$

where $$M_W(p)$$ is the moment generating function of $$\{W_n\}$$.

Let $$W_n$$ be exponentially distributed random variables with rate $$\nu$$.
The probability density function for $$W_n$$ is $$\nu e^{-\nu w}.
The moment generating function for $$W_n$$ is $$\frac{\nu}{\nu + p}$$.
Thus, the moment generating function for the Poisson cumulative process is:

$$
M_Z(p, t) = \exp(\frac{\lambda \nu t}{\nu + p}  - \lambda t) 
$$

### Expected Value

One can show that:

$$
E[Z_t] = E[N_t] E[W_n]
$$

where $$E[W_n]$$ does depend on $$n$$ since the $$W_n$$ were assumed to be identically distributed.

To show it, we use the conditional expectation theorem, conditioning on the number of events:

$$
E[Z_t] = E[E[Z_t | N_t]] = \sum_{m=0}^\infty E[Z_t | N_t = m] P(N_t=m)
$$

Now $$Z_t \| N_t=m$$ is the random variable $$\sum_{n=1}^{m} W_n$$, of which we can compute the expectation:

$$
E[Z_t |N_t=m] = E[\sum_{n=1}^{m} W_n] = \sum_{n=1}^{m} E[W_n] = n E[W_n]
$$

thus:

$$
E[Z_t] = \sum_{m=0}^\infty m E[W_n] P(N_t=m) = E[N_t] E[W_n]
$$

### Variance

One can show that:

$$
E[Z_t^2] = E[N_t] Var[W_n] + E[N_t^2] E^2[W_n]
$$

To show it, we use again the conditional expectation theorem, conditioning on the number of events:

$$
E[Z_t^2] = E[E[Z_t^2 | N_t]] = \sum_{m=0}^\infty E[Z_t^2 | N_t=m] P(N_t=m)
$$

On the other hand:

$$
\begin{aligned}
E[Z_t^2 | N_t=m] &= E \left[ \left( \sum_{n=1}^m W_n \right)^2 \right] 
                 = E\left[  \sum_{n=1}^m W_n^2 + \sum_{i \neq j = 1}^m W_i W_j \right] = \\
                 &= \sum_{n=1}^m E[W_n^2] + \sum_{i\neq j =1}^m E^2[W_n] 
                 = m E[W_n^2 ] + m(m-1) E^2[W_n] =\\
                 &= m (E[W_n^2] - E^2[W_n]) + m^2 E^2[W_n]
\end{aligned}
$$

Thus:

$$
E[Z_t^2] = \sum_{m=0}^\infty m (E[W_n^2] - E^2[W_n]) + m^2 E^2[W_n]P(N_t=m) = E[N_t] Var[W_n] + E[N_t^2] E^2[W_n]
$$



# Still to be organized
### Interspike Intervals Distribution

Given a spike train, we can compute all the interspike intervals (ISI) and contruct the histogram of them.
For a sufficiently long spike train, the histogram could be a good estimate of the ISI distribution, denoted as $$P_0(s)$$.

The ISI distribution, which is the probability density of observing an ISI equal to $$s$$, can also be interpreted as a conditional probability density as:

$$
P_0(s) = P(t + s | \hat t)
$$

where $$\int_t^{t+\Delta t} P(t' \| t) dt'$$ is the probability that the next spike occurs in the interval $$[t, t+\Delta t]$$ given that the last spike occurred at time $$t$$.

Given the ISI distribution for a spike train, it is possible to compute the mean firing rate. 
One can show that the mean firing rate is the inverse of the mean ISI.


### Autocorrelation

Let us consider a neuron firing activity.
Assume we observe a spike at time $$t$$.
We ask ourself the question: given the fact that the neuron fired at time $$t$$, what is the probability that it will fire at time $$t+s$$, where $$s$$ is an arbitrary delay?

To give a quantitative answer to this question, we need to measure a quantity appropriately defined.
Such a quantity has already been defined in literature, and it is called *autocorrelation with delay $$s$$ of the spike train*.
We are now going to introduce such definition.

Let us imagine we observe the neuron firing activity for a time interval $$T$$ arbitrarily large.
We record a set of firing times $$F=\{ t_1, ... , t_n\}$$.
We know that a useful mathematical description of the train of spikes we observed is:

$$
y(t) = \sum_{t^f \in F} \delta(t-t^f)
$$

We define the autocorrelation function of $$y(t)$$ with delay $$s$$ as the probability of finding two spikes at a time interval $$s$$, i.e.:

$$
C(s) = \lim_{T \rightarrow \infty} \frac{1}{T} \int_{-T/2}^{T/2} y(t) y(t-s) dt
$$

The definition is rather abstract, but we can show that it matches the interpretation that we gave above.
Let us suppose that we have this weird spike train $$y(t)$$ such that every time it spikes, it spikes again after a delay $$\bar s$$.
Let us compute the autocorrelation function of this spike train.


### Power Spectrum

Given a spike train $$y(t)$$, its power spectrum is defined as:

$$
\mathcal{P}(\omega) = \lim_{T \rightarrow \infty} \frac{1}{T} \left| \int_{-T/2}^{T/2} y(t) e^{-i \omega t} dt \right|^2
$$

It can be shown that the power spectrum of a spike train is the Fourier transform of its autocorrelation function.

### Cross-correlation function

Qualitatively, the cross-correlation function is a measure of the similarity between two spike trains $$x(t)$$ and $$y(t)$$.

It is a function of a time lag $$s$$, which can be positive or negative.
We denote it with $$C_{xy}(s)$$.
Its value represent the probability of observing a spike at an arbitrary time $$t$$ in the spike train $$x(t)$$ *and* a spike at time $$t+s$$ in the spike train $$y(t)$$.

Denoting with $$T$$ the duration of the spike trains, we define the cross-correlation function as:

$$
C_{xy}(s) = \frac{1}{T} \int_{t}^{t+T} x(t) y(t+s) dt
$$

Of course, the covariance function is defined by subtracting the means of the spike trains, and the correlation coefficient function is defined by normalizing by the standard deviations.

In practice, it is useful to define the previous quantities with respect to a "sampled" spike train.
An ideal spike train is a collection of real numbers, which is can be represented as a generalized function $$x(t) = \sum_{i} \delta(t-t_i)$$.
A sampled spike train is the result of a counting operation, which can be represented as a sequence of integers, labelled by an integer label, $$x(n)$$.
Here, $$n$$ denote the $$n$$-th time bin, and $$x(n)$$ is the number of spikes in the $$n$$-th time bin.

In sampled form, the cross-correlation function is defined as:

$$
C_{xy}(k) = \frac{1}{N} \sum_{n=1}^{N} x(n) y(n+k)
$$


### Time-dependence of the cross-correlation function

It is a function of a time lag $$s$$ (which can be positive or negative), and it depends generally on time.
We denote it with $$C_{xy}(s; t)$$.
Its value represent the probability of observing a spike at time $$t$$ in the spike train $$x(t)$$ *and* a spike at time $$t+s$$ in the spike train $$y(t)$$.



## References

- Wikipedia
- Stochastic Analysis for Finance
- This lectures: http://ee162.caltech.edu/
- Stochastic Methods - Gardiner
- Neuronal Dynamics - Gerstner
- Renewal Theory - D.R. Cox

