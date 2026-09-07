// ========================================
// MONTHSARY LOVE PORTAL - JAVASCRIPT
// ========================================

// Load configuration
const config = window.MONTHSARY_CONFIG || {};

// Global variables
let noButtonAttempts = 0;
let currentPage = 'verification';
let easterEggClicks = 0;

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Check if we should skip loading screen (page refresh)
    const savedPage = localStorage.getItem('monthsaryCurrentPage');
    const hasVisited = localStorage.getItem('monthsaryHasVisited');
    
    console.log('=== INITIALIZATION ===');
    console.log('Saved page:', savedPage);
    console.log('Has visited:', hasVisited);
    console.log('Current URL:', window.location.href);
    
    if (hasVisited && savedPage && savedPage !== 'page-verification') {
        // Skip loading screen and go directly to saved page
        console.log('✅ Restoring to saved page:', savedPage);
        hideLoadingScreenInstant();
        createParticles();
        initializeEventListeners();
        applyConfiguration();
        navigateToPage(savedPage);
    } else {
        // First visit or verification page - show loading screen
        console.log('🆕 First visit or reset - showing loading screen');
        localStorage.setItem('monthsaryHasVisited', 'true');
        setTimeout(() => {
            hideLoadingScreen();
            createParticles();
            initializeEventListeners();
            applyConfiguration();
        }, 3000);
    }
}

// ========================================
// LOADING SCREEN
// ========================================
function hideLoadingScreenInstant() {
    const loadingScreen = document.getElementById('loading-screen');
    loadingScreen.classList.remove('active');
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loading-screen');
    const loadingText = loadingScreen.querySelector('.loading-text');
    
    const messages = [
        'Loading memories...',
        'Loading love...',
        'Loading surprises...',
        'Ready ❤️'
    ];
    
    let index = 0;
    const interval = setInterval(() => {
        if (index < messages.length) {
            loadingText.textContent = messages[index];
            index++;
        } else {
            clearInterval(interval);
            setTimeout(() => {
                loadingScreen.classList.remove('active');
            }, 500);
        }
    }, 800);
}

// ========================================
// BACKGROUND PARTICLES
// ========================================
function createParticles() {
    const container = document.getElementById('particles-container');
    const particles = ['❤️', '💙', '💕', '💖', '✨', '⭐', '💫'];
    
    setInterval(() => {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.textContent = particles[Math.floor(Math.random() * particles.length)];
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 5 + 10) + 's';
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 15000);
    }, 2000);
}

// ========================================
// EVENT LISTENERS
// ========================================
function initializeEventListeners() {
    // Page 1: Date Verification
    document.getElementById('verify-btn').addEventListener('click', verifyDate);
    
    // Page 3: Payment Buttons
    const paymentButtons = document.querySelectorAll('.btn-payment');
    paymentButtons.forEach(btn => {
        btn.addEventListener('click', handlePayment);
    });
    
    // Page 4: Claim Free Button
    document.getElementById('claim-free-btn').addEventListener('click', () => {
        navigateToPage('page-trick-question');
    });
    
    // Page 5: YES/NO Buttons
    document.getElementById('yes-btn').addEventListener('click', handleYesClick);
    setupNoButton();
    
    // Page 6: Open Surprise Button
    document.getElementById('open-surprise-btn').addEventListener('click', () => {
        navigateToPage('page-memories');
    });
    
    // Page 7-12: Continue Buttons
    document.getElementById('continue-to-timeline-btn').addEventListener('click', () => {
        navigateToPage('page-timeline');
    });
    
    document.getElementById('continue-to-reasons-btn').addEventListener('click', () => {
        navigateToPage('page-reasons');
    });
    
    document.getElementById('continue-to-letter-btn').addEventListener('click', () => {
        navigateToPage('page-letter');
    });
    
    document.getElementById('continue-to-song-btn').addEventListener('click', () => {
        navigateToPage('page-song');
    });
    
    document.getElementById('continue-to-final-btn').addEventListener('click', () => {
        navigateToPage('page-final');
    });
    
    // Back Buttons
    document.getElementById('back-to-reveal-btn').addEventListener('click', () => {
        navigateToPage('page-reveal');
    });
    
    document.getElementById('back-to-memories-btn').addEventListener('click', () => {
        navigateToPage('page-memories');
    });
    
    document.getElementById('back-to-timeline-btn').addEventListener('click', () => {
        navigateToPage('page-timeline');
    });
    
    document.getElementById('back-to-reasons-btn').addEventListener('click', () => {
        navigateToPage('page-reasons');
    });
    
    document.getElementById('back-to-letter-btn').addEventListener('click', () => {
        navigateToPage('page-letter');
    });
    
    // Replay Button
    document.getElementById('replay-btn').addEventListener('click', replayStory);
    
    // Easter Egg
    document.getElementById('easter-egg-trigger').addEventListener('click', handleEasterEgg);
    document.getElementById('close-easter-egg').addEventListener('click', closeEasterEgg);
    
    // Image Lightbox
    setupImageLightbox();
    
    // Note: Audio player removed - now using video player
}

