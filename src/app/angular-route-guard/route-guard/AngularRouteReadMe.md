#Angular Route
**What is Route Guard?**
*Angular's route guardds are intefaces which can tell the router if the user has permission to access the route or not
They make this decision by looking for a true or false return value from a class which implements the given guard interface*

**There are 5 types of Guards**
1.**CanActivate**: Implements a CanActivate function that checks whether the current user has permission to acitvate the reuested route.
2.**CanAcitvateChild**: The CanActivateChild guard is very similar to CanActivateGuard. We apply this guard to the parent route. The Angular invokes this guard whenever the user tris to navigate to any of its child route.
3.**CanDeactivate**:CanDeactivate is an interface that is implemented by a class to create a guard which decides if a route can be deactivated.
4.**CanLoad**: CanLoad is a route guard to decide if a module can be loaded configured with loadChildren property.loadChildren property is a reference to lazy loaded child routes.While Angular try to access a module protected by CanLoad either by preloading or lazy loading, then canLoad method of our service will run.
5**Resolve**:  The interface defines a resolve() method that is invoked when the navigation starts. The router waits for the data to be resolved before the route is finally activated.