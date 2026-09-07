// ========================================
// PERSONALIZATION CONFIGURATION
// ========================================
// Edit these values to personalize your gift website

const CONFIG = {
    // PERSONAL INFORMATION
    girlfriendName: "Her Name",
    myName: "Your Name",
    
    // IMPORTANT DATES (Format: YYYY-MM-DD)
    monthsaryDate: "2022-05-07",  // The date you became official - May 7, 2022
    firstMeetingDate: "May 2022",
    firstConversationDate: "April 2022",
    firstChatDate: "April 2022",
    firstDateDate: "May 2022",
    firstPictureDate: "May 2022",
    firstMonthsaryDate: "June 2022",
    
    // OUR SONG
    songTitle: "Our Song",
    songArtist: "Artist Name",
    songFile: "our-song.mp3",  // Place your audio file in the public folder
    
    // OUR VIDEO (New!)
    videoFile: "our-video.mp4",  // Place your video file in the public folder
    videoThumbnail: "video-thumbnail.jpg",  // Optional: Video poster/thumbnail
    videoTitle: "Our Special Moments",
    videoDescription: "A collection of our favorite memories together ❤️",
    
    // ALBUM ART
    albumArt: "album-art.jpg",  // Place your image in the public folder
    
    // MEMORY PHOTOS (Place your photos in the public folder)
    memoryPhotos: [
        {
            src: "memory1.jpg",
            title: "Our First Picture",
            caption: "The day this became my favorite photo."
        },
        {
            src: "memory2.jpg",
            title: "Our Random Moments",
            caption: "Nothing special... but somehow my favorite memories."
        },
        {
            src: "memory3.jpg",
            title: "Our Adventures",
            caption: "Anywhere is better when I'm with you."
        },
        {
            src: "memory4.jpg",
            title: "Special Moments",
            caption: "Every moment with you is special."
        },
        {
            src: "memory5.jpg",
            title: "Together",
            caption: "My favorite place is next to you."
        },
        {
            src: "memory6.jpg",
            title: "Us",
            caption: "This is my favorite story."
        }
    ],
    
    // LOVE LETTER
    loveLetter: {
        greeting: "My Love,",
        paragraphs: [
            "Happy Monthsary.",
            "I know this little website started by trying to trick you into thinking you needed to pay an impossible amount of money...",
            "But there is one thing I hope you know.",
            "Having you in my life is something I will always be grateful for.",
            "Thank you for the laughs, the memories, the conversations, the silly moments, and even the difficult days.",
            "I don't know what every future month will look like, but I know that I want to keep making memories with you.",
            "I hope we continue choosing each other.",
            "Happy Monthsary, Love."
        ],
        closing: "I love you. ❤️",
        signature: "— Your Name"
    },
    
    // THINGS I LOVE ABOUT YOU
    reasonsILoveYou: [
        {
            icon: "😊",
            title: "Your Smile",
            description: "It can instantly make a bad day better."
        },
        {
            icon: "💕",
            title: "Your Personality",
            description: "You're one of the most interesting people I've ever met."
        },
        {
            icon: "😂",
            title: "Your Laugh",
            description: "I could listen to it forever."
        },
        {
            icon: "🥹",
            title: "Your Patience",
            description: "Especially when dealing with me."
        },
        {
            icon: "❤️",
            title: "Your Little Habits",
            description: "Even the weird ones."
        },
        {
            icon: "💙",
            title: "Your Kindness",
            description: "One of the things I admire most about you."
        },
        {
            icon: "🌷",
            title: "Your Presence",
            description: "Everything feels better when you're around."
        },
        {
            icon: "✨",
            title: "Simply You",
            description: "I don't need another reason."
        }
    ]
};

// ========================================
// HOW TO USE THIS FILE:
// ========================================
// 1. Replace "Her Name" and "Your Name" with actual names
// 2. Update all dates to your actual relationship dates
// 3. Replace photo filenames (memory1.jpg, etc.) with your actual photo files
// 4. Place all photos in the same folder as this website
// 5. Add your song file (MP3 format recommended) and update songFile
// 6. Customize the love letter paragraphs
// 7. Update or add more reasons you love her
// 8. Save this file and reload the website

// ========================================
// EXPORT CONFIGURATION
// ========================================
if (typeof window !== 'undefined') {
    window.MONTHSARY_CONFIG = CONFIG;
}
