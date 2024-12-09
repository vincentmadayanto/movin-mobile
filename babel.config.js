module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // Ensuring proper handling of files outside the app folder
      [
        "module-resolver",
        {
          alias: {
            "@": "./", // Optional: if you want to add custom aliases for external folders
          },
        },
      ],
    ],
  };
};
