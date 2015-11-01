-- CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  text varchar(144), username varchar(25), roomname varchar(25)
);
/* Create other tables and define schemas for them here! */

CREATE TABLE username (
  username varchar(25)
);

CREATE TABLE roomname (
  roomname varchar(25)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
