## 使用方法

```js
//引入index.js new出实例
let csscontent = new CssCornetto();
csscontent.config({
        el: "app",
        container:
            [{
                name: "littleblack"
            }]
}).Cornettolode();
```
## 配置参数

#### config 方法

|  参数顺序   |  值 | 类型 | 介绍| 是否必传|
|   ----     |  ----| ---- | ----  |----  |
|  1   | el |string | 需要加载到的容器只能为id| 是|
|  2   | container |Array | 配置需要加载的组件 | 是|

```js
// container参数 实例
let container = [{
   name:"littleblack" //组件名
}]
```
#### 可用组件
|  组件名  |   介绍| 
|   ----     |  ----| 
|littleblack|小黑|


### CssCornetto 方法

|  方法名  |   介绍| 
|   ----     |  ----| 
|config|配置|
|Cornettolode|加载渲染|
