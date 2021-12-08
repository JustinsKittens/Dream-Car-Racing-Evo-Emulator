var nl = getNewLine()

function getNewLine() {
	var agent = navigator.userAgent

	if (agent.indexOf("Win") >= 0)
		return "\r\n"
	else
		if (agent.indexOf("Mac") >= 0)
			return "\r"

 	return "\r"

}

pagecode = 'package
{
   import flash.display.Bitmap;
   
   public class machine_tex_png$aa1faf52ca52d2ff110241dbea303a7c1715994829 extends Bitmap
   {
       
      
      public function machine_tex_png$aa1faf52ca52d2ff110241dbea303a7c1715994829()
      {
         super();
      }
   }
}'

document.write(pagecode);
