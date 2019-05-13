# Swpie-to-Feedback-Card
一个自制且无外部依赖的、用于原生微信小程序的左右滑动卡片选择喜好的UI组件。
类似 Tinder、探探 和 Aloha 等软件的社交推荐选择交互操作。
本组件基于原生微信元素和JS实现，不依赖于第三方库。

## 使用示例
引入components文件夹中的swipe-to-feedback 组件到你的微信小程序项目的components文件夹，
并在app.json或要使用的页面的json配置文件中注册组件，并在wxml文件中写入

```
<swipe-to-feedback-card list="{{cardList}}"  empty-description="这里放入没有卡片时的描述" bindonlike="onLike" bindondislike="onDislike"/>

```
其中 cardList 是表示卡片内容的数组，格式样例如下:
```
{
	id: 0, // id 必须唯一不可重复
	type: "image",
	url: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=328517395,2303970886&fm=27&gp=0.jpg", // 卡片图片的 URL
	title: "卡片1标题",
	subtitle: "卡片1副标题",
	description: "卡片1描述",
	navigateUrl: "/pages/index/index" // 点击卡片时重定向导航的目标链接
}, {
	id: 1, // id 必须唯一不可重复
	type: "image",
	url: "http://img4.imgtn.bdimg.com/it/u=3300954562,1274487754&fm=26&gp=0.jpg", // 卡片图片的 URL
	title: "卡片2标题",
	subtitle: "卡片2副标题",
	description: "卡片2描述",
	navigateUrl: "/pages/index/index" // 点击卡片时重定向导航的目标链接
}
```

## 回调绑定
示例中 xml 标签里的 bindonlike 和 bindondislike 是负责处理用户回调的函数，
示例中onLike 是用户触发喜欢的回调函数，onDislike 是用户触发不喜欢的回调函数。

这两个回调函数均有一个输入，输入值为被操作的卡片对应的对象。
例如：
```
{
	id: 1, // id 必须唯一不可重复
	type: "image",
	url: "http://img4.imgtn.bdimg.com/it/u=3300954562,1274487754&fm=26&gp=0.jpg", // 卡片图片的 URL
	title: "卡片2标题",
	subtitle: "卡片2副标题",
	description: "卡片2描述",
	navigateUrl: "/pages/index/index" // 点击卡片时重定向导航的目标链接
}
```

## Demo
<img src="https://github.com/Cheelem/Swpie-to-Feedback-Card/blob/master/images/swipe-to-feed-back-card-sample.gif?raw=true"  height="647" width="366">

## 其他声明
示例中使用了随机从网络搜寻的两个图片，若有存在版权问题，请即告知。



