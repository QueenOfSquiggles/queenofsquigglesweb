---

layout: post
title:  "Blog Update"
description: "I may have forgotten that I made this blog"
author: "QueenOfSquiggles"
categories: update

---


# Forgetful me...

I completely forgot that I had made this website at all. Moreover I forgot how to access it so now I'm back into it. 

# Change of pace

Last time I posted to this blog I was dead set on building a Mario Kart clone. I did make a start but I dropped the project because it wasn't very fun. Now I'm working on building a really strong code base that I can use to make a couple horror games. Ideally I'll be expanding the core of it but I'm hoping at some point I can make it act as an extension to Godot itself. I really like the Resident Evil style of gameplay as well as physically simulated environments. So I'm trying to marry those two concepts by making a moving in type game I'm calling "The Move-In Friend". 

# Diversify

I am trying to branch out to help me gather a larger following. I want people to play my games and I want developers to find useful resources among what I create because of that I have a few new plans.

## Squiggles 3D Game Base
This is the core code base that I am developing out to make horror games, although it is not exclusively developed as such. 

### Modules

I am approaching this project with the idea of reusability. In the past I always made Jam games so I got used to making everything from scratch, but now I really want to start making bigger games and building a big base of resuable code is essential. I found that the modules approach helps me to keep my code clean by reducing dependencies as well as helping me to make more clear goals for development.

### Project Planning

I started using Trello to plan out my projects. I use a partial Agile/Kanban approach where I have certain milestones/epics that have several sub-goals. Each milestone has one or two central focuses and is complete when all of the sub-goals are completed. I recently completed the "Menus and Accessibility" milestone for the project where I integrated my [Subtitles Addon for Godot 3.X](https://github.com/QueenOfSquiggles/godot-dynamic-subtitles) into my project as well as sprucing up my user interface for menus. 

## Another benefit to Milestones/Epics - YouTube

I want to start making a YouTube development log series for my project(s). One crucial element to this is knowning when to make a video because there's always more to do. I decided that each milestone should also serve as a worthwhile video and I can then alternate between heavy development and making videos. An added bonus to this is a video is much more easily consumed and shared than my boring code repository. I want to make my devlogs useful for developers but also interesting for non-developers. Ideally they will be informative as well, but I may need to level up my video skills to get that far.

## Giving back to the community

I have loved being a part of the game development community. It always seems like such a vibrant and welcoming place. Moreover, I have had bountiful resources, tools, and educational materials that I accessed completely for free that helped to get me to where I am today. Now that I am able to make larger games I also want to give back in some way. I'm not the best teacher but I know I can make tools and resources that are useful. For example, my Subtitles Addon that I mentioned earlier. It is available to anyone who wants it.

I am also developing some additional resources that developers could find useful. I made a few small animations for Godot to replace the default engine attribution. The animation is more expressive and has sound effects. I also made a horror variant since I plan on making horror games as well. I'll likely make a post that shares these specific resources for anyone who wants them.

### Learning Resources...eventually...

*SOMEDAY* I hope that I can make some learning resources. Because I am currently developing my code base in a module format, it seems reasonable that I could make a video explanation for each of the modules to explain how they work and what uses they have. Ideally, I want the explanations to be system-agnostic so the 'tutorials' can be useful beyond just GdScript Godot development. 

# Potential Scripting changes

My computer cannot handle the Godot 4 alphas. I suspect because it doesn't have proper Vulkan support. Because of this I'll be sticking to the 3.X series of Godot. However I've been considering changing up my programming language in order to gain some more performance from the engine. For my smaller games I've never needed to worry about it, but now I'm considering switching over to C# to get better performance while also keeping within what I know. 
Another reasoning for switching to C# is that there are a lot of quality of life features to the language that aren't there yet in GDscript and I don't quite know what can or will be backported to the 3.X series. I really prefer typed languages and simple null checks, both of which C# wins over GDScript.

Obviously, this would mean that I need to redo a LOT of my project thus far. Hopefully the pains of switching over would be worth it. Especially because I believe I can have C# compile each module independently as long as they don't have external dependencies or dependents. Theoretically allowing me to speed up development.

<br>
<br>

last updated April 11th, 2022