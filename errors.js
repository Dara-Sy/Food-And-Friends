// /Users/socialimpact1/wdi/unit02/projects/project2/controllers/view-controller.js:67
// viewCreateCafe(req, res) {
// ^^^^^^^^^^^^^^

// SyntaxError: Unexpected identifier
//     at new Script (vm.js:51:7)
//     at createScript (vm.js:136:10)
//     at Object.runInThisContext (vm.js:197:10)


// /Users/socialimpact1/wdi/unit02/projects/project2/controllers/view-controller.js:63
//     res.locals.cafes: cafes});
//        ^


// /Users/socialimpact1/wdi/unit02/projects/project2/routes/cafesRoutes.js:38
//   .use(cafesController.getAllCafesList, viewController.showCreateCafeForm)
//    ^


// /Users/socialimpact1/wdi/unit02/projects/project2/main.js:12
// app.set('views', path.join(__dirname, 'views'));
//                  ^

// ReferenceError: path is not defined
//     at Object.<anonymous> (/Users/socialimpact1/wdi/unit02/projects/project2/main.js:12:18)


// Error: Failed to lookup view "home/:id" in views directory "/Users/socialimpact1/wdi/unit02/projects/project2/views"
//     at Function.render (/Users/socialimpact1/wdi/unit02/projects/project2/node_modules/express/lib/application.js:580:17)
//     at ServerResponse.render (/Users/socialimpact1/wdi/unit02/projects/project2/node_modules/express/lib/response.js:1008:7)
//     at sendOneCafe (/Users/socialimpact1/wdi/unit02/projects/project2/controllers/view-controller.js:61:7)
//     at Layer.handle [as handle_request] (/Users/socialimpact1/wdi/unit02/projects/project2/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/socialimpact1/wdi/unit02/projects/project2/node_modules/express/lib/router/route.js:137:13)
//     at cafeDb.getOneCafe.then.data (/Users/socialimpact1/wdi/unit02/projects/project2/controllers/cafes-controller.js:99:7)
//     at <anonymous>
//     at process._tickCallback (internal/process/next_tick.js:182:7)


// ReferenceError: cafe is not defined
//     at sendOneCafe (/Users/socialimpact1/wdi/unit02/projects/project2/controllers/view-controller.js:61:22)
//     at Layer.handle [as handle_request] (/Users/socialimpact1/wdi/unit02/projects/project2/node_modules/express/lib/router/layer.js:95:5)
//     at next (/Users/socialimpact1/wdi/unit02/projects/project2/node_modules/express/lib/router/route.js:137:13)
//     at cafeDb.getOneCafe.then.data (/Users/socialimpact1/wdi/unit02/projects/project2/controllers/cafes-controller.js:99:7)
//     at <anonymous>
//     at process._tickCallback (internal/process/next_tick.js:182:7)


// events.js:165
//       throw er; // Unhandled 'error' event
//       ^

// Error: listen EADDRINUSE :::3000


// GET /allcafes2/edit 500 4.007 ms - 73

// ReferenceError: updateCafe is not defined


// TypeError: /Users/socialimpact1/wdi/unit02/projects/project2/views/home/edit.ejs:10
//     8|
//     9| <!-- method said POST? -->
//  >> 10| <form method="POST" action="/allcafes<%= cafe.id %>?_method=PUT">
//     11|
//     12|   <input name="id" type="hidden" value="<%= cafe.id %>">
//     13|

// Cannot read property 'id' of undefined



// Promise { <pending> }
// error here
// POST /allcafes30?_method=Delete 500 18.587 ms - 61

// {
// "status": "error",
// "message": "Property 'name' doesn't exist."
// }


 // /onecafe/30


// GET /30/ 200 5.013 ms - 438
// Promise { <pending> }
// error here
// POST /allcafes30?_method=Delete 500 16.904 ms - 61
// GET /30/ 200 6.916 ms - 437
// Promise { <pending> }
// error here
// POST /onecafe30?_method=Delete 500 0.990 ms - 61
// GET /30/ 200 6.317 ms - 438
// POST /onecafe/30?_method=Delete 404 1.278 ms - 150
// GET /30/ 200 7.501 ms - 430
// Promise { <pending> }
// error here
// POST /30?_method=Delete 500 0.668 ms - 61
// GET /30/ 200 6.328 ms - 443
// POST /onecafe/30?_method=Delete 404 0.878 ms - 150





