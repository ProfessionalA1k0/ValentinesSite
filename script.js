
        function createHeart() {
            const heart = document.createElement('div');
            heart.innerHTML = '❤️';
            heart.classList.add('heart-fall');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.querySelector('.hearts-container').appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }
        setInterval(createHeart, 300);

        function acceptCookies() {
            document.getElementById('cookie-banner').style.display = 'none';
        }

        function updateLoveTimer() {
            const startDate = new Date('2023-10-28'); 
            const now = new Date();
            const difference = now - startDate;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            document.getElementById('love-timer').textContent = `Ми разом вже ${days} днів! 💞`;
        }
        updateLoveTimer();
        setInterval(updateLoveTimer, 1000 * 60 * 60); // Оновлення щогодини

        function checkQuiz() {
            const answers = {
                q1: "b", // Щоденник пам’яті
                q2: "a", // У кав'ярні
                q3: "c"  // Shallow
            };
            
            let correct = true;
            for (let question in answers) {
                const selected = document.querySelector(`input[name="${question}"]:checked`);
                if (!selected || selected.value !== answers[question]) {
                    correct = false;
                    break;
                }
            }
    
            if (correct) {
                document.getElementById("surprise-container").style.display = "block";
            } else {
                alert("Ой! Не всі відповіді правильні. Спробуй ще раз! 😊");
            }
        }
    
        function showSurprise() {
            const surpriseMessage = document.getElementById("surprise-message");
            surpriseMessage.style.display = "block";
            surpriseMessage.classList.add("surprise-animation");
        }
        document.getElementById("surprise-container").addEventListener("mouseenter", function() {
            this.querySelector("button").classList.add("shake-animation");
        });
        
        document.getElementById("surprise-container").addEventListener("mouseleave", function() {
            this.querySelector("button").classList.remove("shake-animation");
        });
        
        document.getElementById("surprise-container").addEventListener("click", function () {
            let wishBox = document.getElementById("surprise-message");
            
            wishBox.style.display = "block";
            
            confetti({
                particleCount: 100, 
                spread: 70,         
                origin: { y: 0.6 } 
            });
        });

        const compliments = [
            "🙈: Ти неймовірна!",
            "🙆: У тебе чудова посмішка!",
            "💁‍♀️: Ти найкрасивіша дівчина у світі!",
            "🙇‍♂️: Я тебе кохаю!"
        ];
        
        // Функція для показу повідомлення
function showNotification() {
    const popup = document.getElementById("notificationPopup");
    const icon = document.querySelector(".notification-icon");

    // Відображення попапа
    popup.style.display = "block";

    // Додаємо клас для анімації тряски
    icon.classList.add("shake");

    // Видаляємо клас "shake" після завершення анімації
    icon.addEventListener('animationend', () => {
        icon.classList.remove("shake");
    });
}

// Функція для приховування повідомлення
function hideNotification() {
    const popup = document.getElementById("notificationPopup");
    popup.style.display = "none";
}

// Використовуємо setInterval для автоматичного показу повідомлення кожні 20 секунд
setInterval(() => {
    showNotification();
    setTimeout(hideNotification, 3000); // Сховаємо повідомлення через 3 секунди
}, 20000); // Повідомлення з'являється кожні 20 секунд

        
        
        
        function showCompliment() {
            const popup = document.getElementById("notificationPopup");
            popup.innerText = compliments[Math.floor(Math.random() * compliments.length)];
            popup.style.display = "block";
        }
        
        setInterval(showCompliment, 20000);

        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('#fade-in');
            
            elements.forEach(function(element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const windowHeight = window.innerHeight;
        
                // Якщо елемент знаходиться в межах видимого екрану
                if (elementTop < windowHeight * 0.9) {
                    element.classList.add('visible');
                }
            });
        });

        window.addEventListener('load', function() {
            const elements = document.querySelectorAll('#fade-out');
            
            elements.forEach(function(element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const windowHeight = window.innerHeight;
        
                // Якщо елемент знаходиться в межах видимого екрану
                if (elementTop < windowHeight * 0.9) {
                    element.classList.add('visible');
                }
            });
        });

        window.addEventListener('scroll', function() {
            const elements = document.querySelectorAll('#quiz');
            
            elements.forEach(function(element) {
                const rect = element.getBoundingClientRect();
                const elementTop = rect.top;
                const windowHeight = window.innerHeight;
        
                // Якщо елемент знаходиться в межах видимого екрану
                if (elementTop < windowHeight * 0.9) {
                    element.classList.add('visible');
                }
            });
        });
        
        
        
 