// ========================================
// PAGE 1: DATE VERIFICATION
// ========================================
function verifyDate() {
    console.log('Verify Date function called!');
    
    const dateInput = document.getElementById('date-input');
    const selectedDate = dateInput.value;
    const errorMessage = document.getElementById('date-error');
    
    console.log('Selected date:', selectedDate);
    
    // Hide previous error
    errorMessage.style.display = 'none';
    dateInput.style.borderColor = '#01AEF0';
    
    if (!selectedDate) {
        console.log('No date selected');
        errorMessage.textContent = '⚠️ Please enter the most important date first.';
        errorMessage.style.display = 'block';
        dateInput.style.borderColor = '#FF6B6B';
        return;
    }
    
    // Always go to verification page first
    navigateToPage('page-verification-process');
    
    // Check if the date matches May 7, 2022
    const correctDate = '2022-05-07';
    
    if (selectedDate !== correctDate) {
        // Run fake verification then show error
        runVerificationProcess(false, selectedDate);
    } else {
        // Run real verification for correct date
        runVerificationProcess(true, selectedDate);
    }
}

function runVerificationProcess(isCorrectDate = true, enteredDate = '') {
    const messages = [
        'Connecting to relationship database...',
        'Searching memories...',
        'Checking important dates...',
        'Verifying relationship history...',
        'Checking love records...',
        'Almost complete...'
    ];
    
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const processMessage = document.getElementById('process-message');
    
    let progress = 0;
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 20;
        if (progress > 100) progress = 100;
        
        progressBar.style.width = progress + '%';
        progressText.textContent = Math.floor(progress) + '%';
        
        if (messageIndex < messages.length && progress > (messageIndex + 1) * 16) {
            processMessage.textContent = messages[messageIndex];
            messageIndex++;
        }
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                if (isCorrectDate) {
                    showVerificationSuccess();
                } else {
                    showVerificationFailed(enteredDate);
                }
            }, 500);
        }
    }, 300);
}

function showVerificationFailed(enteredDate) {
    const processMessage = document.getElementById('process-message');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    
    // Turn progress bar red
    progressBar.style.background = 'linear-gradient(135deg, #FF6B6B 0%, #FF4444 100%)';
    
    processMessage.innerHTML = `
        <div style="text-align: center;">
            <h3 style="color: #FF6B6B; margin: 20px 0;">❌ VERIFICATION FAILED</h3>
            <p style="font-size: 1.2rem; margin: 20px 0;">Date does not match our records.</p>
            <p style="color: #666; margin: 15px 0;">You entered: <strong>${formatDateDisplay(enteredDate)}</strong></p>
            <p style="color: #01AEF0; font-size: 1.1rem; margin: 20px 0;">
                Wrong date! Think harder... when did our story really begin? 🤔
            </p>
            <p style="color: #999; font-size: 0.9rem; margin-top: 20px;">
                Hint: It's a very special day in May 2022... 💙
            </p>
        </div>
    `;
    progressText.textContent = '';
    
    setTimeout(() => {
        const tryAgainBtn = document.createElement('button');
        tryAgainBtn.className = 'btn btn-primary';
        tryAgainBtn.id = 'try-again-btn';
        tryAgainBtn.textContent = 'TRY AGAIN 🔄';
        tryAgainBtn.onclick = () => {
            // Reset everything
            progressBar.style.background = 'var(--gradient-1)';
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
            processMessage.textContent = 'Connecting to relationship database...';
            
            // Remove the try again button
            const existingBtn = document.getElementById('try-again-btn');
            if (existingBtn) {
                existingBtn.remove();
            }
            
            navigateToPage('page-verification');
        };
        document.querySelector('#page-verification-process .card-body').appendChild(tryAgainBtn);
    }, 1000);
}

