---
layout: page
title: How to get a job in data science
permalink: /how-to-get-a-job-in-data-science/
published: true
last_updated: 2019-04-11
backlinks: <ul><li><a id="essays" class="internal-link" href="/essays/">Essays</a></li></ul>
tooltips: 
- path: tooltip_essays.js
---

It is said that when you give the same advice three times, you should write it down in a blog post. I'm often approached for advice by job seekers in data science, so this is that blog post.

When a company hires someone, they want to know that the person 1) *can* and 2) *will* do the job. Most people's résumés do extremely little on their own to inspire this confidence, especially in a tough job market. The good news is, you have options. You just have to display patent evidence of your **skills** (whether you can do the job) and your **character** (whether you will do it).

The best way to create evidence of your skills is to use them and then share the artifacts of your work. 

One option is to do a project that is targeted at the company you want to work for. Read the job posting carefully to figure out what the job is, and then spend a weekend putting together a small project that demonstrates your ability to do it. 

If you're lucky, the posting will include details about a take-home assessment that will be required as part of the interview process. 99% of people who apply to the position will just submit a résumé and a boiler-plate cover letter; they wouldn't dream of doing the take-home assessment before even getting a first interview. So a great way to stand out is to do the project preemptively and send it in.

Another option is to come up with a project of your own. Some people will say not to try Kaggle contests because *everyone* does Kaggle contests. I'm not convinced of that advice. The first step is to do something, anything at all. If Kaggle seems fun to you, go for it. Another option is to pick a textbook and start reading it. Summarize a chapter or two and share what you've learned online. You don't need to be original. You just need to be more generative than the average job-seeker.

The strongest evidence of your character is in your current relationships. That's why referrals are best sought from the people you already know, especially people you've known for a long time or worked with previously. If you haven't already, I recommend that you tell everyone you know that you're looking for work.

If this avenue dries up, you may need to get to know new people. If you're sharing high-quality work online, you will be more likely to make serendipitous connections. Beyond that, you may decide to go to some meetups or conferences. This can work well if you're strategic. You want to draw *some* attention to yourself, especially from people who might potentially hire or refer you, but it has to be the right kind of attention. You don't want to just wander from person to person telling them you're looking for work. A better strategy is to ask a thoughtful question during a talk. This will give people an ice-breaker so that they can come talk to *you*. And in the mingling sessions, just ask lots of questions and listen to the answers.

I don't think résumés or cover letters matter very much. One page, two pages—who cares? Just make sure there are no glaring typos, that you summarize your qualifications, and that there is information about where to learn more about you—LinkedIn, GitHub, your website, etc. Don't go overboard describing your skills, especially soft skills. Anybody can write that stuff on a résumé, so it doesn't convey much information.

Most of what I've said applies to any job search. What about in data science specifically? What should you know, and how can you stand out? I'll answer these questions by offering three examples of interview questions that I think would do a good job of assessing a potential data scientist, along with what I would hope to see in a candidate's answer.

> You work for a bank, and you've been asked to write a Python or R package to facilitate ongoing analysis of online surveys which are sent to customers every time they visit a branch in person. What first steps would you take to ensure that this project is successful? Be specific: what is on your to-do list for the first couple days of package development?

This question has two purposes. The first is to get a sense of your project management skills. How deeply do you try to understand a problem before you start executing on a solution? How do you budget your time and figure out the scope of your responsibilities? How do you forestall unneeded risks or costs? 

The second purpose is to gauge your level of experience as a developer. Do you know how to set up the right directory structure? Will you use a git branching model? How will you track dependencies? Do you have a preferred testing framework?  Will you set up continuous integration? Will you set up git hooks or some other system to auto-generate documentation? These things are the bread and butter of many data science jobs.

> A senior executive at your company has heard that one of your models, which uses the k-nearest neighbors algorithm to predict house prices, involves something called a "bias-variance tradeoff". They want to know what this tradeoff is, and also why your algorithm seems to depend so much on "neighboring" houses, when there ought to be other relevant factors to consider. How would you explain?

Data scientists frequently need to explain their work to decision-makers or stakeholders, and this often involves disambiguating technical terms. This question presents an opportunity to give a vivid explanation of the bias-variance tradeoff by relating it to a hyperparameter (*k*) in a relatively simple algorithm. It also tests your ability to explain, tactfully and clearly, what is meant by "neighbor" if not the traditional meaning. My advice to you for answering questions like this one is to ground your explanation in a [concrete example](https://davidklaing.com/blog/2017/11/10/communication-in-data-science.html).

> You work for a company that offers a subscription-based meditation app. You have behavioral data about each user – how often they open the app, which pages they visit, etc. After creating around 20 features, one of your colleagues built a multiple logistic regression model to predict whether a user will cancel their subscription in the next month. They found that just one behavior has a statistically significant relationship with cancellation: the frequency at which the user opens the app before 9:00am. Your colleague is proposing that a notification be sent by default every morning, and wants to know your thoughts. What questions would you ask about their analysis, and what do you think of their conclusion?

Some findings are surprising because you've done your job well: you uncovered something that wasn't obvious. Some findings are surprising because they're wrong. One of the biggest challenges in data science, especially for junior data scientists, is distinguishing between these two cases. This question challenges you to recognize the importance of correcting for multiple comparisons, considering effect sizes, choosing the right model, and testing out small-scale interventions before committing to big ones.

Interviews are hard, and they take practice. Try not to get discouraged if you get turned down—it happens to everyone. But if you keep learning, keep sharing your work online, and maintain good relationships with the people in your network, I'm confident that you'll find work.