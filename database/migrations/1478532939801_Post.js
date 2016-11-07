'use strict'

const Schema = use('Schema')

class PostTableSchema extends Schema {

//Describes the changes we want to make
  up () {
    //Make a new table called "post"
    this.create('posts', (table) => {
      //Special method that creates an "id" field that
      //adds 1 every time a new record is saved
      table.increments();

      //Theses columns accept strings up to 255 characters
      table.string('title');
      table.string('slug');
      table.string('author');

      //This column will acept a TON of text
      table.text('content');

      //This column will store when we want the post to show up
      table.date('post_date');

      //Special method that adds coumns for "created_at" and "updated_at"
      //these are used by Adonis to save when the record is modified
      table.timestamps();
    });
  }

  down () {
    //remove the "posts" table
    this.drop('posts');
  }

}

module.exports = PostTableSchema
