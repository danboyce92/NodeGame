# Find your hat game

## Work notes

_Confusing logic behind the x and y coordinates_
I want to change the conventional x and y coordinates to suit the chosen logic in the game.

Instead of x incrementing being equal to a step right,
I want x to represent the list of arrays

Instead of y incrementing being equal to a step up,
Y should represent the individual elements in the sub arrays.

So X will start at 0 and represent the first row.
Changing it to 1 will lower to the 2nd row and so on.

Y will represent the element in a given row.
So [0, 0] = First row, first element.
[0, 1] = First row, 2nd element.
[1, 0] = 2nd row, 1st element.

_Next issue_
Now I have the map updating. But the playerPosition seems to reset to [0, 0] after every turm. Find a way to keep the updated position.

## Base game complete

The game functions properly now.
Things you could add...

- Random map generation is a big one.
- Random player spawn is another one.
- A continuous loop, score keeping, map gets larger, hole percentage increases.
