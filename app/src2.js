import document from "document";
import * as fs from "fs";
import * as common from "./common";

let num_list_items = 29;
let data_file_name = "diaper_list.txt";

let list_items = [];
let list_datas = [];
let data = undefined;

export function init() {

    // Delete option for testing
    // fs.unlinkSync(data_file_name);

    // Gather all the list items
    for (let i = 0; i < num_list_items; i++) {
       let list_item =  document.getElementById(`#listItem${i}`);
       list_items.push(list_item);
    }

    // Load the data list
    if(fs.existsSync(data_file_name)){
        let data_str = fs.readFileSync(data_file_name, "utf-8");
        data = JSON.parse(data_str);
    }
    else{
        data = [];
    }

    update_ui(data);

}

function update_ui(data){
    for(let i = 0; i < data.length; i++)
    {
        console.log("=================="+i+"=========");
        // Get the things to update.
        let diaper_type = list_items[i].getElementById("diaper_type");
        diaper_type.text = data[i].diaper;
        let diaper_date = list_items[i].getElementById("diaper_date");
        let d_time = new Date(data[i].time);
        let min_text = `${d_time.getMinutes() < 10? `0${d_time.getMinutes()}`:`${d_time.getMinutes()}`}`;
        diaper_date.text = `${d_time.getMonth()+1}/${d_time.getDate()+1} ${d_time.getHours()}:${min_text}`;
        common.show(list_items[i], true);

        
        // Make sure to remove the color class when changing again.
        common.removeClass(list_items[i], "poopy_text");
        
        // Change text color class. 
        switch(data[i].diaper)
        {
            case common.enum_diaper.wet:
                list_items[i].style.fill ="aqua";
                break;

            case common.enum_diaper.poopy:
                list_items[i].style.fill ="saddlebrown";
                break;

            case common.enum_diaper.mix:
                list_items[i].style.fill ="fb-green";
                break;
        }

    }
}

export function add_data(data_) {

    console.log(`Adding Data: ${JSON.stringify(data_,null,2)}`);

    if(!data) data = [];
    
    data.unshift(data_);

    if(data.length > num_list_items) data = data.slice(0,num_list_items);

    fs.writeFileSync(data_file_name, JSON.stringify(data), "utf-8");

    update_ui(data);
}