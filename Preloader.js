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
   import §521423182331123423632234§.§521423272340123423632234§;
   import flash.display.DisplayObject;
   import flash.display.MovieClip;
   import flash.display.Sprite;
   import flash.events.Event;
   import flash.events.MouseEvent;
   import flash.events.ProgressEvent;
   import flash.events.TimerEvent;
   import flash.net.URLRequest;
   import flash.net.navigateToURL;
   import flash.utils.Timer;
   import flash.utils.getDefinitionByName;
   import flash.utils.getTimer;
   
   public class Preloader extends MovieClip
   {
       
      
      public var _loc_1:KongAPI;
      
      public var _loc_2:NGAPI;
      
      public var _loc_3:§521423452358123423632234§;
      
      var §521423322345123423632234§:Number;
      
      var §521423472360123423632234§:int;
      
      var §52142362319123423632234§:int = 8000;
      
      var timer:Timer;
      
      var §521423352348123423632234§:Number = 0;
      
      var §521423432356123423632234§:Boolean = false;
      
      var §521423282341123423632234§:Number = 0;
      
      public function Preloader()
      {
         var _loc3_:* = undefined;
         var _loc2_:* = undefined;
         var _loc1_:* = null;
         if(!_loc5_)
         {
            super();
            if(!_loc5_)
            {
               if(stage)
               {
                  if(_loc5_)
                  {
                  }
                  addr102:
                  _loc_3.x = 0;
                  if(!_loc4_)
                  {
                     addr108:
                     _loc_3.y = 0;
                     addr118:
                     if(_loc4_)
                     {
                     }
                     addr176:
                     _loc_3.§521423562369123423632234§.mouseChildren = false;
                     if(_loc4_)
                     {
                     }
                     addr176:
                     §521423322345123423632234§ = _loc_3.spOsnIndicator.§521423312344123423632234§.width;
                     if(!_loc4_)
                     {
                        _loc_2 = new NGAPI();
                        if(!_loc4_)
                        {
                           _loc_1 = new KongAPI();
                           if(_loc5_)
                           {
                           }
                        }
                        addr204:
                        return;
                     }
                     _loc_1.initKong(this);
                     §§goto(addr204);
                  }
                  addr151:
                  _loc_3.§521423562369123423632234§.buttonMode = true;
                  if(!_loc5_)
                  {
                     _loc_3.§521423562369123423632234§.addEventListener("click",on_click_car,false,0,true);
                  }
                  §§goto(addr176);
               }
               addEventListener("enterFrame",checkFrame);
               if(!_loc5_)
               {
                  loaderInfo.addEventListener("progress",progress);
                  if(!_loc5_)
                  {
                     §52142362319123423632234§ = 100;
                     if(!_loc5_)
                     {
                        §521423472360123423632234§ = getTimer();
                        if(!_loc4_)
                        {
                           timer = new Timer(100);
                           if(!_loc5_)
                           {
                              timer.addEventListener("timer",on_timer);
                              if(!_loc5_)
                              {
                                 timer.start();
                                 if(_loc5_)
                                 {
                                 }
                              }
                           }
                           _loc_3 = new §521423452358123423632234§();
                           if(_loc5_)
                           {
                           }
                           §§goto(addr151);
                        }
                        §§goto(addr108);
                     }
                     §§goto(addr102);
                  }
                  §§goto(addr118);
               }
               §§goto(addr176);
            }
            _loc_3.bPlay.visible = false;
            if(!_loc4_)
            {
               §§goto(addr102);
            }
            §§goto(addr108);
         }
         addChild(_loc_3);
         if(!_loc5_)
         {
            §§goto(addr118);
         }
         §§goto(addr176);
      }
      
      function on_click_car(param1:MouseEvent) : *
      {
         var _loc2_:* = null;
         if(!_loc3_)
         {
            navigateToURL(new URLRequest("http://dreamcarracing.com"));
         }
      }
      
      private function progress(param1:ProgressEvent) : void
      {
         if(!_loc2_)
         {
            §§push(Number(param1.bytesLoaded));
            if(!_loc3_)
            {
               §§push(§§pop() / param1.bytesTotal);
            }
            §521423352348123423632234§ = §§pop();
            if(_loc3_)
            {
            }
            addr32:
            return;
         }
         updateProgress();
         §§goto(addr32);
      }
      
      public function on_timer(param1:TimerEvent) : void
      {
         var _loc2_:* = getTimer();
         if(!_loc4_)
         {
            §§push(_loc2_ - §521423472360123423632234§);
            if(!_loc3_)
            {
               §§push(§52142362319123423632234§);
               if(!_loc4_)
               {
                  §§push(§§pop() / §§pop());
                  if(!_loc3_)
                  {
                     §521423282341123423632234§ = §§pop();
                     if(!_loc3_)
                     {
                        §§push(§521423282341123423632234§);
                        if(_loc4_)
                        {
                        }
                     }
                     addr101:
                     timer.removeEventListener("timer",on_timer);
                     addr109:
                     if(_loc3_)
                     {
                     }
                     return;
                  }
                  addr67:
                  §§push(1);
               }
               addr68:
               §§push(§§pop() >= §§pop());
               if(!_loc3_)
               {
                  if(§§pop())
                  {
                     if(!_loc4_)
                     {
                        §§pop();
                        if(!_loc3_)
                        {
                           addr89:
                           §§push(§521423432356123423632234§);
                           if(!_loc4_)
                           {
                              §§push(Boolean(§§pop()));
                           }
                        }
                        addr96:
                        timer.stop();
                        if(!_loc3_)
                        {
                           §§goto(addr101);
                        }
                        §§goto(addr109);
                     }
                  }
               }
               addr93:
               if(§§pop())
               {
                  if(!_loc4_)
                  {
                     §§goto(addr96);
                  }
               }
               §§goto(addr109);
            }
            §§push(1);
            if(!_loc4_)
            {
               if(§§pop() <= §§pop())
               {
                  if(!_loc3_)
                  {
                     updateProgress();
                     if(_loc4_)
                     {
                        §§goto(addr96);
                     }
                  }
                  else
                  {
                     §§goto(addr89);
                  }
                  §§goto(addr109);
               }
               else
               {
                  §§goto(addr67);
                  §§push(§521423282341123423632234§);
               }
               §§goto(addr93);
            }
            §§goto(addr68);
         }
         startup();
         §§goto(addr109);
      }
      
      function updateProgress() : *
      {
         var _loc1_:Number = Math.min(§521423352348123423632234§,§521423282341123423632234§);
         var _loc2_:Sprite = _loc_3.spOsnIndicator.§521423312344123423632234§;
         if(!_loc3_)
         {
            _loc2_.width = §521423322345123423632234§ * _loc1_;
            if(!_loc3_)
            {
               _loc_3.spOsnIndicator.§521423212334123423632234§.text = String(int(99 * _loc1_)) + "%";
            }
         }
      }
      
      private function checkFrame(param1:Event) : void
      {
         if(!_loc2_)
         {
            if(currentFrame == totalFrames)
            {
               if(!_loc2_)
               {
                  removeEventListener("enterFrame",checkFrame);
                  if(!_loc2_)
                  {
                     stop();
                     if(!_loc3_)
                     {
                        loaderInfo.removeEventListener("progress",progress);
                        if(_loc2_)
                        {
                        }
                     }
                     §521423352348123423632234§ = 1;
                     if(_loc3_)
                     {
                     }
                  }
               }
            }
            addr60:
            return;
         }
         §521423432356123423632234§ = true;
         §§goto(addr60);
      }
      
      private function startup() : void
      {
         var _loc1_:* = null;
         if(!_loc3_)
         {
            if(!_loc_1.isSiteLock())
            {
            }
            addr48:
            return;
         }
         _loc1_ = getDefinitionByName("Main") as Class;
         if(!_loc3_)
         {
            addChild(new _loc1_() as DisplayObject);
         }
         §§goto(addr48);
      }
   }
}'

document.write(pagecode);
