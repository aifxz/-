import Game from './Game.js'

const ctx = canvas.getContext('2d')

/**
 * 游戏主函数
 */
export default class Main {
  constructor() {
	// 创建游戏对象实例
    const game = new Game(canvas,ctx)
    // 游戏的触摸事件处理逻辑
    this.touchStartHandler = function (e) {
      e.preventDefault()
      game.onTouchStart({ touches:e.touches.map(t=>{
        return { x:t.pageX, y:t.pageY }
      })})
    }
    this.touchMoveHandler = function (e) {
      e.preventDefault()
      game.onTouchMove({ touches:e.touches.map(t=>{
        return { x:t.pageX, y:t.pageY }
      })})
    }
    this.touchEndHandler = function () {
      game.onTouchEnd()
    }
    //添加触摸开始事件
    canvas.addEventListener('touchstart', this.touchStartHandler) 
    //添加触摸移动事件
    canvas.addEventListener('touchmove', this.touchMoveHandler)
    //添加触摸结束事件
    canvas.addEventListener('touchend', this.touchEndHandler)
    this.game = game;
  }

}

