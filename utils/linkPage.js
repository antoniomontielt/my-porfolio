export const linkPage = (id, page) => {
    document.addEventListener
    const link = document.querySelector(id);
    link.addEventListener("click", () => page());
};