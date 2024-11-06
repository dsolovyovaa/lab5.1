function validateForm() {

    document.querySelectorAll('input').forEach(input => input.classList.remove('error'));

    const fullNamePattern = /^[А-ЯЄІЇ][а-яєії']{1,20} [А-Я]\.[А-Я]\.$/;
    const idCardPattern = /^[А-Я]{2} №\d{6}$/;
    const facultyPattern = /^[А-ЯЄІЇа-яєії']{1,20}$/;
    const birthDatePattern = /^\d{2}\.\d{2}\.\d{4}$/;
    const addressPattern = /^м\. [А-ЯЄІЇа-яєії']{1,20}$/;

    const fullName = document.getElementById('fullName');
    const idCard = document.getElementById('idCard');
    const faculty = document.getElementById('faculty');
    const birthDate = document.getElementById('birthDate');
    const address = document.getElementById('address');

    let isValid = true;

    if (!fullNamePattern.test(fullName.value)) {
        fullName.classList.add("error");
        isValid = false;
    }
    if (!idCardPattern.test(idCard.value)) {
        idCard.classList.add('error');
        isValid = false;
    }
    if (!facultyPattern.test(faculty.value)) {
        faculty.classList.add('error');
        isValid = false;
    }
    if (!birthDatePattern.test(birthDate.value)) {
        birthDate.classList.add('error');
        isValid = false;
    }
    if (!addressPattern.test(address.value)) {
        address.classList.add('error');
        isValid = false;
    }

    if (isValid) {
        document.getElementById("outputFullname").textContent = fullName.value;
        document.getElementById("outputIdCard").textContent = idCard.value;
        document.getElementById("outputFaculty").textContent = faculty.value;
        document.getElementById("outputBirthDate").textContent = birthDate.value;
        document.getElementById("outputAddress").textContent = address.value;
    } else {
        alert("Будь ласка, виправте помилки у виділених полях.");
    }
}
