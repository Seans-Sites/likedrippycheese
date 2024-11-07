// Toggle function for showing more benefits
let benefitsExpanded = false;
function toggleBenefits() {
  const benefitsList = document.getElementById('benefits-list');

  if (!benefitsExpanded) {
    const extraBenefits = [
      '🚀 Growing tech ecosystem with startup opportunities',
      '🌞 300 days of sunshine per year',
      '🏞️ World-class museums, art galleries, and theaters',
      '🌐 Fast, reliable internet access everywhere'
    ];

    extraBenefits.forEach(benefit => {
      const li = document.createElement('li');
      li.textContent = benefit;
      benefitsList.appendChild(li);
    });

    benefitsExpanded = true;
  } else {
    benefitsExpanded = false;
    benefitsList.innerHTML = `
      <li>🌱 Clean and green environment</li>
      <li>🏙️ State-of-the-art infrastructure</li>
      <li>💡 High-tech economy with jobs in AI, green energy, and space exploration</li>
      <li>🌍 Multicultural society</li>
      <li>🛑 Low crime and high safety standards</li>
      <li>🚴‍♀️ Access to nature trails and eco-friendly transportation</li>
    `;
  }
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  alert(`Thank you, ${name}! We will get back to you at ${email}.`);
});
