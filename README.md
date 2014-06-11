#简单易用的前端压缩工具(simple tool)

## 安装

```shell
npm install -g spt
```

## 用法

> 对一个目录进行压缩，把结果发布到另一个目录里

```shell
spt release -r dirA -od dirB
```

> 对一个目录进行压缩，并监听文件变化，把结果实时发布到另一个目录里

```shell
spt release -r 目录A -wod 目录B
```

## 功能

1. js、css、png图片压缩
1. 图片压缩不用安装其他外部依赖
1. 文件变化监听
1. 无需配置
