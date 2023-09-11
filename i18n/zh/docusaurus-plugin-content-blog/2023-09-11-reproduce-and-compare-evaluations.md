---
title: 如何复现评测结果
description: 评测结果复现
slug: reproduce-and-compare-evals
authors:
  - name: Starwhale
tags: [模型,模型评测]
image: https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg
hide_table_of_contents: false
---

对[Starwhale的开源大语言模型评测报告](https://cloud.starwhale.cn/simple/report/preview/?rid=e9067622-fec2-4701-a960-eb142a54ff94)的评测结果或其他人的评测结果存疑，应该如何复现和对比评测结果？下文将为大家逐一讲解说明

**基本流程**：登录账号 → 创建项目 → 运行评测 → 对比结果

### STEP1：登录账号

需要登录Starwhale平台，点击跳转[登录入口](https://cloud.starwhale.cn/login?lang=zh)。如您尚未注册，可点击 [注册入口](https://cloud.starwhale.cn/signup) 进行注册。

### STEP2：创建项目

成功登录后进入项目列表页，点击右上角的 **创建** 项目按钮，输入项目名称,点击 **提交** 按钮即可新建一个项目。

### STEP3：运行评测

进入**评测**列表页，点击右上角的 **创建** 评测按钮，并选择相应参数。

例如想复现baichuan2-13b使用cmmlu数据集评测的结果，可参考以下内容进行操作：

 1. 选择运行资源，推荐选择资源：A10\*24G\*2；
 2. 选择模型：starwhale/llm-leaderboard/baichuan2-13b/atgoiscm(v1、latest)； 
 3. 选择handler：选择：src.evaluation:evaluation_results；
 4. 选择数据集：starwhale/llm-leaderboard/cmmlu/kiwtxza7(v1、latest)；
 5. 选择运行时：starwhale/llm-leaderboard/llm-leaderboard/ickinf6q(v1、latest)；
 6. 高级配置，关闭自动释放

点击 **提交** 即可运行评测。评测运行时，可在评测详情页的**任务TAB页**点击 **查看日志** 了解评测运行情况；当评测状态为“成功”时，可在列表页和详情页查看评测结果。

### STEP4：对比结果

进入**报告**列表页，点击右上角的 **创建** 报告按钮。

报告提供富文本编辑能力，这里主要介绍如何将自己的评测结果和 Starwhale 或者其他的评测结果进行对比。

 1. 输入 报告标题、描述；
 2. 输入 **/** ，选择 **Panel** 选项；
 3. 点击 **添加评测** 按钮，选择评测所属的项目，如“llm-leaderboard”，然后勾选想要添加的评测，点击 **添加** 可将评测加入评测列表。支持跨项目添加评测，您可以添加多个您想对比的评测；
 4. 将想要进行对比的评测添加完成后：可点击 **列管理**设置图标设置评测列表展示的字段及字段展示顺序；鼠标hover评测列表字段，可固定该列、或者按照升序降序进行排序；
 5. 可点击 **添加图表** 按钮 ：选择图表类型，如 Bar Chart；添加 Metrics，如 accuracy相关指标（支持指标模糊搜索）；输入 图表标题（非必填），点击 **提交** 即可将数据以条形图的方式展示，以便更直观得分析；
 6. 点击 **发布到项目** 按钮发布报告；
 7. 如想分享给其他人，进入 **报告列表页** ，打开 **分享** 开关，获得报告链接的人即可浏览报告。

![reproduce and compare evals](https://starwhale-examples.oss-cn-beijing.aliyuncs.com/Blog/reproduce-and-compare-evals.gif)

以上就是关于如何使用 Starwhale Cloud 复现和对比评测结果的说明，如果您在使用过程中有任何问题欢迎私信留言。您也可以通过[Starwhale官网](https://starwhale.cn/)了解更多信息，感谢您的关注和支持。
