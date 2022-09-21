var canvas = new fabric.Canvas('Minecraft_Canvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_objects =""; 

var block_image_object="";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img){
        player_objects = Img;

        player_objects.scaleToWidth(150);
        player_objects.scaleToHeight(140);
        player_objects.set({
          top:player_y,
          left:player_x
        })
        canvas.add(player_objects);
    })
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img){
        block_image_object = Img;

        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)
        block_image_object.set({
            top: player_y,
            left: player_x
        })
        canvas.add(block_image_object);
    })
}

window.addEventListener("keydown", Minecraft_Key_down)

function Minecraft_Key_down(Mine)
{
    var keypressed=Mine.keyCode
    console.log(keypressed)

    if(keypressed=="37")
    {
        left()
    }

    if(keypressed=="38")
    {
        up()
    }

    if(keypressed=="39")
    {
        right()
    }

    if(keypressed=="40")
    {
        down()
    }

    if(keypressed=="87")
    {
        new_image("wall.jpg")
    }

    if(keypressed=="89")
    {
        new_image("yellow_wall.png")
    }

    if(keypressed=="67")
    {
        new_image("cloud.jpg")
    }

    if(keypressed=="68")
    {
        new_image("dark_green.png")
    }

    if(keypressed=="71")
    {
        new_image("ground.png")
    }    

    if(keypressed=="76")
    {
        new_image("light_green.png")
    }

    if(keypressed=="82")
    {
        new_image("roof.png")
    }

    if(keypressed=="84")
    {
        new_image("trunk.jpg")
    }

    if(keypressed=="85")
    {
        new_image("unique.png")
    }
}

function up()
{
    if(player_y>=0)
    {
        player_y=player_y-block_image_height
        Minecraft_Canvas.remove(player_objects)
        
        player_update()
    }

}

function down()
{
    if(player_y<=400)
    {
        player_y=player_y+block_image_height
        canvas.remove(player_objects)
        
        player_update()
    }

}



function left()
{
    if(player_x>=0)
    {
        player_x=player_x-block_image_width
        canvas.remove(player_objects)
        
        player_update()
    }

}

function right()
{
    if(player_y<=900)
    {
        player_x=player_x-block_image_width
        canvas.remove(player_objects)
        
        player_update()

    
    }

}












