import { motion } from "motion/react"

export default function Projects() {
    return (
        <motion.div
            className="box"               // Motion animation for blur render (Framer motion)
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)" }}
            transition={{ duration: 0.7 }}
        >
            <div className="flex flex-col gap-4">
                <h1 className="text-white font-Bricolage md:text-2xl text-lg font-bold">Hobby Projects</h1>

                <div className="flex flex-col gap-6 leading-loose ml-5 ">
                    <ol className=" list-decimal text-white">
                        <li>
                            <div className="flex justify-between ">
                                <div className="flex">
                                    <a href="https://github.com/AbhishekOraonDev/Qportal-Frontend" className="underline font-bold hover:text-yellow-200" target="_blank">QPortal</a>
                                    <span className="text-neutral-500 hidden md:flex ml-1"> organize question papers and notes for your students</span>
                                </div>
                                <div>
                                    <div className="flex relative group items-center">
                                        <p className="text-neutral-500">10 users</p>
                                        <span className="flex w-2 h-2 bg-lime-500 rounded-full ml-3 animate-pulse"></span>
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                            Developing
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="flex md:hidden text-neutral-500">organize question papers and notes for your students</p>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <a href="https://github.com/AbhishekOraonDev/Automated_CVBuilder" className="underline font-bold hover:text-yellow-200" target="_blank">AutoCV</a>
                                    <span className="text-neutral-500 hidden md:flex ml-1"> automate your CV using AI</span>                                </div>
                                <div>
                                    <div className="flex relative group items-center">
                                        <p className="text-neutral-500">8 users</p>
                                        <span className="flex w-2 h-2 bg-lime-500 rounded-full ml-3 animate-pulse"></span>
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                            Developing
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="flex md:hidden text-neutral-500"> automate your CV using AI</p>
                        </li>

                        <li>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <a href="https://github.com/AbhishekOraonDev/Reminder_Management_System" className="underline font-bold hover:text-yellow-200" target="_blank">EMailer</a>
                                    <span className="text-neutral-500 hidden md:flex ml-1"> schedule and modify your emails using AI</span>                                </div>
                                <div>
                                    <div className="flex relative group items-center">
                                        <p className="text-neutral-500">1 users</p>
                                        <span className="flex w-2 h-2 bg-lime-500 rounded-full ml-3 animate-pulse"></span>
                                        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                            Developing
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="flex md:hidden text-neutral-500"> schedule  and modify your emails using AI</p>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <a href="https://github.com/AbhishekOraonDev/Password-gen-extension" className="underline font-bold hover:text-yellow-200" target="_blank">KeyGenarator</a>
                                    <span className="text-neutral-500 hidden md:flex ml-1"> chrome extention for password generation</span>
                                </div>
                                <p className="text-neutral-500">20 users</p>
                            </div>
                            <p className="flex md:hidden text-neutral-500"> chrome extention for password generation</p>
                        </li>
                        <li>
                            <div className="flex justify-between">
                                <div className="flex">
                                    <a href="https://www.npmjs.com/package/react-loadscreen-ui" className="underline font-bold hover:text-yellow-200" target="_blank">React-load-ui</a>
                                    <span className="text-neutral-500 hidden md:flex ml-1"> npm UI package for loaders</span>
                                </div>
                                <p className="text-neutral-500">250+ downloads</p>
                            </div>
                            <p className="flex md:hidden text-neutral-500"> npm UI package for loaders</p>
                        </li>
                    </ol>
                </div>
            </div>
        </motion.div>
    )
}