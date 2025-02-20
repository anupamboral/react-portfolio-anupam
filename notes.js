//* For this project we rae using vite as bundler which is even better than webpack and parcel, and create-react-app is also deprecated so react documentation also suggest to use vite for setting up a basic react project.
//* so we don't need to run npm create-react app to start up our react project.

//* as we are using vite we have to run the below command which will setup a react project which is using vite as bundler very fast.

//* npm create vite@latest ./ -- --template react
//* then, npm i () for installing all the dependencies.
//* now as we want to use tailwind css we have to go to tailwind's website and in the search bar we have write vite, and it will show how we can use tailwind with vite, just follow their instructions.
//*note- when you go to vite config file to add tailwind remember "do not delete react() from plugins", the config file should look like-
/* *⁡⁣⁢⁣import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});⁡*/
//* all animations are built using framer motion, check their site.
//* command to install framer motion
