const botaoMenu = document.querySelector(".cabecalho__menu")
const menu = document.querySelector(".menu-lateral")

const linkInicio = document.querySelector(".menu-lateral__link--inicio")
const linkVideos = document.querySelector(".menu-lateral__link--videos")
const linkPicos = document.querySelector(".menu-lateral__link--picos")
const linkIntegrantes = document.querySelector(".menu-lateral__link--integrantes")
const linkCamisas = document.querySelector(".menu-lateral__link--camisas")
const linkPinturas = document.querySelector(".menu-lateral__link--pinturas")


botaoMenu.addEventListener("click", () => {
    menu.classList.toggle("menu-lateral--ativo")
})

linkInicio.addEventListener("click", () => {
    linkInicio.classList.toggle("menu-lateral__link--ativo")
})

linkVideos.addEventListener("click", () => {
    linkVideos.classList.toggle("menu-lateral__link--ativo")
})

linkPicos.addEventListener("click", () => {
    linkPicos.classList.toggle("menu-lateral__link--ativo")
})

linkIntegrantes.addEventListener("click", () => {
    linkIntegrantes.classList.toggle("menu-lateral__link--ativo")
})

linkCamisas.addEventListener("click", () => {
    linkCamisas.classList.toggle("menu-lateral__link--ativo")
})

linkPinturas.addEventListener("click", () => {
    linkPinturas.classList.toggle("menu-lateral__link--ativo")
})