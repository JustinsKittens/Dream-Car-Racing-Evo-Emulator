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
   import flash.utils.ByteArray;
   
   public class NewDawn_xml$9a6a0c97060923638563a03eaa127e39502753393 extends ByteArray
   {
       
      
      public function NewDawn_xml$9a6a0c97060923638563a03eaa127e39502753393()
      {
         super();
      }
   }
}'

document.write(pagecode);
