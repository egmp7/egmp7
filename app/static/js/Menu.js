class Menu 
{
    show = true;

    constructor()
    {
    }

    draw = function ()
    {
        if (this.show)
        {
            fill(125)
            rect(0,0,width,height)
        }
    }

    setShow = function ( bool )
    {
        this.show = bool
    }
}