---
title: 产品计费概述
---

Starwhale支持按量付费，按量付费是一种先使用后付费的计费方式。通过按量付费，您可以按资源使用量付费，不需要提前购买大量资源。

## 计费说明

### 计费项

Starwhale根据您选购的资源规格（CPU、GPU、内存）及使用时长进行计费。

### 计费方式

Starwhale支持按量付费，按量付费是一种先使用后付费的计费方式。通过按量付费，您可以按资源使用量付费，不需要提前购买大量资源。

按量付费主要按照资源计费周期计费，在每个结算周期生成账单并从账户中扣除相应费用。创建Job时，需要确定计算资源配置。

请确保您在Job运行期间可用余额充足，如果在Job运行过程中，您的账户余额不足，会导致Job无法完成并按照已运行时长收费。

### 开通要求

按照按量付费创建Job前，您的Starwahle账户可用余额不得小于一个计费周期。

说明：账户可用余额=充值金额+代金券金额-已消费金额-已退款金额-已冻结金额

### 计费周期

每5分钟为一个计费周期，不足5分钟则按5分钟计算，按照Job运行时长结算。

### 计费时长

从Job开始运行时计费，到Job运行结束后结束计费

## 账单明细

登录账户中心，点击“账户管理”，可在账户概览页面查看最近账单明细，点击"全部账单”，可跳转查看全部账单明细。详细操作流程请参见[账单明细](https://github.com/lijing-susan/docs/blob/account-and-billing/i18n/zh/docusaurus-plugin-content-docs/current/instances/cloud/accound-and-billing/bills.md)

## 欠费说明

如果账号内存在欠费账单，您无法继续使用计算资源。尽快充值结清欠费账单后可继续使用。

### 查看欠费金额

1 登录账户中心

2 在**账户概览**可查看欠费金额

## 退款说明

现金余额支持退款

需要登录账户中心，点击**账户管理>充值订单**，可退款的充值订单会在**操作列**显示**退款**按钮。点击可发起退款申请，详细操作流程请参见[申请退款](https://github.com/lijing-susan/docs/blob/account-and-billing/i18n/zh/docusaurus-plugin-content-docs/current/instances/cloud/accound-and-billing/refund.md)
