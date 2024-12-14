---
title: "STDP Models"
collection: notes
tag: Neuroscience
permalink: /notes/neuroscience/STDP_models
---

## Kempter et al. (1999) - Hebbian learning and spiking neurons

The formalism they use here is significantly different from the usual STDP models.
For one, they formulate the weight dynamics integral form. 
Let us try to follow them reasonably closely, but without losing the relation with the usual STDP models.

So the rule is the following: the weight has a step increase every time there is a post-spike, a step decrease every time there is 
a pre-spike, and a step change for every pair of pre-post or post-pre spikes, depending on the exact time difference.
We can write the dynamics as:

$$
w(t) - w_0 = \sum_{t^{pre}_i} w_- + \sum_{t^{post}_j} w_+ + \sum_{t^{pre}_i, t^{post}_j} W(t^{post}_j - t^{pre}_i)
$$

or equivalently:

$$
w(t+T) - w(t) = \eta \int_t^{t + T} ds [w_- x(s) + w_+ y(s)] + \eta \iint_t^{t + T} ds_1 ds_2 W(s_2 - s_1) x(s_1) y(s_2)
$$

We notice that single spikes induce weight changes, in contrast with standard STDP assumptions. 
But hey, this is a paper from 1999. 
The terms that represent the single spike changes are called "1st order terms".
We also notice that, as it regards the spike pairs term, it implements a all-to-all interaction.
This means that every presynaptic spike interacts with all the previous postsynaptic spikes, and vice versa.
The pair term is called "2nd order term". 

The "learning rate" $$\eta$$ is a very small number, with the idea that the learning process happens on a much slower time scale than
the neuronal dynamics.
With this mind, the quantities describing the neuronal dynamics might be replaced by their average value in the weight change equation.
The quantities related to the neuronal dynamics are the spike trains.
We assume the spiking process is stochastic, so that the weight change is a stochastic process as well.
We study the average weight change, or the "drift" of the weight change process, and we neglect fluctuations for the time being.
Let us get more precise.

We notice that this writing of the pair term is not the most common one, at least in the last years.
For example, the same authors in a later paper (Pfister and Gerstner, 2006) and Gjorgjieva et al. (2011) use the following form.

They define a pre- and postsynaptic trace:

$$
\dot{\bar x} = -\bar x/\tau_+ + x(t)
$$

$$
\dot{\bar y} = -\bar y/\tau_- + y(t)
$$

The weight dynamics is then written as:

$$
\dot w = -A_- x {\bar y}  + A_+ y \bar x 
$$

and by substituing the traces with their integral form:

$$
\dot w = - A_- x(t)   \int_0^\infty ds e^{-s/\tau_-} y(t-s)  
         + A_+ y(t)   \int_0^\infty ds e^{-s/\tau_+} x(t-s) 
$$

On the other hand, by defining:

