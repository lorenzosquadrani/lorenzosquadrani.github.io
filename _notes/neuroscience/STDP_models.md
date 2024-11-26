---
title: "STDP Models"
collection: notes
tag: Neuroscience
permalink: /notes/neuroscience/STDP_models
---

## Pfister and Gerstner (2006) - Triplets of Spikes in a Model of Spike Timing-Dependent Plasticity

The weight dynamics modelled as:

$$
\dot w = H(x, y)
$$

where $$x(t)=\sum_i \delta(t - t^{pre}_i)$$ and $$y(t)=\sum_j \delta(t-t^{post}_j)$$ are the presynaptic spike train and the postsynaptic spike train, respectively.
The functional $$H(x,y)$$ is the output a time invariant nonlinear dynamical input-output system.

### Formulation with differential equations

In the formalism of differential equations, $$H(x,y)$$ is constructed as follows.
Let $$r_1$$ and $$r_2$$ be two exponential traces of the presynaptic spike train, with time constants $$\tau_+$$ and $$\tau_x$$, respectively.
Thus:

$$
\dot r_1 = - r_1/\tau_+  + x(t)
$$

$$
\dot r_2 = - r_2/\tau_x  + x(t)
$$

Let $$o_1$$ and $$o_2$$ be two exponential traces of the postsynaptic spike train, with time constants $$\tau_-$$ and $$\tau_y$$, respectively.
Thus:

$$
\dot o_1 = - o_1/\tau_-  + x(t)
$$

$$
\dot o_2 = - o_2/\tau_y  + x(t)
$$

They say they do not want to identify these traces with specific biophysical quantities. 
However, they do identify $$r_1$$ with the amount of glutamate bound to a postsynaptic receptor.
They propose some other interpretations for the others.
However, they say that being the model they are developing a mechanistic model, 
they can model their rule using the four factors, without specifying their physical meaning.
Yeah, whatever this means. 
They just want of course to be free to make the equation simple enough for the mathematical treatment they plan to do.

So they make this equation:

$$
\begin{aligned}
H(x, y) &= A^-_2 x(t) o_1(t) + A^+_2 y(t) r_1(t) - A^-_3 r_2(t - \epsilon) x(t) o_1(t) + A^+_3 o_2(t - \epsilon)  y(t) r_1(t) =\\ 
        &= x(t) o_1(t)  \left[ A^-_2 + A^-_3 r_2(t - \epsilon) \right] + y(t) r_1(t) \left[ A^+_2 + A^+_3 o_2(t - \epsilon) \right]
\end{aligned}
$$

Let us comment each one of the terms:
- $$A^-_2 x(t) o_1(t)$$ \\
This term tells us that the weight has a step change every time a presynaptic spike occurs; the change is proportional to 
the postsynaptic trace $$o_1(t)$$, which is a result (or has "memory") of all the previous postsynaptic spikes.
The trace is linear, meaning that its value is just the superposition of the effects of each individual spike.
Thus, each presynaptic spike produces a step change given by the sum of its interactions with all the preceding postsynaptic spikes.
This term accounts for all the post-pre spike pairs, and *only* for those.

- $$A^+_2 y(t) r_1(t)$$ \\
This term is the perfect analogous of the previous term, but for the pre-post spike pairs.

- $$A^-_3 x(t) o_1(t) r_2(t - \epsilon)$$ \\
This terms tells us, that the weight has a step change every time a presynaptic spike occurs;
the change is proportional to both the postsynaptic trace $$o_1(t)$$ and the presynaptic trace $$r_2(t - \epsilon)$$
(where $$0<\epsilon \ll 1$$ just tells us that the trace is taken before the update due to the current presynaptic spike).
Let us try to decompose this term, by using the integral solution of the traces:\\
$$
\begin{aligned} 
        o_1 (t) &= \sum_j \theta(t- t^{post}_j) e^{- \frac{t - t^{post}_j}{\tau_-}} \\
        r_2 (t- \epsilon) &= \sum_i \theta(t- t^{pre}_i - \epsilon) e^{- \frac{t - t^{pre}_i}{\tau_x}} \\
\end{aligned}
$$\\
Thus:\\
$$
\begin{aligned}
\left( \sum_k \delta(t- t^{pre}_k) \right) 
\left(  \sum_j \theta(t- t^{post}_j) e^{- \frac{t - t^{post}_j}{\tau_-}} \right) 
\left( \sum_i \theta(t- t^{pre}_i - \epsilon) e^{- \frac{t - t^{pre}_i}{\tau_x}}\right) =  \\
\sum_{k, i, j} \delta(t-t^{pre}_k) e^{- \frac{t - t^{post}_j}{\tau_-}} e^{- \frac{t - t^{pre}_i}{\tau_x}} \theta(t- t^{post}_j) \theta(t- t^{pre}_i - \epsilon)
\end{aligned}
$$\\
Maybe developing was a bit useless. 
Anyway, we see that each term of the sum depends on three distinct spike timings: two presynaptic and one postsynaptic (although for some terms the $$t^{pre}_k$$ and $$t^{pre}_i$$ are the same).
In particular, the term is non zero only if $$t^{post}_j$$ and $$t^{pre}_i$$ preceeds $$t^{pre}_k$$. 
Thus, the total sum is a term that accounts for all pre-post-pre and post-pre-pre triplets of spikes, and *only* for those.
Notice that the update is always negative.

