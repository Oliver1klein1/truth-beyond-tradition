// Book data embedded directly to work with file:// protocol
const books = [
  {
    "id": "book1",
    "title": "Whispers to My Unborn Son: A Mum's Poetic Life Jacket",
    "subtitle": "",
    "description": "Before your son takes his first breath, you've already begun to shape his heart … with your love, your hope, your dreams for the man he'll become. This book captures that sacred whisper. Through simple, five-line rhymes and enchanting illustrations, a mother passes on courage, gentleness, and grace. A perfect baby shower or bedtime gift … a keepsake to treasure forever.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/b1-mum-son2.jpg",
    "tags": ["poetry", "parenting", "mother", "son", "love"]
  },
  {
    "id": "book2",
    "title": "Whispers to My Unborn Son: A Dad's Poetic Life Jacket",
    "subtitle": "",
    "description": "Long before your son opens his eyes, your heartbeat is already teaching him strength and love. This book is your voice when words fall short … a father's legacy in verse. Each five-line poem becomes a compass for his soul, guiding him toward truth and tenderness. An unforgettable keepsake for new or expecting fathers … promising wisdom that lasts a lifetime.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/b2-dad-son-cover.jpg",
    "tags": ["poetry", "parenting", "father", "son", "love"]
  },
  {
    "id": "book3",
    "title": "Whispers to My Unborn Daughter: A Dad's Poetic Life Jacket",
    "subtitle": "",
    "description": "A daughter may not remember every word her father says … but she'll never forget how he made her feel: safe, seen, and loved. These verses are his embrace in rhyme … a father's quiet devotion captured in five lines at a time. Each poem plants seeds of confidence, compassion, and strength. A heartwarming gift for dads welcoming daughters … the beginning of a bond that lasts forever.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/b3_dad_daughter_cover.jpg",
    "tags": ["poetry", "parenting", "father", "daughter", "love"]
  },
  {
    "id": "book4",
    "title": "Whispers to My Unborn Daughter: A Mum's Poetic Life Jacket",
    "subtitle": "",
    "description": "Before your daughter sees your face, she already carries your heartbeat within her. This book is your soul, written in lullabies. Through tender five-line poems and radiant illustrations, a mother weaves lessons of kindness, courage, and freedom. A gift every mum-to-be will cherish … a promise of love wrapped in poetry.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/b4-mum-daughter.jpg",
    "tags": ["poetry", "parenting", "mother", "daughter", "love"]
  }
];

function displayBooks() {
    const container = document.getElementById('books-container');
    
    books.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';
        
        const coverImg = document.createElement('img');
        coverImg.className = 'book-cover';
        coverImg.src = book.coverImage;
        coverImg.alt = `${book.title} cover`;
        coverImg.onerror = function() {
            this.style.display = 'none';
            const placeholder = document.createElement('div');
            placeholder.className = 'book-cover-placeholder';
            placeholder.textContent = 'Cover image placeholder';
            card.insertBefore(placeholder, card.firstChild);
        };
        
        const title = document.createElement('h2');
        title.className = 'book-title';
        title.textContent = book.title;
        
        const pages = document.createElement('div');
        pages.className = 'book-pages';
        if (book.pages > 0) {
            pages.textContent = `${book.pages} pages`;
        } else {
            pages.style.display = 'none';
        }
        
        const description = document.createElement('p');
        description.className = 'book-description';
        description.textContent = book.description;
        
        card.appendChild(coverImg);
        card.appendChild(title);
        card.appendChild(pages);
        card.appendChild(description);
        
        container.appendChild(card);
    });
}

// Display books when page loads
document.addEventListener('DOMContentLoaded', displayBooks);
