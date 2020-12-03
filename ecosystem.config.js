export default {
  apps: [
    {
      name: "nuxt",
      script: 'concurrently "npm run server" "npm run client-start"'
    }
  ]
};
