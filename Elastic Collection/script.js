
const renderEventDetails = (event) => {
    const eventDetailsElement = document.getElementById('eventDetails');
    eventDetailsElement.innerHTML = `
        <h2>Date: ${event.date}</h2>
        <p>Location: ${event.where}</p>
        <p>With: ${event.with}</p>
        <p>Activities: ${event['what i did']}</p>
        <p>Significance: ${event['why is it meaningful']}</p>
    `;
}


document.querySelector('.event-image').addEventListener('click', () => {
    // Fetch the JSON data
    const selectedEvent = {
        "date": "2023.07.17",
        "where": "Mapo",
        "with": "Irene",
        "what i did": "Physical exam, Sukiyaki, wine bar, Mazesoba",
        "why is it meaningful": "Irene reminded me that there is a free physical exam program provided by the government, so we applied together and went to get it. Then, we dined at the Japanese restaurant known for its sukiyaki."
    };
    // Render event details
    renderEventDetails(selectedEvent);
    // Show modal
    document.getElementById('myModal').style.display = 'block';
});


document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('myModal').style.display = 'none';
});

window.onclick = (event) => {
    if (event.target == document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = 'none';
    }
}


document.querySelector('.lf2').addEventListener('click', () => {
    
    const selectedEvent = {
        "date": "2022.03.13",
        "where": "Gangnam station",
        "with": "Ju yeong, Jihoo",
        "what i did": "exhibition, puppy cafe, bar",
        "why is it meaningful": "I reunited with my high school friends for the first time in nearly three years. We all like puppies so we went to a puppy cafe, and we had lots of fun talking about our lives while drinking."
    };
   
    renderEventDetails(selectedEvent);
  
    document.getElementById('myModal').style.display = 'block';
});

document.querySelector('.lf4').addEventListener('click', () => {
    
    const selectedEvent = {
        "date": "2022.07.08",
        "where": "In-gye dong",
        "with": "Ji eun, Hyeon woo, Jae hoon, Hyeon seung, Hyeon woo",
        "what i did": "bar, play ground",
        "why is it meaningful": "They are my classmates from my Korean high school first year and it's been almost three years since we met. We shared our life updates and talked about how our other classmates are living."
    };
    
    renderEventDetails(selectedEvent);
   
    document.getElementById('myModal').style.display = 'block';
});
document.querySelector('.lf5').addEventListener('click', () => {

    const selectedEvent = 
        {
            "date": "",
            "where": "Hongdae",
            "with": "Ah-yeon, Min hyuk, Min ho",
            "what i did": "PC room, Ma La tang",
            "why is it meaningful": "We met in the PC room that has a pop up store for famous pro game players. Probably this will be the last meeting for us because we are merely just game freinds and I don’t play the game any longer."
          };
   
    renderEventDetails(selectedEvent);
 
    document.getElementById('myModal').style.display = 'block';
});

document.querySelector('.lf6').addEventListener('click', () => {
    
    const selectedEvent = 
        
            {
                "date": "2022.04.12",
                "where": "Gangnam station",
                "with": "Amy, Laura, Grace, Seoyun",
                "what i did": "Pub",
                "why is it meaningful": "In Korea, you can drink from the age of 19. Usually, 19-year-olds graduated from high school, but we went to international school, so we had one more semester left. I had a special experience of going to a pub with my friends wearing school uniforms."
              };
    
    renderEventDetails(selectedEvent);
   
    document.getElementById('myModal').style.display = 'block';
});
document.querySelector('.lf10').addEventListener('click', () => {
 
    const selectedEvent = 
        
    {
        "date": "2023.01.02",
        "where": "In-gye dong",
        "with": "Sky",
        "what i did": "PC room, ma la tang",
        "why is it meaningful": "We did our hairstyles in the same way! even though we didn't plan for it."
      };
   
    renderEventDetails(selectedEvent);
    
    document.getElementById('myModal').style.display = 'block';
});


