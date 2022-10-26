# A5: Parametric Generator

## Your name
Lauren Hyoseo Yoon

## Project 5 Link
https://laurenhyoseoyoon.github.io/Generative-Coding-Project5/ 


## **Generator 1** what does this generate?
- FLOCKING OF EMOJIS: Simulation of Flocking Emojis based on boids style.  

## What are the most important and interesting qualities of this kind of thing?
- The particles/landmarks in this generator are all interconnected in which their behavior affect one another. 

## List your 5+ sliders. Describe what each one controls, and why that is relevant to this
- Alignment: Steer towards the average heading of local flockmates
- Cohesion: Steer to move toward the average position of local flockmates
- Separation: Steer to avoid crowding local flockmates
- Number of Creatures: How many creatures do this generator wants to simulate 
- Shapes: How many unique creatures do this creator wants to function

## List your 5+ landmarks. How are they different from each other?
- Emojis saved in the javascript file all function as unique landmarks, and they are randomly selected based on the number of creatures that the user define using the slider. 

## For a generator of this type of thing, what kinds of things *can't* it generate?
- Although boids style of generator can effectively simulate how particles affect one another, it cannot uniquely alter each landmark's behavior. It functions as a composite/interconnected algorithm. 

## What was hard or easy about making this generator? How did your plans change?
- Coding the adhesion, cohesion, separation to create an interconnected space of landmarks allowed me to more thoroughly understand the algorithms behind the boids system. 
- One idea to develop this code is by adding user-defined component in the space itself (clicking the landmark/object) which these objects serve as the center for boids system. 

## **Generator 2** what does this generate?
- STRANGE ATTRACTORS

## What are the most important and interesting qualities of this kind of thing?
- While I was creating an attractor system, I found there are other interesting attractors other than Lorenz attractor space. Using this base code, I can extrapolate this attractor system to simulate other systems. Furthermore, in the "Attractor" option of the Control Panel, I aim to add more attractor systems so that users can simulate and experience different spaces. 

## List your 5+ sliders. Describe what each one controls, and why that is relevant to this
- Speed: Speed of the particles' movement in the Lorenz attractor space. 
- Particles (Two options): Whether particles should be simulated along with the attractor. 
- Compare (Two options): Comparison of the evolving behavior of the attractor system itself versus the particles residing in this system. 
- Randomize: Randomization of Lorenz attractor system and the location of particles. 
- Preset: Returning to the default attractor system value 
- Mouse itself: Zoom in, Zoom out of space 

## List your 5+ landmarks. How are they different from each other?
- Blue curve of the Lorenz attractor space, Red curve of the Lorenz attractor space, and Five Particles residing in this system.
- Blue and Red curve generate the Lorenz attractor space itself (similar to the Black Hole of space) and the five particles are the objects that reside in this system which show the behavior and force of the system more distinctly. 

## For a generator of this type of thing, what kinds of things *can't* it generate?
- This generator cannot uniquely modify each landmark which the base attractor space generated by blue and red curve serves as the basis for how the particles would behave in this system. 

## What was hard or easy about making this generator? How did your plans change?
- Understanding the mathematical background and simulating using computational algorithms were interesting. 
- My next aim is to allow users to experience more dynamical attractor spaces by adding more systems as a scroll bar in the "Attractor" option of the Control panel. 

## **Generator 3** what does this generate?
- FLOCKING OF POLAR CURVES: Simulation of Random Shapes (generated using polar curves) and the simulation is based on boids style.  

## What are the most important and interesting qualities of this kind of thing?
- The particles/landmarks in this generator are all interconnected in which their behavior affect one another. 

## List your 5+ sliders. Describe what each one controls, and why that is relevant to this
- Alignment: Steer towards the average heading of local flockmates
- Cohesion: Steer to move toward the average position of local flockmates
- Separation: Steer to avoid crowding local flockmates
- Number of Creatures: How many creatures do this generator wants to simulate 
- Shapes: How many unique creatures do this creator wants to function

## List your 5+ landmarks. How are they different from each other?
- Polar curve functions that generate random shapes function as unique landmarks, and they are randomly selected based on the number of creatures that the user define using the slider. 

## For a generator of this type of thing, what kinds of things *can't* it generate?
- Although boids style of generator can effectively simulate how particles affect one another, it cannot uniquely alter each landmark's behavior. It functions as a composite/interconnected algorithm. 

## Which generator has a more interesting possibility space?
- Generator #2: STRANGE ATTRACTORS has a more mindblowing possibility space. 

## List any resources (code, images, etc) you've used, and where you got them from
- https://www.red3d.com/cwr/boids/
- https://mathworld.wolfram.com/StrangeAttractor.html
https://en.wikipedia.org/wiki/Lorenz_system 

## List any help you got from classmates or websites, so that you can remember it for later
