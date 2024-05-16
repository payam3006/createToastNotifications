const q = console.log;

const colors = [
  "red",
  "green",
  "blue",
  "salmon",
  "cornflowerblue",
  "brown",
  "black",
];

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
];

const notificationArea = document.getElementById("notificationArea");

const notif = () => {
  const newMessage = document.createElement("div");
  newMessage.classList.add("btn");
  newMessage.style = `cursor: auto; color: ${
    colors[Math.floor(Math.random() * colors.length)]
  }`;
  newMessage.innerText = messages[Math.floor(Math.random() * messages.length)];
  notificationArea.appendChild(newMessage);

  setTimeout(() => {
    notificationArea.removeChild(newMessage);
  }, 2500);

  q(colors[Math.floor(Math.random() * colors.length)]);
  q(messages[Math.floor(Math.random() * messages.length)]);
};
