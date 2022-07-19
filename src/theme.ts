const theme = {
  color: {
    primary: {
      red: 'hsl(0, 100%, 74%)',
      green: 'hsl(154, 59%, 51%)',
    },
    accent: {
      blue: 'hsl(248, 32%, 49%)',
    },
    neutral: {
      darkBlue: 'hsl(249, 10%, 26%)',
      grayishBlue: 'hsl(246, 25%, 77%)',
      white: 'hsl(0, 0%, 100%)',
    },
  },
  typography: {
    body: {
      fontSize: '16px',
    },
    font: {
      family: {
        poppins: "'Poppins', sans-serif",
      },
      weight: {
        regular: 400,
        medium: 500,
        semiBold: 600,
        bold: 700,
      },
      lineHeight: {
        heading: 1.3,
      },
      size: {
        body: `${16 / 16}rem`,
        h1: `${4.209}rem`,
        h2: `${3.157}rem`,
        h3: `${2.369}rem`,
        h4: `${1.777}rem`,
        h5: `${1.333}rem`,
        small: `${0.75}rem`,
      },
    },
  },
};

export default theme;