export function gendatetime () {
    let d = new Date();
    d = new Date(d.getTime());
    var result = d.getFullYear().toString().substr(2,2)+((d.getMonth()+1).toString().length==2?(d.getMonth()+1).toString():"0"+(d.getMonth()+1).toString())+(d.getDate().toString().length==2?d.getDate().toString():"0"+d.getDate().toString())+(d.getHours().toString().length==2?d.getHours().toString():"0"+d.getHours().toString())+((parseInt(d.getMinutes()/5)*5).toString().length==2?(parseInt(d.getMinutes()/5)*5).toString():"0"+(parseInt(d.getMinutes()/5)*5).toString())+d.getSeconds();
    return result
}
