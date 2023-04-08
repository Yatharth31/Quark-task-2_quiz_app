const questions = [ {
    question: "What is the capital of India?",
    choices: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    correctAnswer: "New Delhi",
  },
  {
    question: "What is the currency of India?",
    choices: ["Rupee", "Dollar", "Euro", "Yen"],
    correctAnswer: "Rupee",
  },
  {
    question: "What is the national animal of India?",
    choices: ["Tiger", "Lion", "Elephant", "Leopard"],
    correctAnswer: "Tiger",
  },
  {
    question: "What is the national flower of India?",
    choices: ["Lotus", "Rose", "Jasmine", "Marigold"],
    correctAnswer: "Lotus",
  },
  {
    question: "What is the official language of India?",
    choices: ["English", "Hindi", "Bengali", "Telugu"],
    correctAnswer: "Hindi",
  },
  {
    question: "What is the name of the world's largest democracy?",
    choices: ["China", "India", "United States", "Japan"],
    correctAnswer: "India",
  },
  {
    question: "Which river is considered sacred in Hinduism?",
    choices: ["Ganges", "Nile", "Yangtze", "Amazon"],
    correctAnswer: "Ganges",
  },
  {
    question:
      "What is the name of the world's largest film industry by number of films produced?",
    choices: ["Hollywood", "Bollywood", "Tollywood", "Lollywood"],
    correctAnswer: "Bollywood",
  },
  {
    question:
      "What is the name of the world's tallest statue located in India?",
    choices: [
      "Statue of Unity",
      "Christ the Redeemer",
      "Great Sphinx of Giza",
      "Mount Rushmore",
    ],
    correctAnswer: "Statue of Unity",
  },
  {
    question:
      "Which Indian freedom fighter is also known as 'The Father of the Nation'?",
    choices: [
      "Mahatma Gandhi",
      "Jawaharlal Nehru",
      "Sardar Vallabhbhai Patel",
      "Subhas Chandra Bose",
    ],
    correctAnswer: "Mahatma Gandhi",
  },
  {
    question: "What is the name of the highest mountain peak in India?",
    choices: [
      "Mount Everest",
      "Kangchenjunga",
      "Nanda Devi",
      "Mount Godwin-Austen",
    ],
    correctAnswer: "Kangchenjunga",
  },
  {
    question: "What is the name of the largest desert in India?",
    choices: [
      "Thar Desert",
      "Great Basin Desert",
      "Mojave Desert",
      "Atacama Desert",
    ],
    correctAnswer: "Thar Desert",
  },
  {
    question: "Which Indian state is known as 'The Land of Rising Sun'?",
    choices: ["Assam", "Arunachal Pradesh", "Manipur", "Meghalaya"],
    correctAnswer: "Arunachal Pradesh",
  },
  {
    question: "What is the name of the world's largest delta located in India?",
    choices: ["Ganges Delta", "Amazon Delta", "Nile Delta", "Yangtze Delta"],
    correctAnswer: "Ganges Delta",
  },
  {
    question: "What is the name of the longest river in India?",
    choices: ["Ganges", "Indus", "Brahmaputra", "Godavari"],
    correctAnswer: "Ganges",
  },
  {
    question: "Which Indian state is known as 'The Land of Spices'?",
    choices: ["Kerala", "Tamil Nadu", "Andhra Pradesh", "Karnataka"],
    correctAnswer: "Kerala",
  },
  {
    question:
      "What is the name of the world's largest film studio located in India?",
    choices: [
      "Ramoji Film City",
      "Hengdian World Studios",
      "Pinewood Studios",
      "Universal Studios",
    ],
    correctAnswer: "Ramoji Film City",
  },
  {
    question: "Which Indian city is known as 'The Pink City'?",
    choices: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    correctAnswer: "Jaipur",
  },
  {
    question: "What is the name of the largest mosque in India?",
    choices: [
      "Jama Masjid",
      "Taj-ul-Masajid",
      "Badshahi Mosque",
      "Fatehpuri Masjid",
    ],
    correctAnswer: "Jama Masjid",
  },
  {
    question: "What is the name of the largest wildlife sanctuary in India?",
    choices: [
      "Jim Corbett National Park",
      "Kanha National Park",
      "Ranthambore National Park",
      "Sunderbans National Park",
    ],
    correctAnswer: "Jim Corbett National Park",
  },
  {
    question: "What is the smallest planet in our solar system?",
    choices: ["Earth", "Mars", "Venus", "Mercury"],
    correctAnswer: "Mercury",
  },
  {
    question: "What is the name of the currency used in Japan?",
    choices: ["Yen", "Won", "Dollar", "Euro"],
    correctAnswer: "Yen",
  },
  {
    question: "What is the capital city of France?",
    choices: ["Paris", "London", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "What is the name of the famous tower in Pisa, Italy?",
    choices: [
      "Eiffel Tower",
      "Big Ben",
      "Leaning Tower of Pisa",
      "Tower Bridge",
    ],
    correctAnswer: "Leaning Tower of Pisa",
  },
  {
    question:
      "What is the name of the famous bridge connecting San Francisco and Marin County?",
    choices: [
      "Brooklyn Bridge",
      "Golden Gate Bridge",
      "London Bridge",
      "Sydney Harbour Bridge",
    ],
    correctAnswer: "Golden Gate Bridge",
  },
  {
    question: "What is the name of the largest ocean in the world?",
    choices: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    correctAnswer: "Pacific Ocean",
  },
  {
    question: "What is the capital city of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Perth"],
    correctAnswer: "Canberra",
  },
  {
    question:
      "What is the name of the famous statue located in Rio de Janeiro, Brazil?",
    choices: [
      "The Christ the Redeemer",
      "The Statue of Liberty",
      "The Colosseum",
      "The Sphinx",
    ],
    correctAnswer: "The Christ the Redeemer",
  },
  {
    question:
      "What is the name of the famous clock tower located in London, England?",
    choices: ["Big Ben", "Elgin Marbles", "The Parthenon", "The Colosseum"],
    correctAnswer: "Big Ben",
  },
  {
    question: "What is the capital city of Germany?",
    choices: ["Berlin", "Paris", "London", "Rome"],
    correctAnswer: "Berlin",
  },
  {
    question:
      "What is the only planet in our solar system that rotates clockwise?",
    choices: ["Mars", "Venus", "Jupiter", "Uranus"],
    correctAnswer: "Venus",
  },
  {
    question:
      "What is the mathematical term for the number that is equal to the sum of its proper divisors (excluding itself)?",
    choices: [
      "Perfect Number",
      "Amicable Number",
      "Deficient Number",
      "Abundant Number",
    ],
    correctAnswer: "Perfect Number",
  },
  {
    question:
      "What is the term used to describe a sequence of numbers in which each number is the sum of the two preceding numbers?",
    choices: [
      "Geometric Sequence",
      "Arithmetic Sequence",
      "Fibonacci Sequence",
      "Harmonic Sequence",
    ],
    correctAnswer: "Fibonacci Sequence",
  },
  {
    question: "What is the number of digits in the number 'googol'?",
    choices: ["100", "1000", "100000", "100000000"],
    correctAnswer: "100",
  },
  {
    question: "What is the smallest prime number?",
    choices: ["2", "3", "5", "7"],
    correctAnswer: "2",
  },
  {
    question:
      "What is the name of the theorem that states that the square root of two is an irrational number?",
    choices: [
      "Fermat's Last Theorem",
      "Pythagorean Theorem",
      "Euclid's Elements",
      "Pell's Equation",
    ],
    correctAnswer: "Pythagorean Theorem",
  },
  {
    question:
      "What is the name of the problem that asks to find the most efficient way to connect seven bridges in a city?",
    choices: [
      "Traveling Salesman Problem",
      "Bridge and Torch Problem",
      "Knapsack Problem",
      "Graph Coloring Problem",
    ],
    correctAnswer: "Bridge and Torch Problem",
  },
  {
    question:
      "What is the name of the equation that states that the sum of the squares of the first n natural numbers is equal to n(n+1)(2n+1)/6?",
    choices: [
      "Euler's Formula",
      "Fibonacci Formula",
      "Sum of Squares Formula",
      "Gauss' Formula",
    ],
    correctAnswer: "Sum of Squares Formula",
  },
  {
    question:
      "What is the number of faces, edges, and vertices in a tetrahedron?",
    choices: [
      "4 faces, 6 edges, 4 vertices",
      "4 faces, 8 edges, 6 vertices",
      "6 faces, 12 edges, 8 vertices",
      "4 faces, 4 edges, 4 vertices",
    ],
    correctAnswer: "4 faces, 4 edges, 4 vertices",
  },
  {
    question: "What is the value of x if 2x + 3 = 7?",
    choices: ["2", "1", "0", "3"],
    correctAnswer: "2",
  },
  {
    question: "What is the square root of 256?",
    choices: ["16", "12", "18", "14"],
    correctAnswer: "16",
  },
  {
    question: "What is the value of x if x^2 + 4x + 4 = 0?",
    choices: ["-2, 2", "0, 4", "-4, 0", "2, -2"],
    correctAnswer: "-2, 2",
  },
  {
    question: "What is the value of x if log base 2 of x = 3?",
    choices: ["8", "16", "24", "32"],
    correctAnswer: "8",
  },
  {
    question: "What is the sum of the interior angles of a hexagon?",
    choices: ["720°", "540°", "360°", "180°"],
    correctAnswer: "720°",
  },
  {
    question: "What is the value of x if x / 4 = 12?",
    choices: ["48", "36", "24", "12"],
    correctAnswer: "48",
  },
  {
    question: "What is the value of x if 2x - 3 = 15?",
    choices: ["9", "12", "6", "8"],
    correctAnswer: "9",
  },
  {
    question: "What is the value of x if (x + 3)^2 = 16?",
    choices: ["-5, 5", "5, -5", "-7, 7", "7, -7"],
    correctAnswer: "-5, 5",
  },
  {
    question: "What is the value of x if x^3 + 8 = 0?",
    choices: ["2", "-2", "1", "-1"],
    correctAnswer: "-2",
  },
  {
    question: "What is the value of x if (x - 4)^2 = 9?",
    choices: ["1, 7", "-7, -1", "7, 1", "-1, -7"],
    correctAnswer: "1, 7",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: C, F, J, O, ?",
    choices: ["N", "S", "U", "T"],
    correctAnswer: "U",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: A, E, J, P, ?",
    choices: ["R", "V", "Y", "X"],
    correctAnswer: "Y",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: C, F, J, O, T, ?",
    choices: ["X", "Y", "Z", "W"],
    correctAnswer: "Z",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: B, G, N, U, ?",
    choices: ["Y", "Z", "D", "A"],
    correctAnswer: "D",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: P, S, W, Z, ?",
    choices: ["B", "C", "D", "E"],
    correctAnswer: "C",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: J, O, U, Z, ?",
    choices: ["F", "G", "H", "I"],
    correctAnswer: "G",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: D, J, Q, Y, ?",
    choices: ["H", "I", "G", "F"],
    correctAnswer: "H",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: B, F, K, P, ?",
    choices: ["U", "V", "W", "X"],
    correctAnswer: "U",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: G, L, R, Y, ?",
    choices: ["F", "E", "D", "C"],
    correctAnswer: "F",
  },
  {
    question:
      "What is the next term in the following alphanumeric series: A, F, M, T, ?",
    choices: ["Z", "Y", "X", "W"],
    correctcorrectAnswer: "Z",
  }, ];
const numQuestions = 25; 

const selectedQuestions = [];
while (selectedQuestions.length < numQuestions) {
  const index = Math.floor(Math.random() * questions.length); 
  const question = questions[index];
  if (!selectedQuestions.includes(question)) { 
    selectedQuestions.push(question);
  }
}

export const quiz = {
    topic: 'Javascript',
    level: 'Beginner',
    totalQuestions: 20,
    perQuestionScore: 5,
    questions: selectedQuestions,
  }