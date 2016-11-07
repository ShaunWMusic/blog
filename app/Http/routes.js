'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');
const Database = use('Database');

Route.get('/', function * (request, response) {
  //Create a blog post with a set of data
  yield Database.table('posts').insert({
    title: 'My first blog post',
    author: 'Ryan',

    slug: 'my-first-blog-post',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',


    post_date: new Date(),
    created_at: new Date(),
    updated_at: new Date(),
  });

  //Gets all rows from the "posts"
  const data = yield Database.table('posts').select('*');

  response.send(data);
});
