const placeholder=["Clothes","Electronics","Home Decor","Clothes","Other"];
let index=0;
setInterval(()=>{
    index=(index+1)%placeholder.length;
document.getElementById("searchbox").placeholder=placeholder[index];
},2000);

// FAQ Accordion functionality
document.addEventListener('DOMContentLoaded', function() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';

            // Close all other accordions
            accordionHeaders.forEach(otherHeader => {
                if (otherHeader !== this) {
                    otherHeader.setAttribute('aria-expanded', 'false');
                    otherHeader.nextElementSibling.style.maxHeight = '0';
                    otherHeader.nextElementSibling.setAttribute('aria-hidden', 'true');
                }
            });

            // Toggle current accordion
            if (isExpanded) {
                this.setAttribute('aria-expanded', 'false');
                content.style.maxHeight = '0';
                content.setAttribute('aria-hidden', 'true');
            } else {
                this.setAttribute('aria-expanded', 'true');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.setAttribute('aria-hidden', 'false');
            }
        });
    });

    // Generate product cards
    generateProductCards();
});

function generateProductCards() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return;

    const count = parseInt(productGrid.getAttribute('data-count')) || 64;

    const descriptions = [
        'ZEBRONICS Bro 3.5mm Wired in Ear Earphones',
        'Electronic Space 5 USB 1A Mobile Power Bank',
        'Source Earphone Case Cover Compatible with PT',
        'Stealideal Square Boat Leather Zipper Earphone Pouch',
        'Wireless Bluetooth Headphones with Noise Cancellation',
        'Portable Power Bank 10000mAh Fast Charging',
        'Smartphone Case with Screen Protector',
        'Leather Earphone Pouch with Zipper',
        'Gaming Mouse with RGB Lighting',
        'USB C Hub with Multiple Ports',
        'Wireless Charging Pad for Smartphones',
        'Bluetooth Speaker Waterproof',
        'Fitness Tracker Smartwatch',
        'Laptop Cooling Pad with Fans',
        'HDMI Cable 4K Ultra High Speed',
        'Memory Card 128GB Class 10',
        'Phone Stand Adjustable Aluminum'
    ];

    for (let i = 0; i < count; i++) {
        const description = descriptions[i % descriptions.length];
        const maxPrice = count === 199 ? 199 : 99;
        const currentPrice = Math.floor(Math.random() * maxPrice) + 1;
        const usualPrice = currentPrice + Math.floor(Math.random() * 50) + 10;

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-image-container">
                <span class="lowest-ever-tag">Lowest Ever</span>
            </div>
            <div class="product-info">
                <i class="fab fa-amazon amazon-icon"></i>
                <p class="product-description">${description}</p>
                <div class="price-details">
                    <span class="current-price">₹${currentPrice}</span>
                    <span class="usual-price">Usually ₹${usualPrice}</span>
                    <span class="user-score">₹${currentPrice} <span>USER STORE</span></span>
                </div>
            </div>
        `;
        productGrid.appendChild(card);
    }
}
// Function to handle the "Enable savings" button click
function enableSavings() {
    const button = document.querySelector('.enable-savings-btn');
    const bottomBar = document.querySelector('.bottom-fixed-bar');

    if (button.textContent === "Enable savings") {
        alert("Savings feature has been enabled!");
        button.textContent = "Savings enabled (✔)";
        button.style.backgroundColor = "#4CAF50"; // Change color to green
        button.style.color = "white";
        // Optionally hide the bar after action
        // setTimeout(() => {
        //     bottomBar.style.display = 'none';
        // }, 2000);
    } else {
        alert("Savings feature is already active!");
    }
}

// Add event listener once the document is fully loaded
document.addEventListener('DOMContentLoaded', (event) => {
    const savingsButton = document.querySelector('.enable-savings-btn');
    if (savingsButton) {
        savingsButton.addEventListener('click', enableSavings);
    }

    console.log("Webpage structure loaded and basic JS active.");
});