export default {
  // https://material-ui-next.com/customization/themes/#typography
  typography: {
    // Account for base font-size of 62.5%.
    htmlFontSize: 10,
  },
  props: {
    MuiTypography: {
      variantMapping: {
        h2: 'h1',
        h5: 'h2',
      },
    },
  },
};
