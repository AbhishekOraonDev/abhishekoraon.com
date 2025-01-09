import { motion } from "motion/react"

export default function Intro() {
    return (
        <motion.div className="box "               // Motion animation for blur render (Framer motion)
            initial={{ filter: "blur(10px)" }}
            animate={{ filter: "blur(0px)"}}
            transition={{ duration: 0.5 }}
        >
            <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-white font-Bricolage md:text-3xl font-bold text-xl">Hi, I'm Abhishek Oraon</h1>

                    <div className="flex gap-4">
                        <div className="fill-white flex gap-4">
                            <div className="relative group">
                                <a href="https://www.linkedin.com/in/abhishek-oraon-developer" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="fill-current text-white hover:scale-110 h-5 md:h-6  flex"
                                    >
                                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </svg>
                                </a>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                    LinkedIn
                                </div>
                            </div>
                            <div className="relative group">
                                <a href="https://github.com/AbhishekOraonDev" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="fill-current text-white hover:scale-110 h-5 md:h-6 flex"
                                    >
                                        <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8zm-90.5-54.8c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7 .6 3.9 1.9c.3 1.3-1 2.6-3 3c-1.9 .4-3.7-.4-3.9-1.7zm-9.1 3.2c-2.2 .2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7 .9 3.7 2.4c0 1.3-1.5 2.4-3.5 2.4zm-14.3-2.2c-1.9-.4-3.2-1.9-2.8-3.2s2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4c-.4 1.3-2.4 1.9-4.1 1.3zm-12.5-7.3c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3 .6c1.3 1.3 1.8 3.3 .9 4.1c-.9 1.1-2.8 .9-4.3-.6zm-8.5-10c-1.1-1.5-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1c-.9 .6-2.6 0-3.7-1.5zm-6.3-8.8c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5 .6c1.1 1.3 1.3 2.8 .4 3.5c-.9 .9-2.4 .4-3.5-.6zm-6-6.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3 .7 1.9 1.8 1.5 2.6c-.4 .9-1.7 1.1-2.8 .4z" />
                                    </svg>
                                </a>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                    Github
                                </div>
                            </div>
                            <div className="relative group">
                                <a href="https://x.com/Abhishekoraon20" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                        className="fill-current text-white hover:scale-110 h-5 md:h-6 flex"
                                    >
                                        <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" />
                                    </svg>
                                </a>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                    Twitter
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex hidden">
                            <a className="text-neutral-500 hover hover:text-white " href="mailto:reachtoabhisheko@gmail.com">reachtoabhisheko@gmail.com</a>
                        </div>
                        <div>
                            <div className="relative group lg:hidden flex">
                                <a href="https://x.com/Abhishekoraon20" target="_blank" rel="noopener noreferrer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 512 512"
                                        className="fill-current text-white hover:scale-110 h-5 md:h-6 flex"
                                    >
                                        <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                                    </svg>
                                </a>
                                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-neutral-800 text-white text-xs rounded px-2 py-1">
                                    Gmail
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className="list-disc text-neutral-500 leading-loose ml-4">
                        <li>I'm a Software Engineer from India</li>
                        <li>Worked with few startups, <a className="font-bold text-white underline hover:text-yellow-200" href="https://www.linkedin.com/in/abhishek-oraon-developer/details/experience/" target="_blank" rel="noopener noreferrer">learn more</a> </li>
                        <li>Share technical blogs on <a className="font-bold text-white underline hover:text-yellow-200" href="https://medium.com/@abhishekoraonDev" target="_blank" rel="noopener noreferrer">Medium</a></li>
                        <li>Develop enterprise applications </li>
                        <li>Let's talk how we can work together!</li>
                    </ul>
                </div>
            </div>

        </motion.div>
    )
}