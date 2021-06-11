# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
Context API solves the problem of passing down state . It prevent prop drilling.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Store holds the initial state and that is the real source of truth. The store also hold reducers and reducers do a specific thing to the state that is triggered by an action.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
Redux Thunk is a middleware that allows you to pass in functions to blank instead of object so we can run asynchronous JavaScript.

4. What is your favorite state management system you've learned and this sprint? Please explain why!
My favorite state management system that we've learned so far has been Complex API because it is the simplest way to pass information.