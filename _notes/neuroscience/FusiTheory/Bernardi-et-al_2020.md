I will be quite critic in analyzing the paper, but it is just because in science it is the opposite of "innocent till contrary proof", it is more like "false until proven true".
Criticizing is the way to understand. Doubting of everything. Also, I have to put all my criticism in this so I do not put it in my daily life.

They say they present the behavioral data and the theoretical framework used to characterize the geometry of neural representations in the Hippocampus, DL Prefrontal Cortex, ACC.
However, I ask myself: isn't the geometry of neural representations already a theoretical framwork to describe, characterize the brain? It seems like we are treating "the geometry" as the phenomenon we need to describe and understand, which feels a bit controverse to me. 

### Behavioral data

They present some observations from the behavior of monkeys, that (they say) characterize the geometry of neural representation.

A monkey A monkey push down a button and an image appears on a screen. 
The image is randomly chosen between a set of 4 distinct images, let us say A, B, C, D.
The image stays on the screen for a certain time interval.
After the image disappeared, the monkey chooses whether to keep holding the button or to release it.
If the image is A or B, and the monkey keeps holding the button, it receives some juice reward.
If the image is A or B, and the monkey releases the button, no reward is delivered, and another trial is started after a timeout of some seconds.
If the image is C or D, and the monkey keeps holding the button, no reward is delivered and another trial is started after the timeout.
If the image is C or D, and the monkey releases the button, no reward is delivered but another trial starts immediately without timeout.

Let us formalize a bit.
An image is called stimulus, and can have values A, B, C, D.
The behavior of the monkey after the image disappeared is called response, and can have values H (holding), R (release).
The delivery of the reward and/or the trial timeout is called outcome, and can have values +, -.

A map that to each pair stimulus-response associates an outcome is called context.
There are multiple possible context, but in the experiment we consider only two:
- Context 1: A-
