Presenters handle mapping of data from our redux store 
to the format needed by or react components. 

They also (io our case) reach down to get 
Actions from _middle/Controllers to wire up.

Presenter Iindependence of View (native|web):
----------------------------------------------------

Note that our Presenter is NOT dependent on
the _outer/views/mobile/ShopScreen component and any
component uing ame props could be passed in.

For example, it could equally be provided a React/web/component.

This keeps code dependencies directed inward,
aligned for Clean Architecture.


Other Thoughts:
------------------------------
How can we make Presenter NOT be React apps, 
but perhaps some kind of wrapper?

Then we can externalise from outer/views/mobile to _middle

Or perhaps we can pass redux in and get our ready state and actions out?

Perhaps we should also have a Controller Wiring service that gets 
and wires the actions for components.