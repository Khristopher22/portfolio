"use client";

const links = [
    { name: "Inicio", path: "#home" },
    { name: "Serviços", path: "#services" },
    { name: "Projetos", path: "#work" },
    { name: "Resumo", path: "#resume" },
    { name: "Contato", path: "#contact" },
];

const Nav = () => {
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => (
                <a
                    key={index}
                    href={link.path}
                    className="capitalize font-medium hover:text-accent transition-all"
                >
                    {link.name}
                </a>
            ))}
        </nav>
    );
};

export default Nav;