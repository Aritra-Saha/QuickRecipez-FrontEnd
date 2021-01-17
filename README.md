# QuickRecipez-FrontEnd
Easy-to-make Recipes at the press of a button!
## General Information
This is the front-end of a native mobile camera app that allows the user to take a picture of foods they want to cook with and returns to the user a list of recipes with information such as a title, description, directions, ingredients and nutritional value.
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
