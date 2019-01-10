# color-design-helper

![](https://user-images.githubusercontent.com/25033420/50951006-af719180-14e6-11e9-86d7-24ea64585b5d.png)

**Just a toy, which can help color designers to generate color plates like ant-design**

Achieved `average color`、`tint-shade color`、`@antd-v3 color` three models

[Online address](http://zerolty.com/color-design-helper/)

[中文文档](https://github.com/renjie1996/color-design-helper/blob/master/docs/CN.md)

### average color
> only average cut two colors

![](https://user-images.githubusercontent.com/25033420/50901149-4b04f280-1452-11e9-9a37-9d2d59817302.png)

### tint-shade color
> like antd v1.0. The main color is mixed with pure white (#fff), and the main color and the pure white are divided into 100 parts, and the positions of 20/40/60/80 are respectively divided to obtain the color of 4/3/2/1;
> The main color is mixed with pure black (#000), and the main color and the pure black are divided into 100 parts, and the positions of 20/40/60/80 are respectively divided to obtain the color of 6/7/8/9;

![](https://user-images.githubusercontent.com/25033420/50901164-4e987980-1452-11e9-9f04-2751dbe805d7.png)

### @antd-v3 color
> Like the current antd, Decrement/increment with the value of the HSV model to get a complete gradient swatch

![](https://user-images.githubusercontent.com/25033420/50903156-e5b40000-1457-11e9-8b5a-d3781a4f89ac.png)

# Usage
`Just a static resource running locally`

> [antd-refs: https://ant.design/docs/spec/colors-cn](https://ant.design/docs/spec/colors-cn)

![](https://user-images.githubusercontent.com/25033420/50901576-a4215600-1453-11e9-9210-e7324273e386.png)


> run by MakeFile

- `make install`
- `make dev`
- `make test`
> you also can run by these ways

- `npm run start`
- `npm run build`
- `npm run test`

# License

MIT

Copyright (c) 2019 @renjie1996 @Shadowless @无影er
