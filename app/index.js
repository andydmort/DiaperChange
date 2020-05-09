import document from "document";
import * as src2 from "./src2";
import * as common from "./common";

// Start up screen 2
src2.init();

let poop_btn = document.getElementById("poopy_button");
let wet_btn = document.getElementById("wet_button");
let mix_btn = document.getElementById("mix_button");

let status_text = document.getElementById("status_text");

let status_text_timeout = undefined;

function ui_update(color, type)
{
    let t_now = new Date();
    status_text.text = `${type} diaper recorded ${t_now.getHours()}:${t_now.getMinutes()}:${t_now.getSeconds()}`;
    status_text.style.fill = color;

    if(status_text_timeout)
        clearTimeout(status_text_timeout);
    
    status_text_timeout = setTimeout(()=>{
        common.show(status_text, false);    
    }, 3000);
    
    common.show(status_text, true);
}


wet_btn.onactivate = function (evt) {
    let data = {
        diaper: common.enum_diaper.wet,
        time: (new Date()).getTime()
    }
    src2.add_data(data);
    ui_update("aqua", common.enum_diaper.wet);
}
poop_btn.onactivate = function (evt) {
    let data = {
        diaper: common.enum_diaper.poopy,
        time: (new Date()).getTime()
    }
    src2.add_data(data);
    ui_update("saddlebrown", common.enum_diaper.poopy);
}
mix_btn.onactivate = function (evt) {
    let data = {
        diaper: common.enum_diaper.mix,
        time: (new Date()).getTime()
    }
    src2.add_data(data);
    ui_update("fb-green", common.enum_diaper.mix);
}