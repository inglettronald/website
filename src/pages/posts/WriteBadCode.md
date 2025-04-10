---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Why You Should Write Bad Code'
author: 'Dulkir'
description: 'A longwinded motivational piece on learning hard skills'
pubDate: 2025-12-07
lastModified: 2025-12-07
tags: ["learning", "mindset", "story", "thought-piece"]
---

### My college experience, actually:
In the last few years, I spent a lot of time focused on "getting through" school and playing
quite a lot of video games. Even though this was categorically not a great decision for my
life and skill progression, I wouldn't say I regret it. It was super fun, and also gave me a
good understanding for the *why* I would want to be doing the boring stuff that everyone tells
you that you should be doing. Most people probably dont need that serious of a lesson, **but I
did**.

Anecdotal therapy session aside, these setbacks in desired life/skills trajectory have prompted me
to deeply reflect on how I approach learning, and the mindsets surrounding it. In this
article I hope to explain a good snapshot of my current attitude towards learning stuff that is
hard or unatural for you to pick up.

### How to fix it?
In my experience, writing bad code was a fantastic solution to my problems. I was lacking 
internship level experience on the tail end of my college eductation, and a self-driven project
was the perfect thing to justify/replace such and endeavor. When I thought agbout what it meant 
to go get the internship, specifically to employers, I came to the following conclusions:

- Doing this will show that I can, in some capacity, write code outside the schooling system.
In school, you're supposed to learn the underlying problems and solutions. In the real world,
you learn the how to apply these concepts. 
- Doing this will show that I can cooperate with other people.

An open source project - where I end up trying to do most of this myself - unfortunately can't
reliably provide the second item. Cooperating with a client? Sure. But a a coworker, on the 
other hand - this experience can only really come from a more traditional job.

Making your own project has other marketability though. An internship does not teach you the
same lessons in architecting a project from the ground up - identifying a problem, drafting a
solution, and implementing a product.

### The part about bad coding:
The project I chose was a minecraft mod around hypixel skyblock. If you're particularly interested
about it, I would recommend checking out my portfolio or it's github page, but for now I'm not trying
to beat a dead horse and re-explain it. I want to talk about a the developer side of that project,
rather than the user facing product.

When I developed, I purely focused on making a product right now that filled a need. Sure, I wanted
to write a piece of software that I was proud of, and I wasn't intentionally making garbage or
anything, but I generally took the path of least resistance when making a feature. For me, coding 
something **bad** was much better than not doing anything at all, so that was the objective.

This wasn't a particular intellectual choice at the time, but just the most I could manage. This meant

This meant that I made mistakes like:
- Writing data parsers in a way that is not defensive and resilient to change
- Parsing data inefficiently by looping over entities on the render loop. 
- Overusing statics and not building my project to be pleasant to scale/mantain
- Overdependence on configuration libraries.

However, at the time I simply didn't know any better because I never had to face the 
problems that these bad decisions bring up. I didn't know that: 
- Making assumptions about the structure of incoming data has meant that there's more maintainance
necessary than a typical EOL project
- Living in the hot loop of this game has limited the scope of what features can do in good concious,
and certainly results in a bad performance impact compared to the alternatives.
- Unofficial forks were not made - who'd want to clean up my mess?

### But...

I got a product out there. And it was recieved well. I learned what decisions were good from the
project, and what decisions were bad. Some shortcuts are worth taking, and others are important to do
right from the start.

## So what now?

The lesson to took away from my experiences is that generally, it is good to focus on process over 
results. Have the athlete mentality of the offseason being the most important, more than the record
of the games. Look at a problem, and even if we don't know how to solve it (likely!) - try anyway. 
Make bad solutions until we find a good one, and you'll look back 5 years from now and come out a
better or smarter person for it.

You can certainly try to write good code, or be interested in the design/stability of your projects.
However, it's important to take that intention with a grain of salt and not let it become
and immobalizing force. Fear of failure or mistake can be a huge barrier to progress, and if you can
be well intentioned about avoiding it I think it will provide you a leg up on your peers over time.

### Time to lay back down on the couch.

That can be super hard. It certainly is for me. I grew up mostly avoiding things unless I felt
confident that I could succeed in them, and to be honest - I don't feel confident anymore. Life had
a funny way of getting a lot harder when I got comfortable. But I find that I go to bed the most
satisfied when I fought against that mentality. The most uncomfortable days lead me to the soundest
sleep. 

I hope that this comes across well, and the optimism shines through reflection of the somewhat gloomy
context I chose to illustrate it. I hope that this reaches the person who needs to hear this message,
and they're able to break the chains that bind them. I hope that someone may see this and chose the
better path. But if it sucks, I'm going to follow my own advice and post it anyway!

I started this website with the intention of blogging somewhat actively, partially to be more 
intentioned with my thought process and emotion. Three months later, and I'm only now going to press 
the submit button on this blog and finally start doing it. But I don't regret taking the time I
needed. Maybe you wouldn't need to take that much time, **but I did**.

