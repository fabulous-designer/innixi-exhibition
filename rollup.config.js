import babel from "rollup-plugin-babel";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import image from '@rollup/plugin-image';

const config = {
  input: "src/App.js",
  output: {
    file: "es/index.js",
    format: "es",
  },
  plugins: [
    postcss({
      extract: "css/index.css",
    }),
    babel({
      exclude: "node_modules/**",
      runtimeHelpers: true,
    }),
    image(),
    copy({
      targets: [
        {
          src: "./src/fonts/*",
          dest: "es/fonts",
        },
      ],
    }),
  ],
  external: [
    'react',
    'react-dom',
    '**/node_modules/**'
  ]
};

export default config;
