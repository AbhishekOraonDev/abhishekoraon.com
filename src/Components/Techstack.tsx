import { motion } from "motion/react";;

export default function Techstack() {
    return (
        <>
            <motion.div
                className="box"               // Motion animation for blur render (Framer motion)
                initial={{ filter: "blur(10px)" }}
                animate={{ filter: "blur(0px)" }}
                transition={{ duration: 0.9 }}
            >
                <div className="flex flex-col gap-4">
                    <h1 className="text-white font-Bricolage md:text-2xl text-lg font-bold">Tech stacks</h1>

                    <div className="leading-loose ">
                        <div className="  text-neutral-500 grid grid-cols-4">
                                <p className="text-white flex"><span className="mr-2">-</span>Languages</p>
                                <p className="col-span-3 md:pl-0 pl-2">JavaScript, C++, SQL, Python</p>
                                <p className="text-white flex"><span className="mr-2">-</span>Frameworks</p>
                                <p className="col-span-3 md:pl-0 pl-2">Node.js, Express.js, React.js, Next.js, .NET Core MVC, Tailwind, Redux</p>
                                <p className="text-white flex"><span className="mr-2">-</span>Databases</p>
                                <p className="col-span-3 md:pl-0 pl-2">SQL Server, PostgreSQL, MySQL, MongoDB</p>
                                <p className="text-white flex"><span className="mr-2">-</span>Tech/Cloud tools</p>
                                <p className="col-span-3 md:pl-0 pl-2"> Docker, Git, Visual Studios, Figma, AWS S3, ECR & ECS</p>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}