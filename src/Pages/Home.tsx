import Intro from "../Components/Intro.tsx";
import Projects from "../Components/Projects.tsx";
import Techstack from "../Components/Techstack.tsx";

export default function Home(){
    return(
        <div className="py-[7.5vh] w-11/12 md:w-9/12 xl:w-[50%] mx-auto flex flex-col gap-6 text-xs md:text-sm tracking-wide">
            <Intro></Intro>
            <Projects></Projects>
            <Techstack></Techstack>
        </div>
    )
}