
import Main from './js/main';
import Util from './util.js';
import Gesture from './gesture.js';

const MoveDire = {
  //方向数据枚举
};

const Colors = {
  //这里改颜色配置
};
// 延迟0.2s更新频率
const maxSpeed = 200;

export default class Game {
	constructor(canvas, context) {
	    this.data.canvas = {
	      canvA: context,
	      width: canvas.width,
	      height: canvas.height
	    };
	    //图层列表
	    this.data.layers = [];
	    //实现添加图片到图层列表的方法
	    this.addLayer = function (callback) {
	      //...省略了
	    };
	    //实现绘制图层的方法
	    this.redrawLayers = function () {
	      //...省略了
	    };
	    //可以在绘制前调用的方法
	    this.onReady();
  }
  //定义游戏数据
  data = {
    config: {
      gridSize: 10,//网格大小
      drawGrid: false,//绘制网格
      snakeMinLength: 3,//初始蛇身长度
      speed: 5,//初始移动速度 1~5
      wellCount: 10,//墙壁数量
    },
    food: null,
    snake: [],
    snakeDire: MoveDire.u,
    wall: [],
    timer: null,
    gestures: {},
    isEndGame: true,
  }

  onReady() {
    this.canvA_drawBg();
    this.addLayer(() => {
      this.canvC_drawSnake();
      this.canvB_drawFood();
      this.data.isEndGame = false;
      this.redraw();
    });
  }


}

new Main();
