var ssml = require('ssml');
var ssmlDoc = new ssml();

 
export const getSSML = (text:string) : string => {
    let ssmlText:string =  ssmlDoc.say(text)
    .toString({ pretty: true });
    ssmlDoc.clear();
    return ssmlText
}