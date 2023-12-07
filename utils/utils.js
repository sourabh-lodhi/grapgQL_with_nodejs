const { buildSchema } = require("graphql");
exports.schema = buildSchema(`

    type Event{
      _id:ID
      title:String
      description:String
      price:Float
      fullName: String
      email: String
      password: String
    }
    input inputEvent{
      id:String
      title:String
      description:String
      price:Float
      fullName: String
      email: String
      password: String
  }
  type RootQuery{
   events:[Event!]!
  } 
  type RootMutation{
  createEvent(inputEvent:inputEvent):Event
  updateEvent(inputEvent:inputEvent):Event
  getEventById(inputEvent:inputEvent):Event
  deleteEvent(inputEvent:inputEvent):Event
  createProfile(inputEvent:inputEvent):Event
  }
  schema {
    query: RootQuery
    mutation: RootMutation
  }
`);
