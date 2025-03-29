---
layout: note
title: "Singular Value Decomposition"
sidebar: true
---

### Theorem
Let $$A$$ be a $$m \times n$$ matrix with rank $$r$$.
Recall this means that $$A$$ has $$m$$ rows and $$n$$ columns, and from the set of all columns (rows) we can select at maximum $$r$$ vectors that are linearly independent.
The space spanned by the columns of $$A$$ has dimension $$r$$, and the left null space has dimension $$m-r$$.
The space spanned by the rows of $$A$$ has dimension $$r$$, and the right null space had dimension $$n-r$$.

The theorem of singular value decomposition (SVD) states that there exist a set of $$m$$ vectors $$\vec{u_i}$$, a set of $$n$$ vectors $$\vec{v_i}$$, and a set of $$r$$ positive numbers $$\sigma_i$$, such that:
- $$\vec{u}_1, ..., \vec{u}_r$$ is an orthonormal basis of the column space
- $$\vec{u}_{r+1}, ..., \vec{u}_m$$ is an orthonormal basis of the left null space
- $$\vec{v}_1, ..., \vec{u}_r$$ is an orthonormal basis of the row space
- $$\vec{v}_{r+1}, ..., \vec{v}_n$$ is an orthonormal basis of the right null space
- $$A \vec{v}_1 = \sigma_1 \vec{u}_1$$, ... , $$A \vec{v}_r = \sigma_1 \vec{u}_r$$

The vectors $$u_1, ..., u_r$$ are called left singular vectors of $$A$$, the vectors $$v_1, ..., v_r$$ are called right singular vectors of $$A$$, the $$\sigma_i$$ are called singular values of $$A$$.

### Matrix formulation
The previous statement can be reformulated in single elegant espression using matrices.

Let $$U$$ be the $$m \times m$$ matrix whose columns are $$\vec{u}_1, ..., \vec{u}_m$$.
Let $$V$$ be the $$n \times n$$ matrix whose columns are $$\vec{v}_1, ..., \vec{v}_n$$.
Let $$\Sigma$$ be the $$m \times n$$ matrix made of zeros, a part from the first $$r$$ diagonal terms which are $$\sigma_1, ..., \sigma_r$$.
Then we can write all the previous conditions in one line:

$$
A V = U \Sigma
$$

Moreover, since the $$\vec{u}_i$$ and the $$\vec{v}_i$$ are sets of orthonormal vectors, the matrices $$U$$ and $$V$$ are orthogonal, i.e. $$U^T U = V^T V = I$$.
Therefore, we can write the previous line as:

$$
A = U \Sigma V^T
$$

which is called *Singular Value Decomposition* of $$A$$.