function formatDateDisplay(dateString) {
    const date = new Date(dateString + 'T00:00:00');
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

function showVerificationSuccess() {
    const processMessage = document.getElementById('process-message');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.getElementById('progress-bar');
    
    // Remove any existing buttons (like TRY AGAIN)
    const existingBtn = document.getElementById('try-again-btn');
    if (existingBtn) {
        existingBtn.remove();
    }
    
    const existingContinueBtn = document.querySelector('#page-verification-process .card-body .btn-primary');
    if (existingContinueBtn && existingContinueBtn.textContent.includes('CONTINUE')) {
        existingContinueBtn.remove();
    }
    
    // Reset progress bar to success color
    progressBar.style.background = 'var(--gradient-1)';
    
    processMessage.innerHTML = `
        <div style="text-align: center;">
            <h3 style="color: #22C55E; margin: 20px 0;">✅ VERIFICATION COMPLETE</h3>
            <p>Date successfully verified.</p>
            <p style="font-weight: 600; color: #01AEF0;">Relationship status: LEGALLY CUTE 💕</p>
            <p style="margin-top: 20px; color: #666;">Okay... you remembered. I'm impressed. 😌</p>
        </div>
    `;
    progressText.textContent = '';
    
    setTimeout(() => {
        const continueBtn = document.createElement('button');
        continueBtn.className = 'btn btn-primary';
        continueBtn.textContent = 'CONTINUE →';
        continueBtn.onclick = () => navigateToPage('page-billing');
        document.querySelector('#page-verification-process .card-body').appendChild(continueBtn);
    }, 2000);
}

// ========================================
// PAGE 3: PAYMENT HANDLING
// ========================================
function handlePayment(e) {
    const paymentType = e.target.dataset.payment;
    navigateToPage('page-payment-process');
    processPayment(paymentType);
}

function processPayment(paymentType) {
    const statusIcon = document.getElementById('payment-status-icon');
    const statusText = document.getElementById('payment-status-text');
    const statusMessage = document.getElementById('payment-status-message');
    const claimBtn = document.getElementById('claim-free-btn');
    
    if (paymentType === 'love') {
        // Direct love payment
        const processingMessages = [
            'Processing payment...',
            'Validating your heart...',
            'Checking love balance...',
            'Confirming feelings...'
        ];
        
        let index = 0;
        const interval = setInterval(() => {
            if (index < processingMessages.length) {
                statusText.textContent = processingMessages[index];
                index++;
            } else {
                clearInterval(interval);
                showLovePaymentSuccess();
            }
        }, 1000);
    } else {
        // Credit Card or GCash - show suggested payment
        const processingMessages = [
            'Processing payment...',
            'Contacting bank...',
            'Checking account balance...',
            'Calculating love tax...'
        ];
        
        let index = 0;
        const interval = setInterval(() => {
            if (index < processingMessages.length) {
                statusText.textContent = processingMessages[index];
                index++;
            } else {
                clearInterval(interval);
                showSuggestedPayment(paymentType);
            }
        }, 1500);
    }
}

function showSuggestedPayment(paymentType) {
    const statusIcon = document.getElementById('payment-status-icon');
    const statusText = document.getElementById('payment-status-text');
    const statusMessage = document.getElementById('payment-status-message');
    
    statusIcon.textContent = '💡';
    statusText.textContent = 'PAYMENT SUGGESTION';
    statusMessage.innerHTML = `
        <p style="margin: 20px 0;">We detected you're trying to use <strong>${paymentType === 'credit' ? 'Credit Card' : 'GCash'}</strong>.</p>
        <p style="font-size: 1.1rem; color: #666; margin: 20px 0;">
            However, your account balance is insufficient for this relationship. 😅
        </p>
        <p style="font-size: 1.2rem; color: #01AEF0; font-weight: 600; margin: 25px 0;">
            We have a better payment option for you! ✨
        </p>
        <p style="color: #666; margin-bottom: 30px;">
            Recommended: Pay with something that never runs out... 💙
        </p>
    `;
    
    setTimeout(() => {
        const buttonContainer = document.createElement('div');
        buttonContainer.className = 'navigation-buttons';
        buttonContainer.style.marginTop = '30px';
        
        const backBtn = document.createElement('button');
        backBtn.className = 'btn btn-secondary';
        backBtn.textContent = '← BACK TO PAYMENT OPTIONS';
        backBtn.onclick = () => {
            navigateToPage('page-billing');
        };
        
        const suggestedBtn = document.createElement('button');
        suggestedBtn.className = 'btn btn-primary';
        suggestedBtn.textContent = '💡 VIEW SUGGESTED PAYMENT';
        suggestedBtn.style.animation = 'pulse 1.5s ease-in-out infinite';
        suggestedBtn.onclick = () => showLovePaymentOption();
        
        buttonContainer.appendChild(backBtn);
        buttonContainer.appendChild(suggestedBtn);
        statusMessage.appendChild(buttonContainer);
    }, 1000);
}

function showLovePaymentOption() {
    const statusIcon = document.getElementById('payment-status-icon');
    const statusText = document.getElementById('payment-status-text');
    const statusMessage = document.getElementById('payment-status-message');
    
    statusIcon.textContent = '❤️';
    statusText.textContent = 'PAYMENT WITH LOVE';
    statusMessage.innerHTML = `
        <p style="font-size: 1.2rem; margin: 25px 0; color: #666;">
            Click below to pay with your heart.
        </p>
        <p style="font-size: 0.95rem; color: #999; margin: 15px 0;">
            This payment method never expires and has unlimited balance. 💙
        </p>
    `;
    
    const lovePaymentBtn = document.createElement('button');
    lovePaymentBtn.className = 'btn btn-primary';
    lovePaymentBtn.textContent = '❤️ PAY WITH LOVE';
    lovePaymentBtn.style.fontSize = '1.3rem';
    lovePaymentBtn.style.padding = '20px 50px';
    lovePaymentBtn.style.marginTop = '30px';
    lovePaymentBtn.style.animation = 'heartBeat 1.2s ease-in-out infinite';
    lovePaymentBtn.onclick = () => processPayment('love');
    
    statusMessage.appendChild(lovePaymentBtn);
}

function showLovePaymentSuccess() {
    const statusIcon = document.getElementById('payment-status-icon');
    const statusText = document.getElementById('payment-status-text');
    const statusMessage = document.getElementById('payment-status-message');
    const claimBtn = document.getElementById('claim-free-btn');
    
    statusIcon.textContent = '✅';
    statusText.textContent = 'PAYMENT APPROVED';
    statusMessage.innerHTML = `
        <p style="margin: 20px 0;">Reason: <strong>You are already paying with your heart.</strong></p>
    `;
    
    setTimeout(() => {
        statusIcon.textContent = '💝';
        statusText.textContent = 'Actually...';
        statusMessage.innerHTML = `
            <p style="margin: 20px 0;">Since you're my favorite person...</p>
            <p style="font-size: 1.3rem; font-weight: 600; color: #01AEF0;">
                YOUR MONTHSARY BILL HAS BEEN WAIVED. ❤️
            </p>
        `;
        
        claimBtn.classList.remove('hidden');
    }, 2000);
}

// ========================================
// PAGE 5: TRICK QUESTION - NO BUTTON
// ========================================
function setupNoButton() {
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.button-container');
    
    // For desktop - mousemove
    container.addEventListener('mousemove', (e) => {
        const rect = noBtn.getBoundingClientRect();
        const distance = getDistance(
            e.clientX, 
            e.clientY, 
            rect.left + rect.width / 2, 
            rect.top + rect.height / 2
        );
        
        if (distance < 100) {
            moveNoButton();
        }
    });
    
    // For mobile - touchstart
    noBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        moveNoButton();
    });
    
    // Backup click handler
    noBtn.addEventListener('click', (e) => {
        e.preventDefault();
        moveNoButton();
    });
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function moveNoButton() {
    noButtonAttempts++;
    const noBtn = document.getElementById('no-btn');
    const container = document.querySelector('.button-container');
    const attemptMessage = document.getElementById('attempt-message');
    
    // Messages based on attempts
    const messages = [
        "Are you sure? 🥺",
        "Think again. 🤨",
        "Nice try. 😂",
        "Wrong button!",
        "Why are you chasing me?! 😭",
        "NO button has escaped.",
        "I'm not letting you click me. 😌",
        "Just click YES already. 😂",
        "Okay, this is getting embarrassing.",
        "NO (I'm shy) 😳"
    ];
    
    if (noButtonAttempts <= messages.length) {
        attemptMessage.textContent = messages[noButtonAttempts - 1];
    } else {
        attemptMessage.textContent = "You really tried that hard? 😂❤️";
    }
    
    // Calculate safe position
    const containerRect = container.getBoundingClientRect();
    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;
    
    let newX, newY;
    let attempts = 0;
    const maxAttempts = 10;
    
    do {
        newX = Math.random() * (containerRect.width - btnWidth - 40) + 20;
        newY = Math.random() * (containerRect.height - btnHeight - 40) + 20;
        attempts++;
    } while (attempts < maxAttempts && (Math.abs(newX - containerRect.width / 2) < 100));
    
    // Apply position
    noBtn.style.position = 'absolute';
    noBtn.style.left = newX + 'px';
    noBtn.style.top = newY + 'px';
    noBtn.style.transition = 'all 0.3s ease';
}

