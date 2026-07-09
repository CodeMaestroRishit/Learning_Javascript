const coding=['js','python','java','php']

coding.forEach( function(item){//1st way for foreach()
console.log(item);
})

coding.forEach((item)=>{// 2nd way for foreach()
    console.log(item)
})

coding.forEach((item,index,arr)=>{// you can get index arr and item multiple things
    console.log(item,index,arr)

})

const mycoding=[
    {
        language:"javascript",
        filename:"js"
    },
     {
        language:"python",
        filename:"py"
    },
     {
        language:"c++",
        filename:"cpp"
    }
    
]

mycoding.forEach((item)=>{
console.log(item.language)// you can choose which file name to print through for each
})