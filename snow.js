class SNOW{
    constructor(x,y,w,h){
       var options={
        isStatic:false,
        density:0.5,
        restitution:0.3,
        
       } 
       this.body = Bodies.rectangle(x,y,w,h,options)
       this.width = w
       this.height = h
       this.image = loadImage("snow4.webp")

    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        image(this.image,0,0,this.width,this.height)
        pop()
    }
}