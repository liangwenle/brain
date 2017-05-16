'use strict'
class Neurons{
	constructor(opt){
		this.id = this.grandomId()
		this.beforeNeurons = opt.beforeNeurons||[] // ['id','id2'] 
		this.afterNeurons = opt.afterNeurons||[] // [{id:'', weights:''}]
	}
	grandomId(){
		return `${new Date().getTime()}_${Math.random()}`.replace(/\_0\./,'');
	}

	run(){}
	output(){}

	

}

module.exports = Neurons;