// ========================================
// PAGE 5: YES BUTTON
// ========================================
function handleYesClick() {
    const attemptMessage = document.getElementById('attempt-message');
    attemptMessage.textContent = 'YES DETECTED ❤️';
    attemptMessage.style.color = '#22C55E';
    attemptMessage.style.fontSize = '1.5rem';
    
    setTimeout(() => {
        attemptMessage.textContent = 'Relationship renewal confirmed.';
        createConfetti();
        
        setTimeout(() => {
            navigateToPage('page-reveal');
        }, 2000);
    }, 1000);
}

// ========================================
// CONFETTI EFFECT
// ========================================
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = ['#01AEF0', '#22C55E', '#FF6B6B', '#FFD93D', '#A78BFA'];
    const shapes = ['❤️', '💙', '💚', '💛', '💜', '🎉', '✨', '⭐'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.textContent = shapes[Math.floor(Math.random() * shapes.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.fontSize = (Math.random() * 20 + 15) + 'px';
            container.appendChild(confetti);
            
            setTimeout(() => {
                confetti.remove();
            }, 4000);
        }, i * 30);
    }
}

// ========================================
// AUDIO PLAYER
// ========================================
function setupAudioPlayer() {
    const audio = document.getElementById('audio-player');
    const playBtn = document.getElementById('play-btn');
    const progressBar = document.getElementById('audio-progress');
    const currentTimeEl = document.getElementById('current-time');
    const durationEl = document.getElementById('duration');
    
    playBtn.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playBtn.textContent = '⏸️';
        } else {
            audio.pause();
            playBtn.textContent = '▶️';
        }
    });
    
    audio.addEventListener('loadedmetadata', () => {
        durationEl.textContent = formatTime(audio.duration);
    });
    
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = progress + '%';
        currentTimeEl.textContent = formatTime(audio.currentTime);
    });
    
    audio.addEventListener('ended', () => {
        playBtn.textContent = '▶️';
        progressBar.style.width = '0%';
    });
    
    // Click progress bar to seek
    document.querySelector('.progress-container').addEventListener('click', (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        audio.currentTime = percent * audio.duration;
    });
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// ========================================
// CONFIGURATION APPLICATION
// ========================================
function applyConfiguration() {
    // Apply dates to timeline
    if (config.firstMeetingDate) {
        document.getElementById('first-meeting-date').textContent = config.firstMeetingDate;
    }
    if (config.firstConversationDate) {
        document.getElementById('first-conversation-date').textContent = config.firstConversationDate;
    }
    if (config.firstChatDate) {
        document.getElementById('first-chat-date').textContent = config.firstChatDate;
    }
    if (config.firstDateDate) {
        document.getElementById('first-date-date').textContent = config.firstDateDate;
    }
    if (config.firstPictureDate) {
        document.getElementById('first-picture-date').textContent = config.firstPictureDate;
    }
    if (config.firstMonthsaryDate) {
        document.getElementById('first-monthsary-date').textContent = config.firstMonthsaryDate;
    }
    
    // Set today's date in Philippines timezone
    setTodayDate();
    
    // Apply song info
    if (config.songTitle) {
        document.getElementById('song-title').textContent = config.songTitle;
    }
    if (config.songArtist) {
        document.getElementById('song-artist').textContent = config.songArtist;
    }
    
    // Apply video info
    if (config.videoTitle) {
        const videoTitleEl = document.getElementById('video-title');
        if (videoTitleEl) {
            videoTitleEl.textContent = config.videoTitle;
        }
    }
    if (config.videoDescription) {
        const videoDescEl = document.getElementById('video-description');
        if (videoDescEl) {
            videoDescEl.textContent = config.videoDescription;
        }
    }
    
    // Apply letter signature
    if (config.myName) {
        document.getElementById('letter-signature').textContent = `— ${config.myName}`;
    }
}

