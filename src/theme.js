import { createGlobalStyle } from "styled-components";

export const darkTheme = {
  body: "#292929",
  textColor: "#F5F5F5",
  stack: {
    backgroundColor: "#333333",
  },
  infoItem: {
    backgroundColor: "#444444",
  },
  dropdown: {
    backgroundColor: "#555555",
  },
  selectedFilters: {
    backgroundColor: "#666666",
  },
};

export const lightTheme = {
  body: "#FFFFFF",
  textColor: "#292929",
  stack: {
    backgroundColor: "#F2F2F2",
  },
  infoItem: {
    backgroundColor: "#F2F2F2",
  },
  dropdown: {
    backgroundColor: "#F2F2F2",
  },
  selectedFilters: {
    backgroundColor: "#F2F2F2",
  },
  headingColor: "#d23669",
};

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${(props) => props.theme.body};
    color: ${(props) => props.theme.textColor};
    transition: 0.3s ease;
  }

  .stack li {
    background-color: ${(props) => props.theme.stack.backgroundColor};
  }

  .info-item:hover {
    background-color: ${(props) => props.theme.infoItem.backgroundColor};
  }

  .dropdown {
    background-color: ${(props) => props.theme.dropdown.backgroundColor};
  }

  .selected-filters {
    background-color: ${(props) => props.theme.selectedFilters.backgroundColor};
  }
`;
