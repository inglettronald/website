---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'The Practical Problem With AI Code Completion'
author: 'Dulkir'
description: 'Why I believe that this auto-complete form will always slow you down'
pubDate: 2025-09-01
# lastModified: 2025-12-07
tags: ["workflow", "ai", "coding", "process"]
---

I became a professional software engineer in 2023, and I think it has been a very interesting time to be
introduced to this field. A year after the release of the original ChatGPT model that shocked the world,
integrated tools for coding with AI were starting to become a lot more mainstream. "Vibe Coding", agents,
and different **autocomplete tools** were taking the world by storm around this time, and have largely remained
present in a lot of developers' workflows. Naturally, I was inclined to try some of the available tools to see
if they were any good. Now I rarely ever use any of them.

In terms of the chat-based AI, I think it can be useful as a search engine, or if you have some extremely common
problem you want to solve in your application. However, my work is fairly non-standard, so it's not that useful in
my daily routine. I do want to strictly avoid piling my opinions on Vibe coding or agents into public discussion, 
though, because it's already talked about ad nauseam and I don't feel like I have anything unique to add. The same
cannot be said for the abysmal excuse of software that is modern full line/multiline autocomplete.

### What makes for a good auto-complete?
The biggest problem of writing an article of this stance is that quantifying such a question that is quite difficult. 
One thing that I believe is characteristic of software development is that you end up working on unique problems a lot
more often than some sort of "repeated task." Furthermore, "repeated tasks" are the sort of thing that would end up 
being useful for eliminating variables in a way that is conducive to generating any meaningful measure of efficiency.

In that regard, I think subjective measures are the best hope we can get out of this article. Just wanted to be up front 
about setting your expectations. AI as a whole is currently one of the most relevant concepts in the world right now, 
and yet generally it seems like its "usefulness factor" is still largely up to debate. If the brightest minds in the world
can't solve that problem, then I don't think I'm figuring that out in a blog post randomly on a Monday afternoon.

### Let's start with the sales pitch then.
Every good argument will provide counter-examples, so I'll lead with them this time. Code completion can be great
when it reduces the time from thought to written in the text editor. My previous blog post on this site is about
"Writing something being better than nothing," so I'm no stranger to this mindset. In fact, it sort of relieves the 
pressure on the autocomplete solution, because even if there's a bug or an imperfect implementation that's suggested,
all is fine as long as we're generally working towards the final solution. 

Some workloads are also repetitive by nature. No matter how hard you try to abide by DRY principles, occasionally it
makes more practical sense to repeat yourself sometimes. Maybe you're working on a deadline. Possibly you're writing some
tests for a new system. Perhaps your abstractions or context is already complex enough that it's actually more maintainable
to add a bit of repetition rather than modifying the composition structure. These are the primary problems that code-completion
generally aims to solve, and it definitely serves a purpose in that regard.

### The implementation is dreadful though.
As soon as I say that, I need to address that:
- I haven't tried every model
- I haven't tried every code editor
- I haven't gotten deep into the weeds with trying to tune the suggestions

With enough effort, I'm sure I could find something that I could tolerate. However, I am never going to do so because
I believe that code completion is flawed on a fundamental level (more about that upcoming). It's also worth noting that 
any time I would spend trying to configure some of the default behaviors that I hate - or maybe toying around with 
different models until I find something that is focused enough for my liking - could have bent spent making some relevant
macros or finally learning vim bindings. However, purely based on my experience with Jetbrains' offering (and watching 
some others with supermaven):

The suggestions are just **wrong** a shocking amount of the time at the moment, in the way that it suggests something
that is totally not even close to the thought process of what I am trying to code. When a wrong answer is provided, 
it actively slows you down and offsets a lot of the gains too. I also found myself conditioned to wait for a 
response a lot of the time, but then be surprised when one doesn't show up. There was just a lot of *slowdowns* 
in a way that feels sort of unacceptable for a tool that is purely supposed to speed up drafting. Speaking of slowdowns,
the suggestions are either going to have network latency or slow down your whole pc, and heat your room to boot!

### Let's pretend that it works?!
Okay, sure. We've made some progress in AI. It now takes negligible compute time now to provide sugggestions, and
latency is no longer an issue. It's generally much more reliable at coming up with the right continuation of code 
based on context as well. The interface of dealing with these suggestions is still fundamentally very bad, and here's why:

(Again, using Jetbrains' implementation here for simplicity)
Tab-based autocomplete shows you a suggestion in a box directly below what you're typing. It's consistent, predictable,
and a good simple tool for trying to essentially provide on the fly macros. A developer can intuitively use tab autocomplete
in a way that they can understand when it will likely show up, and when they're going to want to use it. It's also out
of the way of the rest of the line, so it's quite easy to visually filter out.

None of that is true for full line or multiline autocomplete. It's unavoidable, directly placing itself into the code
until you tell it not to. It has different mechanisms for accepting suggestions that weren't intuitive to me personally.
It's also impossible for an AI solution to have that sort of predictability and consistency that let you use it very
quickly. There are almost assuredly going to still exist pauses where you're expecting a completion, and you don't receive one,
because the whole thing runs on vibes as far as the user is concerned. You're going to have to read the whole suggestion
as well, which is generally longer, and while reading is usually faster than typing, it's of my opinion that the difference is
less true (and sometimes not even true situationally) in code comprehension.

### Typing Speed is also just overrated
Even as someone who believes in just whipping up a draft and getting some code down as a starting point to formulate
your ideas, I think that the bottleneck just isn't typing speed, not by a long-shot. At least most of the time, if you're
bottlenecked in output by typing speed, you're probably just doing something wrong. Like I said earlier, there's definitely 
some amount of acceptable repetition in code, but this just isn't generally enough of a code base to the point where 
shifts the primary activities aren't deliberation/design and/or debugging issues. 

(This is coming from a primary Java developer!)

### Time to learn vim.
Full line / Multiline code completion is a waste of compute and a net slowdown to development. Most of the time, typing
speed should not be a real factor in development time. Also, The technology isn't good enough yet, and even if that's 
fixed, the product is distracting and worse than the alternative of macros or other tools.