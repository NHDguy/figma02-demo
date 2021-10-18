module.exports = {
  mode: 'jit',
  purge: [
      "**/*.html"
  ],
  // safeList: ["line-clamp-2"],
  darkMode: false, // or 'media' or 'class'
  theme: {
      container: {
          'center': true
      },
      extend: {
        fontFamily: {
            'raleway': "'Raleway', sans-serif",
        },
          fontSize: {
            //desktop
            'dh1': ["48px", "56.35px"],
            'dh2': ["40px", "46.96px"],
            'dh3': ["32px", "37.57px"],
            'dh4': ["24px", "28.18px"],
            //mobile
            'mh1': ["40px", "46.96px"],
            'mh2': ["32px", "32.57px"],
            'mh3': ["24px", "28.18px"],
            'mh4': ["20px", "23.48px"],
            'dh1': ["48px", "56.35px"],
            //common
            'subtitle': ["20px", "23.48px"],
            'label': ["16px", "18.78px"],
            'body': ["16px", "18.78px"],
            'caption': ["13px", "15.26px"],
            },
        
         },
          

        variants: {
            extend: {}
        },

    
  },
    plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/forms'),
    // ...
  ],
}
