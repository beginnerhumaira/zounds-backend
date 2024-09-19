module.exports = {
  mongodb: {
    url: "mongodb://localhost 127.0.0.1:27017",
    databaseName: "zounds_db",

    options: {
     
    }
  },

  migrationsDir: "migrations",
  changelogCollectionName: "changelog", // collection for migration logs
};
