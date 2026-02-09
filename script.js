// Exam State
let currentQuestion = 0;
let answers = {};
let startTime = null;
let timerInterval = null;
let studentName = "";
let studentId = "";

// Initialize exam
function initializeExam() {
    document.getElementById('total-questions').textContent = examData.questions.length;
    document.getElementById('time-limit').textContent = examData.timeLimit;
}

// Start exam
function startExam() {
    // Validate student info
    studentName = document.getElementById('student-name').value.trim();
    studentId = document.getElementById('student-id').value.trim();
    
    if (!studentName || !studentId) {
        alert('Please enter your name and student ID');
        return;
    }
    
    // Switch to exam screen
    showScreen('exam-screen');
    
    // Update student info display
    document.getElementById('student-info-display').textContent = `${studentName} (${studentId})`;
    
    // Initialize timer
    startTime = Date.now();
    startTimer();
    
    // Request fullscreen
    requestFullscreen();
    
    // Initialize questions
    initializeQuestionNavigation();
    loadQuestion(0);
    
    // Prevent accidental page navigation
    window.addEventListener('beforeunload', confirmExit);
}

// Request fullscreen
function requestFullscreen() {
    const elem = document.documentElement;
    
    if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(err => {
            console.log('Fullscreen request failed:', err);
        });
    } else if (elem.mozRequestFullScreen) {
        elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    
    document.body.classList.add('fullscreen');
}

// Exit fullscreen
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    
    document.body.classList.remove('fullscreen');
}

// Start timer
function startTimer() {
    const totalSeconds = examData.timeLimit * 60;
    
    timerInterval = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        const remaining = totalSeconds - elapsed;
        
        if (remaining <= 0) {
            clearInterval(timerInterval);
            autoSubmitExam();
            return;
        }
        
        const minutes = Math.floor(remaining / 60);
        const seconds = remaining % 60;
        
        const timerElement = document.getElementById('time-remaining');
        timerElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        
        // Add warning class when less than 5 minutes
        if (remaining <= 300) {
            document.getElementById('timer').classList.add('warning');
        }
    }, 1000);
}

// Initialize question navigation
function initializeQuestionNavigation() {
    const container = document.getElementById('question-buttons');
    container.innerHTML = '';
    
    examData.questions.forEach((q, index) => {
        const btn = document.createElement('button');
        btn.className = 'question-btn';
        btn.textContent = index + 1;
        btn.onclick = () => loadQuestion(index);
        container.appendChild(btn);
    });
    
    document.getElementById('total-questions-display').textContent = examData.questions.length;
}

// Update question navigation
function updateQuestionNavigation() {
    const buttons = document.querySelectorAll('.question-btn');
    
    buttons.forEach((btn, index) => {
        btn.classList.remove('current', 'answered');
        
        if (index === currentQuestion) {
            btn.classList.add('current');
        } else if (answers[index] !== undefined) {
            btn.classList.add('answered');
        }
    });
}

// Load question
function loadQuestion(index) {
    currentQuestion = index;
    const question = examData.questions[index];
    
    document.getElementById('current-question-num').textContent = index + 1;
    
    const content = document.getElementById('question-content');
    let html = `<div class="question-text">${question.question}</div>`;
    
    if (question.type === 'multiple-choice') {
        html += '<div class="options">';
        question.options.forEach((option, i) => {
            const checked = answers[index] === i ? 'checked' : '';
            const selectedClass = answers[index] === i ? 'selected' : '';
            html += `
                <label class="option ${selectedClass}">
                    <input type="radio" name="question-${index}" value="${i}" ${checked} onchange="saveAnswer(${index}, ${i})">
                    <span>${option}</span>
                </label>
            `;
        });
        html += '</div>';
    } else if (question.type === 'multiple-select') {
        html += '<div class="options">';
        question.options.forEach((option, i) => {
            const savedAnswers = answers[index] || [];
            const checked = savedAnswers.includes(i) ? 'checked' : '';
            const selectedClass = savedAnswers.includes(i) ? 'selected' : '';
            html += `
                <label class="option ${selectedClass}">
                    <input type="checkbox" name="question-${index}" value="${i}" ${checked} onchange="saveMultipleAnswer(${index}, ${i})">
                    <span>${option}</span>
                </label>
            `;
        });
        html += '</div>';
    } else if (question.type === 'text') {
        const savedText = answers[index] || '';
        html += `<textarea class="text-answer" placeholder="Type your answer here..." onchange="saveTextAnswer(${index}, this.value)">${savedText}</textarea>`;
    }
    
    content.innerHTML = html;
    
    // Update navigation buttons
    updateQuestionNavigation();
    updateNavigationButtons();
}

