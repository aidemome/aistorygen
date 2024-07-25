async function loadRandomImage() {
    const keywords = ['adventure', 'fantasy', 'magic', 'journey'];
    const randomKeyword = keywords[Math.floor(Math.random() * keywords.length)];
    
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random?query=${randomKeyword}&orientation=landscape&client_id=vfZuf5OKc3VSMWtAPUAhGqXefq0XP_LJtefE9pMwLKw`);
        const data = await response.json();
        
        const imageUrl = data.urls.regular;
        const photographer = data.user.name;
        const unsplashLink = data.links.html;

        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = `
            <img src="${imageUrl}" alt="תמונת הרפתקה" />
            <p>צילום: <a href="${unsplashLink}" target="_blank">${photographer}</a> על Unsplash</p>
        `;
    } catch (error) {
        console.error('שגיאה בטעינת התמונה:', error);
        const imageContainer = document.getElementById('image-container');
        imageContainer.innerHTML = '<p>לא ניתן לטעון תמונה כרגע. נסה שוב מאוחר יותר.</p>';
    }
}