- $$A^+_3 o_2(t - \epsilon)  y(t) r_1(t)$$ \\
This term is the perfect analogous of the previos term, but for pre-post-post and post-pre-post triplets of spikes.


A few more comments:
- by setting $$A^-_3$$ and $$A^+_3$$ to zero, the model is reduced to the classical pair-based STDP model.
- a pair-based model is defined as a model where the weight change given two spike trains is the sum of weight changes given by each pair of spikes in the two trains; 
  in a triplet or higher order model, the weight change to N spikes is in general different from the sum of the weight changes to all the pairs of spikes in the N trains.
- due to the "infinite" memory of the traces, the model takes into account all possible spike pairs and triplets; they thus say it is a All-to-All interactions model.



### Nearest-Spike interactions

They also consider the model in which each new pre- or postsynaptic spike interacts only with the nearest spike (or the two nearest spikes in case of the triplets).
This is simply achieved by changing the dynamics of the traces: instead of accumulating unitary step increases for each spike, they rises exactly to the value of $$1$$ 
at each spike. 
In this way, each spike erases the memory of the previous one.

The equation becomes:
$$
\dot r_1 = - r_1/\tau_+  + (1-r_1) x(t)
$$

$$
\dot r_2 = - r_2/\tau_x  + (1-r_2) x(t)
$$

$$
\dot o_1 = - o_1/\tau_-  + (1-o_1) x(t)
$$

$$
\dot o_2 = - o_2/\tau_y  + (1- o_2) x(t)
$$

They say they found a "slight" preference for All-to-All interactions to describe the experimental data.



### Integral formulation with Volterra series

Although they do not do it, it is interesting to see how the model can be formulated in terms of Volterra series.
Ok, maybe interesting is a bit too much, let us just say it is an exercise that I want to do.

Here is an example to understand the basic procedure:

$$
\begin{aligned}
x(t)o_1(t) &= \left( \sum_k \delta(t- t^{pre}_k) \right) \left(  \sum_j \theta(t- t^{post}_j) e^{- \frac{t - t^{post}_j}{\tau_-}} \right) \\
           &= \left(\int_0^\infty ds_1 \delta(s_1) \sum_k \delta(t- t^{pre}_k - s_1) \right) \left( \int_0^\infty ds_2 e^{-s_2/\tau_-} \sum_j \delta(t- t^{post}_j - s_2) \right)\\
           &= \iint_0^\infty ds_1 ds_2 \delta(s_1) e^{-s_2/\tau_+} x(t - s_1) y(t-s_2)
\end{aligned}
$$

We notice that the integral we obtain can be interpreted as a second-order term of a Volterra series, with kernel

$$
h(s_1, s_2) = \delta(s_1) e^{-s_2/\tau_-} 
$$

subject to an input $$x(t) + y(t)$$. 
However, that it is not true. 
The are multiple problems, including the non-symmetry of the kernel, the fact that there is only the mixed term.
Not sure.



## Gjorgjieva et al. (2011) - A triplet spike-timing–dependent plasticity model generalizes the Bienenstock–Cooper–Munro rule to higher-order spatiotemporal correlations

They use a reduced version of the general triplet STDP model described by Pfister and Gerstner (2006).
Let $$x(t)=\sum_i \delta(t - t^{pre}_i)$$ and $$y(t)=\sum_j \delta(t-t^{post}_j)$$ be the presynaptic spike train and the postsynaptic spike train, respectively.
The weight dynamics is modelled as:

$$
\dot w = -A^-_2 x {\bar y}_1 + A^+_3 y \bar x {\bar y}_2
$$

where:

$$
\begin{aligned}
\dot{\bar x} &= -\bar x/\tau_+ + x \\
\dot{\bar y}_1 &= -\bar y_1/\tau_- + y \\
\dot{\bar y}_2 &= -\bar y_2/\tau_y + y
\end{aligned}
$$

Then they say they write the system as a Volterra series. 
Let us just say that what they do is substituing the traces with the solution of the respective equations, i.e.:

$$
\begin{aligned} 
        \bar x (t) &= \sum_i \theta(t- t^{post}_i) e^{- \frac{t - t^{pre}_i}{\tau_+}} = \int_0^\infty ds e^{-s/\tau_+} x(t-s) \\
        {\bar y}_1 (t) &= \sum_j \theta(t- t^{post}_j - \epsilon) e^{- \frac{t - t^{post}_j}{\tau_-}} = \int_0^\infty ds e^{-s/\tau_-} y(t-s)  \\
        {\bar y}_2 (t) &= \sum_j \theta(t- t^{post}_j - \epsilon) e^{- \frac{t - t^{post}_j}{\tau_y}} = \int_0^\infty ds e^{-s/\tau_y} y(t-s) \\
\end{aligned}
$$

By substitution:

$$
\dot w = - A^-_2 x(t)  \left( \int_0^\infty ds e^{-s/\tau_-} y(t-s)  \right)
         + A^+_3 y(t)  \left( \int_0^\infty ds_1 e^{-s_1/\tau_+} x(t-s_1) \right) \left( \int_0^\infty ds_2 e^{-s_2/\tau_y} y(t-s_2)\right)
$$


