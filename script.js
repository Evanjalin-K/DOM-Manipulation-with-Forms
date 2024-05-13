document.addEventListener('DOMContentLoaded', function() {
    const formData = document.getElementById('form');
    const table = document.querySelector('.table tbody');
    const resetBtn = document.querySelector('.reset');
    const resetPageBtn = document.querySelector('.reset-page');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const secondName = document.getElementById('last-name').value;
        const emailData = document.getElementById('email').value;
        const addressData = document.getElementById('address').value;
        const pincodeData = document.getElementById('pincode').value;
        const genderData = document.querySelector('input[name="gender"]:checked');
        const foodCheckboxes = document.querySelectorAll('input[name="food"]:checked');
        const stateData = document.getElementById('state').value;
        const countryData = document.getElementById('country').value;

        if (
            !firstName ||
            !secondName ||
            !emailData ||
            !addressData ||
            !pincodeData ||
            !genderData ||
            !foodCheckboxes.length ||
            !stateData ||
            !countryData
        ) {
            alert('Please fill all fields before submitting');
            return;
        }

        if (foodCheckboxes.length !== 3) {
            alert('Please select exactly 3 food options');
            return;
        }

        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);
        const cell5 = newRow.insertCell(4);
        const cell6 = newRow.insertCell(5);
        const cell7 = newRow.insertCell(6);
        const cell8 = newRow.insertCell(7);
        const cell9 = newRow.insertCell(8);

        cell1.textContent = firstName;
        cell2.textContent = secondName;
        cell3.textContent = emailData;
        cell4.textContent = addressData;
        cell5.textContent = pincodeData;
        cell6.textContent = genderData.value;
        cell7.textContent = Array.from(foodCheckboxes).map(checkbox => checkbox.value).join(', ');
        cell8.textContent = stateData;
        cell9.textContent = countryData;

        formData.reset();
    });

    resetBtn.addEventListener('click', function(event) {
        event.preventDefault();
        formData.reset();
    });

    resetPageBtn.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.reload();
    });
});
