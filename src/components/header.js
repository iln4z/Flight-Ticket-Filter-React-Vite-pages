import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

const Header = () => {
  return (
    _jsxs("header", {
      className: "header",
      children: [
        _jsx("div", {
          className: "header-logo",
          children: _jsx("img", {
            src: "/Flight-Ticket-Filter-React-Vite-pages/air.png",
            alt: "Логотип авиакомпании",
            style: { width: "100px", height: "auto" }
          })
        }),
        _jsx("h1", {
          children: "Поиск авиабилетов",
          style: { marginLeft: "20px" }
        })
      ]
    })
  );
};

export default Header;