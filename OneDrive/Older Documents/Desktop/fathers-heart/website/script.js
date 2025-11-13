// Book data embedded directly to work with file:// protocol
const books = [
  {
    "id": "book1",
    "title": "When My Little Brother Broke My Toy",
    "subtitle": "So That's What \"Forgive\" Means!",
    "description": "What if forgiveness wasn't about payback—but about love that keeps going?\n\nWhen a child's toy breaks, so does his heart. But through gentle storytelling and bright illustrations, kids discover what Jesus revealed: the Father never punishes or holds grudges—He only loves and forgives.\n\nA tender, hope-filled story that helps children let go of anger, make peace quickly, and feel God's smile again.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/fh-book1-cover.jpg",
    "tags": ["fathers-heart", "children", "forgiveness", "love", "jesus"]
  },
  {
    "id": "book2",
    "title": "When I Decided I Won't Be Friends with Oliver Anymore",
    "subtitle": "So That's What \"Not Holding a Grudge\" Means!",
    "description": "Can love start again after friendship breaks?\n\nWhen hurt feelings turn heavy, one child learns that real strength isn't in winning … it's in forgiving. Through playful scenes and a whisper of God's voice, readers see that the Father never keeps score; He simply says, \"Let's start again.\"\n\nA heartfelt reminder for every child that mercy always brings the sunshine back.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/fh-book2-cover.jpg",
    "tags": ["fathers-heart", "children", "forgiveness", "friendship", "mercy"]
  },
  {
    "id": "book3",
    "title": "Why Saying Bad Words To or About Others Makes Everyone Sad",
    "subtitle": "So That's What \"Guarding Our Tongue\" Means!",
    "description": "Words can hurt—or heal.\n\nAfter blurting something mean, a young child discovers that words are like colors: some paint gray, others paint joy. With Jesus as the gentle teacher, children learn how the Father's words always bless, never curse.\n\nA joyful story that helps kids speak kindly, choose bright \"heart-colors,\" and spread love wherever they go.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/fh-book3-cover.jpg",
    "tags": ["fathers-heart", "children", "words", "kindness", "love"]
  },
  {
    "id": "book4",
    "title": "When Thunder Made Me Hide",
    "subtitle": "So That's What \"Peace Inside\" Means!",
    "description": "Even the loudest storm can't shake God's peace.\n\nWhen thunder roars, fear whispers, \"God is angry.\" But in the quiet of the child's heart, another voice answers, \"I'm here—always calm, always love.\"\n\nThis comforting story helps children trade fear for trust and discover that true safety comes from the Father's presence within.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/fh-book4-cover.jpg",
    "tags": ["fathers-heart", "children", "peace", "fear", "trust"]
  },
  {
    "id": "book5",
    "title": "When We Made Room at Our Table",
    "subtitle": "So That's What \"Welcome\" Means!",
    "description": "What happens when we make room for one more?\n\nA simple bowl of soup becomes a feast of friendship as a family invites new neighbors to share their table. Through warmth and wonder, children learn that love grows by including others—the way the Father includes everyone.\n\nA beautiful story of generosity, belonging, and the kind of welcome that feels like home.",
    "pages": 0,
    "releaseDate": "",
    "isbn": "",
    "coverImage": "../assets/covers/fh-book5-cover.jpg",
    "tags": ["fathers-heart", "children", "welcome", "generosity", "inclusion"]
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
        
        const description = document.createElement('div');
        description.className = 'book-description';
        // Split description by double newlines and create paragraphs
        const paragraphs = book.description.split('\n\n').filter(p => p.trim());
        paragraphs.forEach((para, index) => {
            const p = document.createElement('p');
            p.textContent = para.trim();
            if (index > 0) {
                p.style.marginTop = '12px';
            }
            description.appendChild(p);
        });
        
        card.appendChild(coverImg);
        card.appendChild(title);
        if (book.subtitle) {
            const subtitle = document.createElement('h3');
            subtitle.className = 'book-subtitle';
            subtitle.textContent = book.subtitle;
            card.appendChild(subtitle);
        }
        card.appendChild(pages);
        card.appendChild(description);
        
        container.appendChild(card);
    });
}

// Display books when page loads
document.addEventListener('DOMContentLoaded', displayBooks);
