function submitForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const city = document.getElementById('city').value;
    const address = document.getElementById('address').value;
    const languages = document.querySelectorAll('input[name="languages"]:checked');
    const languagesArray = Array.from(languages).map(language => language.value);

    const rowData = `
      <tr>
        <td>${firstName}</td>
        <td>${lastName}</td>
        <td>${dateOfBirth}</td>
        <td>${gender}</td>
        <td>${city}</td>
        <td>${address}</td>
        <td>${languagesArray.join(', ')}</td>
      </tr>
    `;

    const registrationData = document.getElementById('registrationData');
    registrationData.insertAdjacentHTML('beforeend', rowData);

    const registrationForm = document.getElementById('registrationForm');
    const registrationTable = document.getElementById('registrationTable');
    registrationForm.style.display = 'none';
    registrationTable.style.display = 'block';
  }

  const button = document.getElementById("button");
  button.addEventListener("click", () => {
    submitForm();
  })