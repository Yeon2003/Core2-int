// Function to render your items
const renderItems = (collection) => {
    const collectionList = document.querySelector('#events');

    collection.forEach(item => {
        const itemDetails =
            `
            <div class="item item-${item.img_name}">
                <img class="event-image ${item.img_name}" src="${item.img}" alt="Event ${item.img_name}" />
                <div class="modal">
                    <div class="modal-content">
                        <h2>Date: ${item.date}</h2>
                        <p>Location: ${item.where}</p>
                        <p>With: ${item.with}</p>
                        <p>Activities: ${item['what i did']}</p>
                        <p>Notes: ${item['why is it meaningful']}</p>
                        <img class="modal-image" src="${item.photo}" alt="Photo associated with ${item.img_name}" />
                    </div>
                </div>
            </div>
            `;

        collectionList.insertAdjacentHTML('beforeend', itemDetails);
    });

    // Adding hover effect to each item
    document.querySelectorAll('.item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('.event-image').style.filter = 'brightness(2.0)';
        });

        item.addEventListener('mouseleave', () => {
            item.querySelector('.event-image').style.filter = 'none';
        });

        // Adding click event listener to toggle modal visibility
        item.addEventListener('click', () => {
            item.classList.toggle('is-active');
        });
    });
}

// Fetch gets your JSON file and passes the data to the renderItems function
fetch('./collection.json')
    .then(response => response.json())
    .then(collection => {
        renderItems(collection);
    });
