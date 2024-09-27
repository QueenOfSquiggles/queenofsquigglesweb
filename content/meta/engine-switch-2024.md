---
title: "Engine Switch 2024"
description: "In which I explain why I made the switch from Godot to Bevy"
date: 2024-09-27

taxonomies:
  tags:
    - blog meta
---


To be real, this post has been a long time coming. I've been toying in my head with how I want to go about this. So hey, here it goes

## Godot is seriously awesome

Before anyone gets all tribalistic about this: Godot is incredible. It is an amazing software that lets people with even the most minimal experience make games. And almost every week I personally see another reason to love this funky little game engine. So before we begin, please please please don't think that just becauses I have a newfound love of bevy that it means it's better than Godot. Game Engines are (usually) subjective. Use the tool that works for you and is enjoyable to use!

## Bevy is also seriously awesome

I'll lead with a brief description, shamelessly stolen from [Bevy's website][bevy]. Bevy is "A refreshingly simple data-driven game engine built in Rust[;] Free and Open Source Forever!"

There are a few key areas that I wanna drill down for why I think Bevy is so cool, without needing to compare it to any other engines.

> As a side note, my hot take is that Bevy is more accurately a "framework" rather than an "engine" since my definition of engines, frameworks, and libraries break down as such:
>
> - An engine is an executable software that dispatches your code (typically a scripting language) as it sees fit based on the engine's design
> - A framework is code that gets compiled (or included for non compiled languages) into your application and takes control of the application's main thread.
> - A librtary is code that gets compiled into your application but does not take control over the application's main thead (save situations like blocking and sleeping)
>
> It is probably of note that these definitions are distinctly different from existing attempts such as [GameFromScratch][gfs-glossary])

<!-- I think I like using this label system for managing hardcoded links -->
[bevy]: https://bevyengine.org/
[gfs-glossary]: https://gamefromscratch.com/gamedev-glossary-library-vs-framework-vs-engine/

### Rust

Bevy is written in rust, users write in rust, and (with some limitations) any platform that rust supports targeting should be able to run the compiled application.

Because of Rust's language features, memory safety is just inherent to the development of the game.

### ECS

ECS (Entity Component System) is a style of development you may have heard of if you've been in game development long enough. It's a design that allows everything to be broken down into *entities* which are defined by their attached *components* which store data that can be queried and transformed by *systems*.

Overall it is really conducive to Data Driven Design, which is a really cool paradigm that operates fairly differently than traditional OOP (Object Oriented Programming) that you'd find in Unity or Godot.

Yeah I know it's a comparison to other engines but I wanted to illuminate a key detail here as a fun tool we can use later!.

### Free and Open Source

If you're someone reading this blog and know me from social media, you're probably already on this and hopefully agree that having open source code for the tools you use (especially as a programmer) is a massive boon. Adding in that the engine itself is written the same as the games, and that drops the barrier to contribute code by a significant margin!.

### Simple

This might not get a whole lot of attention but a key detail about Bevy is the simplicity. Components are typical rust structs, systems are just rust functions. Everything is fairly simple to set up and makes liberal usage of `Default::default()` and builder patterns. And this simplicity doesn't get in the way of writing more advanced code systems.

## What I've been up to

Since checking out bevy, I started working on a couple different projects to whet my appetite for this engine.

### Games

I've started out on one game and I'm planning to get working on a second as time allows.

#### Watery Wails

Watery Wails is a horror game inspired by the *Five Nights At Freddy's* series of games. Notably the original few games. It is also heavily inspired by experiences in my past including working at a pool as a lifeguard and some pretty tragic things I ended up witnessing there. Which is why I joke that it's "made with trauma" (probably not a great joke but it helps me cope).

This game is planned to include a breadth of changes from my previous style of development. Notably usage of Bevy, unit testing, Hierarchical Task Network Planning (think super-charged GOAP), and tools for making translation files.

#### Magical Farming, Cooking, and Ranching Game (Title TBD)

This is a game both new and old. Previously I had tried to make a magical farming game in Godot that was inspired by Slime Rancher. It had cheesefruit crops, cute rats to ranch, and a super basic "spell" that acted as the vacuum tool.

The new addition is the cooking component. I think it would be fun to make the player play through little mini-games to prepare different foods. And then they could serve these magically imbued foods to their clients: adventuring parties! I'm hoping I can even add some fun references to some more well known "adventuring parties". Though I may need to be vague is cases of copyright and such.

#### Prioritization

I'm not certain how I want to prioritize the different games. I've found my interest in horror wanes the more stable of a situation I'm in. So if I'm stressed,  I find solace in horror. But without that stress the horror is still enjoyable, but less interesting than ther swath of other games I could be working on.

