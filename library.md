#### webAPI

- 观察者API[IntersectionObserver](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

	```javascript
	// 创建观察对象实例
	const observer = new IntersectionObserver(callback[, options])
	// callback 被观察dom进入可视区离开可视区都会触发
	// - 两个回调参数 entries , observer
	// - entries 被观察的元素信息对象的数组 [{元素信息},{}]，信息中isIntersecting判断进入或离开
	// - observer 就是观察实例
	// options 配置参数
	// - 三个配置属性 root rootMargin threshold
	// - root 基于的滚动容器，默认是document
	// - rootMargin 容器有没有外边距
	// - threshold 交叉的比例
	
	// 实例提供两个方法
	// observe(dom) 观察哪个dom
	// unobserve(dom) 停止观察那个dom
	```


