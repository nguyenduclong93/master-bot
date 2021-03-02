module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        client: "mongo",
        uri:
          "mongodb+srv://anhdt:123qwe@tools.inrrs.mongodb.net/tools?retryWrites=true&w=majority",
      },
      options: {
        ssl: true,
      },
    },
  },
});
