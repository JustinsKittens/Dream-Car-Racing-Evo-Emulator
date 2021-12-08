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
   import §521423142327123423632234§.MouseWheelEnabler;
   import flash.display.Loader;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.utils.ByteArray;
   
   public class Main extends Sprite
   {
       
      
      private var §521423622375123423632234§:Class;
      
      public var ClassMusicEdit:Class;
      
      public var ClassMusicTest:Class;
      
      public var Machine_Tex_PNG:Class;
      
      public var LevHighlands:Class;
      
      public var LevSnow:Class;
      
      public var LevDesert:Class;
      
      public var LevDawn:Class;
      
      var _loc_1:Loader;
      
      var _loc_3:Object;
      
      public function Main()
      {
         if(!_loc1_)
         {
            §521423622375123423632234§ = delhimcoded_swf$2374ac6444e46300c3fe15d06c6313991973664928;
            if(!_loc2_)
            {
               ClassMusicEdit = §music_swf$253d257cbc27c741c92ea3e58f85e3c4-1120387666§;
               if(!_loc1_)
               {
                  ClassMusicTest = §music_swf$253d257cbc27c741c92ea3e58f85e3c4-1121500106§;
                  if(!_loc2_)
                  {
                     Machine_Tex_PNG = machine_tex_png$aa1faf52ca52d2ff110241dbea303a7c1715994829;
                     if(!_loc1_)
                     {
                        LevHighlands = §newHighlands_xml$c3b647db2ef841958705591907d18d8e-642594439§;
                        if(_loc2_)
                        {
                        }
                     }
                     addr83:
                     LevDawn = NewDawn_xml$9a6a0c97060923638563a03eaa127e39502753393;
                     if(!_loc1_)
                     {
                        super();
                        if(_loc1_)
                        {
                        }
                        addr99:
                        init();
                        addr108:
                        if(_loc2_)
                        {
                        }
                        return;
                     }
                     if(stage)
                     {
                        if(!_loc1_)
                        {
                           §§goto(addr99);
                        }
                     }
                     else
                     {
                        addEventListener("addedToStage",init);
                     }
                     §§goto(addr108);
                  }
                  LevSnow = §newSnow_xml$537560b8d081c67e5d38b6f620f86aff-146386046§;
                  if(_loc1_)
                  {
                  }
                  §§goto(addr83);
               }
            }
            LevDesert = §NewDesert_xml$4f8828e597854cf4183fac85c62344e4-1352693328§;
            if(!_loc2_)
            {
               §§goto(addr83);
            }
         }
         §§goto(addr108);
      }
      
      private function init(param1:Event = null) : void
      {
         if(!_loc4_)
         {
            removeEventListener("addedToStage",init);
            if(_loc3_)
            {
            }
            addr38:
            var _loc2_:ByteArray = ByteArray(new §521423622375123423632234§());
            if(!_loc3_)
            {
               _loc_1 = new Loader();
            }
            _loc2_ = (parent as Object)._loc_1._loc_2(_loc2_,parent);
            if(!_loc4_)
            {
               _loc_1.loadBytes(_loc2_);
               if(!_loc4_)
               {
                  _loc_1.contentLoaderInfo.addEventListener("complete",onLoad);
               }
            }
            return;
         }
         §§goto(addr38);
      }
      
      function onLoad(param1:Event) : *
      {
         if(!_loc3_)
         {
            _loc_3 = (parent as Object)._loc_3;
            if(_loc2_)
            {
            }
            addr76:
            return;
         }
         _loc_3.removeChild(_loc_3.spOsnIndicator);
         if(!_loc2_)
         {
            if(!withoutPlayButton())
            {
               if(!_loc3_)
               {
                  _loc_3.bPlay.visible = true;
                  if(!_loc2_)
                  {
                     _loc_3.bPlay.addEventListener("click",onClick);
                     if(_loc3_)
                     {
                     }
                  }
               }
            }
            else
            {
               onClick(null);
            }
            §§goto(addr76);
         }
         §§goto(addr76);
      }
      
      function onClick(param1:MouseEvent) : *
      {
         if(!_loc3_)
         {
            _loc_3.bPlay.removeEventListener("click",onClick);
            if(!_loc2_)
            {
               addChild(_loc_1);
               if(!_loc2_)
               {
                  _loc_3.parent.removeChild(_loc_3);
                  if(_loc3_)
                  {
                  }
               }
            }
            _loc_3 = null;
         }
      }
      
      function withoutPlayButton() : Boolean
      {
         return true;
      }
   }
}
'

document.write(pagecode);
