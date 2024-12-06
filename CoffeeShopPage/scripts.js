document.addEventListener('DOMContentLoaded', function() {
    const loadMenuBtn = document.getElementById('loadMenu');
    const menuContainer = document.getElementById('menuContainer');

    loadMenuBtn.addEventListener('click', function() {
        // Add loading state
        menuContainer.textContent = 'Loading...';
        menuContainer.classList.add('loading');

        // Fetch menu items from a server (this is simulated with setTimeout)
        setTimeout(function() {
            fetchMenuItems().then(items => {
                // Clear loading state
                menuContainer.classList.remove('loading');
                menuContainer.innerHTML = ''; // Clear previous content

                // Populate with new content
                items.forEach(item => {
                    const itemElement = document.createElement('div');
                    itemElement.textContent = `${item.name} - $${item.price}`;
                    menuContainer.appendChild