$$
W(s) = \begin{cases}
    -A_- e^{s/\tau_-} & \text{if } s < 0 \\ % & is your "\tab"-like command (it's a tab alignment character)
    A_+ e^{-s/\tau_+} & \text{if } s \geq 0
\end{cases}
$$

and substituing $$s\rightarrow -s$$ in the first integral, we get:

$$
\dot w = \int_{-\infty}^0 ds W(s) x(t) y(t+s) + \int_0^\infty ds W(s) y(t) x(t-s) 
$$

Now, we notice that this equation is giving the weight change at fixed time $$t$$. 
However, the equation we wanted to compare it with contained the weight change in a time interval $$T$$.
So let us also do it:

$$
w(t + T) - w(t) = \int_t^{t+T} ds_1 \dot w(s_1) =  \int_t^{t+T} ds_1 \left[\int_{-\infty}^0 ds W(s) x(s_1) y(s_1+s) + \int_0^\infty ds W(s) y(s_1) x(s_1-s)\right]
$$

Ok, I got confused. I will stop here for the moment, and I will try to understand in the next days.




### Self-averaging of learning and separation of time scales

The formal assumption is that, due to the small value of $$\eta$$ and to the law of large numbers, the weight change equation
is *self-averaging*, regardless of the random process.
I put together this sentence from the paper, but the true meaning needs to be clarified.
The law of large numbers tells us that the average of a large number of independent and identically distributed random variables converges to the expected value of the distribution.
Consider a long time interval, and imagine to subdivide it into many small intervals.
Due to the linearity of the weight change equation, we know the total weight change is the sum of the weight changes in each small interval.
The weight change in each small interval is a random variable. 
Under the assumption that the each weight change is independent and identically distributed, the law of large numbers applies.
However, this is not sufficient to claim that the process is self-averaging.
In order to apply the law of large numbers, we need to have a sum of a large number of random variables (each random variable being the weight change in a small interval).
As mentioned above, to get such a large number, we need to consider a long time interval.
It is essential that learning happens in a time scale larger than the interval considered. 
This is because we want to express the learning equation in terms of averages, and to construct the averages we need to wait a time $$T$$, but if learning has already happened in such time then our averages are meaningless.
This is why we require the learning rate $$\eta$$ to be small, so that the weight change is slow enough to allow the law of large numbers to apply.
Then we proceed with substituing the neuronal dynamics quantities with their *ensemble averages*, which we denote with angular brackets:

$$
\left \langle w(t+T) - w(t) \right \rangle = \eta \int_t^{t + T} ds [w_- \langle x  (s) \rangle + w_+ \langle y (s)\rangle] + \eta \iint_t^{t + T} ds_1 ds_2 W(s_2 - s_1) \langle x(s_1) y(s_2) \rangle
$$

We divide both sides by $$T$$:

$$
\left \langle \frac{w(t+T) - w(t)}{T} \right \rangle = \frac{\eta}{T} \int_t^{t + T} ds [w_- \langle x  (s) \rangle + w_+ \langle y (s)\rangle] + \frac{\eta}{T}  \iint_t^{t + T} ds_1 ds_2 W(s_2 - s_1) \langle x(s_1) y(s_2) \rangle
$$

Given a spike train $$x(t)$$, we define the instantaneous rate of the spike train as its ensemble average $$\lambda(t) = \langle x(t) \rangle$$, mean firing rate as the time average of the instantaneous rate over a sufficiently long time interval, $$\nu(t) = \frac{1}{T} \int_t^{t+T} ds \lambda(s)$$.
The equation that becomes:

$$
\langle \frac{w(t+T) - w(t)}{T} \rangle = \eta w_- \nu_{pre}(t) + \eta w_+ \nu_{post}(t) + \frac{\eta}{T}  \iint_t^{t + T} ds_1 ds_2 W(s_2 - s_1) \langle x(s_1) y(s_2) \rangle
$$

We set $$s = s_2 - s_1$$, so the integral in the previous equation becomes:

$$
\int_{t}^{t + T} ds \int_{t-s_1}^{t+T-s_1} ds W(s) \langle x(s_1) y(s_1 + s) \rangle
$$

Now we make a final assumption. 
We define the *width* $$\textit{W}$$ of the window $$W(s)$$ as the interval which contains most of the mass of the window ($$95\%$$ of the mass, for example).
We assume that $$T \gg \textit{W}$$, so that the integral in $$\tau$$ can be extended from $$-\infty$$ to $$\infty$$.
Then, by defining the cross correlation of the spike train as $$C(s; t) = \frac{1}{T} \int_t^{t+T} ds \langle x(t) y(t+s) \rangle$$, the integral simplifies to:

$$
\int_{-\infty}^{\infty} ds W(s) C(s; t) 
$$

Finally, by absorbing $$\eta$$ in the coefficeints, and approximating the weight change in the interval $$T$$ with its rate of change, we obtain the final equation:

$$
\frac {dw(t)}{dt} = w_- \nu_{pre}(t) + w_+ \nu_{post}(t) + \int_{-\infty}^{\infty} ds W(s) C(s; t) 
$$


### Determining the cross-correlation function

The correlation between a presynaptic spike train and the postsynaptic train depends on the neuron model under consideration.
They consider a stochastically firing neuron model.
It receives input from $$N$$ synapses.
The presynaptic spike trains are independent and generated by a Poisson process with rate $$\nu^{pre}_i(t) = \langle x_i \rangle (t) $$.
The postsynaptic spike train is generated by a Poisson process with a rate $$\nu^{post}(t) = \langle y \rangle (t) $$, which of course depends on the history of 
presynaptic spikes.
In particular they set:

$$
\nu^{post}(t) = \langle  y \rangle(t) = \nu_0 + \sum_{i=1}^N \sum_k w_i (t^{pre, i}_k) \epsilon (t - t^{pre, i}_k)
$$

where $$\epsilon(s)$$ is a generic kernel which we do not need to specify for the moment.
We notice that the contributions from different synapses are additive, as well as the contributions from each single spike.
Thanks to this linearity, we can rewrite the equation using the istantaneous presynaptic rates:

$$
\nu^{post}(t) = \nu_0 + \sum_{i=1}^N \int_0^\infty ds x_i(t-s) w_i(t-s) \epsilon(s)
$$

Now, recall that we assumed that the weights dynamics is much slower than the neuronal dynamics, which $$\epsilon$$ is describing.
In particular, they say the weight change "adiabatically" with respect to the width of $$\epsilon$$ (the kernel is going to zero, that is why it has a width).
The fact that the $$\epsilon$$ is going to zero means that the integration domain (which is now from zero to infinity) is in fact restricted.
The fact that the weight changes adiabatically with respect to the width of $$\epsilon$$, means that we could approximate it as constant in a time interval of such width.
Thus, they approximate $$w_i(t-s) \approx w_i(t)$$ in the integral above, obtaining:

$$
\nu^{post}(t) = \nu_0 + \sum_{i=1}^N w_i(t) \int_0^\infty ds x_i(t-s) \epsilon(s)
$$

or, by defining the symbol $$\Lambda_i(t) = \int_0^\infty ds x_i(t-s) \epsilon(s)$$, which is the $$\epsilon$$-filtered presynaptic spike train:

$$
\nu^{post}(t) = \nu_0 + \sum_{i=1}^N w_i(t) \Lambda_i(t)
$$


Now we compute the ensemble-averaged correlation function $$\langle x_i(t+s) y(t) \rangle$$.
This quantity is the joint probability of a presynaptic spike at time $$t+s$$ and a postsynaptic spike at time $$t$$.
We know that, for two generic random variables $$x$$ and $$y$$, the relation $$p(x, y) = p(x)p(y|x)$$ holds.
For simplicity, we set $$\nu_0 = 0$$.
The proof they present now (Appendix A) for the following equation looks wrong to me. 
In particular, in Eq. A1 they are not allowed to substitute the postsynaptic spike train with the istantaneous intensity.
I therefore stop here for the moment, and I will try to understand if and how the equation can be derived in a correct way later.
The equation they present is:

$$
\langle x_i(t+s) y(t) \rangle =   \nu^{pre}_i(t+s)  \left[ \nu_0 + w_i(t) \epsilon(-s) + \sum_{j=1}^N  w_j(t) \Lambda_j(t) \right]
$$




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
\dot w = -A^-_2 x {\bar y}_1 \left[ + A^+_2 y \bar x \right]+ A^+_3 y \bar x {\bar y}_2 
$$

where:

$$
\begin{aligned}
\dot{\bar x} &= -\bar x/\tau_+ + x \\
\dot{\bar y}_1 &= -\bar y_1/\tau_- + y \\
\dot{\bar y}_2 &= -\bar y_2/\tau_y + y
\end{aligned}
$$

The term in the squared brackets is a term that they do not write in the paper, but for sure they just forgot about it.
The term is necessary for having potentiation with a pre-post pair (the other two terms are zero in that case).
Moreover, when they rewrite the equation with Volterra-like terms, such additional term appears from nowhere.
So they substite the traces with the solution of the respective equations, i.e.:

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
         + A^+_2 y(t)  \left( \int_0^\infty ds e^{-s/\tau_+} x(t-s) \right)
         + A^+_3 y(t)  \left( \int_0^\infty ds_1 e^{-s_1/\tau_+} x(t-s_1) \right) \left( \int_0^\infty ds_2 e^{-s_2/\tau_y} y(t-s_2)\right)
$$

By defining the STDP windows $$W_2$$ and $$W_3$$:

$$
\dot w = y(t) \int_0^\infty ds W_2(s) x(t-s) + x(t) \int_0^\infty ds W_2(-s) x(t-s) + y(t)\iint_0^\infty ds_1 ds_2 W_3(s_1, s_2) x(t-s_1) y(t-s_2)
$$

Now they do a big step, justifying it simply by saying "assuming slow learning relative to the neuronal dynamics, and replacing the weights by their expectation averaged over a time perio $$T$$". 
This seems rather insufficient, as an explanation, so we will have to figure out ourselves.
The equation we need to reach is:

$$
\dot w = \int_{-\infty}^\infty ds W_2(s) K(s) + \iint_0^\infty ds_1 ds_2 W_3(s_1, s_2) Q(s_1, s_2)
$$

where $$K$$ is the pair correlation function and $$Q$$ is the triple correlation function, defined as:

$$
K(s) = \frac{1}{T} \int_0^T dt y(t) x(t-s)
$$

$$
Q(s_1, s_2) = \frac{1}{T} \int_0^T dt  y(t-s_2) x(t-s_1) y(t)
$$

### Computing the pair and triplet correlation functions
The correlations functions $$K(s)$$ and $$Q(s_1, s_2)$$ measures the correlation between the spike trains.
To compute them, we need to know how the postsynaptic spike train depends on the presynaptic spike train.
That is determined by the neuron model, which we still have do define.
We do it now.

Let $$u(t)$$ be the membrane potential of the postsynaptic neuron.
We model it as:

$$
u(t) = \sum_{k=1}^N w_k \int_0^\infty \epsilon(s) x_k(t-s) ds
$$

Notice that, if $$\epsilon(s) = \exp(-s/\tau)$$, the model previous equation is the solution of the simple exponential trace:

$$
\dot u = - u/\tau + x_k(t)
$$

Then we assume that the postsynaptic neuron firing follows an inhomogenous Poisson process with instantaneous intensity $$\lambda(t) = g(u(t))$$, where $$g$$ is an arbitrary function.


Let us start from computing 

$$
K_j(s) = \frac{1}{T} \int_0^T dt \langle y(t) x_j(t-s) \rangle
$$

First, we substitute $$\langle y(t) \rangle = g(u(t))$$, according to the neuron model we defined.
Actually, what they do is to substitute the postsynaptic spike train with the instantaneous intensity, which does not seem justified.
But I am ignore it for the moment.

$$
K_j(s) = \frac{1}{T} \int_0^T dt \langle g(u(t)) x_j(t-s) \rangle
$$

Then, they assume that $$g(u)=g_0 + g_1 (u - u_0)$$, i.e. a linear activation function. Thus:

$$
\begin{aligned}
K_j(s) &= \frac{1}{T} \int_0^T dt \langle g_0 x_j(t-s) + g_1 (u(t) - u_0) x_j(t-s) \rangle \\
       &= (g_0 - g_1 u_0) \frac{1}{T} \int_0^T dt \lambda^{pre}_j(t-s) + g_1 \frac{1}{T} \int_0^T dt \langle u(t) x_j(t-s) \rangle 
\end{aligned}
$$

Now they substitute the membrane potential with the neuron model we defined above.

$$
K_j(s) = (g_0 - g_1 u_0) \nu^{pre}_j + g_1 \frac{1}{T} \int_0^T dt \left \langle \sum_{k=1}^N w_k \int_0^\infty dh \epsilon(h) x_k(t-h) x_j(t-s) \right \rangle 
$$

The next passages are: taking $$w_k$$ out of the integral because it is approximated as constant; exchange the order of the integrals and the sum. 

$$
K_j(s) = (g_0 - g_1 u_0) \nu^{pre}_j + g_1 \sum_{k=1}^N w_k \int_0^\infty dh \epsilon(h) \frac{1}{T} \int_0^T dt \langle x_k(t-h) x_j(t-s) \rangle 
$$

Now they use the definition of cross-correlation function (but I do not really understand how for the moment) and they obtain:

$$
K_j(s) = (g_0 - g_1 u_0) \nu^{pre}_j + g_1 \sum_{k=1}^N w_k \int_0^\infty dh \epsilon(h) C_{kj}(s-h)
$$



where the cross-correlation function for each pair of input is assumed to be known.

For example, they consider $$N$$ independent Poisson inputs (I cannot find how many, nor the rates). 
In this case, I think it is $$C_{kj}(s) = \delta_{kj} (\nu^2_{j} + \delta(s) \nu_j)$$, where $$\delta_{kj}$$ is the Kronecker delta.
Thus, we obtain:

$$
K_j(s) = \begin{cases}
    (g_0 - g_1 u_0) \nu^{pre}_j + g_1 w_j \nu^{pre}_j \frac{e^{- s/\tau}}{\tau} & \text{if } s>0 \\
    (g_0 -g_1 u_0) \nu^{pre}_j & \text{if } s<0
\end{cases}
$$