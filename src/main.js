import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import Master from "./components/layouts/Master.vue";
import Guest from "./components/layouts/Guest.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component("Master", Master);
app.component("Guest", Guest);

app.mount("#app");
