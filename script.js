const itemsContainer = document.getElementById('items-container');
const prevPageButton = document.getElementById('prevPage');
const nextPageButton = document.getElementById('nextPage');

const itemsPerPage = 9;
const totalItems = 30;

let currentPage = 1;

function displayItems(page) {
    itemsContainer.innerHTML = '';
    for (let i = (page - 1) * itemsPerPage; i < page * itemsPerPage && i < totalItems; i++) {
        const item = document.createElement('div');
        item.className = 'item';
        item.textContent = `Товар #${i + 1}`;
        itemsContainer.appendChild(item);
    }
}

prevPageButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        displayItems(currentPage);
    }
});

nextPageButton.addEventListener('click', () => {
    if (currentPage < Math.ceil(totalItems / itemsPerPage)) {
        currentPage++;
        displayItems(currentPage);
    }
});

displayItems(currentPage);