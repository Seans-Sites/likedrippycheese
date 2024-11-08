// Toggle function for showing more benefits
let benefitsExpanded = false;
function toggleBenefits() {
  const benefitsList = document.getElementById('benefits-list');

  if (!benefitsExpanded) {
    const extraBenefits = [
      ' Drippy Cheese',
      ' Drippy Cheese',
      ' Drippy Cheese',
      ' Drippy Cheese'
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
      <li> Drippy Cheese</li>
      <li> Drippy Cheese</li>
      <li> Drippy Cheese</li>
      <li> Drippy Cheese</li>
      <li>Drippy Cheese</li>
      <li> Drippy Cheese</li>
    `;
  }
}

// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  alert(`Thank you, ${name}! We wont get back to you at ${email}.`);
});
