# Tailwind-tuto-1

This project is a Vue 3 application styled with Tailwind CSS. It demonstrates the use of Tailwind CSS for styling Vue components and includes various examples of components and layouts.

## Project Structure

```
.gitignore
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

## License
