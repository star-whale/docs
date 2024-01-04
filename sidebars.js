module.exports = {
    mainSidebar: [
        "what-is-starwhale",
        {
            type: "category",
            label: "Getting Started",
            link: {
                type: "doc",
                id: "getting-started/index"
            },
            items: [
                "getting-started/standalone",
                "getting-started/server",
                "getting-started/cloud",
            ]
        },
        {
            type: "category",
            label: "Examples",
            link: {
                type: "doc",
                id: "examples/index"
            },
            items: [
                "examples/helloworld",
            ]
        },
        {
            type: "category",
            label: "Concepts",
            link: {
                type: "doc",
                id: "concepts/index"
            },
            items: [
                "concepts/glossary",
                "concepts/names",
                "concepts/project",
                "concepts/roles-permissions",
                "concepts/versioning"
            ]
        },
        {
            type: "category",
            label: "User Guides",
            items: [
                {
                    type: "category",
                    label: "Starwhale Client(swcli) User Guide",
                    link: {
                        type: "doc",
                        id: "swcli/index"
                    },
                    items: [
                        "swcli/installation",
                        "swcli/uri",
                        "swcli/swignore",
                        "swcli/config",
                    ]
                },
                {
                    type: 'category',
                    label: "Starwhale Server User Guide",
                    link: {
                        type: "doc",
                        id: "server/index"
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: "Installation Guide",
                            link: {
                                type: "doc",
                                id: "server/installation/index"
                            },
                            collapsed: true,
                            items: [
                                "server/installation/server-start",
                                "server/installation/minikube",
                                "server/installation/k8s-cluster",
                                {
                                    type: 'category',
                                    label: 'Install Starwhale Server with Docker',
                                    link: {
                                        type: "doc",
                                        id: "server/installation/docker",
                                    },
                                    collapsed: true,
                                    items: [
                                        "server/installation/starwhale_env",
                                        "server/installation/docker-compose",
                                    ]
                                },
                            ],
                        },
                        "server/guides/server_admin",
                        "server/project",
                    ]
                },
                {
                    type: "category",
                    label: "Starwhale Cloud User Guide",
                    link: {
                        type: "doc",
                        id: "cloud/index"
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: "Cloud Billing",
                            link: {
                                type: "doc",
                                id: "cloud/billing/billing",
                            },
                            collapsed: true,
                            items: [
                                "cloud/billing/bills",
                                "cloud/billing/recharge",
                                "cloud/billing/refund",
                                "cloud/billing/voucher",
                            ]
                        }
                    ],
                },
                {
                    type: "category",
                    label: "Starwhale Model",
                    link: {
                        type: "doc",
                        id: "model/index",
                    },
                    collapsed: true,
                    items: [
                        "model/yaml"
                    ]
                },
                {
                    type: "category",
                    label: "Starwhale Runtime",
                    link: {
                        type: "doc",
                        id: "runtime/index",
                    },
                    collapsed: true,
                    items: [
                        "runtime/yaml"
                    ]
                },
                {
                    type: "category",
                    label: "Starwhale Dataset",
                    link: {
                        type: "doc",
                        id: "dataset/index",
                    },
                    collapsed: true,
                    items: [
                        "dataset/yaml"
                    ]
                },
                {
                    type: "category",
                    label: "Starwhale Model Evaluation",
                    link: {
                        type: "doc",
                        id: "evaluation/index",
                    },
                    collapsed: true,
                    items: [
                        {
                            type: 'category',
                            label: 'Heterogeneous Devices',
                            link: {
                                type: "doc",
                                id: "evaluation/heterogeneous/node-able",
                            },
                            collapsed: true,
                            items: [
                                "evaluation/heterogeneous/node-able",
                                "evaluation/heterogeneous/virtual-node",
                            ]
                        },
                    ]
                },
            ]
        },
        {
            "Reference": [
                {
                    type: "category",
                    label: "Starwhale Client",
                    link: {
                        type: "doc",
                        id: "reference/swcli/index"
                    },
                    items: [
                        "reference/swcli/instance",
                        "reference/swcli/project",
                        "reference/swcli/model",
                        "reference/swcli/dataset",
                        "reference/swcli/runtime",
                        "reference/swcli/job",
                        "reference/swcli/server",
                        "reference/swcli/utilities",
                    ]
                },
                {
                    type: "category",
                    label: "Python SDK",
                    link: {
                        type: "doc",
                        id: "reference/sdk/overview"
                    },
                    items: [
                        "reference/sdk/dataset",
                        "reference/sdk/type",
                        "reference/sdk/evaluation",
                        "reference/sdk/model",
                        "reference/sdk/job",
                        "reference/sdk/other",
                    ]
                }
            ],
        },
        "faq/index",
        {
            "Community": [
                "community/contribute",
            ]
        },
    ],
};