## So why leave Godot?

I have various reasons, but I would boil it down to primarily *Object Oriented Programming*. While I can't blame OOP for everything , one of the major pain points I have hadc in various game projects was in rooted in [Inheritance][cs-inheritance]. Modern day Object Oriented Design (OOD) has so many different solutions to resolve this. One such solution pushed among the Godot community is "Design By Composition". That being, create new objects by compositing different components that are at least mostly self-contained. And that is definitely a solution I employed while working with Godot. But I've been working on games for over a decade now. And almost that entire time has been in OOD contexts. A brief history of the systems I've used to make games in the past:

- MIT's Scratch
- Raw Java
- LWJGL (Java)
- LibGDX (Java)
- Unity (C#)
- Godot (C#)
- Godot (GDscript)
- Godot (Rust)
- Bevy (Rust)

While the journey has not been entirely linear, this journey has been heavily in the trenches of Object Oriented Programming. And in many ways I was starting to feel like I was just going through the motions to make some features. I craved some novelty, to return to the original reason I had started learning to make games in the first place.

[cs-inheritance]: https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)

## Where did I start?

I started learning to write code in seventh grade (roughly age 12 for non-Americans). I was going to a private school that had such a weird mix of pivilige and non-privilige. Like it was still a private school with funding and such, but I was the "poor kid" in that group for where I lived, dressed, and such. The other side that was strange about the school, is there was no system for advanced learning. A trait I seemingly have always possessed is being a fast learner. My greatest strength will always be my ability to learn. And in the classes I was taking, I was exceptionally bored. Another fun fact about that school is that because of how America/Minnesota handled education (at the time), none of the teachers were actually required to have a teaching license or even really any experience teaching. I had a Math teacher I would try to ask questions of and I'd just get a blank stare. I remember asking "Hey do we ever get to use *modulus* in this year?" and my teacher didn't even know what that was. Which I guess modulus is a Discrete Math concept, not necessary for teaching trigonometry, but it would have been nice.

So I was exceptionally bored, I rarely had homework because it was so dumbed down. So I dove headfirst into what was immediately available: ~~becoming a better person~~ **videogames**. I was priviliged enough to basically always have a computer. I never really did console gaming besides Gameboy and DS. Of course Minecraft had just come out and I was obsessed. It was full of wonder and mystery, crying myself to sleep because someone online called me a "noob" and I didn't know what it meant, and vast creativity. It didn't take long for me to find mods and started wanted to make my own.

I got into programming, crucially, because I lacked the intellectual stimulation that makes me feel complete. I don't just crave new challenges, I need them. What better challenge to tackle creating games using an entirely new design paradigm?

## So why Bevy?

Besides all of the previous reasons to like Bevy that I mentioned earlier, Bevy is much closer to the kind of development that I enjoy. Bevy:

- Provides me with new design challenges to overcome
- Gives me much more breathing room to tinker as I see fit.
- Enables a modular development approach that I much prefer
  - You can even see my attempts to make modularity work in Godot through several of my Squiggles Zone / Sqore based projects such as [Where The Dead Lie][where-the-dead-lie] and [Gruesome Claim][gruesome-claim]

[where-the-dead-lie]: https://github.com/QueenOfSquiggles/WhereTheDeadLie
[gruesome-claim]: https://github.com/QueenOfSquiggles/squiggle-pt

## Why now?

Recently I've been working on applying to some game industry jobs. And a few of them had quite interesting application requirements that really forced me to look past recent history and see my "career" with code in its entirety. Having done that, I realized how prolific I've been over the years. I've privated so many of the games I made because they included my full deadname as well as my ex's name that I worked with back in highschool. But seriously I've been making a ton of games over the years. And my driving light has always been facing a challenge and overcoming it. The human spirit is indominatible and deserves all the spoils.

For me, this has become such an intrinsic element of my personal identity. I am a game [artisan][ref-artisan] before I'm a game developer. And I much prefer that terminology. Ity truely is an art for me. And no doubt I'm not alone in feeling that way.

[ref-artisan]: https://www.merriam-webster.com/dictionary/artisan

## What's the plan?

My plan, for the foreseeable future, is to pull on this thread of Bevy and Rust. Given I can easily create unit tests for different systems without needing to mock all the other modules affected by it, I can make better guarantees on functionality than I could with Godot. Stripping the shackles of OOD frees me to develop more systemic approaches to different functionalities. And I hope will be much more conducive to the types of games I want to make. Of course time will tell. But for now, I gotta say I'm having the most fun making games I've had in a long while. Even if my free time is severely limited recently.
