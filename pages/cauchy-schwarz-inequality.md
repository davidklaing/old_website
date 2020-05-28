---
layout: page
title: "Size-constrained gradient descent and the Cauchy-Schwarz inequality"
permalink: /cauchy-schwarz-inequality
published: true
last_updated: 2018-11-27
---

<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

Some friends and I have been working our way through Michael Nielsen's excellent book, [Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/). One of the exercises in chapter 1 forced me to flex some math muscles that I haven't used in a long time, so I thought I would write up the answer that my friend [Matthew](https://twitter.com/mattyj612) helped me understand.

## The problem

The exercise refers to Nielsen's explanation of gradient descent, an algorithm that finds the minimum of a loss function \\(C = f(v)\\), where \\(v\\) is a vector of model coefficients. In gradient descent, we vary \\(v\\) one step at a time to move in the direction of \\(C\\)'s minimum. The challenge—which might look like gibberish at first—is this:

> Prove that the choice of \\(\Delta v\\) which minimizes \\(\nabla C \cdot \Delta v\\) is \\(\Delta v = -\eta \nabla C\\), where \\(\eta = \frac{\epsilon}{\|\|\nabla C\|\|}\\) is determined by the size constraint, \\(\|\|\Delta v\|\| = \epsilon\\). *Hint*: If you're not already familiar with the [Cauchy-Schwarz inequality](https://en.wikipedia.org/wiki/Cauchy%E2%80%93Schwarz_inequality), you may find it helpful to familiarize yourself with it.

We'll come back to this problem statement soon, but let's start by wrapping our heads around all those terms.

### \\(C\\)

\\(C\\) is a function of a bunch of variables—the ones in \\(v\\). If the length of \\(v\\) were just 2, then you could picture \\(C\\) as a curve in 3 dimensions, like in the picture below (taken from Nielsen's book):

![](/assets/img/step_by_step/curve.png)

### \\(\nabla C\\)

\\(\nabla C\\) is the gradient of \\(C\\). It's a vector of the partial derivatives of \\(C\\) with respect to each of the variables that comprise \\(v\\). The gradient is to multi-variable calculus what the derivative is to single-variable calculus. Picture a line on the \\(v_1\\)-\\(v_2\\) plane that is pointing in the direction of the fastest increase in \\(C\\). The mathematical symbol \\(\nabla\\) is called *nabla*, but you can just pronounce \\(\nabla C\\) as "grad C".

### \\(\Delta v\\)

\\(\Delta v\\) is a vector representing the change in \\(v\\) as we move from one point to the next. If \\(v = (1, 2)\\) and \\(v' = (2, 3)\\), then \\(\Delta v = (2-1, 3-2) = (1, 1)\\). In the picture above, picture \\(\Delta v\\) as a line on the \\(v_1\\)-\\(v_2\\) plane, that extends from the coordinates of \\(v\\) to the coordinates of \\(v'\\). The symbol \\(\Delta\\) is the Greek letter *delta*.

### \\(\nabla C \cdot \Delta v\\)

\\(\nabla C \cdot \Delta v\\) is the *dot product* of \\(\nabla C\\) and \\(\Delta v\\). Algebraically, the dot product of two vectors is the sum of their elementwise products:

$$a \cdot b = \sum_ja_jb_j$$

Geometrically, the dot product is the length (and valence) of the projection of one vector on another. As you can see in the [gif](http://wiki.roblox.com/index.php?title=File:Dot_product_projection.gif) below, the dot product is maximized when two lines point in the same direction, and it's minimized when they point in opposite directions:

![](/assets/img/step_by_step/dot_product_projection.gif)

So, you can picture \\(\nabla C \cdot \Delta v\\) as the length of the projection of the gradient of \\(C\\) onto the line on the \\(v_1\\)-\\(v_2\\) plane that represents the change in \\(v\\).

### \\(\|\|\nabla C\|\|\\) and \\(\|\|\Delta v\|\|\\)

\\(\|\|\nabla C\|\|\\) and \\(\|\|\Delta v\|\|\\) are the *norms* of \\(\nabla C\\) and \\(\Delta v\\), respectively. The norm of a vector is basically just its length, as computed by the Pythagoream theorem. If \\(v = (3, 4)\\), then \\(\|\|v\|\| = \sqrt{3^2+4^2} = 5\\).

### The Cauchy-Schwarz inequality

The Cauchy-Schwarz inequality essentially says that the length of the projection of one line on another can be at most as long as the product of the length of those two lines. In other words, the dot product of two vectors can't be bigger than the product of the lengths of those two vectors. [Here](https://www.youtube.com/watch?v=YL3DeTiBcoo) is a brief video about it.

$$|a \cdot b| \leq ||a||||b||$$

### The problem statement, in plain English

Here's that problem statement one more time:

> Prove that the choice of \\(\Delta v\\) which minimizes \\(\nabla C \cdot \Delta v\\) is \\(\Delta v = -\eta \nabla C\\), where \\(\eta = \frac{\epsilon}{\|\|\nabla C\|\|}\\) is determined by the size constraint, \\(\|\|\Delta v\|\| = \epsilon\\).

Here's what it's asking, in slow motion:

> Say we're at some location in \\(v\\), with a corresponding value for the loss function, \\(C\\). 
> 
> We know the gradient of \\(C\\) at this location, \\(\nabla C\\)—it's the line that points in the direction of the fastest increase in \\(C\\). 
> 
> Say we want to vary \\(v\\) by some small amount so the projection of \\(\nabla C\\) on \\(\Delta v\\) is minimized. (Either make it really small and positive, or really big and negative.) 
> 
> Say we also want to constrain our horizontal movement so that \\(\|\|\Delta v\|\|\\) is equal to some constant, \\(\epsilon\\). 
> 
> How can we show that the right value for \\(\Delta v\\) is \\(-\eta \nabla C\\), where \\(\eta\\) is \\(\frac{\epsilon}{\|\|\nabla C\|\|}\\)?

## The solution

Let's start with the first part of the claim:

> Prove that the choice of \\(\Delta v\\) which minimizes \\(\nabla C \cdot \Delta v\\) is \\(\Delta v = -\eta \nabla C\\).

Forgetting the size constraint for now, we'll just suppose that \\(\eta\\) is some constant. So, the claim is that to minimize the dot product \\(\nabla C \cdot \Delta v\\) by replacing \\(\Delta v\\), we need \\(\Delta v = -\eta \nabla C\\). In other words, to minimize the dot product of a known vector and an unknown vector, we need the unknown vector to point in the opposite direction of the known vector. (Hence the negative.)

This is just a property of the dot product! We could go into a proof of that, but instead let's just stare at this gif one more time to convince ourselves that it's true:

![](/assets/img/step_by_step/dot_product_projection.gif)

The bigger challenge is in the second part of the claim:

> \\(\eta = \frac{\epsilon}{\|\|\nabla C\|\|}\\), subject to the size constraint that \\(\|\|\Delta v\|\| = \epsilon\\).

This is where the Cauchy-Schwarz inequality comes in handy. Since we're concerned with the dot product \\(\nabla C \cdot \Delta v\\), the Cauchy-Schwarz inequality applies just as much to \\(\nabla C\\) and \\(\Delta v\\) as it would to \\(a\\) and \\(b\\). Subbing in \\(\nabla C\\) and \\(\Delta v\\), we get the following inequality:

$$|\nabla C \cdot \Delta v| <= ||\nabla C|| ||\Delta v||$$

Now, we can make a couple of substitutions. First, we've already said that we want to constrain \\(\|\|\Delta v\|\|\\) to be some value \\(\epsilon\\), so we can replace \\(\|\|\Delta v\|\|\\) on the right-hand side with \\(\epsilon\\):

$$|\nabla C \cdot \Delta v| <= ||\nabla C|| \epsilon$$

Secondly, since we know we want to minimize \\(\nabla C \cdot \Delta v\\), we will need to maximize its absolute value, \\(\|\nabla C \cdot \Delta v\|\\). Since the magnitude of a dot product is largest when the two vectors are parallel, we know that we'll have to replace \\(\Delta v\\) with \\(\nabla C\\), multiplied by some scalar, \\(\eta\\), whose value will depend on the size constraint \\(\epsilon\\). So let's replace \\(\Delta v\\) on the left-hand side with \\(\eta \nabla C\\):

$$|\nabla C \cdot \eta \nabla C| = ||\nabla C|| \epsilon$$

We can move the \\(\eta\\) outside that dot product, to make it bit easier to look at.

$$\eta |\nabla C \cdot \nabla C| <= ||\nabla C|| \epsilon$$

We'll also turn this into an equality now, since we know that if the left-hand side is less than the right-hand side, it isn't being maximized, like we wanted.

$$\eta |\nabla C \cdot \nabla C| = ||\nabla C|| \epsilon$$

Now, our next step is to solve for \\(\eta\\). This might seem confusing at first. The key is that \\(a \cdot a = \|\|a\|\|^2\\). Why is this? Well, think back to the definition of the dot product. It's the sum of the elementwise products of two vectors:

$$a \cdot b = \sum_ja_jb_j$$

This means that if you take the dot product of a vector with itself, you just get the sum of the elementwise products of that vector with itself:

$$a \cdot a = \sum_ja_j^2$$

If you think of the Pythagorean theorem, the right-hand side of the above equation might look familiar. It's the square of the length of \\(a\\)!

$$||a||=\sqrt{a_1^2+a_2^2 + ... + a_j^2}$$

$$||a||=\sqrt{\sum_ja_j^2}$$

$$||a||^2=\sum_ja_j^2$$

So, we can replace that pesky dot product in our equation, \\(\nabla C \cdot \nabla C\\), with something much more algebraically friendly, \\(\|\|\nabla C\|\|^2\\):

$$\eta |||\nabla C||^2| = ||\nabla C|| \epsilon$$

We can remove the absolute value notation, since the square of anything is always positive:

$$\eta ||\nabla C||^2 = ||\nabla C|| \epsilon$$

And then we can rearrange to solve for \\(\eta\\):

$$\eta = \frac{\epsilon}{||\nabla C||}$$

We've done it! We've shown that if we want to constrain \\(\Delta v\\) so that \\(\|\|\Delta v\|\| = \epsilon\\) and also minimize \\(\nabla C \cdot \Delta v\\), then we need \\(\Delta v = -\eta\nabla C\\).

Why does this matter? Well, as far as I can tell, constraining the size of \\(\Delta v\\) is less practically important than constraining the size of \\(\nabla C \cdot \Delta v\\), which could be done by just choosing some really small constant, like 0.01, to multiply by \\(-\nabla C\\). But, this exercise still helped push me to review some linear algebra and calculus, and to understand some of the geometry behind gradient descent. So I'm glad I worked through it.

------

* Thanks to [this post](http://www.gastonsanchez.com/visually-enforced/opinion/2014/02/16/Mathjax-with-jekyll/) and [this issue thread](https://github.com/mmistakes/minimal-mistakes/issues/735) for helping me to figure out how to display inline LaTeX equations with Jekyll.
