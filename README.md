# React Template with Typescript

Inspired with article [Opinionated React: Component File Structure](https://dev.to/farazamiruddin/an-opinionated-guide-to-react-folder-structure-file-naming-1l7i) written by Faraz Ahmad

## Folder Structure

| Folder      | Description                                                                                                                                                                                                                           |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| /assets     | images, logos, etc.                                                                                                                                                                                                                   |
| /components | components that are shared between multiple container.                                                                                                                                                                                |
| /contexts   | I keep all of the context components in a separate folder, to not confuse them with plain old react components. A common context I like to implement is UserAuthContext.tsx.                                                          |
| /lib        | When using a 3rd party library, let's say like Firebase for example, I like to put all of the initialization in a folder called lib. I'll then export the instance of that initialized library.                                       |
| /container  | Container are also react components, but they represent a page or screen of an app. These map 1:1 with a route file.                                                                                                                  |
| /services   | All of my api methods are put in a folder called services. I like to do this so that I don't put the business logic of an API call directly into a component, and so that any component can easily reference a service that it needs. |
| /routes     | This contains all the routes of my application. I've been using react-router for a while, and I like to have one file that contains all my routes so that I can see it all at a glance.                                               |

## File Naming

### PascalCase

- Components
- Container
- Context
- ETC... (React Components)

### kebab-case

- Services
- Libraries
- Utilities
- ETC... (Not React Components)

## Component Structure

### Queries First

The first thing I want to see is what external data is this component using, if any. That’s why I put my GraphQL calls at the top of the file. When I first open the file, I can see that this component is fetching a list of movies, and I know what the shape of that response will be. I put my GraphQL queries in the same file as the component consuming them, because I don’t want to have to jump between files to know what’s being fetched.

### Type Definitions

I follow the data dependencies with the type definitions for the component. This way I know what props this component needs for me to pass in.

### The Actual Component

This is when I place the code for my component. After I know what data it is fetching, and what props it needs, I want to know what JSX is actually being rendered. I use a named export and export the component inline so that it is easier to change the name of the component if needed.

### Sub Components

I mentioned that I like to have any sub-components related to the current component in the same file. I place these after the main component, since it is not required for a user to know about these components at all.

## State Management

### Start with useState

I start by building my components with the useState hook. It’s quick and gets the job done. If we need another piece of state, simply add another useState hook.

### useReducer when you have a lot of state

My limit for related pieces of state is 2. If I have 3 pieces of state that are related to each other, I opt for useReducer.

## State Colocation

State location helps reduce the complexity of your application. In some cases, it can actually improve performance.

Simply put, it means to put your state as close to where it's being used. You should avoid global state unless it's absolutely necessary.

I would always start with state colocation and then lift state when needed. Keep things simple!

## Use Context for Shared State

There are some instances in your application state is needed by multiple components. I will use context if this shared state requires a lot of prop drilling. In the past, Redux was a popular solution to avoid prop drilling. However, I don't believe Redux is needed anymore. React's context api works great for this.

> We are creating two separate contexts because not all components will need access to both state and dispatch. This way, a component can use only the context it requires. The added benefit is that if a component is only using dispatch, it will not re-render on state change because it is not using that context.

### Use Cases

- You should use React context for global state. That being said, there aren't that many pieces of global state. Some good examples of global state are the current user, the current language setting, or a map of feature flags.
- You don't need to use context only for global state. Context can be applied to a specific sub-tree of your application.
- It's common to have multiple sub-tree specific contexts.

## Use Enums instead of Booleans

When I started writing React, I would often use an isLoading boolean to indicate that I was loading some data asynchronously.

This is fine for a simple example, but as I learned it does not scale well.

An enum (short for enumeration), allows us to define a set of named constants. These constants can be used to create a set of distinct cases.

> Tagged unions in TypeScript do the same thing, but also allow you to attach a response or error message etc. I love them in combination with switch statements and exhaustive function returns, but a lot of developers react negatively to exhaustive switch statements that handle every possible case. They see them as verbose. I see them as the compiler detecting not only existing logic bugs, but preventing future issues that can arise. Algebraic data types are truly amazing if you embrace them.

## QnA

- What do you do with one-off components? For example, a Contacts.jsx page has a ContactList component?

  > I will split up my page into sub-components, all within the same file as the page.

- Best indicators for when something should be handled as application-level state vs. component-level state?

  > There are very few things that I consider global. Most state should be colocated where it's being used. Here are a couple things that I consider global:
  >
  > - The current user
  > - Language settings
  > - A Theme
  >
  > Outside of these three, I'm not sure anything else needs to be global. 👍
