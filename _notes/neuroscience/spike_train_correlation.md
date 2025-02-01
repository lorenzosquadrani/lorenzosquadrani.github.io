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

The mathematical tool for describing sequences of events occurring in time, such as action potentials, is the theory of point processes.

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
y(t)= \frac{dN(t)}{dt} = \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t}
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

### Statistics for the counting process

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

### Statistics for the derivative of the counting process (spike train)

Let $$y(t) = \sum_n \delta(t-t_n) = dN(t)/dt$$ describe a spiking process.
Through the definition we can compute the relevant statistical quantities.

The expectation value is:

$$
\begin{aligned}
\langle y(t) \rangle &= \left \langle \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \right \rangle \\
                    &= \lim_{\Delta t \rightarrow 0} \frac{\langle N(t+\Delta t) - N(t) \rangle}{\Delta t} \\
                    &= \lim_{\Delta t \rightarrow 0} \frac{\langle N(t+\Delta t) \rangle - \langle N(t) \rangle}{\Delta t} \\
                    &= \lim_{\Delta t \rightarrow 0} \frac{\lambda (t+\Delta t) - \lambda t}{\Delta t} \\
                    &= \lambda
\end{aligned}
$$

The variance is:

$$
\begin{aligned}
\langle y(t)^2 \rangle &= \left \langle \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \right \rangle \\
                    &= \lim_{\Delta t \rightarrow 0} \left( \lambda^2 + \frac{\lambda}{\Delta t}\right)   \\
                    &= \lambda^2 + \lambda \delta(0)
\end{aligned}
$$

The autocorrelation function is, for $$s>0$$:

$$
\begin{aligned}
C(s) &= \langle y(t) y(t+s) \rangle \\
     &= \left \langle \lim_{\Delta t \rightarrow 0} \frac{N(t+\Delta t) - N(t)}{\Delta t} \lim_{\Delta t \rightarrow 0} \frac{N(t+s+\Delta t) - N(t+s)}{\Delta t} \right \rangle \\
    &= \lambda^2
\end{aligned}
$$

### Two Correlated Poisson Processes



## References
1. Gerstner, Wulfram, et al. Neuronal dynamics: From single neurons to networks and models of cognition. Cambridge University Press, 2014.
2. Eggermont, Jos J. "Correlation Analysis of Parallel Spike Trains." (2014).
3. Lecture notes from https://www.gatsby.ucl.ac.uk/teaching/courses/nd/spike-stats.pdf
4. Lecture notes from https://ocw.mit.edu/courses/18-445-introduction-to-stochastic-processes-spring-2015/
5. A Novel Description of Two Correlate Point Processes