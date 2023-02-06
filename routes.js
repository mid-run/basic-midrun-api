module.exports = {
  home: async () => {
    return "⚡ Your Midrun API is working ⚡";
  },
  hello: async ({ opt }) => {
    // return a random greeting with optional name
    const greetings = ["Hello", "Hola", "Bonjour", "Ciao", "Hallo"];
    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    return `${greeting} ${opt.name || "World"}!`;
  },
};
