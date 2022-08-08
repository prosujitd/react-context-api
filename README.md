# ContextAPI 
Context API is a (kind of) new feature added in version 16.3 of React that allows one to share state across the entire app (or part of it) lightly and with ease. 

The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on. Context is also touted as an easier, lighter approach to state management using Redux.

Context provides a way to pass data through the component tree without having to pass props down manually at every level.

# When to Use Context
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.

If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

# When should you use React context?
React context is great when you are passing data that can be used in any component in your application.

* These types of data include:
=> Theme data (like dark or light mode)
=> User data (the currently authenticated user)
=> Location-specific data (like user language or locale)

Data should be placed on React context that does not need to be updated often.

Why? Because context was not made as an entire state management system. It was made to make consuming data easier.

You can think of React context as the equivalent of global variables for our React components.

# What problems does React context solve?
React context helps us avoid the problem of props drilling.

Props drilling is a term to describe when you pass props down multiple levels to a nested component, through components that don't need it.

# There are four steps to using React context:

1. Create context using the createContext method.
2. Take your created context and wrap the context provider around your component tree.
3. Put any value you like on your context provider using the value prop.
4. Read that value within any component by using the context consumer.

## Let's take a look at a very basic example. In our App, let's pass down our own name using Context and read it in a nested component: User.

import React from 'react';

export const UserContext = React.createContext();

export default function App() {
  return (
    <UserContext.Provider value="Reed">
      <User />
    </UserContext.Provider>
  )
}

function User() {
  return (
    <UserContext.Consumer>
      {value => <h1>{value}</h1>} 
      {/* prints: Reed */}
    </UserContext.Consumer>
  )
}

### Let's break down what we are doing, step-by-step:

1. Above our App component, we are creating context with React.createContext() and putting the result in a variable, UserContext. In almost every case, you will want to export it as we are doing here because your component will be in another file. Note that we can pass an initial value to our value prop when we call React.createContext().

2. In our App component, we are using UserContext. Specifically UserContext.Provider. The created context is an object with two properties: Provider and Consumer, both of which are components. To pass our value down to every component in our App, we wrap our Provider component around it (in this case, User).

3. On UserContext.Provider, we put the value that we want to pass down our entire component tree. We set that equal to the value prop to do so. In this case, it is our name (here, Reed).

4. In User, or wherever we want to consume (or use) what was provided on our context, we use the consumer component: UserContext.Consumer. To use our passed down value, we use what is called the render props pattern. It is just a function that the consumer component gives us as a prop. And in the return of that function, we can return and use value.

# What is the useContext hook?
Looking at the example above, the render props pattern for consuming context may look a bit strange to you.

Another way of consuming context became available in React 16.8 with the arrival of React hooks. We can now consume context with the useContext hook.

Instead of using render props, we can pass the entire context object to React.useContext() to consume context at the top of our component.


# Note:
Getting the value "consumer" is usefull for both class based and functional based components while "useContext" is usefull for functional based components and easy way to get the value without using render props.