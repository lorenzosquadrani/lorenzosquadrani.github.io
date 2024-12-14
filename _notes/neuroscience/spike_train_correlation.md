---
title: "Analysis of Spike Trains"
collection: notes
tag: Neuroscience
permalink: /notes/neuroscience/spike_train_autocorrelation
---

A spike train is a sequence of action potentials emitted by a neuron.
For multiple reasons, the sequence of spikes displays some random behavior.
Thus, they are often described using statistical quantities, and modeled as stochastic processes.

We first introduce the main mathematical objects used to describe the properties of a train of spikes, which are:
- Mean firing rate
- Interspike interval distribution
- Autocorrelation function
- Power spectrum

Then, we introduce the main stochastic processes used to model a spike train.


# Spike trains as a stochastic point process

A point process on $$\mathbb{R}^+$$ is a sequence of random variables $$(t_n)_{n \in \mathbb{N}}$$ 
such that $$0 \leq t_1 \leq t_2 \leq ...$$ and $$\lim_{n \rightarrow \infty} t_n = \infty$$.
If we interpret the random variables as the times at which the neuron fires, a point process is a suitable mathematical object to describe a spike train.

To any point process are univocally associated two processes: the waiting time process and the counting process.
The waiting time process is defined as the sequence of random variables $$S_n = t_n - t_{n-1}$$.
The counting process is defined as the sequence of random variables $$N(t) = \sum_{n=1}^{\infty} \mathbb{1}_{[0, t]}(t_n)$$, i.e. the count of the number of spikes that occurred up to time $$t$$.

Many types of point processes are used to model spike trains. 
We will describe below the Poisson process and the renewal process.

## Spike trains as a Poisson process

Given the stochasticity of the process, we are led to ask whether the precise timing of the spikes is relevant to the neuron's function, or whether the number of spikes in a given time window is all that matters.
Of course, we have no answer, and maybe a general answer does not exist.
Under the assumption that the precise timing is totally irrelevant, it is common to model the spike train as a Poisson process, where two distinct spikes are completely independent events.

We will now define a Poisson process.
As usual, it is possible to give multiple definitions of the same mathematical object, using different properties.
Moreover, we could impose the properties on the counting process, on the waiting time process, or on the point process.
In any case we would have completely defined the Poisson process.
I think that the counting process is the one that requires more propertied to be defined, but it is also the most intuitive, so we go for that one.

Let $$N(t)$$ be the counting process associated to a certain point process.
We say that $$N(t)$$ is a Poisson process with rate $$\nu$$ if: 
- $$N(0) = 0$$
- $$N(t)$$ is a Poisson random variable with mean $$\lambda t$$
- The number of spikes in disjoint time intervals are independent random variables.

Now, a crucial step: the representation of the Poisson process as a sum of delta functions.
This is typical when dealing with spike trains, and it hard to find in general textbooks.
I found only two books that treat it in decently formal manner: Gerstner and Gardiner.

As we said, the Poisson process is characterized, as a point process, with a set of random variables $$S = \{ t_1, t_2, ... \}$$.
We can represent this set as a sum of delta functions:

$$
y(t) = \sum_{t^f \in S} \delta(t-t^f)
$$

For the Gerstner, this is just a formal representation of the point process.
For the Gardiner, this is the formal derivative of the Poisson counting process:

$$
y(t)= dN(t)/dt = \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t}
$$

This means that $$y(t)$$ is zero everywhere except at the spike times, where it is infinite, exactly like the delta function.
Also the dimension is the correct one (rate).

I remain with many doubts: is the $$y(t)$$ representing a concrete process, i.e. is it a sequence of random variables?
If yes, what is the probability distribution that characterizes it? 
Hopefully, everything will be clear as we compute all the statical quantity we are interested in.

Of course, that bastard of Gerstner likes to give all different definitions. Let us see.
An homogenous Poisson process is defined by the existence of a constant $$\nu$$, called firing rate or stochastic intensity, 
defined by:

$$
\nu = \lim_{\Delta t \rightarrow 0} \frac{P_F(t; t+\Delta t)}{\Delta t}
$$

where $$P_F(t; t+\Delta t)$$ is the probability of finding a spike in the interval $$[t, t+\Delta t]$$.
Not sure why, but I feel this definition might become useful in the future.

### Expectation, Variance, Autocorrelation for the counting process

Since for the counting process we know the time-dependent probability distribution, we can compute all the statistical quantities we are interested in.

The expectation value is:

$$
\langle N(t) \rangle = \nu t
$$

The second moment is:

$$
\langle N(t)^2 \rangle = \nu t + \nu^2 t^2
$$

Let us now compute the autocorrelation function for two generic times $$t_1$$ and $$t_2$$, with $$t_1 < t_2$$:

$$
\begin{aligned}
C(t_1, t_2) &= \mathbb{E}[N(t_1)N(t_2)] = \\
                &= E[N(t_1)\left(N(t_1) + N(t_2) - N(t_1) \right)] = \\
                &= E[N(t_1)^2] + E[N(t_1) (N(t_2)- N(t_1))] = \\
                &= E[N(t_1)^2] + E[N(t_1)]E[N(t_2)- N(t_1)] = \\
                &= \lambda t_1 + \lambda^2 t^2_1 + \lambda^2 t_1 (t_2 - t_1) = \lambda t_1 + \lambda^2 t_1 t_2
