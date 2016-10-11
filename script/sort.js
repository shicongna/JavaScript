var arr=(function(){
	var data=[
			{
				name:"小赵",
				age:"12",
				grade:99
			},
			{
				name:"小钱",
				age:"15",
				grade:92	
			},
			{
				name:"小孙",
				age:"18",
				grade:91
			},
			{
				name:"小李",
				age:"13",
				grade:88
			},
			{
				name:"小明",
				age:"14",
				grade:87
			},
			{
				name:"小亮",
				age:"11",
				grade:81
			}
		]
		return {
			data:data,
			bubblesort:function(member){
				var len=this.data.length;
				for(var i=len;i>=2;i--){
					for(var j=0;j<i-1;j++){
						if(this.data[j][member]>this.data[j+1][member]){
							var m=this.data[j];
							this.data[j]=this.data[j+1];
							 this.data[j+1]=m;
						}
					}
				}
			},
			age:function(){
				this.bubblesort("age")
			},
			grade:function(){
				this.bubblesort("grade")
			}
		}
})()