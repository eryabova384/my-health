class ButtonScroll {
    constructor(buttons, scrollEl) {
        this.buttons = buttons;
        this.scrollEl = scrollEl;
    }

    init() {
        if (this.buttons.length && this.scrollEl) this.scrollTo();
    }

    scrollTo() {
        this.buttons.forEach(button => {
            button.addEventListener('click', e => {
                e.preventDefault();
                setTimeout(()=> {
                    this.scrollEl.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    })
                }, 500)
            })
        })
    }
}

export default ButtonScroll;