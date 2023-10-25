const SkillList = [
    "next.js",
    "tailwind css",
    "figma",
    "javaScript",
    "web design",
    "Gatsby.js",
    "strapi",
    "firebase",
    "generative AI",
    "wireframing",
    "SEO",
    "framer motion",
    "sanity",
  ];

const Skills = () => {
    return (
        <section className="md:px-12 sm:px-8 px-5 sm:py-20 py-14 border-b-2">
            <h3 className="sm:pl-4 pl-2 sm:text-4xl text-3xl font-semibold pb-8 text-accent dark:text-accentDark">I'm Comfortable in...</h3>
            <ul className="flex gap-6 flex-wrap sm:pr-12 pr-2 sm:pl-4 pl-2">
            {
                SkillList.map(skill => (
                    <li key={skill} className="border-2 sm:px-8 px-4 whitespace-nowrap py-3 sm:py-4 hover:scale-110 capitalize sm:text-2xl text-xl font-semibold rounded-md cursor-pointer duration-300">
                        {skill}
                    </li>
                ))
            }
            </ul>
    </section>
    )
}

export default Skills