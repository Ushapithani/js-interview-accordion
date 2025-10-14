document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');
    
    // Function to close all accordion items
    function closeAllItems() {
        accordionItems.forEach(item => {
            item.classList.remove('active');
        });
    }
    
    // Add click event to each accordion header
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            // Check if the clicked item is already active
            const isActive = item.classList.contains('active');
            
            // Close all items
            closeAllItems();
            
            // If the clicked item wasn't active, open it
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
    
    // Optional: Add keyboard navigation
    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.setAttribute('tabindex', '0');
        
        header.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                header.click();
            }
        });
    });
});