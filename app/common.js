export function show(doc_el, show) {
    if (show) {
        doc_el.class = doc_el.class.replace("hidden", "");
    }
    else {
        if(doc_el.class.indexOf("hidden") == -1)
            doc_el.class += " hidden";
    }
}

export function removeClass(doc_el, class_name)
{
    // console.log(`Removoing class: ${class_name} from ${doc_el.class}`);
    doc_el.class.replace(class_name, "");
    // console.log(`Removed class: ${class_name} from ${doc_el.class}`);
}

export function addClass(doc_el, class_name)
{
    // console.log(`Adding class: ${class_name} from ${doc_el.class}`);
    if(doc_el.class.indexOf(class_name) == -1)
        doc_el.class +=` ${class_name}`;
    // console.log(`Added class: ${class_name} from ${doc_el.class}`);
}

export let enum_diaper = {
    wet: "wet",
    poopy: "poopy",
    mix: "mix"
}