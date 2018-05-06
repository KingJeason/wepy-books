# wepy-books


用wepy做的图书借阅系统
## 功能说明
[功能说明](http://www.cnsoftbei.com/bencandy.php?fid=148&aid=1532)
#### 主页展示(轮播图,借阅排名,今日推荐)
![Index](http://or9d9eqg0.bkt.clouddn.com/index.gif)
#### 分类书籍
![classify](http://or9d9eqg0.bkt.clouddn.com/classify1.gif)
#### 个人中心
![Me](http://or9d9eqg0.bkt.clouddn.com/me2.gif)
#### 搜索书籍
![Query](http://or9d9eqg0.bkt.clouddn.com/query.gif)
#### 书籍详情
![bookdetail](http://or9d9eqg0.bkt.clouddn.com/bookdetail1.gif)
#### 书包(购物车)
![Bag](http://or9d9eqg0.bkt.clouddn.com/bag1.gif)
#### 收藏,借阅,我的消息
![Lend](http://or9d9eqg0.bkt.clouddn.com/lend.gif)
#### 智能客服
![Robot](http://or9d9eqg0.bkt.clouddn.com/robot.gif)

## 体验步骤
### 1. 安装 wepy
本项目基于wepy开发，[参考这里](https://github.com/wepyjs/wepy)
```bash
npm install wepy-cli -g
```

### 2. 下载源代码
```bash
git clone https://github.com/KingJeason/wepy-books.git
```

### 3. 安装开发依赖
```bash
npm install
```

### 4. 编译源代码
```bash
wepy build
```

### 5.导入至开发者工具

编译完成后会生成`dist`目录，开发者工具本地开发目录指向`dist`目录。

**切记： 取消勾选`项目-->开启ES6转ES5`，否则代码运行出现如下错误。**
![qq 20161129203744](https://cloud.githubusercontent.com/assets/2182004/20710080/bfe6d6b6-b673-11e6-8837-07d0c2fb6953.png)

### 6.增加域名
由于此小程序的大部份资源都是从服务器端请求的,所以请在后台配置相关域名
* https://www.learningwang.top
* https://api.douban.com
* https://restapi.amap.com
