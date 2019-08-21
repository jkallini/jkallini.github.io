---
layout:     post
title:      Maze Adventures
date:       2018-07-20 18:48:27
author:     Julie Kallini
summary:    My first Unity game!
categories: projects
thumbnail:  gamepad
tags:
 - projects
 - unity
 - SPE
---

## Preface

***Maze Adventures*** is a **Unity3D** game that I developed at Princeton Summer Programming
Experiences during the summer of 2018. I was one of 16 first-year Computer Science
students chosen to work on an independent project with Princeton faculty.

In preparation for creating the final game shown below, I researched and studied various maze
generating and solving algorithms, and implemented simulations of these algorithms in Unity.

View the project on [Github](https://github.com/jkallini/MazeAdventures), or play the game
[here](https://juliekallini.com/MazeAdventures/).

## About the Game
<img src="../../../../../images/title.png" width="100%" style="border-radius:20px;"
alt="Maze Adventures">

In **Maze Adventures**, you play as a lonely pill trying to escape a dangerous maze.
Before the game starts, you are greeted by a menu screen that allows you to input the size of the
maze you would like to play in. Your maze can be as small as a tiny 5 by 5 grid, or as large as a 30 by
30 labyrinth!

Each time you start a new game, Maze Adventures uses a [recursive division maze generation algorthim](http://weblog.jamisbuck.org/2011/1/12/maze-generation-recursive-division-algorithm) to
create a **unique, random maze at runtime**. So no memorizing the paths here! The number of unique levels
is infinite, which means endless fun for the player.

This game isn't *just* about getting through the maze, though. The evil Glowies have locked your
Pill friends in rooms, and hid the keys all over the maze. You have to find the keys and unlock all of
the rooms before you can leave the maze!

The Glowies, the keys, and the rooms are distributed randomly across the maze using [Poisson disk sampling](http://www.cemyuksel.com/cyCodeBase/soln/poisson_disk_sampling.html). This ensures that they will be in new
positions every time you start a new level, but the Glowies won't be able to gang up on you in one section of
the maze.

## Completed Features

### Menu and Maze Generation
- Main menu screen allows the player to input the desired dimensions of the maze.
- During a level, the player can pause at any time, and return to the main menu.
- Random mazes generated at runtime.
  - Recursive division maze generation algorithm coded in Unity from scratch.
- Poisson disk distribution used to scatter rooms, enemies, health, and keys across the maze with uniform randomness.
  - Exactly same number of keys and rooms are generated.
  - Objects are placed randomly but cannot spawn in the same locations.

### Characters
- Player can rotate in the direction of the cursor and fire projectiles on click.
- Bomb enemies created. 
  - Can follow the player's transform and inflict damage upon contact.
  - Can drop bombs that damage the player and destroy walls within their blast radius.
- Fire enemies created.
  - Can shoot projectiles in the direction of the player's transform that inflict damage.
  
### Assets, Animations, and UI
- All 3D models and animations created from scratch in Unity.
- Player and enemies flash while taking damage.
- Player's health bar decreases when the player is damaged and increases after the player finds health.
- All enemies have individual health bars.
- Fire enemies animated with spinning projectiles.
- Collectible items rotate.
- Player and enemies explode upon death.

## Directions

Use `WASD` to move around. Your cursor indicates the direction you want to shoot. Left-click to shoot a
pellet. If you have a key, you can use it to unlock a room. Stand next to the door of the room and press
`return` to unlock the door. Once all rooms have been opened, navigate to the exit in the top-right corner
of the maze.

<img src='../../../../../images/walkthrough1.gif' title='Video Walkthrough' width=''
style='border-radius:20px;' alt='Video Walkthrough'/>

GIF created with [LiceCap](http://www.cockos.com/licecap/).

### Player
This is you!

<img src="../../../../../images/player.png" width="80"
alt="Player">

### Key
Collect these keys to unlock rooms!

<img src="../../../../../images/key.png" width="80"
alt="Key">


### Room
These are rooms where your fellow Pills are trapped!

<img src="../../../../../images/room.png" width="230"
alt="Room">

### Bomb Glowy
Bomb Glowies can follow you around. Don't let them touch you!
They can also drop bombs when they get close to you!

<img src="../../../../../images/red_enemy.png" width="80"
alt="Bomb Glowy">

### Bomb
Bombs are dropped by Bomb Glowies. Bombs can break walls, which makes it easier to get
through the maze. But don't be too close to the bombs when they explode!

<img src="../../../../../images/bomb.png" width="70"
alt="Bomb">

### Fire Glowy
Fire Glowies are stationary, but they can shoot fire balls at you! They also take
twice as much damage as Bomb Glowies.

<img src="../../../../../images/fire_enemy.png" width="150"
alt="Fire Glowy">

### Heart
Hearts replenish some of your health. You can find them by searching the maze,
or by defeating Glowies.

<img src="../../../../../images/heart.png" width="70"
alt="Heart">

## Credits

- [Poisson-disc sampling in Unity](http://gregschlom.com/devlog/2014/06/29/Poisson-disc-sampling-Unity.html)