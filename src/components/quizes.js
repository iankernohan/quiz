const quizes = [{
    id: 1,
    name: 'Math Quiz',
    type: 'quiz',
    questions: [
        {
            question: 'What is 3 x 4?',
            answers: ['34', '12', '7', '1'],
            correctAnswer: '12'
        },
        {
            question: 'What is 5 x 0?',
            answers: ['0', '12', '7', '1'],
            correctAnswer: '0'
        },
        {
            question: 'What is 8 x 3?',
            answers: ['34', '12', '24', '1'],
            correctAnswer: '24'
        },
        {
            question: 'What is 10 x 100?',
            answers: ['34', '1000', '7', '1'],
            correctAnswer: '1000'
        },
        {
            question: 'What is 6 x 7?',
            answers: ['34', '12', '7', '42'],
            correctAnswer: '42'
        }
    ]
}, {
    id: 2,
    name: 'Geography Quiz',
    type: 'flashcards',
    questions: [
        {
            question: 'How many GreatLakes does Michigan have?',
            answers: ['5', '12', '7', '1'],
            correctAnswer: '5'
        },
        {
            question: 'What continent does Argentina belong to?',
            answers: ['South America', 'North America', 'Europe', 'Asia'],
            correctAnswer: 'South America'
        },
        {
            question: 'What ocean is the largest?',
            answers: ['Atlantic', 'Indian', 'Arctic', 'Pacific'],
            correctAnswer: 'Pacific'
        },
        {
            question: 'What is the name of the most previous Super Continent?',
            answers: ['Big Land', 'Ontana', 'Pangea', 'Earth'],
            correctAnswer: 'Pangea'
        },
        {
            question: 'What is the name of the country Egypt?',
            answers: ['Egypt', 'Not Egypt', 'It has no name', 'What is Egypt?'],
            correctAnswer: 'Egypt'
        }
    ]

},
]


export default quizes;