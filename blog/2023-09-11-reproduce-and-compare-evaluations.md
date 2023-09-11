---
title: Reporduce and compare evaluations using Starwhale
description: Reproduce and compare evaluations
slug: reproduce-and-compare-evals
authors:
  - name: Starwhale
tags: [Model Package, Model Evaluaitons]
image: https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg
hide_table_of_contents: false
---

If you have doubts about the findings of this report or any other evaluations, how should you reproduce and compare the evaluation results?

Workflow: Login → Create a project → Run the model → Create a report

### STEP1: Login

First, you have to log in to the Starwhale platform by clicking on the [login](https://cloud.starwhale.cn/login?lang=zh). If you haven't registered yet, you can click on the [sign-up](https://cloud.starwhale.cn/signup) to create an account.

### STEP2: Create a project

After successful login, you will be directed to the project list page. Click the **Create** button in the top right corner to create a new project. Enter the project name and click the **Submit** button to create the project.

### STEP3: Run the models

Go to the **Evaluations** list pag, click the **Create** button, and then choose the parameters.

For example, to reproduce the result the cmmlu dataset in baichuan2-13b, refer to the following:

 1) Choose the running resource, recommend to select A10 24G2;
 2) Select the model: Choose the models you want to reproduce, e.g.: starwhale/llm-leaderboard/baichuan2-13b/atgoiscm(v1、latest);
 3) Choose the handler: Select the option "src.evaluation:evaluation_results";
 4) Choose the dataset: Select the option "starwhale/llm-leaderboard/cmmlu/kiwtxza7(v1、latest)";
 5) Choose the runtime: Select the option "starwhale/llm-leaderboard/llm-leaderboard/ickinf6q(v1、latest)".
 6) Advanced configuration: Turn off the auto-release switch.

Click **Submit** to run the model. During the evaluation process, you can click **View Log** on the task tab of the evaluation details page to understand the running status of the evaluation. When the evaluation status is "Successed," you can view the results on the list and details pages.

### STEP4: Compare the evaluation results

To create a report, go to the **Report** list page and click the **Create** button in the upper right corner.

Reports provide rich text editing capabilities, and here we mainly introduce how to compare your evaluation results with Starwhale or other evaluation results.

 1) Input the report title and description;
 2) Input **/**, select and click the **Panel** option;
 3) Click the **Add Evaluation** button, select the project, such as "llm-leaderboard", and then to check the evaluations you want to add. Click **Add** to add evaluations to the evaluation list. You can add multiple evaluations that you want to compare across different projects;
 4) After adding the evaluations, click the **Column Management** settings icon to set the columns in the evaluation list and their display order. When you hover over a column in the evaluation list, you can fix that column or sort it in ascending or descending order;
 5) You can click the **Add Chart** button and select the chart type, such as Bar Chart, then add Metrics related to accuracy (support for metric fuzzy search). Input a chart title (optional) and click **Submit** to display the data in bar chart format for intuitive analysis.
 6) Click **Publish to Project** button to publish the report;
 7) If you want to share the report with others, go to the **Report** list page, turn on the "Share" switch, and people who obtain the report link can view it.

![reproduce-and-compare-evals.gif](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/Blog/reproduce-and-compare-evals.gif)

These are the instructions on how to reproduce and compare evaluations using Starwhale. Please leave a private message if you encounter any issues during the using process. You can also visit the [Starwhale official website](https://starwhale.cn) for more information. Thank you for your attention and support.
