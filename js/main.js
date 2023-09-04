document.addEventListener('DOMContentLoaded', function() {
  const personForm = document.getElementById('personRegistrationForm');

  personForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('personName').value;
    const email = document.getElementById('personEmail').value;
    const password = document.getElementById('personPassword').value;

    // قم بإجراء الإجراءات اللازمة هنا، مثل إرسال البيانات إلى الخادم أو عرض رسالة نجاح.
  });
});
