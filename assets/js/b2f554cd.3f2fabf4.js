"use strict";(self.webpackChunkstarwhale_docs=self.webpackChunkstarwhale_docs||[]).push([[11477],{30010:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"reproduce-and-compare-evals","metadata":{"permalink":"/blog/reproduce-and-compare-evals","source":"@site/blog/2023-09-11-reproduce-and-compare-evaluations.md","title":"Reporduce and compare evaluations using Starwhale","description":"Reproduce and compare evaluations","date":"2023-09-11T00:00:00.000Z","formattedDate":"September 11, 2023","tags":[{"label":"Model Package","permalink":"/blog/tags/model-package"},{"label":"Model Evaluaitons","permalink":"/blog/tags/model-evaluaitons"}],"readingTime":2.715,"hasTruncateMarker":false,"authors":[{"name":"Starwhale"}],"frontMatter":{"title":"Reporduce and compare evaluations using Starwhale","description":"Reproduce and compare evaluations","slug":"reproduce-and-compare-evals","authors":[{"name":"Starwhale"}],"tags":["Model Package","Model Evaluaitons"],"image":"https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg","hide_table_of_contents":false},"nextItem":{"title":"Run Llama 2-Chat from scratch in 5 minutes","permalink":"/blog/run-llama2-chat-in-five-minutes"}},"content":"If you have doubts about the findings of [this report](https://cloud.starwhale.cn/simple/report/preview/?rid=e9067622-fec2-4701-a960-eb142a54ff94) or any other evaluations, how should you reproduce and compare the evaluation results?\\n\\nWorkflow: Login \u2192 Create a project \u2192 Run the model \u2192 Create a report\\n\\n### STEP1: Login\\n\\nFirst, you have to log in to the Starwhale platform by clicking on the [login](https://cloud.starwhale.cn/login?lang=zh). If you haven\'t registered yet, you can click on the [sign-up](https://cloud.starwhale.cn/signup) to create an account.\\n\\n### STEP2: Create a project\\n\\nAfter successful login, you will be directed to the project list page. Click the **Create** button in the top right corner to create a new project. Enter the project name and click the **Submit** button to create the project.\\n\\n### STEP3: Run the models\\n\\nGo to the **Evaluations** list pag, click the **Create** button, and then choose the parameters.\\n\\nFor example, to reproduce the evaluation result of baichuan2-13b with the cmmlu dataset, refer to the following:\\n\\n 1. Choose the running resource, recommend to select A10\\\\*24G\\\\*2;\\n 2. Select the model: Choose the models you want to reproduce, e.g.: starwhale/llm-leaderboard/baichuan2-13b/atgoiscm(v1\u3001latest);\\n 3. Choose the handler: Select the option \\"src.evaluation:evaluation_results\\";\\n 4. Choose the dataset: Select the option \\"starwhale/llm-leaderboard/cmmlu/kiwtxza7(v1\u3001latest)\\";\\n 5. Choose the runtime: Select the option \\"starwhale/llm-leaderboard/llm-leaderboard/ickinf6q(v1\u3001latest)\\".\\n 6. Advanced configuration: Turn off the auto-release switch.\\n\\nClick **Submit** to run the model. During the evaluation process, you can click **View Log** on the task tab of the evaluation details page to understand the running status of the evaluation. When the evaluation status is \\"Successed,\\" you can view the results on the list and details pages.\\n\\n### STEP4: Compare the evaluation results\\n\\nTo create a report, go to the **Report** list page and click the **Create** button in the upper right corner.\\n\\nReports provide rich text editing capabilities, and here we mainly introduce how to compare your evaluation results with Starwhale or other evaluation results.\\n\\n 1. Input the report title and description;\\n 2. Input **/**, select and click the **Panel** option;\\n 3. Click the **Add Evaluation** button, select the project, such as \\"llm-leaderboard\\", and then to check the evaluations you want to add. Click **Add** to add evaluations to the evaluation list. You can add multiple evaluations that you want to compare across different projects;\\n 4. After adding the evaluations, click the **Column Management** settings icon to set the columns in the evaluation list and their display order. When you hover over a column in the evaluation list, you can fix that column or sort it in ascending or descending order;\\n 5. You can click the **Add Chart** button and select the chart type, such as Bar Chart, then add Metrics related to accuracy (support for metric fuzzy search). Input a chart title (optional) and click **Submit** to display the data in bar chart format for intuitive analysis.\\n 6. Click **Publish to Project** button to publish the report;\\n 7. If you want to share the report with others, go to the **Report** list page, turn on the \\"Share\\" switch, and people who obtain the report link can view it.\\n\\n![reproduce-and-compare-evals.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/Blog/reproduce-and-compare-evals.gif)\\n\\nThese are the instructions on how to reproduce and compare evaluations using Starwhale. Please leave a private message if you encounter any issues during the using process. You can also visit the [Starwhale official website](https://starwhale.cn) for more information. Thank you for your attention and support."},{"id":"run-llama2-chat-in-five-minutes","metadata":{"permalink":"/blog/run-llama2-chat-in-five-minutes","source":"@site/blog/2023-07-24-run-llama-2-chat-in-five-minutes.md","title":"Run Llama 2-Chat from scratch in 5 minutes","description":"docusaurus-plugin-content-blog","date":"2023-07-24T00:00:00.000Z","formattedDate":"July 24, 2023","tags":[{"label":"Model Package","permalink":"/blog/tags/model-package"},{"label":"llama2","permalink":"/blog/tags/llama-2"}],"readingTime":3.945,"hasTruncateMarker":false,"authors":[{"name":"Starwhale"}],"frontMatter":{"title":"Run Llama 2-Chat from scratch in 5 minutes","description":"docusaurus-plugin-content-blog","slug":"run-llama2-chat-in-five-minutes","authors":[{"name":"Starwhale"}],"tags":["Model Package","llama2"],"image":"https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg","hide_table_of_contents":false},"prevItem":{"title":"Reporduce and compare evaluations using Starwhale","permalink":"/blog/reproduce-and-compare-evals"},"nextItem":{"title":"What is Starwhale?","permalink":"/blog/intro-starwhale"}},"content":"Meta Llama 2, once released captured the attention of the entire world. [Starwhale](https://starwhale.cn/) has specially developed the Llama 2-Chat and Llama 2-7b model packages. In just 5 minutes, you can engage in a conversation with Llama 2-Chat from scratch on <https://cloud.starwhale.cn>.\\n\\nIn the future, we will also provide model packages for Llama 2-13b and Llama 2-70b. Interested friends, please stay tuned!\\n\\nThe following will provide a detailed introduction to what is Llama 2, what is Starwhale, and how to use Starwhale to run Llama 2-Chat.\\n\\n## What is Llama 2\\n\\nThe Llama 2 series models are a set of large language models that utilize optimized autoregressive Transformer architecture. They have undergone pre-training and fine-tuning and come in three parameter versions: 7 billion, 13 billion, and 70 billion. Additionally, Meta has trained a 34 billion parameter version, but it has not been released, and relevant data is mentioned in the research paper.\\n\\nPre-training: Compared to Llama 1, Llama 2\'s training data has increased by 40%, using 2 trillion tokens for training, and the context length is twice that of Llama 1, reaching 4096. Llama 2 is well-suited for various natural language generation tasks.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/cmp1-2.png)\\n\\nMeta compared the results of Llama 2-70b with closed-source models and found that its performance is close to GPT-3.5 on MMLU (Multilingual Multimodal Language Understanding) and GSM8K (German Speech Recognition) tasks. However, there are significant differences in performance on encoding benchmarks.\\n\\nMoreover, on almost all benchmarks, Llama 2-70b performs on par with or even better than Google\'s PaLM-540b model. But there still remains a considerable gap in performance when compared to models like GPT-4 and PaLM-2-L.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/evaluation.png)\\n\\nFine-tuning: Llama 2-Chat is a version of Llama 2 that has been fine-tuned specifically for chat dialogue scenarios. The fine-tuning process involves using SFT (Supervised Fine-Tuning) and RLHF (Reinforcement Learning from Human Feedback) in an iterative optimization to align better with human preferences and improve safety. The fine-tuning data includes publicly available instruction datasets and over one million newly annotated samples. Llama 2-Chat can be used for chat applications similar to virtual assistants. The image below shows the percentage of violations in single-turn and multi-turn conversations. Compared to the baseline, Llama 2-Chat performs particularly well in multi-turn conversations.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/voliation.png)\\n\\n## What is Starwhale\\n\\nStarwhale is an MLOps platform that offers a comprehensive solution for the entire machine learning operations process. It enables developers and businesses to efficiently and conveniently manage model hosting, execution, evaluation, deployment, and dataset management. Users can choose from three different versions: Standalone, Server, or Cloud, based on their specific requirements. For more detailed information and instructions on using Starwhale, users can refer to the platform\'s [documentation](https://starwhale.cn/docs/).\\n\\n## how to use Starwhale to run Llama 2-Chat\\n\\nWorkflow\uff1aLogin \u2192 Create a project \u2192 Run the model \u2192 Chat with Llama2\\n\\n### **1. Login**\\n\\nFirst, you need to log in to the Starwhale platform by clicking on the [login](https://cloud.starwhale.cn/login?lang=zh). If you haven\'t registered yet, you can click on the [sign-up](https://cloud.starwhale.cn/signup) to create an account.\\n\\n### **2. Create a project**\\n\\nAfter successful login, you will be directed to the project list page. Click on the Create button on the top right corner to create a new project. Enter the project name and click on the Submit button to create the project.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/project-list.png)\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/project-create.png)\\n\\n### **3. Run the model**\\n\\nGo to the job list page and click on the Create task button.\\n\\n 1) Choose the running resource, you can select A100 80G1 (recommended) or A10 24G1.\\n 2) Select the model: starwhale/public/llama2-7b-chat/ki72ulaf(latest).\\n 3) Choose the handler: Run the chatbot model, select the default option: evaluation:chatbot.\\n 4) Choose the runtime: Select the default option, built-in.\\n 5) Advanced configuration: Turn on the auto-release switch, where you can set the duration after which the task will be automatically canceled. If you don\'t set auto-release, you can manually cancel the task after the experiment is completed.\\n\\nClick on Submit to run the model.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/evaluation-create.png)\\n\\n#### **4. View the Results and Logs**\\n\\nThe job list page allows you to view all the tasks in the project.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/job-list.png)\\n\\nClick on the Job ID to enter the task details page, and then click on View Logs to see the logs.\\n\\nThe total time taken from task submission to model execution is 5 minutes.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/log.png)\\n\\nOnce the execution is successful, return to the task list and click on the Terminal button to open the chatbox page. You can now start a conversation with Llama 2-Chat on the chatbox page.\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/job-list.png)\\n\\n![image](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/docs/blog/llama2/chatbot.png)\\n\\nThese are the instructions on how to use Starwhale Cloud to run Llama 2-Chat. If you encounter any issues during the process, please feel free to leave a private message. You can also visit the [Starwhale official website](https://starwhale.cn) for more information. Thank you for your attention and support."},{"id":"intro-starwhale","metadata":{"permalink":"/blog/intro-starwhale","source":"@site/blog/2023-07-21-intro.md","title":"What is Starwhale?","description":"Starwhale description","date":"2023-07-21T00:00:00.000Z","formattedDate":"July 21, 2023","tags":[{"label":"intro","permalink":"/blog/tags/intro"}],"readingTime":0.585,"hasTruncateMarker":true,"authors":[{"name":"tianwei","title":"engineer@starwhale","url":"https://github.com/tianweidut","image_url":"https://avatars.githubusercontent.com/u/590748","imageURL":"https://avatars.githubusercontent.com/u/590748"}],"frontMatter":{"title":"What is Starwhale?","description":"Starwhale description","slug":"intro-starwhale","authors":[{"name":"tianwei","title":"engineer@starwhale","url":"https://github.com/tianweidut","image_url":"https://avatars.githubusercontent.com/u/590748","imageURL":"https://avatars.githubusercontent.com/u/590748"}],"tags":["intro"],"image":"https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg","hide_table_of_contents":false},"prevItem":{"title":"Run Llama 2-Chat from scratch in 5 minutes","permalink":"/blog/run-llama2-chat-in-five-minutes"}},"content":"Starwhale is an MLOps platform that make your model creation, evaluation and publication much eaiser. It aims to create a handy tool for data scientists and machine learning engineers.\\n\\n\x3c!--truncate--\x3e\\n\\nStarwhale helps you:\\n\\n- Keep track of your training/testing data history including data items and their labels, so that you can easily access them.\\n- Manage your model packages that you can share across your team.\\n- Run your models in different environments, either on a Nvidia GPU server or on an embedded device like Cherry Pi.\\n- Create a online service with interactive Web UI for your models.\\n\\nStarwhale is designed to be an open platform. You can create your own plugins to meet your requirements."}]}')}}]);