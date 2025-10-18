const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.clientHeight : 80; // fallback if not found
    const sectionTop =
      section.getBoundingClientRect().top + window.scrollY -40 ;

    window.scrollTo({
      top: sectionTop,
      behavior: "smooth",
    });

    // setMenuOpen(false);
  }
};

export default scrollToSection;