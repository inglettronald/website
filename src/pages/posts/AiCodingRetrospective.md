---
layout: ../../layouts/MarkdownPostLayout.astro
title: 'Coding with AI: a Retrospective'
author: 'Dulkir'
description: 'My notes on the public discourse around using AI for development.'
pubDate: 2026-05-13
# lastModified: 2025-12-07
tags: ["workflow", "ai", "coding", "process"]
---

### My last article

Previously, I was writing very passionately about my frustrations with full line autocomplete (particularly Jetbrains). I want to save some time and get out of the way that I still **genuinely dislike** this. There's a good chance I would have never given it another chance, mostly for UX reasons, but Jetbrains seems to love turning the option back on randomly like it's microsoft copilot. Maybe this is a skill issue, or maybe it's a 1 time config migration failure. Maybe I forgot I turned it on. Either way, I ended up interacting with it again and it was similarly annoying. 

However, AI has finally been hitting the mainstream recently, as the public perception seems to be that we're hitting the beginning of scaling laws with AI and it's integrations have had more time to mature by now. As a result, I've been stepping up my usage for the last 2 months, and I have some thoughts. 

### AI doesn't cause atrophy, it enables it.

Developers seem to unanimously agree right now that AI results in short term productively gains, pretty much regardless of skill level or domain at this point. Earlier models would quickly get lost or hallucinate confidently if you moved anywhere outside the most basic coding concepts. Now, between some of these harnesses, reasoning, IDE/CLI integrations, and improved tool/context management, AI capabilities in the coding-sphere are much more flexible to explore problems not directly baked into the training set. Which is most of the interesting problems worth spending time solving.

A big divide that I see now exists regarding "skill atrophy". This argument seems to mostly boil down to "developers" moving to fast and relying on these tools to heavily. If you're worried that you're somehow going to forget how to code because you're spending all day managing prompts, you're just misusing AI in my opinion.

This take isn't trying to be mean to developers - I see the allure. It's very easy for the pattern of "running an agent in parallel" to you when debugging to slip into "I'm telling Claude to fix it and make no mistakes". Debugging like this has pain points, but the responsibility is sort of offloaded and I think that it can be tempting to try to shirk the responsibility of understanding an unfamiliar system. 

I see some people really go deep into this rabbit hole and start optimizing around the prompts, spinning up a ton of parallel agents, all with the intent of really letting go of the codebase outside of architectural decisions (spec-driven development or whatever). This is largely the trap.

### What I'm doing to avoid it

As far as I can tell, being mindful about avoiding these traps happens by reducing your AI usage to the following two scenarios:

> **Situation 1:** I need to perform a predictable structured refactor on a large amount of code that I mostly understand.

This is probably the strongest use for LLM's right now, with 1 extra assumption: **you can verify the changes with tests**. In my experience the question is not *if* it will make a mistake, but *where will it be*. Prompting a model is so much less friction for performing these type of refactors compared to writing it by hand or some complex script/pattern matching - so if you can manage to find a way to validate its work it can genuinely be a game-changer.

These situations seem to come up somewhat often in real world enterprise software. I think AI can actually have a positive impact on enabling more of these proactive refactors that would traditionally get kicked down the road in a company due to pressing concerns from product/management.

> **Situation 2:** I need to debug/fix something. Particularly a problem that is not trivial to solve with traditional debugging flows (costly/annoying to reproduce, involves multiple threads, or otherwise entangled in a ton of spaghetti)

AI seems useful for debugging regardless of familiarity, but **how you use the AI** changes in each situation.

**If you're familiar with the context:**

This situation is when you get to leverage a large language model in the way that most people probably picture it. Basically you can just run to the AI and say "here's the bug, why is it happening?". Assuming you know the system, this is fine because you can quickly dismiss bad ideas. Sometimes, the model will save you time by immediately solving the problem by pointing out something that is easily to confirm with static analysis. 

**If you're not:**

This is where it gets a bit more nuanced. Specifically, the pitfall in this situation is doing exactly what I described in the previous paragraph. If you can't analyze the outputs, you'll end up spending more time to *maybe not solve the problem*. And to top it all off, you will learn nothing by the end of it. I think this is where a lot of the arguments about atrophy come from.

Here, your main focus should be to try to plan a process to identify the core issue. Preferably, dont ask for code edits in this scenario, unless you already have a clear picture of what it would look like. If you're going to ask for code edits, try to add them in a way that is easy to revert. That either means building it modularly or just being responsible with your git history. Your goal here is to learn the process, finding the solution will be a side affect.

### Cognitive debt can't happen if you use AI like this.

"Cognitive debt", for the unfamiliar, is the other negative risk that is commonly discussed with coding with AI - it communicates the idea that your codebase can get large faster than your brain can comprehend/hold the complexity. I include this very shortly as a footnote on this article, because it seems trivially easy to avoid. Just don't be irresponsible about slinging ai generated commits at your project without understanding them. Honestly, it's such a frustrating take for me.

Working fast in this manner *can* be an interesting learning tool - and I've heard the likes of [Theo](https://www.youtube.com/@t3dotgg) saying that this is just "a skill" and ["if you're not running into this problem you're not shipping code fast enough"](https://www.youtube.com/watch?v=lNVa33qUzZ8). I largely agree with the premise, but not the outcome. I think it **is** a skill, but it's largely built by contributing/learning about complex or long-living projects. I don't think you necessarily need to build this skill by just building a lot of stuff. To give him the benefit of the doubt, I'd imagine a lot of this comes from the perspective of building personal / low-stake projects.

Basically, I think that "vibe coding" in the way that people refer to "letting claude/codex/gemini take the wheel" is just bad universally. You might get a product faster, but it will be an unstable mess and teach you nothing. Do not create with AI, augment with it instead.

### A side note about the ridiculousness of Claude commit credit.

I appreciate that the signifier of co-authored Claude commits exist, but it's such an interesting point to me. I think at the point that you feel the need to disclaim that there's AI involved in your code, it's such a signifier of misunderstanding that it's an immediate red flag that you're using it wrong. There's a lot of people I know that are above me in skill level that continue to use the disclaimer anyway - so maybe my take is wrong - but I don't see any point to the system.

I think it originated as a signal to open source devs who didn't like AI from a morality/licensing point? Because a lot of these big models are probably likely to be using all the github data without attribution. There's like no way to validate that claim - unless one of the companies get audited and they happen to leave behind proof? Point is, I think neither of these things are going to happen. That ship has sailed. At the risk of this article turning political, I just think that the sectors/companies are too large and they get to break the rules. This opinion is mostly formulated from the large lack of antitrust enforcement in the modern day. 

In these regards, I think open source devs are probably just nerfing themselves for no reason, and I'm expecting that attitude to fade fast in the open source scene if it hasn't already. There's already very little signal for if code is AI generated, you could add a rule to **not generate any comments** and probably avoid AI detection trivially with just that one flag. Feel free to correct me if I'm wrong, I don't actively try to sneak AI generated commits into open source repo's that explicitly say they dont want them.

### Everything in moderation

Basically, for those coders who are curious and haven't tried out AI. It's here to stay. It's worth using. But it's important to continue to focus on learning the craft, not the AI tooling. Some basic prompt best practices, or basic skills to essentially serve as your own prompt wrapper can be okay. But, as soon as you spend more cognitive effort on the AI than the actual code, you'll start running into the negative side affects.
