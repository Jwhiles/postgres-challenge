
// const users = [
//   { firstName: 'Matt', lastName: 'Glover', age: 25, type: 'worker' },
//   { firstName: 'Sam', lastName: 'Galson', age: 30, type: 'professor' },
//   { firstName: 'Matt', lastName: 'Sharp', age: 24, type: 'hipster' },
//   { firstName: 'Rich', lastName: 'Warren', age: 22, type: 'boss' },
// ];
const getUsers = require('./get_users.js');
const addUser = require('./create_user.js');

const home = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    getUsers((error, users) => {
      if (error) console.log('oops', error);
      reply.view('users', { users });
    });
  },
};

const add = {
  method: 'POST',
  path: '/add',
  handler(req, reply) {
    addUser((error, data) => {
      if (error) console.log('oops', error);
      reply(data);
    });
  },
};

module.exports = [
  home,
  add,
];
