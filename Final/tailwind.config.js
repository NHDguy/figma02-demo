module.exports = {
  mode: 'jit',
  purge: [
    "**/*.html"
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'inter': "'Inter', sans-serif",
      },
      fontSize: {
        'h1': ["72px", "98px"],
        'h2': ["48px", "64px"],
        'h3': ["40px", "54px"],
        'h4': ["28px", "40px"],
        'h5': ["24px", "32px"],
        'h6': ["20px", "30px"],
        'subtitle1': ["18px", "28px"],
        'subtitle2': ["18px", "28px"],
        'lead1': ["18px", "32px"],
        'lead2': ["14x", "24px"],
        'body1': ["16px", "26px"],
        'body2': ["14x", "24px"],
        'capitalised': ["14x", "18px"],
        'badge': ["20x", "24px"],
        "label-s": ["12x", "16px"],
        "label-m": ["14x", "20px"],
        "label-l": ["16x", "24px"],
      }

  },

  variants: {
    extend: {},
  },
  
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // ...
  ],
  },
  container: {
    'center' : true
  }
}
