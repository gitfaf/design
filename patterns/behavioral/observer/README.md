# Observer pattern

Features:

1. This pattern falls under behavioral patterns.
2. This pattern is bedrock of MVC architecture.
3. Events are used in pub/sub system to implement observer pattern.
4. This pattern can create memory leaks as subscriber or publisher simply vanishes, leaving others in memory.


### Wikipedia:

> The observer pattern is a software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods. -- https://en.wikipedia.org/wiki/Observer_pattern


### pseudo code

```
  class publisher {
    list subscribers;

    subscribe (subscriber) -> add to subscribers
    unsubscribe (subscriber) -> remove from subscribers

    onAction -> iterate subscribers and notify() each.
  }

  class subscriber {
    publisher;

    startListening -> publisher.subscribe(me);
    stopListening -> publisher.unsubscribe(me);
  }

```


### References

1. https://en.wikipedia.org/wiki/Observer_pattern
