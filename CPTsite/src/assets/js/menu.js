export function toggleMenu(menuRef) {
  const menu = menuRef.value;

  if (menu.classList.contains("hidden")) {
    menu.classList.remove("hidden", "opacity-0");
    menu.classList.add("opacity-100");
  } else {
    menu.classList.add("opacity-0");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300);
  }
}