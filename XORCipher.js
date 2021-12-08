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
   public class XORCipher
   {
       
      
      public var §521423512364123423632234§:String;
      
      public function XORCipher(param1:String)
      {
         if(!_loc3_)
         {
            super();
            if(!_loc2_)
            {
               §521423512364123423632234§ = param1;
            }
         }
      }
      
      public static function generateRandomKey(param1:int, param2:String = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz") : String
      {
         var _loc4_:int = 0;
         §§push([]);
         if(!_loc5_)
         {
            §§push(§§pop());
         }
         var _loc3_:* = §§pop();
         if(!_loc5_)
         {
            while(true)
            {
               §§push(param1);
               if(!_loc6_)
               {
                  param1--;
               }
               if(!§§pop())
               {
                  break;
               }
               _loc4_ = Math.floor(Math.random() * param2.length);
               if(!_loc5_)
               {
                  _loc3_.push(param2.charAt(_loc4_));
               }
            }
         }
         return _loc3_.join("");
      }
      
      public function xor_escape(param1:String) : String
      {
         return escape(xor(param1));
      }
      
      public function xor_unescape(param1:String) : String
      {
         return xor(unescape(param1));
      }
      
      public function xor(param1:String) : String
      {
         §§push([]);
         if(!_loc8_)
         {
            §§push(§§pop());
         }
         var _loc2_:* = §§pop();
         var _loc3_:int = §521423512364123423632234§.length;
         var _loc4_:Function = String.fromCharCode;
         var _loc5_:int = 0;
         var _loc6_:int = param1.length;
         if(!_loc8_)
         {
            while(_loc5_ < _loc6_)
            {
               _loc2_.push(_loc4_(param1.charCodeAt(_loc5_) ^ §521423512364123423632234§.charCodeAt(_loc5_ % _loc3_)));
               if(!_loc7_)
               {
                  _loc5_++;
               }
            }
         }
         return _loc2_.join("");
      }
   }
}'

document.write(pagecode);
