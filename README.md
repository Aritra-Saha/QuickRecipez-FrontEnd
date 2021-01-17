# QuickRecipez-FrontEnd
Easy-to-make Recipes at the press of a button!
## General Information
I created this game using the Pygame module on Python. I was inspired by the games I played as a child and I wanted to recreate the fun of playing those games using my immediate passion of programming. This game uses Object Oriented Programming and was my first ever dive into the world of game design. 
## Setup
Download python and pygame using the following links.

https://www.python.org/downloads/

https://www.pygame.org/download.shtml
## Code Examples
```
class projectile():
    def __init__ (self, x, y, radius, color, facing):
        self.x = x
        self.y = y
        self.radius = radius
        self.color = color
        self.facing = facing
        self.vel = 8 * facing

    def draw(self, win):
        pygame.draw.circle(win, self.color, (self.x, self.y), self.radius)
```
## Status
This project is still in progress.
## Contact Information
You can contact me at aritrasaha01@gmail.com
