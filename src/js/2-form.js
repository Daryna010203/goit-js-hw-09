let formData = {
  email: '',
  message: '',
};

const formContainer = document.querySelector('.feedback-form');

const fillFormFields = () => {
  const formDataFromLS = JSON.parse(
    localStorage.getItem('feedback-form-state')
  );
  if (formDataFromLS === null) {
    return;
  }
  formData = formDataFromLS;
  for (const key in formDataFromLS) {
    if (formDataFromLS.hasOwnProperty(key)) {
      formContainer.elements[key].value = formDataFromLS[key];
    }
  }
};
fillFormFields();

function formInfo(event) {
  const formName = event.target.name;
  const formValue = event.target.value;
  if (formName === 'email') {
    formData.email = formValue;
  } else if (formName === 'message') {
    formData.message = formValue;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  const emailValue = formContainer.elements.email.value;
  const messageValue = formContainer.elements.message.value;
  if (emailValue === '' || messageValue === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

formContainer.addEventListener('input', formInfo);
formContainer.addEventListener('submit', onFormSubmit);
