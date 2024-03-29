require('dotenv').config();
require('dotenv-defaults').config();
const path = require("path");

module.exports = {
    title: "Starwhale",
    tagline: "An MLOps/LLMOps Platform",
    url: process.env.URL,
    baseUrl: process.env.BASE_URL,
    onBrokenLinks: "warn",
    onBrokenMarkdownLinks: "warn",
    favicon: "img/favicon.ico",
    organizationName: process.env.ORG,
    projectName: "starwhale",

    i18n: {
        defaultLocale: process.env.DEFAULT_LOCALE,
        locales: ['en', 'zh'],
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
                calendar: 'gregory',
            },
            zh: {
                label: '简体中文',
                direction: 'ltr',
                htmlLang: 'zh-CN',
                calendar: 'gregory',
            }
        },
    },

    themeConfig: {
        prism: {
            theme: require("prism-react-renderer/themes/dracula"),
            darkTheme: require("prism-react-renderer/themes/duotoneDark"),
            additionalLanguages: ["ini"],
        },
        colorMode: {
            defaultMode: 'light',
            disableSwitch: false,
            respectPrefersColorScheme: false,
        },
        zoomSelector: ".markdown :not(em) > img",
        announcementBar: {
            id: "supportus",
            content:
                'If you like <b>Starwhale</b>, <a target="_blank" rel="noopener noreferrer" href="https://github.com/star-whale/starwhale">give us a star on GitHub!</a> 🌺',
            isCloseable: true,
        },
        navbar: {
            style: "dark",
            hideOnScroll: true,
            title: " ",
            logo: {
                alt: "Starwhale",
                src: "img/starwhale-white.png",
                href: "/",
            },
            items: [
                {
                    type: "docsVersionDropdown",
                    position: "right",
                    dropdownActiveClassDisabled: true,
                },
                {
                    to: "https://github.com/star-whale/starwhale",
                    position: "right",
                    className: "header-ico header-ico--github",
                    "aria-label": "GitHub repository",
                    label: "Github",
                },
                {
                    to: "https://starwhale.slack.com",
                    position: "right",
                    className: "header-ico header-ico--slack",
                    "aria-label": "Slack Channel",
                    label: "Slack",
                },
                {
                    to: "blog",
                    position: "right",
                    className: "header-ico header-ico--blog",
                    "aria-label": "Starwhale Blog",
                    label: "Blog",
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: "light",
            copyright: `Copyright © ${new Date().getFullYear()} Starwhale, Inc. All rights reserved. `,

            links: [],
        },
        custom: {
            footerSocials: [],
        },
    },
    customFields: {
        email: "developer@starwhale.ai",
        description:
            "Starwhale is an MLOps/LLMOps platform to manage machine learning projects, models and datasets.",
    },
    presets: [
        [
            "@docusaurus/preset-classic",
            {
                docs: {
                    routeBasePath: "/",
                    sidebarPath: require.resolve("./sidebars.js"),
                    editUrl: "https://github.com/star-whale/docs/tree/main",
                    versions: {
                        current: {
                            label: "WIP",
                            badge: true,
                            banner: "unreleased",
                            path: "/next",
                        }
                    }
                },
                blog: {
                    blogTitle: "Starwhale Blog",
                    postsPerPage: 'ALL',
                    blogSidebarTitle: 'All posts',
                    blogSidebarCount: 'ALL',
                },
                theme: {
                    customCss: require.resolve("./src/css/custom.scss"),
                },
                gtag: {
                    trackingID: "none",
                    anonymizeIP: true,
                },
            },
        ],
    ],
    plugins: [
        "docusaurus-plugin-sass",
        path.resolve(__dirname, "src/zoom-plugin"),
    ],
};
