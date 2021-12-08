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
   public class NGAPI
   {
       
      
      public var _loc_1:int = 2;
      
      public function NGAPI()
      {
         if(!_loc2_)
         {
            super();
         }
      }
   }
}'

document.write(pagecode);
