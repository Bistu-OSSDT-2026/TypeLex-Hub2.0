# Contributing Guide

感谢参与 TypeLex-Hub2.0 项目建设。本项目为开源软件开发课程实践项目，成员通过 Issue、分支、Pull Request 和 Review 完成协作开发。

## 1. 任务认领

1. 项目任务通过 GitHub Issue 进行拆分和跟踪。
2. 成员根据分工在 Issue 下回复认领任务。
3. 一个任务完成后，应在对应 Pull Request 中关联 Issue。

## 2. 分支规范

- main：稳定分支，只保存可以运行的版本。
- feature/xxx：新增功能。
- fix/xxx：问题修复。
- docs/xxx：文档修改。
- style/xxx：页面样式调整。

## 3. Pull Request 规范

提交 Pull Request 时需要说明：

1. 本次修改了什么；
2. 关联哪个 Issue；
3. 如何测试；
4. 是否影响已有页面或功能。

## 4. Review 规范

Pull Request 合并前至少由一名非作者成员检查。检查内容包括：

1. 页面是否能正常打开；
2. 功能流程是否可用；
3. 文件结构是否清晰；
4. README 或说明文档是否需要同步更新。

## 5. 测试要求

合并前至少进行一次手动运行检查。涉及核心文件的修改，应确认 HTML、CSS、JS 和页面资源没有缺失。

## 6. 版本发布

形成稳定版本后，由组长创建 Tag 和 GitHub Release，并在 Release Notes 中说明本版本完成的功能和测试情况。