function setTodayDate() {
    // Get current date in Philippines timezone (Asia/Manila)
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        timeZone: 'Asia/Manila'
    };
    
    const philippinesDate = new Date().toLocaleDateString('en-US', options);
    const todayElement = document.getElementById('today-date');
    
    if (todayElement) {
        todayElement.textContent = philippinesDate;
    }
}

// ========================================
// NAVIGATION
// ========================================
function navigateToPage(pageId) {
    console.log('Navigating to page:', pageId);
    
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
        // Save current page to localStorage
        localStorage.setItem('monthsaryCurrentPage', pageId);
        console.log('Saved page to localStorage:', pageId);
    } else {
        console.error('Page not found:', pageId);
    }
}

// ========================================
// EASTER EGG
// ========================================
function handleEasterEgg() {
    easterEggClicks++;
    if (easterEggClicks >= 5) {
        document.getElementById('easter-egg-modal').classList.add('active');
        easterEggClicks = 0;
    }
}

function closeEasterEgg() {
    document.getElementById('easter-egg-modal').classList.remove('active');
}

// ========================================
// IMAGE LIGHTBOX
// ========================================
function setupImageLightbox() {
    const galleryImages = document.querySelectorAll('.gallery-image img');
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxClose = document.getElementById('lightbox-close');
    
    galleryImages.forEach(img => {
        img.addEventListener('click', (e) => {
            lightboxImage.src = e.target.src;
            const caption = e.target.closest('.gallery-card').querySelector('.gallery-caption h3').textContent;
            lightboxCaption.textContent = caption;
            lightbox.classList.add('active');
        });
    });
    
    // Close lightbox when clicking background or close button
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target === lightboxClose) {
            lightbox.classList.remove('active');
        }
    });
    
    // Close lightbox with ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
}

