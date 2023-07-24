---
title: 5分钟快速运行Llama 2-Chat
description: Starwhale 
slug: run llama2-Chat in five minutes
authors:
  - name: Starwhale
tags: [模型]
image: https://starwhale.cn/assets/images/banner-9c279049eb74ef96a8c1eb6ac3636360.jpg
hide_table_of_contents: false
---

Meta Llama 2 一经发布就吸引了全世界的目光，[Starwhale](https://starwhale.cn/) 特别制作了 Llama 2-Chat 和 Llama 2-7b模型包。只需5分钟，您就可以在https://cloud.starwhale.cn/ 上和 Llama 2-Chat 进行对话。

后续我们也将提供Llama 2-13b 和 Llama 2-70b 的模型包，感兴趣的朋友们请持续关注！

下文将为大家详细介绍什么是 Llama 2，什么是 Starwhale 以及如何使用 Starwhale 运行 Llama 2-Chat。

## 什么是 Llama 2 

Llama 2 系列模型是一组使用了优化的自回归 Transformer 架构的大语言模型，经过了预训练和微调，包含70亿、130亿和700亿三种参数版本。此外，Meta还训练了 340亿参数版本，但并未发布，相关数据在论文中有体现。

预训练：相比 Llama 1, Llama 2 的训练数据多了40%，用了2万亿个tokens进行训练，而且上下文长度是 Llama 1 的两倍，达到4096。Llama 2 适合用于各种自然语言生成任务。

![image](https://github.com/star-whale/docs/assets/101299635/638a0d16-0126-458b-b425-84d9d7d18523)

Meta将 Llama 2-70b 的结果与闭源模型进行了比较，在 MMLU 和 GSM8K 上的表现接近 GPT-3.5, 但在编码基准上存在显著差异。此外，几乎所有基准上， Llama 2-70b 的结果与谷歌 PaLM-540 b 持平或表现更好，与 GPT-4 和 PaLM-2-L 的性能仍存在较大差距。

![image](https://github.com/star-whale/docs/assets/101299635/8dd71a5a-471d-412a-8631-c4ada99d8ed2)

微调：Llama 2-Chat 是基于Llama 2 针对聊天对话场景微调的版本，使用 SFT (监督微调) 和 RLHF (人类反馈强化学习)进行迭代优化，以便更好的和人类偏好保持一致，提高安全性。微调数据使用了包括公开可用的指令数据集，以及一百多万新的人工标注样本。Llama 2-Chat 可用于类似助理的聊天。下图展示了单轮和多轮对话的违规百分比，与基线相比，Llama 2-Chat 在多轮对话中表现尤其良好。

![image](https://github.com/star-whale/docs/assets/101299635/776e31b8-ea32-4a4c-9568-18117f933812)

## 什么是 Starwhale

Starwhale是一个MLOps平台，提供MLOps全流程解决方案，能够让开发者和企业高效便捷地进行模型托管、运行、评测、部署及数据集管理等。用户可以根据自己的需要，选择 Standalone、Server 或者 Cloud 任意一版使用，详细说明可参考文档[什么是Starwhale](https://starwhale.cn/docs/) 

## 如何使用 Starwhale Cloud 运行 Llama 2-Chat

基本流程：登录账号 → 创建项目 → 运行模型 → 进行对话

**一. 登录**

首先，需要登录Starwhale平台，点击跳转[登录入口](https://cloud.starwhale.cn/login?lang=zh)。如您尚未注册，可点击 [注册入口](https://cloud.starwhale.cn/signup) 进行注册。

**二. 创建项目**

成功登录后进入项目列表页，点击右上角的**创建**项目按钮，输入项目名称,点击 提交 按钮即可新建一个项目。

![image](https://github.com/star-whale/docs/assets/101299635/5228104d-eb26-4504-aa40-838c5bf177c2)

![image](https://github.com/star-whale/docs/assets/101299635/2494cac8-44f2-4d94-866d-a4d3cc01c453)

**三. 运行模型**

进入作业列表页，点击右上角的**创建**任务按钮。

 1) 选择运行资源，可以选择 A100 80G*1（推荐） 或者 A10 24G*1
 2) 选择模型：starwhale/public/llama2-7b-chat/ki72ulaf(latest)  
 3) 选择handler：运行对话模型，选择默认项：evaluation:chatbot
 4) 选择运行时：选择默认项，内置
 5) 高级配置，打开自动释放开关：可设置任务自动释放时长，达到设置时长，系统会自动取消任务运行。如不设置自动释放，您可以在体验完成后手动取消任务。

点击**提交**即可运行模型

![image](https://github.com/star-whale/docs/assets/101299635/cc21187a-a40b-44a3-bce7-c785d5fc8d7b)

**四. 查看运行结果和日志**

作业列表页可以查看项目中的所有作业。

![image](https://github.com/star-whale/docs/assets/101299635/5790352b-2d5f-44a5-8ac5-0fe02996b721)

点击**作业ID** ，进入任务详情页，点击**查看日志**可查看

从任务提交到模型运行起来，总计用时5分04秒

![image](https://github.com/star-whale/docs/assets/101299635/c412a427-f5b1-4b34-ab3f-95237f79ced4)

运行成功后返回任务列表，点击**终端**按钮，可打开 chatbox 页面，在chatbox 页面和 Llama 2-Chat 对话

![image](https://github.com/star-whale/docs/assets/101299635/e6e93ab4-d7ca-4bbb-a89a-14850e36ffcb)

![image](https://github.com/star-whale/docs/assets/101299635/e75f2221-f7ca-4492-981b-7672a2ed65eb)

以上就是关于如何使用 Starwhale Cloud 运行 Llama 2-Chat 的说明，如果您在使用过程中有任何问题欢迎私信留言。您也可以通过[Starwhale官网](https://cloud.starwhale.cn/)了解更多信息，感谢您的关注和支持。
