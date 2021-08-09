let fs=require("fs")//fs basically used for to 

let path=require("path")

let inputarr=process.argv.slice(2)

let optionarr=[];

let filearr=[];

for(let i=0;i<inputarr.length;i++)
{
    let firstchar=inputarr[i].charAt(0);

    if(firstchar=="-")
    {
        optionarr.push(inputarr[i]);
    }
    else
    {
        filearr.push(inputarr[i]);
    }
}
for(let i=0;i<filearr.length;i++)
{

    let ans =fs.readFileSync(filearr[i])
    
    if(ans==false)
    {
        console.log("file does not exist");
        return;
    }
   
}

let content = ""
for(let i=0;i < filearr.length;i++)
{
  content=content + fs.readFileSync(filearr[i]) + "\r\n";
}

let contentarr=content.split("\r\n")
console.log(contentarr)
let isSpresent=optionarr.includes("-s")

if(isSpresent)
{
    for(let i=1;i<contentarr.length;i++)
    {
        if(contentarr[i]=="" && contentarr[i-1]=="")
        {
            contentarr[i]=null;
        }
        else if(contentarr[i]=="" && contentarr[i-1]==null)
        {
            contentarr[i]=null;
        }
    }
}
let temparr=[];

for(let i=0;i<contentarr.length;i++)
{
    if(contentarr[i]!=null)
    {
        temparr.push(contentarr[i]);
    }
}

contentarr=temparr;

contentarr=contentarr.join("\n")

let newarr=contentarr.split("\n")

console.log(newarr)
for(let i=0;i<newarr.length;i++)
{
if(newarr[i]!="\n")
  console.log((i+1)+" "+newarr[i])
else
console.log((i+1))
}
