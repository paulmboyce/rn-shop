This is a layer that maps data (returned after 
the COntroller Action call) from Redux) in a 
format ready for the View 
(eg dates formatted as string values, 
button names, 
boolean flags/ enabled etc).

Currently this behaviour is located in the React project -- see ShopScreenPresenter.js
The reason is that React is tightly bound to Redux (via react-redux).
This is fine, as it provides auto-render on state change, so we don't have to worry about that.

What we could do though is push the Presentation down to the _middle layer (where it belongs).
This fits the architecture, though our React Views have direct call to the Redux State.

Perhaps we can push the Presenter down to Middleware???