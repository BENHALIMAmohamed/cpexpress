const verification = (
req,
res,
next
) => {
    const date = new Date();
    const day = date.getDay()
    const hour = date.getHours()
    if (9<hour<19 && 0<day<6) {
        next()
    } else {
        res.send('yessi mil t7in')
    }
}
module.exports=verification