function generateAdventure() {
    const hero = document.getElementById('hero').value;
    const place = document.getElementById('place').value;
    const item = document.getElementById('item').value;
    
    if (!hero || !place || !item) {
        alert('נא למלא את כל השדות');
        return;
    }
    
    const progressContainer = document.getElementById('progress-container');
    const progressBar = document.getElementById('progress-bar');
    const story = document.getElementById('story');
    
    progressContainer.classList.remove('hidden');
    story.innerHTML = '';
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 10;
        progressBar.style.width = progress + '%';
        progressBar.innerHTML = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            progressContainer.classList.add('hidden');
            story.innerHTML = `
                <h2>ההרפתקה של ${hero}</h2>
                <p>יום אחד, ${hero} יצא למסע מופלא אל ${place}. בדרך, ${hero} מצא ${item} קסום שעזר לו להתגבר על כל המכשולים!</p>
                <p>הם חזרו הביתה כגיבורים אמיתיים, עם סיפורים מדהימים לספר.</p>
            `;
            loadRandomImage();
        }
    }, 100);
}