\end{aligned}
$$

### Expectation, Variance, Autocorrelatio for the derivative of the counting process (spike train)

Let $$y(t) = \sum_n \delta(t-t_n) = dN(t)/dt$$ describe a spiking process.
Through the definition we can compute the relevant statistical quantities.

The expectation value is:

$$
\begin{aligned}
\langle y(t) \rangle &= \left \langle \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \right \rangle \\
                    &= \lim_{\Delta t \rightarrow 0} \frac{\langle N(t+\Delta t) - N(t) \rangle}{\Delta t} \\
                    &= \lim_{\Delta t \rightarrow 0} \frac{\langle N(t+\Delta t) \rangle - \langle N(t) \rangle}{\Delta t} \\
                    &= \lim_{\Delta t \rightarrow 0} \frac{\nu (t+\Delta t) - \nu t}{\Delta t} \\
                    &= \nu
\end{aligned}
$$

The variance is:

$$
\begin{aligned}
\langle y(t)^2 \rangle &= \langle \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \rangle \\
                    &= \lim_{\Delta t \rightarrow 0} \left( \lambda^2 + \frac{\lambda}{\Delta t}\right)   \\
                    &= \lambda^2 + \lambda \delta(0)
\end{aligned}
$$

The autocorrelation function is, for $$s>0$$:

$$
\begin{aligned}
C(s) &= \langle y(t) y(t+s) \rangle \\
     &= \left \langle \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \lim_{\Delta t \rightarrow 0} \frac{N(t+s+\Delta t) - N(t+s)}{\Delta t} \right \rangle \\
    &= \nu^2
\end{aligned}
$$

## Renewal Process
So Poisson spikes are quite unrealistic.
For example, due to refractoriness, very short interspike intervals are unlikely.
A stochastic process was defined in order to account for refractoriness, and it is called *renewal process*.

In a renewal process, spikes are generated stochastically with an "intensity" or "hazard" which depends on the time since the last spike $$\hat t$$:

$$
\rho = \rho(t, t-\hat t)
$$

The process is called "renewal" because of the fundamental assumption that the event probability does not depend on the events preceding the last event (i.e. the last event completely "renews" the probability).
The time since last spike $$t-\hat t$$ is also called *age* of the system.

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


Let $$y(t)$$ be a spike train generated by a renewal process.
We denote with $$\nu=\langle y(t) \rangle$$ the mean firing rate.

First, we consider that firing at time $$t+s$$ is independent of whether or not a spike occurred at time $$t$$, provided that $$s$$ is large enough.
Thus:

$$
\lim_{s \rightarrow \infty} C(s) = lim_{s \rightarrow \infty} P(t+s|t) = P(t+s) P(t) = \nu^2
$$

We construct C(s) in the case $$s>0$$ (we know that the autocorrelation function is symmetric anyway).
We recall that the autocorrelation function is the probability density function of observing two spike at distance $$s$$, i.e. $$C(s)=P(t, t+s)$$.
We factorize the probability density of observing a spike at a generic time $$t$$, which is $$\nu$$:

$$
C(s) = P(t, t+s) = P(t) P(t+s|t) = \nu P(t+s|t)
$$

Given the fact that we observed a spike at time $$t$$, what is the probability density of observing a spike at time $$t+s$$?
We do not care that the second spike is exactly the next spike: there could be zero, one, two, or more spikes in the meantime.
We can express this quantity in terms of the interspike interval distribution by summing over all the possibilities, thus:

$$
P(t+s|t) = P_0(s) + \int_0^{\infty} ds_1 P_0(s_1)P_0(s - s_1) + \iint__0^\infty ds_1 ds_2 P_0(s_1) P_0 (s_2) P_0(s - s_1 - s_2) + ...
$$

Equivalently, we can write:

$$
P(t+s|t) = P_0(s) + \int_0^\infty P_0(s') P(t + s - s'| t) ds'
$$

Believe it or not, this equation can be solved. 
Let us define $$f(s)= P(t+s|t)$$.
We need to solve the equation:

$$
f(s) = P_0(s) + \int_0^\\infty P_0(s') f(s-s') ds'
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

# Still to be organized
### Interspike Intervals Distribution

Given a spike train, we can compute all the interspike intervals (ISI) and contruct the histogram of them.
For a sufficiently long spike train, the histogram could be a good estimate of the ISI distribution, denoted as $$P_0(s)$$.

The ISI distribution, which is the probability density of observing an ISI equal to $$s$$, can also be interpreted as a conditional probability density as:

$$
P_0(s) = P(t + s | \hat t)
$$

where $$\int_t^{t+\Delta t} P(t' | t) dt'$$ is the probability that the next spike occurs in the interval $$[t, t+\Delta t]$$ given that the last spike occurred at time $$t$$.

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
1. Gerstner, Wulfram, et al. Neuronal dynamics: From single neurons to networks and models of cognition. Cambridge University Press, 2014.
2. Eggermont, Jos J. "Correlation Analysis of Parallel Spike Trains." (2014).
3. Lecture notes from https://www.gatsby.ucl.ac.uk/teaching/courses/nd/spike-stats.pdf
4. Lecture notes from https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/