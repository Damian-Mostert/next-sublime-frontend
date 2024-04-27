import "./burger.scss";

export function Burger({ open, setOpen }) {
  const toggleMenu = () => {
    setOpen(!open);
  };

  return (
    <div
      className={`burger ${open ? `burger-active` : ``}`}
      onClick={() => toggleMenu()}
    >
      <span
        className={`${!open ? "bg-header-text" : "bg-header-text-active"}`}
      />
      <span
        className={`${!open ? "bg-header-text" : "bg-header-text-active"}`}
      />
      <span
        className={`${!open ? "bg-header-text" : "bg-header-text-active"}`}
      />
    </div>
  );
}
