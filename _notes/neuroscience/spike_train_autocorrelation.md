---
title: "Autocorrelation for a train of spikes"
collection: notes
tag: Neuroscience
permalink: /notes/neuroscience/spike_train_autocorrelation
---

Let us consider a neuron firing activity.
Assume we observe a spike at time $$t$$.
We ask ourself the question: given the fact that the neuron fired at time $$t$$, what is the probability that it will fire at time $$t+s$$, where $$s$$ is an arbitrary delay?

To give a quantitative answer to this question, we need to measure a quantity appropriately defined.
Such a quantity has already been defined by scientists, and it is called *autocorrelation with delay $$s$$ of the spike train*.
We are now going to introduce such definition.

Let us imagine we observe the neuron firing activity for a time interval $$T$$ arbitrarily large.
We record a set of firing times $$F=\{ t_1, ... , t_n\}$$.
We know that a useful mathematical description of the train of spikes we observed is:

$$
y(t) = \sum_{t^f \in F} \delta(t-t^f)
$$

We define the autocorrelation function of $$y(t)$$ with delay $$s$$ as the probability of finding two spikes at a time interval $$s$$, i.e.:

$$
C(s) = \left< y(t) y(t+s) \right> =\lim_{T \rightarrow \infty} \frac{1}{T} \int_{-T/2}^{T/2} y(t) y(t-s) dt
$$

Now, what the fuck is this definition? Does it even make sense to integrate a product of Dirac deltas? I do not know, this at the edge of my mathematical knowledge.
No panic, let us expand our knowledge.


## Stationary Poisson spike train
Usually I consider stationary Poisson spikes trains. 
By definition, in such spikes trains, the spiking times are independent on one another, and the "number of firing times in time intervals of the same length" follows a Poisson distribution with a fixed rate $$\nu$$.
We know that in this case, the probability density function of the ISI (inter-spike interval) is an exponential function.

In this case I would expect my autocorrelation function to be zero for any non-zero delay.
But according to the definition we gave above (the probability of observing two spike with ISI equal to the delay), such probability is not zero.
Well actually it is. But if we consider a small interval $$ [s, s+ds]$$ it is not.

## Renewal Statistics

So Poisson spike trains are not interesting with respect to autocorrelation, because they have none.
On the other hand, realistic spikes trains do have correlation.
For example, due to refractoriness, very short interspike intervals are unlikely.
A stochastic process was defined in order to account for refractoriness, and it is called *renewal process*.

In a renewal process, spikes are generated stochastically with an "intensity" or "hazard" which depends on the time since the last spike $$\hat t$$:

$$
\rho = \rho(t, t-\hat t)
$$

The process is called "renewal" because of the fundamental assumption that the event probability does not depend on the events preceding the last event (i.e. the last event completely "renews" the probability).
The time since last spike $$t-\hat t$$ is also called *age* of the system.







## Autocorrelation Function and Power Spectrum











## References
1. Gerstner, Wulfram, et al. Neuronal dynamics: From single neurons to networks and models of cognition. Cambridge University Press, 2014.