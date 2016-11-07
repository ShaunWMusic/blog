'use strict'

const Post = use('App/Model/Post');

class PostController {
    //List of all results
    //GET - /
  * index(request, response) {
    const posts = yield Post.all();

    yield response.sendView('posts.index', {
      posts: posts.toJSON()
    });
    //
}

  //Show the user a form to create a new Post
  //GET - /create
  * create(request, response) {
    yield response.sendView('posts.create');
    //
  }

  //Save a new Post to the database
  //POST
  * store(request, response) {
    //
  }

  * show(request, response) {
    //
  }

  * edit(request, response) {
    //
  }

  * update(request, response) {
    //
  }

  * destroy(request, response) {
    //
  }

}

module.exports = PostController
