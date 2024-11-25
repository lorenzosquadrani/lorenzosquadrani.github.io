---
title: "Singular Value Decomposition"
collection: notes
tag: signal processing
permalink: /notes/signal_processing/SVD
---



## Singular Value Decomposition (SVD)

According to Gilbert Strang this is the final and best form of matrix decomposition.

Any matrix has a singular value decomposition.


A squared matrix could be factorize as:

$$
A = S \Lambda S^-1
$$

where $$S$$ is the eigenvectors matrix and $$\Lambda$$ is the eigenvalues matrix.

A good family of matrices is the one of symmetric matrices.
In this case the eigenvector matrix is orthogonal, and the factorization becomes:

$$
A = Q \Lambda Q^T
$$

Moreover, if we consider only symmetric, positive define, matrix, the eigenvalues are all positive.

But what if we have just a generic mxn matrix?
It turns out t at it can always be expressed as:

$$
A = U \Sigma V^T
$$

where $$U$$ is an orthogonal mxm matrix, 
$$\Sigma$$ is a rectangular diagonal mxn matrix, $$V$$ is an ortogonal nxn matrix.
This factorization is known as **Singular Value Decomposition**.
The right hand side of the decomposition can be geometrically interpreted as a rotation followed by a rescaling followed by another rotation.

Let us see it.
We have an mxn matrix $$A$$, which maps vectors $$\mathbb{R}^n$$ to vectors in $$\mathbb{R}^m$$.
We denote with $$r$$ the dimension of the row space of $$A$$, so $$r\leq n$$. 
We recall that the dimension of the column space is equal of smaller than the dimension of the row space.

We consider the matrix $$A^T A$$, which is symmetric by definition.
  

Can we find a change of basis that diagonalizes the matrix? OMG what a stupid question: of course not, because it is not even a squared matrix.
Okok, ma then maybe we can find a change of basis that makes the matrix rectangular diagonal. 
Ok fine, that we can do. 
But wait, what the hell is a rectangular diagonal matrix.
Ye that is just a generalization of diagonal matrix: basically it looks diagonal as far as it can, elsewhere it is all zeroes.
Well, it turns out that any matrix can be decomposed (or factorized if you like) in such way. 
We just need to find the right change of basis, which is what singular value decomposition is about.

Ok so we start by finding an ortonormal basis in the starting, row space $$\mathbb{R}^r$$.
Easy-peasy, we just find a basis, use Gram-Schimdt or however it is called, normalize, done.

Now, for some reason, the condition to find the change of basis is that the transformation $$A$$ from $$\mathbb{R}^r$$ to $$\mathbb{R}^m$$, is such that the vectors of the orthonormal basis we found are mapped into a set of orthogonal vectors also in $$\mathbb{R}^m$$.
But wait, this make sense only if $$m>r$$.
Moreover let us also add a normalizing vector in front of the obtained vectors, to make them orthonormal.
In algebraic notation, if $$v_i$$ are the basis vector in $$\mathbb{R}^r$$, we want that:

$$
A v_i = \sigma_i u_i
$$

where $$u_i$$ are m-dimensional vectors orthogonal to each other, with module 1.
In the more compact matrix notation:

$$
A V = U \Sigma
$$

or 

$$
A \left[ v_1 ... v_r \right] = \left[ u_1 ... u_r \right] \left[ \sigma_1, ... TODO \right]
$$


Recall that a matrix that maps from $$\mathbb{R}^n$$ to $$\mathbb{R}^m$$, is an mxn matrix, due to the definition of matrix-vector multiplication.
It basically takes in vectors which looks like the rows of the matrix, and outputs vectors which looks like the column of the matrix.

Let $$M \in  M^{m, n}(\mathbb{R})$$ be a real $$m x n$$ matrix.

Note that such a matrix represents a linear transformation which maps a vector in $$\mathbb{R}^n$$ into a vector in $$\mathbb{R}^m$$.

It can be shown that $$M$$ can be expressed as:

$$
M = U \Sigma V^T
$$




References
----------

- Wikipedia (21/11/2024)
- Youtube Lecture https://www.youtube.com/watch?v=TX_vooSnhm8