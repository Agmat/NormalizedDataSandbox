# Random todos

### What is this ?
It's a basic list of todos with randomized data.

### Why whould I do that ?
I wanted test some of [redux-toolkit](https://github.com/reduxjs/redux-toolkit) features but was too lazy to write the part were you write what you want.

I used [Fake Rest](https://fake.rest/) to create "fake" endpoints that return randomized data. It looks like this: 
````json
{
  "data": {
    "[10..15]": {
      "id": "{{random.uuid()}}",
      "task": "{{random.words(15)}}",
      "done": "{{random.boolean()}}"
    }
  } 
}
````
### What did I test
Right now I played with:
- [createEntityAdapter](https://redux-toolkit.js.org/api/createEntityAdapter)
- [redux-persist](https://github.com/rt2zz/redux-persist)
