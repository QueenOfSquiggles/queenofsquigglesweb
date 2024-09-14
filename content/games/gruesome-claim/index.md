---
title: "Gruesome Claim"
date: 2024-01-15
updated: 2024-09-14
taxonomies:
  tags:
    - game
    - horror

extra:
  image: entrance.png
  gallery:
    - entrance.png
    - back_hallway.png
    - lamp_desk.png
    - clock.png
    - couch.png
    - camera.png
    - storage.png
  links:
    - url: https://queenofsquiggles.itch.io/gruesome-claim
      label: Itch IO Page
    - url: https://github.com/QueenOfSquiggles/squiggle-pt
      label: Github Source
---
{{  project_links() }}

## Gruesome Claim

This game was my foray into photo-realism with Godot 4. The game itself relied heavily on third party, high quality assets. The focus on my work on it was to create interesting mechanics.

The premise of the game is that you play as an insurance investigator checking in on a client who seems to have suddenly stopped paying.

## Interesting Pathing Constraints

Teardrop (That funky clown doll), has three distinct stages of presence, with increasing threat to the player.

### Ominous Presence

Teardrop takes up two different, static poses during this phase. As the player aclimates themselves with the game space, they can be unnerved by Teardrop, but are not in any real danger.

The first setpiece is her in a rocking chair and the second is her ~~masturbating~~ lounging on a couch in a different room.

### Obstruction

After the player has found a few of the insurance claim items, Teardrop converts to a stage where she will find a suitable location to teleport to. She will only teleport if the player is not able to see:

- Her current location
- Her target location

This helps with the premise that she is actually moving to these locations off-screen. While standing she plays a simple animation and watches the player. If the player gets too close she will "jumpscare" them (which is a game over). As long as the player pays attention to where they are going, they are in very little danger during this phase.

### Weeping Angel

Literally in the code of the game I called the sensor for her being on-screen the "Weeping Angel Sensor". Given that, you can guess how she operates. She will crawl along the floor and stop moving once the player looks at her. Though that isn't entirely accurate. She is offset by a small timer at both ends, meaning you cn look away very quickly without triggering her motion, and once looking at her, she will continue to move for a short time. This solves two problems:

- The player needs to look where they are going without entirely losing track of Teardrop
- The player might *never notice* what is happening without her moving for a short second after being seen.

#### Interesting Navigation

> I honestly had forgotten to fill this out, but I was able to see what I did when I made an update to the game on September 14th, 2024.

There are two different methods of navigation that Teardrop uses. The most efficient way to find a path from point A to point B is using a Navigation Mesh. But Teardrop also makes use of a more dynamic raycast based sensor system that allows her to avoid obstacles (mainly preventing her from hugging the wall which makes corners unfair for the player).
A combination of the guidance from a traditional pathing system and a dynamic sensor based steering system allows her to semi-organically navigate the apartment. Unfortunately this interesting system isn't really shown off terribly well since she doesn't move on screen much, the scene is very static, and there's just the one of her.

I think in the future I definitely want to revisit this approach for monster AI agents. Perhaps when I finally get around to fleshing out Watery Wails???

## Gallery

{{ gallery() }}
