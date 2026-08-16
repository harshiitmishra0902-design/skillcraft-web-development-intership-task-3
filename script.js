const questionBank = [
  { q: "What is the capital city of France?", options: ["Paris", "Rome", "Madrid", "Berlin"], ans: 0 },
  { q: "Which planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], ans: 1 },
  { q: "What is the largest ocean on Earth?", options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"], ans: 3 },
  { q: "What does 'CPU' stand for?", options: ["Central Process Unit", "Central Processing Unit", "Computer Processing Unit", "Control Power Unit"], ans: 1 },
  { q: "Which element has the chemical symbol 'O'?", options: ["Gold", "Oxygen", "Osmium", "Ozone"], ans: 1 },
  { q: "How many continents are there on Earth?", options: ["5", "6", "7", "8"], ans: 2 },
  { q: "Which programming language runs natively in web browsers?", options: ["Python", "Java", "C++", "JavaScript"], ans: 3 },
  { q: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C", "120°C"], ans: 1 },
  { q: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Jane Austen"], ans: 2 },
  { q: "Which gas do plants absorb during photosynthesis?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Methane"], ans: 1 },
  { q: "What is the smallest prime number?", options: ["0", "1", "2", "3"], ans: 2 },
  { q: "Which data structure uses First-In-First-Out (FIFO)?", options: ["Queue", "Stack", "Tree", "Graph"], ans: 0 },
  { q: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond", "Platinum"], ans: 2 },
  { q: "What is the currency of Japan?", options: ["Won", "Yen", "Dollar", "Peso"], ans: 1 },
  { q: "Which organ in the human body pumps blood?", options: ["Lungs", "Brain", "Liver", "Heart"], ans: 3 },
  { q: "What is the square root of 64?", options: ["6", "7", "8", "9"], ans: 2 },
  { q: "Which planet is closest to the Sun?", options: ["Venus", "Mercury", "Earth", "Mars"], ans: 1 },
  { q: "How many bytes are in 1 Kilobyte (KB)?", options: ["512", "1000", "1024", "2048"], ans: 2 },
  { q: "What does 'HTML' stand for?", options: ["HyperText Markup Language", "Hyperlink Text Multi Language", "High-Level Text Language", "Hyper Tooling Markup List"], ans: 0 },
  { q: "Which country is home to the Great Barrier Reef?", options: ["New Zealand", "Australia", "South Africa", "Brazil"], ans: 1 },
  { q: "What is the chemical formula for water?", options: ["CO2", "H2O", "O2", "NaCl"], ans: 1 },
  { q: "Which animal is known as the King of the Jungle?", options: ["Tiger", "Elephant", "Lion", "Gorilla"], ans: 2 }
];

let activeQuestions = [];
let currentIdx = 0;
let score = 0;
let isProcessing = false;

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startNewGame() {
  activeQuestions = shuffleArray(questionBank).slice(0, 10);
  currentIdx = 0;
  score = 0;
  isProcessing = false;

  document.getElementById("quizContent").style.display = "block";
  document.getElementById("winScreen").style.display = "none";
  document.getElementById("errorBanner").style.display = "none";

  renderQuestion();
}

function renderQuestion() {
  const current = activeQuestions[currentIdx];
  document.getElementById("questionCounter").textContent = `Question ${currentIdx + 1} / 10`;
  document.getElementById("scoreDisplay").textContent = `Score: ${score}`;
  document.getElementById("questionText").textContent = current.q;

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  current.options.forEach((opt, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = `${String.fromCharCode(65 + index)}. ${opt}`;
    btn.onclick = () => handleAnswer(index);
    container.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  if (isProcessing) return;
  isProcessing = true;

  const current = activeQuestions[currentIdx];
  const banner = document.getElementById("errorBanner");

  if (selectedIndex === current.ans) {
    score += 5;
    currentIdx++;

    if (currentIdx < 10) {
      isProcessing = false;
      renderQuestion();
    } else {
      document.getElementById("quizContent").style.display = "none";
      document.getElementById("winScreen").style.display = "block";
      document.getElementById("finalScore").textContent = `Final Score: ${score} / 50`;
    }
  } else {
    banner.style.display = "block";
    setTimeout(() => {
      startNewGame();
    }, 1500);
  }
}

startNewGame();
