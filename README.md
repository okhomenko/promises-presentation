Backbone - do it wright

1. Code
- AMD (require.js) (better deps managing, build into different modules)
- unix structure ('type/name')
- CoffeeScript
- Lint your code

2. Templates 
- 'precompile' source
- update, don't rerender (if it makes sense)

3. Views
- track subviews
- use fetch; show preloaders (http://tbranyen.com/post/how-to-indicate-backbone-fetch-progress)
- separate/delegate views ()
- manage views (LayoutManager, Marionette, BabySitter)
- don't let zombies eat your mind

4. Anti patterns
- no side effect on external DOM
- don't add events through global $

5. Components
- Backbone Marionette
- Backbone Forms (+Twitter Bootstrap)
- Backbone LocalStorage

6. Books
- Backbone Fundamentals (https://github.com/addyosmani/backbone-fundamentals)
- Single page apps in depth (http://singlepageappbook.com/)
- Web Development Recipes (http://pragprog.com/book/wbdev/web-development-recipes)
- Essential JavaScript Design Patterns (http://addyosmani.com/blog/essentialjsdesignpatternsupdate1/)