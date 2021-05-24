const book = new Book();

const chatData = {
  user: game.user._id,
  content: book.content,
  whisper: game.users.entities.filter((u) => u.isGM).map((u) => u._id),
};

ChatMessage.create(chatData, {});
