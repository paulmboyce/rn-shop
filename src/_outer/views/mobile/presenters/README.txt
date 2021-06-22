Presenters handle mapping of data from our redux store 
to the format needed by or react components. 

They also (io our case) reach down to get 
Actions from _middle/Controllers to wire up.

How can we make Presenter NOT be React apps, 
but perhaps some kind of wrapper?

Then we can externalise from outer/views/mobile to _middle

Or perhaps we can pass redux in and get our ready state and actions out?

In fact we shodl also have a Controller Wiring service that gets 
and wires the actions for components.