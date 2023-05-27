const bcrypt = require("bcryptjs");

const createPasswordHash = async (e) => {
  bcrypt.hash(e, 8);
};

module.exports = createPasswordHash;
