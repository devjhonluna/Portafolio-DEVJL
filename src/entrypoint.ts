import type { Alpine } from 'alpinejs'
import collapse from '@alpinejs/collapse'
import listaProyectos from '@js/arrays/listaProyectos'
export default (Alpine: Alpine) => {
    Alpine.plugin(collapse)
    Alpine.data("proyectos", listaProyectos)
}