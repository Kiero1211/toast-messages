const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const successBtn = $(".btn--success");
const errorBtn = $(".btn--error");

successBtn.addEventListener("click", () => {
    createToast({
        title: "Success",
        message: "TH loves PK",
        type: "success",
        duration: 3000
    })
});

errorBtn.addEventListener("click", () => {
    createToast({
        title: "Error",
        message: "TH no loves PK",
        type: "error",
        duration: 3000
    })
});

function createToast({
    title = "",
    message = "",
    type = "",
    duration = 3000
}) {
    const panel = document.getElementById("toast");
    const icons = {
        success: "fa-solid fa-circle-check",
        error: "fa-solid fa-circle-exclamation"
    }

    if (panel) {
            const toast = document.createElement("div");
        
        const autoRemoveChild = setTimeout(() => {
            panel.removeChild(toast);
        }, duration + 1000);

        toast.onclick = (e) => {
            if (e.target.closest(".toast__cancel")) {
                panel.removeChild(toast);
                clearInterval(autoRemoveChild);
            }
        }

        toast.classList.add("toast", `toast--${type}`);
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        toast.style.animation = `slideIn ease .3s, fadeOut linear 1s ${delay}s forwards`;


        toast.innerHTML = `
            <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>
                <section class="toast__content">
                    <h3 class="toast__state-heading">${title}</h3>
                    <p class="toast__desc">${message}</p>
                </section>
                <div class="toast__cancel">
                    <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        panel.appendChild(toast);
    }
}