import Sobremi from "@components/tabs/sobremi.astro";
import Skills from "@/components/tabs/skills.astro";
import Home from "@/components/tabs/home.astro";
import Projects from "@/components/tabs/projects.astro";

export let tabslist=[
    {id:1, label:"Inicio", panel:Home},
    {id:2, label:"Sobre Mi", panel:Sobremi},
    {id:3, label:"Skills", panel:Skills},
    {id:4, label:"Proyectos", panel:Projects},
]