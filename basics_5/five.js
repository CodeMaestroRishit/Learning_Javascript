const coding=["js","py","php","c++"]

const values=coding.forEach((item)=>{

})// for each does not return values


const mynums=[1,2,3,4,5,6,7,8,9,10]

const newnums=mynums.filter((num)=>{
    return num>4;// if there is a scope{} then always we hv to use return
})//.filter helps to return
console.log(newnums)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Fiction', publish: 1981, edition: 1989 },
    { title: 'Book Ten', genre: 'History', publish: 1975, edition: 1985 }
];

const userbooks=books.filter((item)=>
{
    return item.genre==='History';
})
console.log(userbooks)

const year=books.filter((item)=>{
    return item.publish>=1995
})
console.log(year)