// ========================================
// REPLAY FUNCTIONALITY
// ========================================
function replayStory() {
    noButtonAttempts = 0;
    easterEggClicks = 0;
    
    // Clear localStorage to start fresh
    localStorage.removeItem('monthsaryCurrentPage');
    localStorage.removeItem('monthsaryHasVisited');
    
    // Reset input
    document.getElementById('date-input').value = '';
    
    // Reset progress bars
    document.getElementById('progress-bar').style.width = '0%';
    document.getElementById('progress-text').textContent = '0%';
    document.getElementById('process-message').textContent = 'Connecting to relationship database...';
    
    // Reset payment page
    document.getElementById('payment-status-icon').textContent = '⏳';
    document.getElementById('payment-status-text').textContent = 'Processing payment...';
    document.getElementById('payment-status-message').textContent = '';
    document.getElementById('claim-free-btn').classList.add('hidden');
    
    // Reset attempt message
    document.getElementById('attempt-message').textContent = '';
    
    // Reset NO button position
    const noBtn = document.getElementById('no-btn');
    noBtn.style.position = 'absolute';
    noBtn.style.left = '';
    noBtn.style.top = '';
    
    // Reset audio
    const audio = document.getElementById('audio-player');
    audio.pause();
    audio.currentTime = 0;
    document.getElementById('play-btn').textContent = '▶️';
    
    // Navigate to first page
    navigateToPage('page-verification');
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Console Easter Egg
console.log('%c💙 Monthsary Love Portal ❤️', 'font-size: 24px; color: #01AEF0; font-weight: bold;');
console.log('%cMade with love for someone special.', 'font-size: 14px; color: #22C55E;');
console.log('%cIf you\'re reading this in the console, you\'re probably curious. That\'s another reason to love you. 😊', 'font-size: 12px; color: #666;');
console.log('%c--- Debug Commands ---', 'font-size: 12px; color: #01AEF0; font-weight: bold;');
console.log('%cTo check saved page: localStorage.getItem("monthsaryCurrentPage")', 'font-size: 11px; color: #666;');
console.log('%cTo clear and restart: localStorage.clear() then refresh', 'font-size: 11px; color: #666;');
