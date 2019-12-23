class FormValidate {
    constructor(form) {
        this.form = form;
        this.inputs = this.form.querySelectorAll('input');
        this.buttons = this.form.querySelectorAll('button'),
        this.buttonSubmit,
        this.inputEmail
    }

    init() {
        if (this.inputs.length && this.buttons.length) this.findSubmitButton();
    }

    findSubmitButton() {
        this.buttons.forEach(button => {
            if (button.attributes.type) {
                if (button.attributes.type.value = 'submit') this.buttonSubmit = button;
            } else {
                console.error('There are no any submit buttons');
                return;
            }
        })
        this.findEmailInput();
    }

    findEmailInput() {
        this.inputs.forEach(input => {
            if (input.attributes.type) {
                if (input.attributes.value = 'email') this.inputEmail = input;
            } else {
                console.error('There are no any input[type="email]');
                return;
            }
        })
        this.checkInput();
    }

    checkInput() {
        this.buttonSubmit.addEventListener('click', e => {
            e.preventDefault();
            if (this.inputEmail.required && !this.inputEmail.value) {
                    this.addMessage('Это поле обязательно для заполнения', 'form__error');
            } else if (this.inputEmail.value.length > 1 && this.inputEmail.value.length < 5) {
                this.addMessage('Похоже, ваш email слишком короткий','form__error');
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.inputEmail.value)) {
                this.addMessage('Ой! Это совсем не похоже на email', 'form__error');
            } else {
                this.addMessage('Всё хорошо! Мы отправим вам сообщение как только случится что-то важное ;)','form__success');
                this.successSubmit();
            }
        })
    }
    
    addMessage(string, className) {
        if (string.length) {
            const message = document.createElement('em'),
                  messageExists = this.inputEmail.offsetParent.querySelector('em');

                if (messageExists) {
                    this.inputEmail.offsetParent.removeChild(messageExists);
                }
                message.innerHTML = string;
                if (!message.classList.contains(className)) message.classList.add(className);
                this.inputEmail.offsetParent.appendChild(message);
        }
    }

    successSubmit() {
        this.inputEmail.setAttribute('disabled', 'disabled');
        this.buttonSubmit.setAttribute('disabled', 'disabled')
    }
}

export default FormValidate;