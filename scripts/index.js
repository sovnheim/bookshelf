import { Book, getBook } from './bookgen.js';

Hooks.on('init', function () {
  console.log(
    "Sovnheim's Bookshelf | This code runs once the Foundry VTT software begins it's initialization workflow."
  );
});

Hooks.on('ready', function () {});

globalThis.Book = Book;

function sayHi() {
  const chatData = {
    user: game.user._id,
    content: getBook(),
    whisper: game.users.entities.filter((u) => u.isGM).map((u) => u._id),
  };
  return chatData;
}

Hooks.on('renderJournalDirectory', (_app, html) => {
  if (game.user.isGM) {
    const generateButton = jQuery(
      `<button class="book-generator-btn"> <i class="fa fa-book"></i> Generate Book</button>`
    );
    html.find('.directory-footer').append(generateButton);

    generateButton.on('click', (event) => {
      ChatMessage.create(sayHi(), {});
    });
  }
});
