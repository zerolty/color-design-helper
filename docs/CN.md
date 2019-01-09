# color-design-helper

**一个帮助设计师的调色板的小玩具**

[线上地址](https://renjie1996.github.io)

完成了 `average color`、`tint-shade color`、`@antd-v3 color` 三种模式

### average color
> 仅仅平均切割两种颜色

![](https://user-images.githubusercontent.com/25033420/50901149-4b04f280-1452-11e9-9a37-9d2d59817302.png)

### tint-shade color
> andv第一版. 将主色与纯白色(#fff)混合，主色与纯白色之间分成 100 份， 20/40/60/80 的位置分别分割，得到 4/3/2/1 号色;
> 将主色与纯黑色(#000)混合，主色与纯黑色之间分成 100 份， 20/40/60/80 的位置分别分割，得到 6/7/8/9 号色。

![](https://user-images.githubusercontent.com/25033420/50901164-4e987980-1452-11e9-9f04-2751dbe805d7.png)

### @antd-v3 color
> 目前antd的色彩生成版本，用 HSV 模型的值进行递减/递增得到完整渐变色板

![](https://user-images.githubusercontent.com/25033420/50901171-522c0080-1452-11e9-99ee-79ed1676a1cc.png)

# Usage
`仅仅是运行在本地的静态资源`

> 使用MakeFile运行

- `make install`
- `make dev`
- `make test`

> 使用npm运行

- `npm run start`
- `npm run build`
- `npm run test`


> [参考antd: https://ant.design/docs/spec/colors-cn](https://ant.design/docs/spec/colors-cn)

![](https://user-images.githubusercontent.com/25033420/50901576-a4215600-1453-11e9-9210-e7324273e386.png)

# License

MIT

Copyright (c) 2019 @renjie1996 @Shadowless @无影er