// Save answer
function saveAnswer(questionIndex, answerIndex) {
    answers[questionIndex] = answerIndex;
    updateQuestionNavigation();
    
    // Update selected styling
    const options = document.querySelectorAll(`input[name="question-${questionIndex}"]`);
    options.forEach((option, i) => {
        const label = option.parentElement;
        if (i === answerIndex) {
            label.classList.add('selected');
        } else {
            label.classList.remove('selected');
        }
    });
}

// Save multiple answer
function saveMultipleAnswer(questionIndex, answerIndex) {
    if (!answers[questionIndex]) {
        answers[questionIndex] = [];
    }
    
    const answerArray = answers[questionIndex];
    const index = answerArray.indexOf(answerIndex);
    
    if (index > -1) {
        answerArray.splice(index, 1);
    } else {
        answerArray.push(answerIndex);
    }
    
    if (answerArray.length === 0) {
        delete answers[questionIndex];
    }
    
    updateQuestionNavigation();
    
    // Update selected styling
    const checkbox = document.querySelector(`input[name="question-${questionIndex}"][value="${answerIndex}"]`);
    const label = checkbox.parentElement;
    label.classList.toggle('selected');
}

// Save text answer
function saveTextAnswer(questionIndex, text) {
    if (text.trim()) {
        answers[questionIndex] = text;
    } else {
        delete answers[questionIndex];
    }
    updateQuestionNavigation();
}

// Update navigation buttons
function updateNavigationButtons() {
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    prevBtn.disabled = currentQuestion === 0;
    nextBtn.disabled = currentQuestion === examData.questions.length - 1;
}

// Previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        loadQuestion(currentQuestion - 1);
    }
}

// Next question
function nextQuestion() {
    if (currentQuestion < examData.questions.length - 1) {
        loadQuestion(currentQuestion + 1);
    }
}

// Submit exam
function submitExam() {
    const answeredCount = Object.keys(answers).length;
    const totalQuestions = examData.questions.length;
    
    if (answeredCount < totalQuestions) {
        const unanswered = totalQuestions - answeredCount;
        if (!confirm(`You have ${unanswered} unanswered question(s). Are you sure you want to submit?`)) {
            return;
        }
    }
    
    finishExam();
}

// Auto submit exam (when time runs out)
function autoSubmitExam() {
    alert('Time is up! Your exam will be submitted automatically.');
    finishExam();
}

// Finish exam
function finishExam() {
    // Stop timer
    if (timerInterval) {
        clearInterval(timerInterval);
    }
    
    // Remove beforeunload listener
    window.removeEventListener('beforeunload', confirmExit);
    
    // Exit fullscreen
    exitFullscreen();
    
    // Calculate time taken
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(timeTaken / 60);
    const seconds = timeTaken % 60;
    
    // Show results
    showResults(minutes, seconds);
}

// Show results
function showResults(minutes, seconds) {
    document.getElementById('result-name').textContent = studentName;
    document.getElementById('result-id').textContent = studentId;
    document.getElementById('result-answered').textContent = `${Object.keys(answers).length} / ${examData.questions.length}`;
    document.getElementById('result-time').textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById('result-submission-time').textContent = new Date().toLocaleString();
    
    showScreen('results-screen');
}

// Reset exam
function resetExam() {
    currentQuestion = 0;
    answers = {};
    startTime = null;
    studentName = "";
    studentId = "";
    
    document.getElementById('student-name').value = '';
    document.getElementById('student-id').value = '';
    
    showScreen('start-screen');
}

// Show screen
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

// Confirm exit
function confirmExit(e) {
    e.preventDefault();
    e.returnValue = '';
    return '';
}

// Handle fullscreen change
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        // User exited fullscreen - show warning
        const examScreen = document.getElementById('exam-screen');
        if (examScreen.classList.contains('active')) {
            alert('Please stay in fullscreen mode during the exam.');
            requestFullscreen();
        }
    }
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeExam();
});
