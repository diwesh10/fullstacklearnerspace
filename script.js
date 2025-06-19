function showResult() {
    const personalities = [
      "The Coding Ninja 🧠",
      "The Hostel Meme Lord 😎",
      "The Event Maestro 🎤",
      "The Library Ghost 👻",
      "The Mess Food Critic 🍛"
    ];
    const randomIndex = Math.floor(Math.random() * personalities.length);
    document.getElementById('result').textContent = `You are: ${personalities[randomIndex]}`;
  }