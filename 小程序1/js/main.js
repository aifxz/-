const ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
  	//绘制
    ctx.fillStyle = '#ffffff'
    ctx.fillText('Hello World', canvas.width*0.4, canvas.height/2)

    this.touchHandler = function (e) {
	    e.preventDefault()
	
	    const x = e.touches[0].clientX
	    const y = e.touches[0].clientY
	    //测试触点
	    console.log('touch event', { x, y })
	}
	  
    canvas.addEventListener('touchstart', this.touchHandler)
  }
}

