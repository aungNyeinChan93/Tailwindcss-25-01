# Tailwind and Vue 3

This project is a Vue 3 application styled with Tailwind CSS. It demonstrates the use of Tailwind CSS for styling Vue components and includes various examples of components and layouts.

## Project Structure

```
index.html
jsconfig.json
package.json
README.md
vite.config.js
.vscode/
    extensions.json
    settings.json
public/
    favicon.ico
src/
    App.vue
    main.js
    assets/
        base.css
        logo.svg
        main.css
    components/
        TheRadioGroup.vue
        auth/
            Login.vue
        base/
            TheContainer.vue
            TheDropDown.vue
            TheHomeIcon.vue
            TheSwitch.vue
            TheToggleBtn.vue
        layouts/
            Guest.vue
            Master.vue
    router/
        index.js
    stores/
        counter.js
    views/
        HomeView.vue
        auth/
            LoginView.vue
```

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

## Clone the Repository

To clone the repository, run the following command:

```sh
git clone https://github.com/your-username/Tailwind-tuto-1.git
```

### Install Dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Tailwind CSS Setup

Tailwind CSS is configured in the project with the following files:

- [`tailwind.config.js`](vite.config.js)
- [`postcss.config.js`](vite.config.js)
- [`src/assets/main.css`](src/assets/main.css)

### Example Components

- [`TheContainer.vue`](src/components/base/TheContainer.vue)
- [`TheDropDown.vue`](src/components/base/TheDropDown.vue)
- [`TheHomeIcon.vue`](src/components/base/TheHomeIcon.vue)
- [`TheSwitch.vue`](src/components/base/TheSwitch.vue)
- [`TheToggleBtn.vue`](src/components/base/TheToggleBtn.vue)

### Example Layouts

- [`Guest.vue`](src/components/layouts/Guest.vue)
- [`Master.vue`](src/components/layouts/Master.vue)

### Example Views

- [`HomeView.vue`](src/views/HomeView.vue)
- [`LoginView.vue`](src/views/auth/LoginView.vue)

## NPM Packages

The following packages are used in this project:

- `@headlessui/vue` ^1.7.23
- `@heroicons/vue` ^2.2.0
- `@tailwindcss/vite` ^4.0.13
- `pinia` ^3.0.1
- `tailwindcss` ^4.0.13
- `vue` ^3.5.13
- `vue-router` ^4.5.0
