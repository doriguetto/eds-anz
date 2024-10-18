import { c as createRoot, j as jsxRuntimeExports, r as reactExports } from "../__chunks__/client.GSw2dXbr.js";
const Header = (props) => {
  const [menuOpen, setMenuOpen] = reactExports.useState("");
  const onClick = (e, menu) => {
    e.preventDefault();
    e.stopPropagation();
    debugger;
    setMenuOpen(menuOpen === menu ? "" : menu);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "primary grid clearfix", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "logo logo--authored logo--default", title: "ANZ Logo", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: "/public/logo-promo-anz-small.png",
        role: "presentation",
        alt: "ANZ logo"
      }
    ) }),
    props.menus.map(
      (menu) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Menu,
        {
          onMenuClick: onClick,
          isMenuOpen: menuOpen === menu.title,
          ...menu
        }
      )
    )
  ] });
};
const MenuItem = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "subNav__content__menu__items__accounts", role: "menuitem", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: props.href, className: "clearfix", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "subNav__content__menu__items__accounts__title", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: `sprite ${props.icon}`
        }
      ),
      props.title
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "subNav__content__menu__items__accounts__desc",
        children: props.description
      }
    )
  ] }) });
};
const Promo = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "subNav__promo", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "subNav__promo__item", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "textimage parbase", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "image-text image-text--medium image-text--left   ", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "clearfix" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "clearfix", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "image bg-transparent image--noborder", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", "aria-label": "Visit our security hub", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-picture": "", "data-alt": "ANZ Falcon", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { alt: "ANZ Falcon", src: "/public/1712895216397.jpg" }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text", "data-emptytext": "Text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rte--body2-regular padding-top--5px", style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Fraud protection. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Now it’s personal."
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { style: { textAlign: "center" }, children: "ANZ Falcon® technology monitors millions of transactions every day to help keep you safe from fraud. " }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "rte--body2-regular padding-top--5px", style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "btn btn--blue",
            "aria-label": "Visit our security hub",
            children: "Visit our security hub"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "paragraph-text--small", style: { textAlign: "center" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "text--grayscale-45",
            children: "Falcon® is a registered trademark of Fair Isaac Corporation."
          }
        ) })
      ] })
    ] })
  ] }) }) }) }) });
};
const Menu = (props) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "desktop-menu clearfix", "aria-hidden": "false", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "navigation", "aria-hidden": "false", className: "navigation", "aria-label": "Primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "primary__nav clearfix", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: `tabs-personal hasSubNav ${props.isMenuOpen ? "open" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: "/personal/",
        className: "primary__nav__trigger  semibold",
        "aria-expanded": "false",
        onClick: (e) => props.onMenuClick(e, props.title),
        children: props.title
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "subNav", style: { display: props.isMenuOpen ? "block" : "none" }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "subNav__content flex-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "subNav__content__menu", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "subNav__content__menu__items clearfix", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "subNav__content__menu__items__landing", role: "menuitem", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: props.href, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "subNav__content__menu__items__landing__title", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "icon icon_arrow_right"
              }
            ),
            props.title
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "subNav__content__menu__items__landing__desc", children: props.description })
        ] }) }),
        props.submenus.map((submenu) => {
          return /* @__PURE__ */ jsxRuntimeExports.jsx(MenuItem, { ...submenu });
        })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Promo, {})
    ] }) })
  ] }) }) }) });
};
function decorate(block) {
  const data = {
    menus: [
      {
        href: "/personal/",
        title: "Personal",
        description: "",
        submenus: [
          {
            href: "/personal/bank_accounts",
            title: "Bank accounts",
            description: "Everyday/savings & term deposits",
            icon: "bank-accounts"
          },
          {
            href: "/personal/credit-cards",
            title: "Credit cards",
            description: "Low interest rate, rewards frequent flyer & platinum",
            icon: "card"
          },
          {
            href: "/personal/home-loans",
            title: "Home loans",
            description: "Buying, refinancing & investing in property",
            icon: "home-loans"
          },
          {
            href: "/personal/personal-loans",
            title: "Personal loans",
            description: "Debt consolidation, buying a new or used car, renovations and more",
            icon: "personal-loans"
          },
          {
            href: "/personal/insurance",
            title: "Insurance",
            description: "Get on top of your home, life, income and car insurance",
            icon: "insurance"
          },
          {
            href: "/personal/superannuation",
            title: "Superannuation and retirement",
            description: "Superannuation and retirement options",
            icon: "investing-super"
          },
          {
            href: "/personal/international-travel",
            title: "International travel",
            description: "Foreign exchange, travel insurance, travel money card & international payments",
            icon: "foreignfx"
          }
        ]
      },
      {
        href: "/business/",
        title: "Business",
        description: "",
        submenus: [
          {
            href: "/personal/bank_accounts",
            title: "Bank accounts",
            description: "Everyday/savings & term deposits",
            icon: "bank-accounts"
          },
          {
            href: "/personal/credit-cards",
            title: "Credit cards",
            description: "Low interest rate, rewards frequent flyer & platinum",
            icon: "card"
          },
          {
            href: "/personal/home-loans",
            title: "Home loans",
            description: "Buying, refinancing & investing in property",
            icon: "home-loans"
          },
          {
            href: "/personal/personal-loans",
            title: "Personal loans",
            description: "Debt consolidation, buying a new or used car, renovations and more",
            icon: "personal-loans"
          },
          {
            href: "/personal/insurance",
            title: "Insurance",
            description: "Get on top of your home, life, income and car insurance",
            icon: "insurance"
          },
          {
            href: "/personal/superannuation",
            title: "Superannuation and retirement",
            description: "Superannuation and retirement options",
            icon: "investing-super"
          },
          {
            href: "/personal/international-travel",
            title: "International travel",
            description: "Foreign exchange, travel insurance, travel money card & international payments",
            icon: "foreignfx"
          }
        ]
      },
      {
        href: "/institutional/",
        title: "Institutional",
        description: "",
        submenus: [
          {
            href: "/personal/bank_accounts",
            title: "Bank accounts",
            description: "Everyday/savings & term deposits",
            icon: "bank-accounts"
          },
          {
            href: "/personal/credit-cards",
            title: "Credit cards",
            description: "Low interest rate, rewards frequent flyer & platinum",
            icon: "card"
          },
          {
            href: "/personal/home-loans",
            title: "Home loans",
            description: "Buying, refinancing & investing in property",
            icon: "home-loans"
          },
          {
            href: "/personal/personal-loans",
            title: "Personal loans",
            description: "Debt consolidation, buying a new or used car, renovations and more",
            icon: "personal-loans"
          },
          {
            href: "/personal/insurance",
            title: "Insurance",
            description: "Get on top of your home, life, income and car insurance",
            icon: "insurance"
          },
          {
            href: "/personal/superannuation",
            title: "Superannuation and retirement",
            description: "Superannuation and retirement options",
            icon: "investing-super"
          },
          {
            href: "/personal/international-travel",
            title: "International travel",
            description: "Foreign exchange, travel insurance, travel money card & international payments",
            icon: "foreignfx"
          }
        ]
      },
      {
        href: "/learn/",
        title: "Learn",
        description: "",
        submenus: [
          {
            href: "/personal/bank_accounts",
            title: "Bank accounts",
            description: "Everyday/savings & term deposits",
            icon: "bank-accounts"
          },
          {
            href: "/personal/credit-cards",
            title: "Credit cards",
            description: "Low interest rate, rewards frequent flyer & platinum",
            icon: "card"
          },
          {
            href: "/personal/home-loans",
            title: "Home loans",
            description: "Buying, refinancing & investing in property",
            icon: "home-loans"
          },
          {
            href: "/personal/personal-loans",
            title: "Personal loans",
            description: "Debt consolidation, buying a new or used car, renovations and more",
            icon: "personal-loans"
          },
          {
            href: "/personal/insurance",
            title: "Insurance",
            description: "Get on top of your home, life, income and car insurance",
            icon: "insurance"
          },
          {
            href: "/personal/superannuation",
            title: "Superannuation and retirement",
            description: "Superannuation and retirement options",
            icon: "investing-super"
          },
          {
            href: "/personal/international-travel",
            title: "International travel",
            description: "Foreign exchange, travel insurance, travel money card & international payments",
            icon: "foreignfx"
          }
        ]
      }
    ]
  };
  createRoot(block).render(/* @__PURE__ */ jsxRuntimeExports.jsx(Header, { ...data }));
}
export {
  decorate as default
};
//# sourceMappingURL=header.js.map
