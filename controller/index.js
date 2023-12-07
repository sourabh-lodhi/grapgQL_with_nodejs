const Graphql = require("../model/events");
const User = require("../model/users");

exports.rootValue = {
  events: async () => {
    const events = await Graphql.find();
    return events;
  },

  createEvent: async (args) => {
    try {
      const { title, description, price } = args.inputEvent;
      const event = await Graphql.create({
        title,
        description,
        price,
      });
      return event;
    } catch (error) {
      return error.message;
    }
  },

  getEventById: async (args) => {
    try {
      const { id } = args.inputEvent;
      const event = await Graphql.findOne({ _id: id });
      return event;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  updateEvent: async (args) => {
    try {
      const { id, title, description, price } = args.inputEvent;
      const updateEvent = await Graphql.findOneAndUpdate(
        { _id: id },
        { $set: { title, description, price } }
      );
      return updateEvent;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  deleteEvent: async (args) => {
    try {
      const { id } = args.inputEvent;
      const deleteEvent = await Graphql.findByIdAndDelete({ _id: id });
      return deleteEvent;
    } catch (error) {
      console.log(error);
      return error;
    }
  },

  createProfile: async (args) => {
    try {
      const { fullName, email, password } = args.inputEvent;
      const profile = await User.create({
        fullName,
        email,
        password,
      });
      return profile;
    } catch (error) {
      return error.message;
    }
  },
};
