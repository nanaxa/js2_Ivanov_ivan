class Chat {
    constructor(height = 500, closeBut, chat_wrap) {
        this.height = height;        
        this.closeBut = document.elem.querySelector(`.chat-header::after`); 
        this.chat_wrap = document.elem.querySelector(`.chat-wrapper`);
        
       
    }
    initEvents() {
        this.chat_wrapper.addEventListener(`click`,() => {
            this.makeSmall();
        })
    }
    makeSmall() {
        this.chat_wrap.classList.add(`small-height`)
    }
}
this.initEvents();