# README file for Chatter app

Welcome to our chatting app called Chatter.

To start running the app, follow these orders:

1. Take the folder "foo" from this repositery, and download it to a desired location on your computer.

2. On your terminal, navigate to the folder foo, and write the command "npm start". This should start running the app with port 3000.

3. As the terminal will instruct you, you should go on your browser to "localhost:3000", and reach our login page.

Congrats! You are in our application!

### How to use our app:
From the login page, you can try to type in a username and password but you won't be able to log in since you don't have an account yet (You will get the "Username doesn't exist" message).
Therefor, you should start by clicking the "Don't have an account? Click here to register" to create an account.

Now you are in our registeration page. Go ahead and create an account with your desired username, password, display name and profile picture.

Your username cannot contain spaces, your password must be at least 6 characters, and your password verification must match the password. Otherwise you won't be able to register, and get a matching
error message. Also, you must fill in all of the fields. Trying to register with a username that already exists also won't work (you'll get an error message).

If you entered everything properly and register, you will arrive at our Chatter Chat Screen!

Right now the chat screen is blank because you just created an account. To add (fake) chats, click on the Add Contact button (blue button with a contact logo on it).

Now you can name your contact however you want, and a random picture will be assigned to it. Add as many contacts as you want! Don't worry if you add too much, you can always use our search bar to find 
the chat you are looking for.

Entering a chat will pop a chat box on the right in which you can send messages to your friend. You can write a message in the input field, and press Enter on your keyboard or the green Send button to send the message.
Each contact will have it's own chat with the messages you sent them.

If you are done chatting, you can click the red log out button to return to the login page.

From there you can either log back in to your account with your username and password (But the contacts and the message won't be there anymore, as descrined in this exercise's forum by Hemi), or you can register to another account.

That is pretty much it. Notice that trying to access localhost:3000/chats will redirect you to the login screen, and any refresh to the page will make it lose all the data (registered users).
Therefor, refreshing your chat page will cause it to exit to the login screen.

