Given an array of ints, return the index such that the sum of the elements to the right of that index equals the sum of the elements to the left of that index. If there is no such index, return -1. If there is more than one such index, return the left-most index.

For example:

--For Haskell
peak [1,12,3,3,6,3,1] == Just 2
peak [10,20,30,40]  == Nothing 

**Input/Output:**<br>
([1,2,3,5,3,2,1]), 3);<br>
([1,12,3,3,6,3,1]), 2);<br>
([10,20,30,40]), -1);<br>
